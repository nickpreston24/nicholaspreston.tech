import { Card } from './SlottedCard'
import { Technology, SoftSkill } from '../../models';
import { FC } from 'react';
import { Image, Flex, Text, Box, Stack, Badge, Heading, Icon } from '@chakra-ui/core';

interface SkillCardProps {
    title: string,
    duration: number,
    url?: string,
    rating: number,
    description: string,
    end?: Date,
    start?: Date,
}

const maxRating = 5;

export const SkillCard: FC<SkillCardProps> = ({ title, duration, url, rating, description, start, end }) => {

    let years = Math.floor(duration);
    let months = (years < 1) ? duration * 12 : 0

    // clipPath="circle(50% at 50% 50%)"

    return (
        <Flex
            maxWidth="40em"
            rounded='5'
            color="upstack.blue.500"
            padding="18px"
            borderRadius="25px"
            bg="upstack.orange.300"
            // boxShadow='0 5px 15px 3px rgba(0, 105, 135, .4)'
            boxShadow='inset 0 1px 10px 3px rgba(244,36,92,0.5)'
        >
            {/* Inner box */}
            <Box
                padding="15px"
                height="100%"
                width="100%"
                borderRadius="25px"
                bg="upstack.cream.500"
                verticalAlign="center"
                boxShadow="0 3px 15px 5px rgba(35,194,174,0.50)"
            >
                <Card>{{
                    header:
                        <Stack width="100%" align="center" spacing={3} px={16} >
                            <Heading color="upstack.orange.600" size="lg">{title}</Heading>
                        </Stack>,
                    // </Box>,
                    media: <Image
                        maxWidth="5em"
                        rounded="md"
                        src={url}
                        alt={title}
                    />,
                    content:
                        <Stack
                            width="100%"
                            height="100%"
                        >
                            <Text
                                color="upstack.teal.700"
                                mt={2}
                                mb={8}
                            >
                                {description}
                            </Text>

                            <Stack isInline justify="space-between">
                                {/* <Text mt={2}><b>Last Used: </b>{end}</Text> */}

                                <Text mt={2}><b>First Used: </b>{start}</Text>

                                {/* <Text fontWeight="semibold">Rating {rating}/({maxRating})</Text> */}

                                <Stack as="span" direction="row">
                                    <div>
                                        {Array(rating)
                                            .fill('')
                                            .map((_, index) => (
                                                <Icon key={index} name='star' color='kiyap.sushi.300' />
                                            ))

                                        }

                                    </div>
                                    <div>{Array(maxRating - rating)
                                        .fill('')
                                        .map((_, index) => (
                                            <Icon key={index} name='star' color='dark.600' />
                                        ))}</div>
                                </Stack>


                                {
                                    (years >= 1) &&
                                    <Badge
                                        height="100%"
                                        color="upstack.orange.800"
                                        bg="upstack.orange.300"
                                    >Years: {years}+</Badge>}
                                {
                                    (years < 1) &&
                                    <Badge
                                        height="100%"
                                        color="upstack.teal.700"
                                        bg="upstack.teal.500"
                                    >Months: {months}</Badge>
                                }
                            </Stack>

                            {/* Airtable specific Icon (free, but have to cite) */}
                            {title === 'Airtable' &&
                                <span>
                                    <b><a href="https://iconscout.com/icons/airtable" target="_blank">Airtable Icon</a> by <a href="https://iconscout.com/contributors/icon-mafia" target="_blank">Icon Mafia</a></b>
                                </span>
                            }

                        </Stack>
                }}
                </Card>
            </Box>
        </Flex>
    );
}

export default SkillCard;