import '@testing-library/jest-dom/extend-expect'

import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import Form from '../components/Form.js'

describe('Formulário', () => {
  it('Deve renderizar os campos do formulário', () => {
    const { getByLabelText } = render(<Form />)
    expect(getByLabelText('Nome do Cliente')).toBeInTheDocument()
    expect(getByLabelText('Data')).toBeInTheDocument()
    expect(getByLabelText('Status')).toBeInTheDocument()
    expect(getByLabelText('Descrição')).toBeInTheDocument()
  })

  it('Deve enviar o formulário com dados válidos', async () => {
    const mockAxios = new MockAdapter(axios)
    mockAxios.onPost('http://localhost:8800/briefings').reply(200)

    const { getByLabelText, getByText } = render(<Form />)
    fireEvent.change(getByLabelText('Nome do Cliente'), { target: { value: 'John' } })
    fireEvent.change(getByLabelText('Data'), { target: { value: '2024-03-17' } })
    fireEvent.change(getByLabelText('Status'), { target: { value: 'Aprovado' } })
    fireEvent.change(getByLabelText('Descrição'), { target: { value: 'Test description' } })
    fireEvent.click(getByText('SALVAR'))

    await waitFor(() => expect(mockAxios.history.post.length).toBe(1))
  })

  it('Deve exibir uma mensagem de erro se os campos do formulário estiverem vazios', async () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {})
    const { getByText } = render(<Form />)
    fireEvent.click(getByText('SALVAR'))

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith("Preencha todos os campos!")
    })
  })

  it('Deve limpar os campos do formulário após um envio bem-sucedido', async () => {
    const mockAxios = new MockAdapter(axios)
    mockAxios.onPost('http://localhost:8800/briefings').reply(200)

    const { getByLabelText, getByText } = render(<Form />)
    fireEvent.change(getByLabelText('Nome do Cliente'), { target: { value: 'John' } })
    fireEvent.change(getByLabelText('Data'), { target: { value: '2024-03-17' } })
    fireEvent.change(getByLabelText('Status'), { target: { value: 'Aprovado' } })
    fireEvent.change(getByLabelText('Descrição'), { target: { value: 'Test description' } })
    fireEvent.click(getByText('SALVAR'))

    await waitFor(() => expect(mockAxios.history.post.length).toBe(1))

    expect(getByLabelText('Nome do Cliente').value).toBe('')
    expect(getByLabelText('Data').value).toBe('')
    expect(getByLabelText('Status').value).toBe('')
    expect(getByLabelText('Descrição').value).toBe('')
  })
})
