import { useState } from "react"
import Counter from "../../components/Counter/Counter"

function Homework29() {
  const [count, setCount] = useState<number>(0)
  const onPlus = () => {
    setCount(prevValue => prevValue + 1)
  }

  const onMinus = () => {
    setCount(prevValue => prevValue - 1)
  }

  return <Counter count={count} onMinus={onMinus} onPlus={onPlus} />
}

export default Homework29
