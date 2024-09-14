import { Box, Heading } from '@chakra-ui/core'
import { About } from './about'
import { Skills } from './skills'
import { Projects } from './projects'
import { Contact } from './contact'
import { Link as Jump, animateScroll as scroll } from 'react-scroll'
import { Section } from '../components/molecules/Section'

const fontFamily = "Lato, Monda, Trebuchet MS"

const Layout = () => {
    return (
        <Box
            // alignItems="center"
            height="100%"
            border="3px dodgerblue solid"
        >
            <Section id="home">
                {{
                    content: <ScrollingNavbar />
                }}
            </Section>

            <Section id="about">
                {{
                    content: <About />
                }}
            </Section>

            <Section
                id="skills"
            >
                {{
                    title:
                        <Heading
                            mb={4}
                            fontFamily={fontFamily}
                            bg="kiyap.sushi.300"
                            color="kiyap.sushi.50"
                            size="2xl"
                        >
                            Technical Skills
                        </Heading>,

                    content: <Skills />
                }}
            </Section>

            <Section
                id="projects"
            >{{
                title:
                    <Box
                        alignContent="center"
                    >
                        <Heading isTruncated
                            mb={4}
                            fontFamily={fontFamily}
                            bg="kiyap.sushi.300"
                            color="kiyap.sushi.50"
                            size="2xl">
                            My Projects
                        </Heading>
                    </Box>,
                content: <Projects />
            }}
            </Section>

            <Section id="contact">
                {{
                    title: <Heading isTruncated
                        mb={4}
                        bg="kiyap.sushi.300"
                        color="kiyap.sushi.50"
                        size="2xl"
                        fontFamily={fontFamily}

                        // style={{ background: "linear-gradient(to right, #f12711, #bada55)" }}
                    >
                        Contact Me!
                </Heading>,
                    content: <Contact />
                }}
            </Section>

            {/* <Icon name="house">Home</Icon> */}

            {/* <Skills /> */}

            {/* This style's for scrolling a whole page like Spotify */}
            <style jsx>{`
            .section{
                height: 100vh
            }
            .section--first{
                height: 90vh
            }
            .nav {
                position: absolute
            }
            `}</style>
        </Box>
    )
}


// // 1. Create a custom motion component from Box
// const MotionBox = motion.custom(Box);

// // 2. You'll get access to `motion` and `chakra` props in `MotionBox`
// function Example() {
//     return (
//         <MotionBox
//             size="40px"
//             bg="red.300"
//             drag="x"
//             dragConstraints={{ left: -100, right: 100 }}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//         />
//     );
// }

// A scrolling navbar utilizing react-scroll library:
const ScrollingNavbar = () => {


    return (
        <nav className="nav" id="navbar">
            <ul className="nav-items">
                <li>
                    <Jump
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="projects">
                        Projects
                </Jump>
                </li>
                <li>
                    <Jump spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="skills"
                    >
                        Skills
                </Jump>
                </li>
                <li>
                    <Jump spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="about">
                        About
                    </Jump>
                </li>
                <li>
                    <Jump
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500} to="contact">
                        Contacts
                    </Jump>
                </li>
            </ul>
        </nav>
    )
}

export default Layout;