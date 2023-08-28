import React, { useContext, useState } from 'react';
import { AuthContext } from '../ContexProvider/AuthcontextProvider';
// import { FaCalendar } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import {
    Box,
    Image,
    Flex,
    Spacer,
    chakra,
    VStack,
    Button,
    HStack,
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
    const {isAuth,firstName}= useContext(AuthContext);

    // const [isAuth, setAuth] = useState(true)
    return (
        <chakra.header>
            <Box bg="gray.900" color="white" py={4} px={8} >
                <Flex alignItems="center" >
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
                        <Link to="/" color="white" >
                            Home
                        </Link>
                        <Link to="/" color="white">
                            About
                        </Link>
                        <Link to="/dashboard" color="white">
                            Dashboard
                        </Link>
                        {!isAuth?<Link to="/login"> <Button>Login</Button></Link>:<Link to="/profile"><Button>{firstName}</Button></Link>}
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
                            <Link to="/" onClick={onClose}>
                                Home
                            </Link>
                            <Link to="#" onClick={onClose}>
                                About
                            </Link>
                            <Link to="/dashboard" onClick={onClose}>
                                Dashboard
                            </Link>
                            {!isAuth?<Link to="/login"> <Button>Login</Button></Link>:<Link to="/profile"><Button>{firstName}</Button></Link>}
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </chakra.header>
    );
};

export default Navbar