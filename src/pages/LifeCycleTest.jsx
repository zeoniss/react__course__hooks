import Timer from "./Timer"
import { useState } from "react"

const LifeCycleTest = () => {
  const [showTimer, setShowTimer] = useState(false)
  const handleTimerToggle = () => setShowTimer((prev) => !prev)
  return (
    <div className='test'>
      <h2>Test page</h2>
      <button onClick={handleTimerToggle}>{showTimer ? "Hide" : "Show"}</button>
      {showTimer && <Timer />}
    </div>
  )
}

export default LifeCycleTest
