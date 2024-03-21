import Button from "../Button/Button"
import { useState } from "react"

import { CounterWrapper, ButtonControl, Count } from "./styles"

function Counter() {
  const [count, setCount] = useState<number>(0)

  const onPlus = () => {
    setCount(prevValue => prevValue + 1)
  }

  const onMinus = () => {
    setCount(prevValue => prevValue - 1)
  }
  const onDevide = () => {
    setCount(prevCount => Math.round((prevCount / 2) * 100) / 100)
  }
  const onMultiply = () => {
    setCount(prevCount => Math.round(prevCount * 2 * 100) / 100)
  }
  return (
    <CounterWrapper>
      <ButtonControl>
        <Button name="Divide" onClick={onDevide} />
      </ButtonControl>
      <ButtonControl>
        <Button name="-" onClick={onMinus} />
      </ButtonControl>
      <Count>{count.toFixed(2)}</Count>
      <ButtonControl>
        <Button name="+" onClick={onPlus} />
      </ButtonControl>
      <ButtonControl>
        <Button name="Multiply" onClick={onMultiply} />
      </ButtonControl>
    </CounterWrapper>
  )
}

export default Counter
