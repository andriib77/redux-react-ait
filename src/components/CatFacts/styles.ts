import styled from "@emotion/styled"

import { colors } from "styles/colors"

export const RandomCatFactWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primary};
`
export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`
export const CatFactCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 900px;
  min-height: 400px;
  max-height: fit-content;
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
  padding: 30px;
`

export const ButtonContainer = styled.div`
  width: 300px;
`

export const CatFactText = styled.p`
  font-size: 24px;
  font-weight: bold;
`

export const Loading = styled.div`
  font-size: 18px;
  font-weight: bold;
`
