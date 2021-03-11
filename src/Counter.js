import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const addCount = () => {
        setCount(count + 1)
    }
    const reduceCount = () => {
        if (count === 0) {
            return 0
        } return setCount(count - 1)
    }
    return (
        <div>
            <button onClick={addCount}>Add</button>
            <h1>{count}</h1>
            <button onClick={reduceCount}>reduce</button>
        </div>
    )

}

export default Counter