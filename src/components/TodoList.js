import React, { useState } from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
    const [darkMode, setDarkMode] = useState(true)

    const date = new Date()
    let hour = date.getHours()

    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)

    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr)
    }

    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    } 

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos)
    }

    return (
        <div className={ hour > 6 && hour <= 18 ? 'day' : 'night' }>
            <div>
                <div className={darkMode ? 'dark-mode' : 'light-mode'}>
                    <div className='container'>
                        <div className='form-top'>
                            <h1 className='title'>Lista de Tarefas</h1>
                                <div className='modes'>
                                    <span className='sun' style={{color: darkMode ? 'gray' : 'yellow'}}>☀︎</span>
                                    <label className='switch-checkbox'>
                                        <input type='checkbox' 
                                            onChange={() => setDarkMode(!darkMode)}
                                        />
                                    </label>
                                    <span className='moon' style={{color: darkMode ? '#c96dfd' : 'gray'}}>☽</span>
                                </div>
                            <h5>
                                O plano de fundo irá mudar de acordo com o horário do dia, entre as 6h e 18h ficará um wallpaper de dia e no resto do dia ficará um wallpaper de noite.
                                Todas as fotos são de uso livre e os créditos estarão no README
                            </h5>
                        </div>
                        <div className='main-form'>
                                <h1 className='tasks'>Quais os planos para hoje?</h1>
                                <TodoForm onSubmit={addTodo} />
                                <Todo 
                                todos={todos}
                                completeTodo={completeTodo}
                                removeTodo={removeTodo}
                                updateTodo={updateTodo}
                                />
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoList
