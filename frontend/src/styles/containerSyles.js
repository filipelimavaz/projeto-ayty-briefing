import styled from "styled-components"

const Container = styled.div`
  width: 100%; /* Ocupa 100% da largura do contêiner pai */
  max-width: 1200px; /* Define a largura máxima */
  margin-top: 20px;
  margin-left: auto; /* Margem à esquerda automática */
  margin-right: auto; /* Margem à direita automática */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

export default Container
