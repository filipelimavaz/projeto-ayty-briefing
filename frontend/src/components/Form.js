import React, { useEffect, useRef } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { FormContainer, RowContainer, InputArea, Input, Select, Label, Button, TextArea } from "../styles/formStyles"

const Form = ({ getBriefings, onEdit, setOnEdit }) => {
  const refCliente = useRef()
  const refDescricao = useRef()
  const refData = useRef()
  const refStatus = useRef()

  useEffect(() => {
    if (onEdit) {
      refCliente.current.value = onEdit.nome_do_cliente
      refDescricao.current.value = onEdit.descricao_da_necessidade_do_cliente
      refData.current.value = onEdit.data
      refStatus.current.value = onEdit.estado_do_briefing
    }
  }, [onEdit])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (
      !refCliente.current.value ||
      !refDescricao.current.value ||
      !refData.current.value ||
      !refStatus.current.value
    ) {
      console.log("Preencha todos os campos!")
      return toast.warn("Preencha todos os campos!")
    }

    const briefingData = {
      nome_do_cliente: refCliente.current.value,
      descricao_da_necessidade_do_cliente: refDescricao.current.value,
      data: refData.current.value,
      estado_do_briefing: refStatus.current.value,
    }

    try {
      if (onEdit) {
        await axios.put(`http://localhost:8800/briefings/${onEdit.id}`, briefingData)
      } else {
        await axios.post("http://localhost:8800/briefings", briefingData)
      }
      toast.success("Briefing salvo com sucesso!")
      setOnEdit(null)
      getBriefings()
    } catch (error) {
      toast.error("Erro ao salvar briefing.")
    }

    refCliente.current.value = ""
    refDescricao.current.value = ""
    refData.current.value = ""
    refStatus.current.value = ""
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <RowContainer>
        <InputArea>
          <Label htmlFor="cliente">Nome do Cliente</Label>
          <Input id="cliente" name="cliente" ref={refCliente} />
        </InputArea>
        <InputArea>
          <Label htmlFor="data">Data</Label>
          <Input id="data" name="data" type="date" ref={refData} />
        </InputArea>
        <InputArea>
          <Label htmlFor="status">Status</Label>
          <Select id="status" name="status" ref={refStatus}>
            <option value="Negociação">Negociação</option>
            <option value="Finalizado">Finalizado</option>
            <option value="Aprovado">Aprovado</option>
          </Select>
        </InputArea>
      </RowContainer>
      <InputArea>
        <Label htmlFor="descricao">Descrição</Label>
        <TextArea id="descricao" name="descricao" ref={refDescricao} />
      </InputArea>

      <Button type="submit">SALVAR</Button>
    </FormContainer>
  )
}

export default Form
