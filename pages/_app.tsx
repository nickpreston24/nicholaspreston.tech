import React from 'react'
import { ProvideProjects } from '../hooks'
import { ThemeProvider, CSSReset, theme } from '@chakra-ui/core'
import customTheme from '../themes'
// import { ProvideTasks } from '../hooks/useTasks'

const CustomApp = (props) => {

    let { Component, pageProps } = props

    return (
        <div
        className='Im just a div, just a regular div'
// style={{
//     background:'yellow'
//     ,border:'2px solid red'
// }}
        >


        <ThemeProvider theme={customTheme}>
            <ProvideProjects>
                {/* <ProvideTasks> */}
                <Component {...pageProps} />
                {/* </ProvideTasks> */}
            </ProvideProjects>
        </ThemeProvider>
        </div>
    )
}

export default CustomApp