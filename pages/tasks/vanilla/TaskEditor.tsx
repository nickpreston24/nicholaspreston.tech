import React, { useState } from 'react'
import db from '../../../services/firebase'
import Button from '@chakra-ui/core/dist/Button'
import { Accordion, AccordionIcon, AccordionItem, AccordionPanel, Box, FormControl, FormLabel, Textarea, AccordionButton, AccordionHeader, Tooltip } from '@chakra-ui/core'

const TaskEditor = () => {

    const [form, updateForm] = useState({
        title: '',
        notes: '',
        isEnabled: false
    })

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

    const handleSubmit = (event) => {
        const { title, notes } = form
        event.preventDefault()
        db.firestore()
            .collection('tasks')
            .add({
                title: title,
                notes: notes,
                done: false,
                started: Date.now(),
                completed: null,
            })
        updateForm({ ...form, title: '', notes: '' })
    }

    const toggleForm = () => {
        updateForm({ ...form, isEnabled: !form.isEnabled })
    }

    return (
        <Box flexWrap='wrap' className='task-editor'>
            <Tooltip aria-label="task-add-button" label={!form.isEnabled ? 'Add New Task' : 'Hide'}>

                <Button
                    size="xs"
                    style={{
                        background: 'transparent',
                        color: '#afe',
                        borderRadius: '50px',
                        border: '.125rem solid #afe',
                    }}
                    onClick={toggleForm}>{!form.isEnabled ? '+' : '-'}</Button>
            </Tooltip>

            {/* <Accordion allowMultiple>

<AccordionItem >
<AccordionHeader
                        _expanded={{ bg: '#bada55', color: 'transparent' }}
                        >
                        <Box
                        // backgroundColor="upstack.teal"
                        flex="1"
                        textAlign="left"
                        >
                        lorem ipsum
                        </Box>
                        </AccordionHeader>
                        <AccordionPanel pb={4}>
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit optio mollitia enim, sint repellendus voluptatibus corporis odio illum cupiditate possimus iste temporibus accusantium quod. Quae sint odit unde expedita laudantium!</div>
                        </AccordionPanel>
                        
                        </AccordionItem>
                        
            </Accordion> */}

            {
                form.isEnabled &&
                <form onSubmit={handleSubmit}>
                    <FormControl>
                        <FormLabel>Title</FormLabel>
                        <input type="text"
                            style={{
                                background: 'transparent',
                                color: '#a14afe',
                                border: '.125rem solid #a14afe',
                            }}
                            value={form.title}
                            name="title"
                            onChange={updateField} />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Notes</FormLabel>
                        <Textarea value={form.notes}
                            name='notes'
                            onChange={updateField}
                            style={{
                                background: 'transparent',
                                color: '#a14afe',
                                border: '.125rem solid #a14afe',
                            }}
                        />

                        <Button
                            style={{
                                background: 'transparent',
                                color: '#f4f6f8',
                                border: '.125rem solid #f20c4a',
                            }}
                            type="submit">Save</Button>
                    </FormControl>
                </form>
            }
        </Box>
    )
}
export default TaskEditor