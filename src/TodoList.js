import React, { useState } from 'react'
import TodoInput from './TodoInput'
// import TodoItem from './TodoItem'

const TodoList = () => {
    const [items, setItems] = useState([])
    const addItem = text => {

        if (text.trim() === '') {
            return
        } return setItems([...items, { id: Date.now(), text }])

    };

    const removeItem = id => {
        setItems(items.filter(item => item.id !== id))
    }

    return (
        <div>
            <TodoInput addItem={addItem} />
            <ol>
                {items.map(item => (
                    <li key={item.id}>
                        {item.text}
                        <button style={{ marginLeft: 10 }} onClick={() => removeItem(item.id)}>delete</button>
                    </li>
                ))}

            </ol>
        </div>
    )

}


export default TodoList
