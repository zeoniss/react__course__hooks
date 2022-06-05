import { useState, useEffect } from "react"
import moment from "moment"

const Timer = () => {
  const [date, setDate] = useState()
  const formattedDate = moment(date).format("YYYY-MM-DD hh:mm:ss")

  //ComponentDidMount
  useEffect(() => {
    setInterval(() => {
      setDate(new Date())
    }, 1000)
    console.log("did mount")
  }, [])

  console.log("render")

  useEffect(() => {
    console.log("did update")
  }, [])

  return (
    <div className='timer'>
      <fieldset>
        <legend>Timer</legend>
        <p>Current date: {formattedDate}</p>
      </fieldset>
    </div>
  )
}

export default Timer
