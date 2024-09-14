import React from 'react';
import { Tooltip, Button, Box, Stack, Heading, Text, Spinner, FormControl, Icon, FormLabel, Input, FormHelperText, RadioGroup, Radio, Link } from '@chakra-ui/core'
import { Routes } from '../../constants/routes';
import { ContactForm } from 'components/organisms';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { GrCirclePlay } from 'react-icons/gr';
const linkedInUrl = 'https://www.linkedin.com/in/michael-n-preston/'

const myEmail = `michael.n.preston@gmail.com`
const myPhone = `(817) 565-2372`

export const Contact = () => {
    return (
        <Stack>
            <ContactForm />

            <Button bg="kiyap.cream.200" color="linkedIn.blue.500" // className="btn2"
                title="Connect with me on LinkedIn!">

                <Link href={linkedInUrl} isExternal>
                    Connect
                </Link>

                <AiOutlineLinkedin size={24} />
            </Button>

        </Stack>
    )
}


{/* <Link href={Routes.HOME}><a>Go Home</a></Link> */ }
// var clipboard = new ClipboardJS('.btn');
// clipboard.destroy(); //TODO: Use in componentWillUnmount or destructor.

// export default withStyles(styles)(Contact)
export default Contact;
