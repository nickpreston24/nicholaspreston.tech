import { FC } from 'react'
import { BasicProps } from './BasicProps'
import { Box } from '@chakra-ui/core'

/* The Base required Props for a Zeit* UI component */
export interface ZeitComponentProps extends BasicProps {
    color?: string;
    backgroundColor?: string;
    height: number;
    width: number;
}

export const ZeitContainer: FC<ZeitComponentProps> = ({
    children
    , backgroundColor
    , color
    , height
    , width
}) => {
    return (
        <Box 
            display="flex"
            alignItems="center"
            style={{ width, color, backgroundColor, height: `${height}px` }}>
            {children}
        </Box>
    )
}