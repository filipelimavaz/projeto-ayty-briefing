import '@testing-library/jest-dom/extend-expect'

import React from "react"
import { render, fireEvent, waitFor, getAllByTestId } from "@testing-library/react"
import axios from "axios"
import MockAdapter from "axios-mock-adapter"
import Grid from "../components/Grid"

const mockAxios = new MockAdapter(axios)

const mockBriefings = [
    {
        id: 1,
        nome_do_cliente: "Cliente 1",
        descricao_da_necessidade_do_cliente: "Descrição 1",
        data: "2024-03-12",
        estado_do_briefing: "Em andamento",
    },
]

const setBriefings = jest.fn()
const setOnEdit = jest.fn()

describe("Grid", () => {
    it("Deve renderizar as informações corretamente", () => {
        const { getByText, getByTestId} = render(<Grid briefings={mockBriefings} />)

        expect(getByText("Cliente 1")).toBeInTheDocument()
        expect(getByText("Descrição 1")).toBeInTheDocument()
        expect(getByText("Em andamento")).toBeInTheDocument()

        const dataCell = getByTestId("dataWidth")
        expect(dataCell).toHaveTextContent("12/03/2024")
    })

    it("Deve deletar o briefing ao clicar no botão de exclusão", async () => {
        mockAxios.onDelete("http://localhost:8800/briefings/1").reply(200)

        const { getAllByTestId } = render(
            <Grid briefings={mockBriefings} setBriefings={setBriefings} setOnEdit={setOnEdit} />
        )

        const deleteButtons = getAllByTestId("delete-button")
        fireEvent.click(deleteButtons[0])

        await waitFor(() => {
            expect(setBriefings).toHaveBeenCalledWith([])
            expect(setOnEdit).toHaveBeenCalledWith(null)
        })
    })

    it("Deve exibir a mensagem de exclusão no console após excluir o briefing", async () => {
        mockAxios.onDelete("http://localhost:8800/briefings/1").reply(200)

        const consoleSpy = jest.spyOn(console, 'log')

        const { getAllByTestId } = render(
            <Grid briefings={mockBriefings} setBriefings={setBriefings} setOnEdit={setOnEdit} />
        )

        const deleteButtons = getAllByTestId("delete-button")
        fireEvent.click(deleteButtons[0])

        await waitFor(() => {
            expect(setBriefings).toHaveBeenCalledWith([])
            expect(setOnEdit).toHaveBeenCalledWith(null)
            expect(consoleSpy).toHaveBeenCalledWith("Briefing excluído com sucesso!")
        }, { timeout: 1000 })
    })

    it("Deve renderizar o botão de edição para cada briefing", () => {
        const { getAllByTestId } = render(
            <Grid briefings={mockBriefings} setBriefings={setBriefings} setOnEdit={setOnEdit} />
        )

        const editButtons = getAllByTestId("edit-button")

        expect(editButtons.length).toBe(1)
        expect(editButtons[0]).toBeInTheDocument()
    })
})
