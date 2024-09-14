import React from 'react'
import Flex from '@chakra-ui/core/dist/Flex'
import Button from '@chakra-ui/core/dist/Button'
import { RiCloseFill, RiCheckFill } from 'react-icons/ri'
import { GoTrashcan } from 'react-icons/go'
import Tooltip from '@chakra-ui/core/dist/Tooltip'

export const iconStyle = {
    iconSize: '1.25rem',
    style: {
        background: 'transparent',
        color: 'rgb(12, 124, 251)',
        border: 'transparent'
    }
}

export function ActionBar({ task, deleteTask, toggleDone }) {

return (<Flex direction="row" alignItems='center'>

        {!task?.done && <Tooltip aria-label='mark-complete' label="Mark Complete">
            <Button size="sm" {...iconStyle} onClick={() => toggleDone(task)}>
                <RiCheckFill size={iconStyle.iconSize} />
            </Button>
        </Tooltip>}

        {!!task?.done && <Tooltip aria-label='mark-incomplete' label='Mark Incomplete'>
            <Button size='sm' {...iconStyle} onClick={() => toggleDone(task)}>
                <RiCloseFill size={iconStyle.iconSize} />
            </Button>
        </Tooltip>}

        {!!task && <Tooltip aria-label="delete-task" label="Delete">
            <Button size='sm' {...iconStyle} onClick={() => deleteTask(task)}>
                <GoTrashcan size={iconStyle.iconSize} />
            </Button>
        </Tooltip>}

    </Flex>)
}

export default ActionBar
