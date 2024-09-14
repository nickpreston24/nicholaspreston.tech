// AirbnbCard, generified.

import React, { Component, FC } from 'react'
import { Box, Flex, Badge, Text, Image, Stack, Icon } from '@chakra-ui/core';

// The sample Airbnb AirbnbCard props
interface AirbnbCardProps {

    imageUri: string,
    subtitle1?: string,
    subtitle2?: string,
    badgeText?: string,
    description?: string,
    details?: string
    rating?: number,
    maxRating?: number,
}

export const AirbnbCard: FC<AirbnbCardProps> = ({
    // Media:
    imageUri,
    badgeText,

    // Content:
    subtitle1,
    subtitle2,
    description,
    details,
    rating,
    maxRating,
}) => {
    return (<Box>
        {/* TODO: add a stand-in image like from SMU */}
        {imageUri &&
            <Image rounded="md" src={imageUri} />}

        <Flex bg="upstack.orange.500" align="baseline" mt={2}>

            {badgeText &&
                <Badge variantColor="pink">{badgeText}</Badge>}

            {(subtitle1 || subtitle2) &&
                <Text
                    ml={2}
                    textTransform="uppercase"
                    fontSize="sm"
                    fontWeight="bold"
                    color="pink.800"
                >
                    {subtitle1} &bull; {subtitle2}
                </Text>}
        </Flex>

        {description &&
            <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
                {description}
            </Text>}

        {details && <Text mt={2}>{details}</Text>}

        {(rating && maxRating || 5) &&

            <Stack isInline justify="space-between">
                <Box as="span">{
                    Array(5)
                        .fill('')
                        .map((_, index) => (
                            <Icon name='star' color='teal.500' />
                        ))
                }</Box>
            </Stack>

            // <Flex mt={2} align="center">
            //     {/* <Box as={MdStar} color="orange.400" /> */}
            //     {<Text
            //         ml={1}
            //         size="sm"
            //     ><b>{rating}</b> (maxRating)</Text>}
            // </Flex>
        }
    </Box>);
};



export default AirbnbCard
