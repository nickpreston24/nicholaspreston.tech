import axios from 'axios'
import Box from '@chakra-ui/core/dist/Box'
import Button from '@chakra-ui/core/dist/Button'
import FormControl from '@chakra-ui/core/dist/FormControl'
import FormLabel from '@chakra-ui/core/dist/FormLabel'
import Input from '@chakra-ui/core/dist/Input'
import React, { FC, ReactElement, useEffect, useState } from 'react'
import Icon from '@chakra-ui/core/dist/Icon'
import Heading from '@chakra-ui/core/dist/Heading'
import Stack from '@chakra-ui/core/dist/Stack'
import { InputLeftElement } from '@chakra-ui/core/dist/InputElement'
import { useDebounce } from '../../hooks'
import { MdSearch } from "react-icons/md"
import InputGroup from '@chakra-ui/core/dist/InputGroup'
import { isDev } from '../../helpers/environment'

type Props = {
    take?: number, // # of results to take in the render
    label?: string,
    children: (props: any) => ReactElement, // Results are rendered by children, expressed as a function.
    placeholder?: string,
    queryFn?: (searchTerm, take) => string, // A function that returns a full URL.
    enabled?: boolean,
    hidden?: boolean,
}

const config = {
    headers: { "Access-Control-Allow-Origin": "*" }
}

/** A Generic Search Bar
 */
export const SearchBar: FC<Props> = ({
    take = 10,
    label = "Search",
    children = _ => { },
    placeholder = "...",
    queryFn,
    enabled = true,
    hidden = false,
}) => {

    // isDev() && console.log("children :>> ", children)

    const [form, updateForm] = useState({ term: '' })
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [url, setUrl] = useState('');

    // Debounce search term so that it only gives us latest value 
    // so that we aren't hitting our API rapidly.
    const debouncedSearchTerm = useDebounce(form.term, 500).trim();

    // Effect for API call
    useEffect(() => {
        setLoading(true);

        if (debouncedSearchTerm) {
            setLoading(true);
            let url = !!queryFn ? queryFn(debouncedSearchTerm, take) : null;

            setUrl(url)

            !!url && enabled && axios
                .get(url, config)
                .then((response) => {
                    isDev() && console.log('response.data', response.data)
                    setResults(response.data)
                    setLoading(false);
                })

        } else {
            setLoading(false)
        }
    },
        [debouncedSearchTerm] // Only call effect if debounced search term changes
    );

    /**
     * Updates the appropriate state prop by its field name from the 
     * form where 'name' is a prop on the target component
     */
    const updateField = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        updateForm({ ...form, [name]: value });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (!url)
            return;

        setLoading(true)
        !!url && enabled && axios
            .get(url, config)
            .then((response) => {
                setResults(response.data)
                setLoading(false);
            })
    }

    return (
        <Box>
            <Stack
                width="100%"
                align="center"
                // p={2}
            >
                <Stack
                    // my={4}
                    textAlign="left"
                    direction='column'
                >
                    <form
                        hidden={hidden}
                        onSubmit={onSubmit}>
                        <a href={url}>{url}</a>
                        <FormControl>
                            <FormLabel>{label}</FormLabel>

                            <InputGroup>

                                <InputLeftElement
                                    pointerEvents="none"
                                    children={<Icon
                                        as={MdSearch}
                                        size="5"
                                        color="green.300" />}
                                />
                                <Input
                                    value={form.term}
                                    name='term'
                                    onChange={updateField}
                                    type="text"
                                    isRequired
                                    placeholder={placeholder}
                                />
                            </InputGroup>
                        </FormControl>
                        <Button
                            color='green.300'
                            variant="outline"
                            type="submit"
                            width="full"
                            mt={4}
                            isDisabled={loading}
                        >
                            Search
                        </Button>
                    </form>
                </Stack>

            </Stack>
            {/* Render any children of the Search Bar using render props, but instead of normal render props,
                 it's a function w/ the child component's props passed in! */}
            {children({ loading, results })}
        </Box>
    );
};

export default SearchBar;