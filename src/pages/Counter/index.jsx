import SingleCounter from "./SingleCounter"
import { useState, useEffect } from "react"
import CounterList from "./CounterList"
import { createUseStyles } from "react-jss"

const styles = createUseStyles()

const Counters = () => {
  const [counters, setCounters] = useState([])
  // component did mount
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("counters"))
    setCounters(data)
  }, [])
  // component did update - after data update
  useEffect(() => {
    localStorage.setItem("counters", JSON.stringify(counters))
  }, [counters])
  // //component did update - allways after render
  useEffect(() => {
    // console.log("render")
  })
  const createCounter = () =>
    setCounters((prevState) => [
      ...prevState,
      {
        id: Date.now(),
        value: 0,
      },
    ])

  const handleDeleteCounter = (id) =>
    setCounters((prevState) => prevState.filter((counter) => counter.id !== id))

  const handleDecrement = (id) =>
    setCounters((prevState) =>
      prevState.map((counter) =>
        counter.id === id ? { ...counter, value: counter.value - 1 } : counter
      )
    )

  const handleIncrement = (id) =>
    setCounters((prevState) =>
      prevState.map((counter) =>
        counter.id === id ? { ...counter, value: counter.value + 1 } : counter
      )
    )

  return (
    <div className='counters'>
      <SingleCounter />
      <hr />

      <h2>Counters </h2>
      <button styles onClick={createCounter}>
        {" "}
        Create counter{" "}
      </button>
      <CounterList
        counters={counters}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDeleteCounter}
      />
    </div>
  )
}

export default Counters
