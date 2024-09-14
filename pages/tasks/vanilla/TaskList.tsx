import React, { FC } from 'react'
import { Task } from '../../../models'
import Box from '@chakra-ui/core/dist/Box'
import Flex from '@chakra-ui/core/dist/Flex'
import { TaskCard } from './TaskCard'

type Props = {
    tasks: Task[],
    toggleDone: (task: Task) => void,
    deleteTask: (event) => void
}

export const TaskList: FC<Props> = ({ tasks, toggleDone, deleteTask }) => {

    return (

        <Flex flexDirection='column' width="50%">
            <Flex flexDirection='row'>
                <h2>Remaining:</h2>
                <Box>

                    {tasks &&
                        tasks.filter(t => !t.done).map((task, id) =>
                            <TaskCard
                                task={task}
                                toggleDone={toggleDone}
                                deleteTask={deleteTask}
                                key={id}
                            />
                        )}
                </Box>
                <h2>Completed: </h2>
                <Box>

                    {tasks &&
                        tasks.filter(t => !!t.done).map((task, id) =>
                            <TaskCard
                                task={task}
                                toggleDone={toggleDone}
                                deleteTask={deleteTask}
                                key={id}
                            />
                        )}
                </Box>
            </Flex>
        </Flex>
    )
}

export default TaskList