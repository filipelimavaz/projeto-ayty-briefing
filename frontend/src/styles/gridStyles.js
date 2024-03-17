import styled from "styled-components"
import { FiEdit, FiTrash2 } from "react-icons/fi"

const ButtonIcon = styled.div`
  color: ${(props) => props.color};
  cursor: pointer;
  margin: 5px 0; /* Reduzindo o espaçamento */
  font-size: 16px; /* Reduzindo o tamanho do ícone */
`

export const EditButton = styled(ButtonIcon).attrs({ as: FiEdit, color: "orange" })``

export const DeleteButton = styled(ButtonIcon).attrs({ as: FiTrash2, color: "red" })``

export const Table = styled.table`
  width: 100%;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 100%;
  margin: 20px auto;
  word-break: break-all;
  overflow-x: auto; /* Adicionado para rolar horizontalmente em telas menores */
`

export const Thead = styled.thead``

export const Tbody = styled.tbody``

export const Tr = styled.tr`
  &:nth-child(odd) {
    background-color: #f8f8f8;
  }
  &:nth-child(even) {
    background-color: #fff;
  }
`

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;
  font-size: 14px; 
`

export const Td = styled.td`
  padding: 10px; 
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  min-width: ${(props) => (props.alignCenter ? "20px" : "100px")};
  width: auto;
  font-size: 14px;

  @media (max-width: 768px) {
    display: ${(props) => (props.onlyWeb ? "none" : "table-cell")};
    min-width: unset; /* Para permitir o ajuste automático da largura da coluna */
    width: auto; /* Para permitir o ajuste automático da largura da coluna */
  }
`

export const ResponsiveTd = styled(Td)`
  @media (max-width: 768px) {
    ${(props) => (props.id === "dataWidth" || props.id === "status" ? "width: 10%;" : "")}
    ${(props) => (props.id === "nomeCliente" ? "width: 30%;" : "")}
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
`