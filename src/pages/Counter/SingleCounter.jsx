import { useState, useEffect } from "react"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  counter: { padding: 10 },
  buttons: { display: "flex" },
  button: {
    "&:hover": {
      backgroundColor: "tomato",
    },
  },
})

const limitValue = 500
const SingleCounter = () => {
  const classes = useStyles()
  const [value, setValue] = useState(0)
  const [step, setStep] = useState(1)
  const handleDecrement = () =>
    setValue((prevState) => (prevState - step < 0 ? 0 : prevState - step))
  const handleIncrement = () =>
    setValue((prevState) =>
      prevState + step > limitValue ? limitValue : prevState + step
    )

  const handleChangeStep = (e) => setStep(Number(e.target.value))
  useEffect(() => {
    console.log("value:", value)
  }, [value])

  return (
    <div className={classes.counter}>
      <h2>SingleCounter</h2>

      <label>
        <span>step</span>
        <select value={step} onChange={handleChangeStep}>
          <option value='1'>1</option>
          <option value='5'>5</option>
          <option value='10'>10</option>
          <option value='25'>25</option>
          <option value='50'>50</option>
        </select>
      </label>
      <div className={classes.buttons}>
        <button className={classes.button} onClick={handleDecrement}>
          -
        </button>
        <p>{value}</p>
        <button className={classes.button} onClick={handleIncrement}>
          +
        </button>
      </div>
    </div>
  )
}

export default SingleCounter
