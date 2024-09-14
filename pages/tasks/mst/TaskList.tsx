import * as React from 'react'
import { observer } from 'mobx-react'
// import FlipMove from 'react-flip-move'
// import { tasks } from '../TaskStore'
import TaskCard from './TaskCard'
import Spinner from '@chakra-ui/core/dist/Spinner'
// import '../hookstate.tasks.module.css'

const TasksList = () => {

    // const { docs, query } = tasks
    // const children = docs.map(task => <TaskCard key={task.id} task={task} />)
    // const { isLoading } = tasks

    // console.log('Tasks.render, isLoading: ', isLoading)



    return (

        <h2> List of Tasks</h2 >
    )


}

export default observer(TasksList)