import React, { useState } from 'react'

const Counter = () => {
    const [ count, setCount ] = useState(0);
  return (
    <div>counters {count}</div>
  )
}

export default Counter