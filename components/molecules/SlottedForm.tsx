import { useForm } from "react-hook-form";
import React, { useState, ReactNode, ReactChild } from "react";
import {
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Button,
} from "@chakra-ui/core";

type Props = {
    children: ReactChild | ChildSlots
}

type ChildSlots = {
    input: ReactNode
    control?: ReactNode // The optional control wrappers around inputs
    errors?: ReactNode // The optional error messages
    button?: ReactNode // The 
}

export function HookForm() {
    const { handleSubmit, errors, register, formState } = useForm();

    function validateName(value) {
        let error;
        if (!value) {
            error = "Name is required";
        } else if (value !== "Kitty") {
            error = "Error";
        }
        return error || true;
    }

    function onSubmit(values) {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
        }, 1000);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={errors.name}>
                <FormLabel htmlFor="name">First name</FormLabel>
                <Input
                    name="name"
                    placeholder="name"
                    ref={register({ validate: validateName })}
                />
                <FormErrorMessage>
                    {errors.name && errors.name.message}
                </FormErrorMessage>
            </FormControl>
            <Button
                mt={4}
                variantColor="teal"
                isLoading={formState.isSubmitting}
                type="submit"
            >
                Submit
            </Button>
        </form>
    );
}

const isObject = <T extends object>(value: any): value is T => typeof value === 'object' && typeof value !== 'function' && value != undefined
const areNamedSlots = (children: any): children is ChildSlots => isObject(children) && 'content' in children

export default HookForm