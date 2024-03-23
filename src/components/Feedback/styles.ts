import styled from "@emotion/styled"

export const FeedbackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: fit-content;
  height: fit-content;
  border: 1px solid white;
  border-radius: 10px;
  padding: 30px;
  background-color: lightgrey;
  color: white;
`

export const FeedbackControl = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
`

export const ButtonWithCountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
`

export const Count = styled.p`
  font-size: 40px;
  color: white;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`
export const ImageControl = styled.div`
  width: 70px;
  height: 70px;
  overflow: hidden;
  cursor: pointer;
`
