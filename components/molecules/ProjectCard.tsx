import { Box, Badge, Image, Link, Heading, Flex, Button, Icon, Tooltip } from "@chakra-ui/core";
import { FC } from 'react';
import { Project } from "../../models";
import Card from "../molecules/SlottedCard";
import { GrCirclePlay } from "react-icons/gr";

type Props = {
    project: Project
}

// Array.prototype.take = (n: number) => { return null }

export const ProjectCard: FC<Props> = ({ project }) => {
    const {
        Name,
        Media,
        Description,
        Repository,
        Website,
        Tech,
        Contributors,
        Snippet,
    } = project;

    let imgUrl = (Media && Media[0]?.url)
        || (Snippet && Snippet[0]?.url)
        || 'https://via.placeholder.com/200';

    return (
        <Box
            style={{ background: "linear-gradient(to left, #2bc0e4, #eaecc6)" }}
            mb={10}
            p={4}
            borderRadius="25px"
            verticalAlign="center"
        >
            <Card>{{

                content:
                    <Flex
                        // d="row"
                        // alignItems="baseline"
                        align="center"
                        mt={4}
                        mb={4}
                    >
                        <Flex align="flex-end" >
                            {Tech.map((techName, key) => <Badge variant="outline" key={key} margin='2px' variantColor="teal">{techName}</Badge>)}

                            {
                                Contributors &&
                                Contributors.map(teammate => {
                                    // TODO: Github Avatar
                                    // <Avatar></Avatar>

                                    <Link href={teammate.LinkedIn} isExternal></Link>
                                })
                            }
                        </Flex>
                        <Flex
                            align="center"
                            color="gray.500"
                            fontWeight="semibold"
                            letterSpacing="wide"
                            fontSize="xs"
                            textTransform="uppercase"
                            ml="2"
                        >
                            {Description || "No description"}
                        </Flex>

                    </Flex>,

                media:
                    <Flex
                        rounded="md"
                        flex="shrink"
                    >
                        {imgUrl &&
                            <Image
                                size="200px"
                                // borderRadius="25"
                                alt={Name}
                                src={imgUrl}
                                objectFit="cover"
                                // height="100%"
                                rounded="lg"

                            >
                            </Image>
                        }

                        <Heading                            
                            ml={10}
                            textAlign="center"
                            color="#fff"
                            size="sm"
                            fontSize="3rem"
                            letterSpacing="2px"
                            textTransform="uppercase"
                            // transform="translate(0%, 50%)"
                            border="3px #fff solid"
                            
                        >
                            {Name}
                        </Heading>

                    </Flex>,

                actions:
                    <Flex padding="2">
                        {Website &&
                            <Button
                                mr={4}
                                style={{ background: "linear-gradient(to right, #f12711, #f5af19)" }}
                                bg="kiyap.sushi.500" color="kiyap.cream.500" // className="btn1"
                                title="Play Demo!"
                                boxShadow="0 10px 20px rgba(241,39,17,0.25), 0 10px 10px rgba(245,175,25,0.22)"
                            >

                                <Link href={Website} isExternal>
                                    Launch {Name}
                                </Link>
                                <GrCirclePlay
                                    // color="red"
                                    size={32} />
                            </Button>}

                        {Repository &&
                            <Button
                                title="Checkout the code!"
                                // style={{ background: "linear-gradient(to right, #000, #434343)" }}
                                size="sm"
                                boxShadow="0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
                            >
                                <Link href={Repository} isExternal>
                                    View {Name} Code
                            </Link>
                                <Icon name="github" />
                            </Button>}
                    </Flex>
            }}
            </Card>
        </Box>
    )
}