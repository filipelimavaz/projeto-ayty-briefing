import styled from "styled-components"

const sharedInputStyles = `
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;

  @media (min-width: 481px) {
    width: auto;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;

  @media (max-width: 480px) {
    padding: 10px;
  }
`

export const RowContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;

  @media (min-width: 481px) {
    flex-direction: row;
  }
`

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 481px) {
    width: auto;
  }
`

export const Input = styled.input`
  width: 88%;
  ${sharedInputStyles}

  @media (min-width: 481px) {
    width: auto;
  }
`

export const Select = styled.select`
  ${sharedInputStyles}
`

export const Label = styled.label``

export const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`

export const TextArea = styled.textarea`
  width: 100%;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 100px;
`
