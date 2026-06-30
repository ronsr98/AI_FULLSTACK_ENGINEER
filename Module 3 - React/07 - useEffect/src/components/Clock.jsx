import { useState, useEffect } from 'react'

// Exercise 1 - a clock that ticks every second
const Clock = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000)
    // cleanup - stop the timer when the component goes away, so we don't leak intervals
    return () => clearInterval(id)
  }, [])

  return <h2>{time.toLocaleTimeString()}</h2>
}

export default Clock
