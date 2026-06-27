import { useState } from 'react'

// Exercise 1 - show/hide a message with a button
const Hudini = () => {
  const [show, setShow] = useState(false)

  return (
    <div>
      {/* bonus: one-liner with a ternary */}
      <div>{show ? "Now you see me" : "Now you don't"}</div>
      <button onClick={() => setShow(!show)}>Toggle</button>
    </div>
  )
}

export default Hudini
