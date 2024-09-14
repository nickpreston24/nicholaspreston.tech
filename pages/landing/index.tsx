import React from 'react'
import { Link, Box, Stack, Button, Spinner } from '@chakra-ui/core'
const linkedInUrl = 'https://www.linkedin.com/in/michael-n-preston/'
import Routes from '../../constants/routes'
import { AiOutlineLinkedin } from 'react-icons/ai'

export const Landing = () => {

    return (
        <Box>
            <Spinner color="upstack.blue.500" />
            <Stack>
                


            </Stack>
        </Box>
    )
}

const OldHomepage = () => (
    <section className={'hero container'}>

        <Box id="#logo">MICHAEL PRESTON</Box>

        <h1>
            Full Stack Design <br></br> <span> PORTFOLIO</span>
        </h1>

        <Box className="button-stack">
            <Button leftIcon='add' bg="kiyap.sushi.500" color="kiyap.cream.500" // className="btn1"
                title="Check out my Projects!">
                <Link href={Routes.PROJECTS}>
                    {
                        /* <a>Portfolio</a> */
                    }
                                Portfolio
                            </Link>
            </Button>

            <Button bg="kiyap.cream.200" color="linkedIn.blue.500" // className="btn2"
                title="Connect with me on LinkedIn!">

                <Link href={linkedInUrl} isExternal>
                    Connect
                </Link>

                <AiOutlineLinkedin size={32} />
            </Button>
        </Box>
    </section>
);


{/* <style jsx>
                    {`
                    span: {
                        fontSize: "65px",
                        "letter-spacing": "2px",
                        "font-family": "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"
                    }

                    .hero h1 {
                        margin: 10px;
                    }

                    .hero h1 {
                        margin-top: 178px;
                        text-transform: uppercase;
                        font-family: Impact, Haettenschweiler, "Arial Narrow Bold",
                        sans-serif;
                        font-size: 26px;
                        letter-spacing: 4px;
                        color: black;
                        z-index: -50;
                    }

                    .button-stack {
                        font-family: Tahoma;
                        font-weight: normal;
                        font-size: 12px;
                        margin-top: 40px;
                    }

                    .btn1:hover {
                        text-decoration: none;
                        color: white;
                    }

                    .btn2:hover {
                        text-decoration: none;
                        color: black;
                    }

                    .btn1 {
                        padding: 12px 25px;
                        background: #f20c4a;
                        text-decoration: none;
                        color: white;
                        border-top-left-radius: 20px;
                        border-bottom-left-radius: 20px;
                    }

                    .btn2 {
                        padding: 12px 25px;
                        background: #f4f6f8;
                        text-decoration: none;
                        color: #000;
                        border-top-right-radius: 20px;
                        border-bottom-right-radius: 20px;
                    }
                    .span {
                        fontSize: '65px',
                        'letter-spacing': '2px',
                        'font-family': 'Impact, Haettenschweiler, \'Arial Narrow Bold\', sans-serif',
                    },
                `}
                </style>            
             */}


export default Landing