import React from 'react'
import {
    Accordion, AccordionHeader, AccordionPanel
    , Box, Stack, Text, AccordionItem, Heading
} from '@chakra-ui/core'

const sections = [
    {
        title: "Brand Statement",
        p: [`I'm a Full Stack Web Developer with a background in .NET development.  I am known for my  ability to find solutions that lead to success, foster team cohesion, and work with a high degree of integrity.  I enjoy helping fixing others' problems, big or small.  I felt a need to explore the tech world and keep up to date with the latest and greatest techniques, practices and ideas.  I sought out a extended learning to both help prepare a professional portfolio and learn some front-end technologies that inspire and expanded my knowledge in Javascript, ES6/7, MERN stack, and RESTful APIs.  I believe my tech skills, multitasking and patience work well across organizations and make me a valuable asset to any team.`]
    },
    {
        title: "Hobbies",
        p:
            [`I learned (self-taught) to cook, whipping up recipes from my imagination and writing the successful (i.e. not burnt) ones down.  My rule is that all ingredients must be Organic - it all tastes so much better!

        Since starting in 2015, I've been known to test out my creations on my family and peers!  My favorite tool is my Instant Pot: anything can be thrown in it and you got a meal.

        I'm particular to making sweets, namely ice cream and cookies, but I've been looking to expand into baked goods.`,

                `My interest in martial arts stemmed from seeing others perform when I was a kid - I'd always wanted to be able to Karate chop a block in half.  So far, I've managed to do a decent job on boards; concrete HURTS!        I've done quite a bit in my first 20 or so years.  In college I joined the Texas Blackbelt Academy's Taekwondo class and the Fencing Club.  Training to parry, riposte and jab enhanced my tone and wits while kicking shields, executing forms and sparring improved my flexibility. In additon to my two belts in Taekwondo, in 2019 I achieved an orange belt in Krav Maga.`]
    },
]

const recommendations = [
    {
        name: "Andrea Seatts",
        quote: `Michael is an extremely knowledgeable developer, and a strong team asset. He is quick to be generous to share his knowledge, dive into troubleshooting, and goes above and beyond to research, ask questions, and understand concepts deeply. Michael is a creative problem-solver, and designs solutions that add clarity and grace to the problems or goals being targeted.`,
        profile: `https://www.linkedin.com/in/andrasta-seatts-a21ab4a5/`
    },
    {
        name: "Daniel Reynolds",
        quote: `"Michael is a highly motivated programmer and will go above and beyond to get the best possible project delivered. His input was invaluable and I learned quite a bit from his example. He would be a valuable asset to any team, and I would consider myself very lucky to be on the same team as him in the future." - Daniel Reynolds`,
        profile: `https://www.linkedin.com/in/daniel-s-reynolds`
    }
]

export const About = () => {

    return (
        <Stack
            height="100vh"
        >
            <Heading fontFamily="Monda; Trebuchet MS">About Michael</Heading>
            <Accordion allowMultiple>
                {sections.map((section, index) => {
                    return (
                        <AccordionItem key={index}>
                            <AccordionHeader
                                _expanded={{ bg: "#bada55", color: "white" }}
                            >
                                <Box
                                    backgroundColor="upstack.teal"
                                    flex="1"
                                    textAlign="left">
                                    {section.title}
                                </Box>
                            </AccordionHeader>
                            {section.p.map((paragraph, index) => {
                                return <AccordionPanel key={index} pb={4}>
                                    {paragraph}
                                </AccordionPanel>
                            })}
                        </AccordionItem>
                    )
                })}

                {recommendations.map((recommendation, index) => {
                    return (
                        <AccordionItem key={index}>
                            <AccordionHeader
                                _expanded={{ bg: "#bada55", color: "white" }}
                            >
                                <Box
                                    backgroundColor='upstack.blue'
                                    flex="1"
                                    textAlign="right">
                                    {recommendation.name}
                                </Box>
                            </AccordionHeader>
                            <AccordionPanel key={index} pb={4}>
                                {recommendation.quote}
                            </AccordionPanel>
                        </AccordionItem>
                    )
                })}
            </Accordion>
        </Stack>

    )
}

// export default withStyles(styles)(About)
export default About
