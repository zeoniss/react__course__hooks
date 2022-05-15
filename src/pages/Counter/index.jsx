import SingleCounter from "./SingleCounter"
import { useState } from "react"
import CounterList from "./CounterList"

const Counter = () => {
  const [counters, setCounters] = useState([
    {
      id: 1,
      value: 12,
    },
    {
      id: 2,
      value: 87,
    },
  ])

  const handleDecrement = (id) => {
    setCounters((prevState) =>
      prevState.map((counter) =>
        counter.id ? { ...counter, value: counter - 1 } : counter
      )
    )
  }
  const handleIncrement = (id) => {
    setCounters((prevState) =>
      prevState.map((counter) =>
        counter.id ? { ...counter, value: counter + 1 } : counter
      )
    )
  }

  return (
    <div className='counters'>
      <h2>Counters </h2>
      <SingleCounter />
      <CounterList counter={counters} />
    </div>
  )
}

export default Counter
