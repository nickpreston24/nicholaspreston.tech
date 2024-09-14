import { Box, Button, Stack } from '@chakra-ui/core'
import React, { useEffect, useState } from 'react'
// import styles from '../../tasks/todos.module.css';
import styles from '../todos.module.css'


export const TodoList = () => {

    const [tasksRemaining, setTasksRemaining] = useState(0)
    const [tasks, setTasks] = useState([
        {
            title: 'Grab some Pizza',
            completed: true
        },
        {
            title: 'Do your workout',
            completed: true
        },
        {
            title: 'Hangout with friends',
            completed: false
        }
    ])

    useEffect(() => {
        setTasksRemaining(tasks.filter(task => !task.completed).length)
    })

    const addTask = title => {
        const newTasks = [...tasks, { title, completed: false }]
        setTasks(newTasks)
    }

    const toggleComplete = index => {
        const newTasks = [...tasks]
        newTasks[index].completed = !newTasks[index].completed
        setTasks(newTasks)
    }

    const removeTask = index => {
        const newTasks = [...tasks]
        newTasks.splice(index, 1)
        setTasks(newTasks)
    }

    const percentDone = Math.ceil(100 - tasksRemaining / (tasks.length || 1) * 100)

    return (
        <Box className={styles.body}>
            <div className={styles['todo-list']}>
                <div className={styles.header}>Pending tasks ({tasksRemaining})</div>
                <div className={styles.header}>{`${percentDone}% complete`}</div>
                <Stack
                >
                    {tasks.map((task, index) => (
                        <TodoItem
                            task={task}
                            index={index}
                            toggleComplete={toggleComplete}
                            removeTask={removeTask}
                            key={index} />
                    ))}
                </Stack>
                <div className="create-task">
                    <CreateTask addTask={addTask} />
                </div>
            </div>
        </Box>
    )
}


export const TodoItem = ({ task, index, toggleComplete, removeTask }) => {
    return (
        <Stack direction="row">
            <div
                className={styles.button}
                style={{ textDecoration: task.completed ? 'line-through' : '' }}
            >
                {task.title}
            </div>
            <Button onClick={() => toggleComplete(index)}>Complete</Button>
            <Button
                style={{ background: '#a14afe' }}
                onClick={() => removeTask(index)}>x</Button>
        </Stack>
    )
}

export const CreateTask = ({ addTask }) => {
    const [value, setValue] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        if (!value) return

        addTask(value)
        setValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                placeholder="Add a new task"
                onChange={e => setValue(e.target.value)}
            />
        </form>
    )
}

export default TodoList
