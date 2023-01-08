import React, { useState } from 'react'

const Counter = () => {
    const [ counts, setCount ] = useState(0);
  return (
    <div>counters {counts}</div>
  )
}

export default Counter