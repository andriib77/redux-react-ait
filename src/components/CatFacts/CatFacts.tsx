import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  randomCatFactSliceActions,
  randomCatFactSliceSelectors,
} from "store/redux/catFacts/catFactsSlice"

import {
  RandomCatFactWrapper,
  CatFactCard,
  ButtonContainer,
  CatFactText,
  CardContainer,
  Loading,
} from "./styles"
import { CatFactInfo } from "store/redux/catFacts/types"

import Button from "components/Button/Button"
import { useState } from "react"

function RandomCatFact() {
  const dispatch = useAppDispatch()
  const { data, error, status } = useAppSelector(
    randomCatFactSliceSelectors.fact,
  )

  const getFact = () => {
    // Устанавливаем состояние загрузки в true при отправке запроса
    setIsLoading(true)
    dispatch(randomCatFactSliceActions.getFact("Some data")).then(() => {
      // После получения ответа с сервера или при ошибке устанавливаем состояние загрузки в false
      setIsLoading(false)
    })
  }

  // Состояние для отслеживания загрузки
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const deleteAllFacts = () => {
    dispatch(randomCatFactSliceActions.deleteAllFacts())
  }
  const deleteFact = (userId: string) => {
    dispatch(randomCatFactSliceActions.deleteFact(userId))
  }
  return (
    <RandomCatFactWrapper>
      <CatFactCard>
        <ButtonContainer>
          <Button
            disabled={status === "loading"}
            name="Get Cat Fact"
            onClick={getFact}
          />
        </ButtonContainer>
        {/* Показываем "Loading" при загрузке данных */}
        {isLoading && <Loading>Loading...</Loading>}

        {/* Используем условный оператор для отображения карточек с фактами */}
        {data.map((value: CatFactInfo, index) => (
          <CardContainer key={value.id}>
            <CatFactText>
              {index + 1}. {value.fact}
            </CatFactText>
            <ButtonContainer>
              <Button
                isRed
                name="Delete Fact"
                onClick={() => deleteFact(value.id)}
              />
            </ButtonContainer>
          </CardContainer>
        ))}

        {/* Отображаем кнопку "Delete all facts" только если есть карточки с фактами */}
        {data.length > 0 && (
          <Button isRed name="Delete all facts" onClick={deleteAllFacts} />
        )}
      </CatFactCard>
    </RandomCatFactWrapper>
  )
}

export default RandomCatFact
