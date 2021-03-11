import React, { useState, useEffect, useRef } from 'react';

const TodoInput = ({ addItem }) => {
    const [text, setText] = useState('');

    const onChangeText = e => {
        setText(e.target.value)
    }

    const onSubmit = e => {
        e.preventDefault();
        addItem(text);
        setText('');
    }

    const ref = useRef(); //即是createRef

    useEffect(() => {
        ref.current.focus()
    })//取代 componentDidMount跟componentDidUpdate
    return (
        <form onSubmit={onSubmit}>
            <input type="text" value={text} onChange={onChangeText} ref={ref} />
            <button type="submit">Submit</button>
        </form>
    )

}

export default TodoInput
