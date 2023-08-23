import React, { useState } from 'react';
// import { FaCalendar } from 'react-icons/fa'
import {
    Box,
    Image,
    Flex,
    Spacer,
    chakra,
    VStack,
    Button,
    HStack,
    Link,
    IconButton,
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    background,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { color } from 'framer-motion';

// provide text Decoration Non or Remove underline on hover as well
const NoDecorationLink = chakra(Link, {
    baseStyle: {
      textDecoration: 'none',
      _hover: {
        textDecoration: 'none', 
      },
    },
  });

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    const [isAuth, setAuth] = useState(true)
    return (
        <chakra.header>
            <Box bg="gray.900" color="white" py={4} px={8}>
                <Flex alignItems="center">
                    <NoDecorationLink href="#" > 
                        <Flex gap="20px" alignItems="ceter">
                            <Box boxSize='50px' w="50px">
                                <Image src='../logo.png' alt='Local Pay ' />
                            </Box>
                            <chakra.h1 fontSize="3xl" fontWeight="bold" >
                                Local Pay
                            </chakra.h1>
                        </Flex>
                    </NoDecorationLink>
                    <Spacer />
                    <HStack spacing={10} display={{ base: 'none', md: 'flex' }}>
                        <Link href="#" color="white" >
                            Home
                        </Link>
                        <Link href="#" color="white">
                            About
                        </Link>
                        <Link href="#" color="white">
                            Services
                        </Link>
                        {isAuth? <Button>Jahir</Button>:<Button>Login</Button>}
                    </HStack>
                    <IconButton
                        display={{ base: 'inline-flex', md: 'none' }}
                        ref={btnRef}
                        aria-label="Open menu"
                        icon={<HamburgerIcon />}
                        color="white"
                        bg="green"
                        onClick={onOpen}
                        variant="ghost"
                    />
                </Flex>
            </Box>
            
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Menu</DrawerHeader>
                    <DrawerBody>
                        <VStack direction="column" spacing={4}>
                            <Link href="#" onClick={onClose}>
                                Home
                            </Link>
                            <Link href="#" onClick={onClose}>
                                About
                            </Link>
                            <Link href="#" onClick={onClose}>
                                Services
                            </Link>
                            {isAuth? <Button>Jahir</Button>:<Button>Login</Button>}
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </chakra.header>
    );
};

export default Navbar