import React from "react";
import {
    chakra,
    Box,
    Button,
    Flex,
    HStack,
    useColorMode,
    useColorModeValue,
    Text,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Link as ChakraLink
} from "@chakra-ui/core";
import {FaMoon, FaSun, FaGithub, FaWordpress, FaBars} from "react-icons/fa"
import {Link} from 'gatsby'
import Logo from "./Logo";

import Container from "./Container";
import PrimaryNav from './PrimaryNav'
import PrimaryNavMobile from './PrimaryNavMobile'
import FooterSocialLinks from './FooterSocialLinks'

const DrawerNav = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return(
        <>
            <Button ref={btnRef} colorScheme="blue" onClick={onOpen} display={['block', 'block', 'none']}>
                <FaBars/>
            </Button>
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>WPGraphQL</DrawerHeader>

                        <DrawerBody>
                            <PrimaryNavMobile display="flex" />
                        </DrawerBody>

                        <DrawerFooter>
                            <FooterSocialLinks />
                        </DrawerFooter>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    );
}

function Layout(props) {
    const {toggleColorMode} = useColorMode()
    const SwitchIcon = useColorModeValue(FaMoon, FaSun)
    const bg = useColorModeValue("white", "gray.800")
    const btnRef = React.useRef()
    return (
        <Box>
            <chakra.header
                top="0"
                position="fixed"
                zIndex="1"
                bg={bg}
                left="0"
                right="0"
                borderBottomWidth="1px"
                width="full"
                {...props}
            >
                <Container pt={0} px={0} mt="0" height="auto" mx="auto" minHeight="0" >
                    <Flex
                        w="100%"
                        h="100%"
                        py={3}
                        px={5}
                        align="center"
                        justify="space-between"
                    >
                        <Flex align="center">
                            <Link to="/">
                                <Logo/>
                            </Link>
                            <PrimaryNav display={{base: "none", md: "flex"}}/>

                        </Flex>
                        <Flex maxW="720px" align="center" color="gray.400">
                            <HStack spacing="5">
                                <ChakraLink href="https://github.org/wp-graphql/wp-graphql" display={['none', 'none', 'block']}>
                                    <Button>
                                        <FaGithub/>
                                    </Button>
                                </ChakraLink>
                                <ChakraLink href="https://wordpress.org/plugins/wp-graphql" display={['none', 'none', 'block']}>
                                    <Button>
                                        <FaWordpress/>
                                    </Button>
                                </ChakraLink>
                                <Button onClick={toggleColorMode}>
                                    <SwitchIcon/>
                                </Button>
                                <DrawerNav btnRef={btnRef} />
                            </HStack>
                        </Flex>
                    </Flex>
                </Container>
            </chakra.header>
            <Box as="main" mt={"70"}>
                {props.children}
            </Box>
            <chakra.footer
                bottom="0"
                zIndex="1"
                bg={bg}
                left="0"
                right="0"
                border="0"
                width="full"
                {...props}
            >
                <chakra.div border="0" height="6rem" mx="auto" maxW="1200px">
                    <Flex
                        w="100%"
                        h="100%"
                        py={3}
                        px={5}
                        align="center"
                        justify="space-around"
                        border="0"
                    >
                        <Text>Development sponsored by <a href={`https://gatsbyjs.com/`}
                                                          target={`_blank`} rel="noreferrer"><Text
                            as={`span`}
                            border="0"
                            color={`blue.400`}>Gatsby</Text></a></Text>
                    </Flex>
                    <Flex
                        border="0"
                        w="100%"
                        h="100%"
                        py={3}
                        px={5}
                        align="center"
                        justify="space-around"
                    >
                        <FooterSocialLinks />
                    </Flex>
                </chakra.div>
            </chakra.footer>
        </Box>
    );
}



export default Layout;
