import React, { useEffect, useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import axios from "axios"

import GlobalStyle from "./styles/globalStyles"
import Container from "./styles/containerSyles"
import Title from "./styles/titleStyles"
import Form from "./components/Form"
import Grid from "./components/Grid"

const API_URL = "http://localhost:8800/briefings"

const App = () => {
  const [briefings, setBriefings] = useState([])
  const [onEdit, setOnEdit] = useState(null)

  const getBriefings = async () => {
    try {
      const res = await axios.get(API_URL)
      setBriefings(res.data)
    } catch (error) {
      toast.error(`Erro ao buscar os briefings: ${error.message}`)
      console.error(error)
    }
  }

  useEffect(() => {
    getBriefings()
  }, [])

  return (
    <>
      <Container>
        <Title>Briefings</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getBriefings={getBriefings} />
        <Grid setOnEdit={setOnEdit} briefings={briefings} setBriefings={setBriefings} />
      </Container>
      <ToastContainer autoClose={3000} position="bottom-left" />
      <GlobalStyle />
    </>
  )
}

export default App
