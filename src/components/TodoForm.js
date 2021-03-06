import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value: '')

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleSubmit = event => {
        event.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    }

    const handleChange = event => {
        setInput(event.target.value)
    }
    
    return (
        <form autoComplete='off' className='todo-form' onSubmit={handleSubmit}>
            {props.edit ? (<><input 
              type='text'
              placeholder='Adicione uma Tarefa'
              value = {input} 
              name='text'
              className='todo-input'
              onChange = {handleChange}
              ref={inputRef}
            />
            <button className='todo-button'>Alterar Tarefa</button></>) : (<><input 
                type='text'
                placeholder='Adicione uma Tarefa'
                value = {input} 
                name='text'
                className='todo-input'
                onChange = {handleChange}
                ref={inputRef}
              />
              <button className='todo-button'>Adicionar Tarefa</button>
              </>)}
            
        </form>
    )
}

export default TodoForm
