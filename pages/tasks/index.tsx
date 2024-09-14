import React, { useState } from 'react'
import { Task } from '../../models'
import TaskEditor from './vanilla/TaskEditor'
import { createTask, deleteTask, tasksRef, toggleDone as toggleTaskDone } from '../../services/firebase'
import { TaskCard } from './vanilla/TaskCard'
import styles from './todos.module.css'
import Box from '@chakra-ui/core/dist/Box'
import Stack from '@chakra-ui/core/dist/Stack'
import FormControl from '@chakra-ui/core/dist/FormControl'
import { useFirestoreQuery } from '../../hooks'
import { Button, Tooltip } from '@chakra-ui/core'
import { SearchBar } from '../../components/organisms'

const TasksView = () => {

    const { data: tasks, status, error } = useFirestoreQuery(
        tasksRef
    )

    if (status === 'loading') {
        return 'Loading...'
    }

    if (status === 'error') {
        return `Error: ${error.message}`
    }

    const toggleCompleteTask = (task: Task) => {
        toggleTaskDone(task)
    }

    const remove = (task: Task) => {
        deleteTask(task)
        // let filtered = tasks.filter(item => ![task].includes(item))
    }


    return (
        <Box>
            <SearchBar
                enabled={false}
                hidden={true}
                // queryFn = (q = 'wsl 2', _) => `https://duckduckgo.com/?q=${q}&ia=web`
                queryFn={(searchTerm, take) => `https://www.thepathoftruth.com/wp-json/wp/v2/pages?per_page=${take}&search="${searchTerm}"`}
            >{() => <TaskStats
                toggleDone={toggleCompleteTask}
                deleteTask={remove}
                tasks={tasks}
            />}</SearchBar>


            {/* <TaskStats
                toggleDone={toggleCompleteTask}
                deleteTask={remove}
                tasks={tasks}
            /> */}
        </Box>
    )
}

{/* <FormLabel htmlFor="real-data" mb="0">
    Enable real data?
</FormLabel>
<Switch id="real-data" color="teal" onChange={toggleDevMode} /> */}



const TaskStats = ({ tasks, toggleDone, deleteTask }) => {

    const tasksRemaining = tasks.filter(task => !task.done).length

    const percentDone = Math.ceil(100 - tasksRemaining / (tasks.length || 1) * 100)

    return (
        <Box className={styles.body}>
            <div className={styles['todo-list']}>
                <div className={styles.header}>Pending tasks ({tasksRemaining})</div>
                <div className={styles.header}>{`${percentDone}% complete`}</div>

                <Stack direction='row'>
                    <FakeTasksButton />
                    <TaskEditor />
                </Stack>
                <Stack>

                    {tasks
                        .sort((a, b) => a.done - b.done)
                        .map((task, index) => (
                            <TaskCard
                                task={task}
                                key={index}
                                toggleDone={toggleDone}
                                deleteTask={deleteTask}
                            />
                        ))}
                </Stack>
            </div>
        </Box>
    )
}

const FakeTasksButton = () => <FormControl
    display="flex"
    alignItems="center"
>
    <Tooltip
        aria-label='fake-button'
        label='Fake Some Data'
    >
        <Button
            size="xs"
            style={{
                background: 'transparent',
                color: '#afe',
                borderRadius: '50px',
                border: '.125rem solid #afe',
            }}
            onClick={() => {
                const fakeRecords = createFakeTasks()
                fakeRecords.forEach(task => {
                    createTask(task)
                })

            }}>[?]</Button>
    </Tooltip>
</FormControl>

function createFakeTasks(limit = 5) {
    let nums = [...Array(limit)].map(() => Math.floor(Math.random() * limit))
    let list = Array.from([...new Set(nums)], (x) => { return { title: `Task ${x}`, done: !!(x % 0) } })
    return list
}

export default TasksView

    // setTasks(data)

    // useEffect(() => {

    //     if (state.isDev) {
    //         let list = JSON.parse(sessionStorage.getItem('tasks')) || createFakeTasks(50)
    //         setTasks(list)
    //         sessionStorage.setItem('tasks', JSON.stringify(list))
    //     }
    //     else {

    //         // const { error, taskList, loading } = useTasks()
    //         // setTasks(taskList)


    //         // const { error, task, loading } = useTask('12345')
    //         // console.log('task :>> ', task)

    //         // tasksRef
    //         //     .onSnapshot(snapshot => {
    //         //         const list = snapshot.docs.map(doc => ({
    //         //             id: doc.id,
    //         //             ...doc.data()
    //         //         }))
    //         //         console.count('loaded')
    //         //         setTasks(list)
    //         //     })
    //     }
    // }, [state.isDev])




        // Local updates:
        // let index = tasks.indexOf(task)
        // let updatedTasks = Object.assign([...tasks], { [index]: { ...task, done: !task.done } })
        // setTasks(updatedTasks)