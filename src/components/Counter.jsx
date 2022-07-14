import React, { useState } from "react"

function Counter() {
    const [counter, setCounter] = useState(0)
    const handleClick = () => {
        setCounter(counter + 1)
    }
    return (
        <div>
            <button onClick={handleClick}>click</button>
            <h1>{counter}</h1>
        </div>
    )
}

export default Counter
