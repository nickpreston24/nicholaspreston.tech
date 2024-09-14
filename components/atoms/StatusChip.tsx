import React, { FC } from 'react'
import Chip from '@material-ui/core/Chip'

export interface ChipProps {
    status: string,
    backgroundColor?: string,
    color?: string,
}

// TODO: support Enum reverse indexing and dev-driven typed statuses
// export enum Status extends StatusProps = {
// }

//{ status, color }
export const StatusChip: FC<ChipProps> = ({ status, color = '#fff', backgroundColor='#777' }) => {

    if (!status)
        throw Error('Status is a required value')

    let label = status || 'Unknown'

    return (
        <Chip {...{ label }} style={{ color, backgroundColor }} />
    )
}

// An adapter method that converts our dash-delimited status values to strings our Enums and Labels can recognize
const toTitleCase = (text: string, delimiter: string = ' ') => {
    if (!text)
        throw new Error('Text cannot be null')
    let sentence = text.toLowerCase().split(delimiter)
    for (let i = 0; i < sentence.length; i++) {
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1)
    }
    return sentence.join(' ')
}

export default StatusChip