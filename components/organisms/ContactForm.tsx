import React from 'react'
import { Stack, FormControl, InputLeftElement, InputGroup, Icon, Input, FormLabel, FormHelperText, RadioGroup, Radio } from '@chakra-ui/core';

{/* <Spinner color="upstack.orange.500" /> */ } // use for loading other contacts, "Who I know from your company, etc."

export const ContactForm = () => {

    return (
        <form action='submit'>
            <Stack spacing={3}>

                <FormControl isRequired>
                    <InputGroup >
                        <InputLeftElement children={<Icon name='info' />} />
                        <Input
                            type='name'
                            placeholder='First Name'
                            aria-label='First Name'
                        />
                    </InputGroup>
                </FormControl>

                <FormControl isRequired>
                    <InputGroup>
                        <InputLeftElement children={<Icon name='info' />} />
                        <Input
                            type='name'
                            placeholder='Last Name'
                            aria-label='Last Name'
                        />
                    </InputGroup>
                </FormControl>

                <FormControl>
                    <FormLabel htmlFor="email">Email address</FormLabel>
                    <Input type="email" id="email" aria-describedby="email-helper-text" />
                    <FormHelperText id="email-helper-text">
                        I'll share your email if you allow it.
                    </FormHelperText>
                </FormControl>

            </Stack>
        </form>

    )
}

export default ContactForm;

/**
 * IDEA: Let the user opt to plug in their LinkedIn url instead of name, email.
 */