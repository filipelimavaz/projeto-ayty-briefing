import React from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { Table, Thead, Tbody, Tr, Th, ResponsiveTd, EditButton, DeleteButton } from "../styles/gridStyles"

const API_URL = "http://localhost:8800/briefings/"

const Grid = ({ briefings, setBriefings, setOnEdit }) => {
  const handleEdit = (item) => {
    setOnEdit(item)
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(API_URL + id)
      const newArray = briefings.filter((briefing) => briefing.id !== id)
      setBriefings(newArray)
      console.log("Briefing excluído com sucesso!")
      toast.success("Briefing excluído com sucesso!")
    } catch (error) {
      toast.error("Erro ao excluir o briefing.")
    } finally {
      setOnEdit(null)
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const localDate = new Date(date.getTime() + date.getTimezoneOffset() * 60000) // Adiciona o offset do fuso horário
    return localDate.toLocaleDateString("pt-BR")
  }

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Cliente</Th>
          <Th>Descrição</Th>
          <Th>Data</Th>
          <Th>Status</Th>
        </Tr>
      </Thead>
      <Tbody>
        {briefings.map((item) => (
          <Tr key={item.id}>
            <ResponsiveTd id="nomeCliente">{item.nome_do_cliente}</ResponsiveTd>
            <ResponsiveTd id="descricao">{item.descricao_da_necessidade_do_cliente}</ResponsiveTd>
            <ResponsiveTd data-testid="dataWidth" id="dataWidth">{formatDate(item.data)}</ResponsiveTd>
            <ResponsiveTd id="status">{item.estado_do_briefing}</ResponsiveTd>
            <ResponsiveTd alignCenter>
              <EditButton data-testid="edit-button" onClick={() => handleEdit(item)} />
              <DeleteButton data-testid="delete-button" onClick={() => handleDelete(item.id)} />
            </ResponsiveTd>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}

export default Grid
