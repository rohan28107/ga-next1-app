import React, { useState } from 'react'

const Counter = () => {
    const [ count, setCount ] = useState(0);
  return (
    <div>counter {count}</div>
  )
}

export default Counter