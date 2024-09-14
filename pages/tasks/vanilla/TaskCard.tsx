import React, { useState } from 'react'
import Box from '@chakra-ui/core/dist/Box'
import { Card } from '../../../components/molecules'
import Heading from '@chakra-ui/core/dist/Heading'
import { useHover } from '../../../hooks'
import Input from '@chakra-ui/core/dist/Input'
import { ActionBar } from './ActionBar'
import Stack from '@chakra-ui/core/dist/Stack'
import { Task } from '../../../models'

export const TaskCard = ({ task, toggleDone, deleteTask }) => {

    const [hoverRef, isHovering] = useHover()
    const [form, updateForm] = useState(Task.Create())

    /**
     * Updates the appropriate state prop by its field name from the
     * form where 'name' is a prop on the target component
     */
    const updateField = (event) => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
        updateForm({ ...form, [name]: value })
    }

    return (

        <Box
            border='1px rgb(255, 173, 65) solid'
            margin='.75rem'
        >
            <Card>{{
                header: <Heading
                    style={{ textDecoration: task?.done ? 'line-through' : '' }}
                    size="lg">

                    <div style={{ flexGrow: 2 }}>
                        <Input
                            style={{
                                fontSize: '1rem',
                                background: 'none',
                                border: 'none',
                                color: 'white',
                                width: '90%',
                                padding: 10,
                                textDecoration: task?.done ? 'line-through' : 'none',
                            }}
                            value={task?.title}
                            onChange={updateField}
                            name='title' />
                    </div>
                </Heading>,

                content:
                    <Stack direction="row">
                        {/* <div
                            style={{ flexGrow: 2 }}
                        >
                            <p>
                                {`${createdAt || 'n/a'}`}
                            </p>
                        </div> */}
                    </Stack>
                ,

                actions:
                    // isHovering ?
                    <ActionBar task={task}
                        deleteTask={deleteTask}
                        toggleDone={toggleDone} />
                //  : <></>
            }}</Card>
        </Box>
    )
}

export default TaskCard
