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
import { useEffect } from "react"

function RandomCatFact() {
  const dispatch = useAppDispatch()
  const { data, error, isLoading } = useAppSelector(
    randomCatFactSliceSelectors.fact,
  )

  const getFact = () => {
    dispatch(randomCatFactSliceActions.getFact(""))
  }

  const deleteAllFacts = () => {
    dispatch(randomCatFactSliceActions.deleteAllFacts())
  }
  const deleteFact = (userId: string) => {
    dispatch(randomCatFactSliceActions.deleteFact(userId))
  }

  useEffect(() => {
    if (error) {
      alert("Error response")
    }
  }, [error])
  return (
    <RandomCatFactWrapper>
      <CatFactCard>
        <ButtonContainer>
          <Button disabled={isLoading} name="Get Cat Fact" onClick={getFact} />
        </ButtonContainer>

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
