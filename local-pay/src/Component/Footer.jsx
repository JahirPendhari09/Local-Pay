import React from 'react';
import { Flex, Box, chakra, Grid, Image, Link, HStack, VStack } from '@chakra-ui/react';
import { FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <Grid
        as="footer"
        color="black"
        py={6}
        templateColumns={['1fr', 'repeat(1, 1fr)', 'repeat(3, 1fr)']}
        gap={10}
        justifyContent="space-around"
        alignItems="center"
        border="1px solid black"
        p={4}
        bg="facebook.200"
      >
        <VStack>
          <HStack>
            <Flex gap="20px" alignItems="ceter">
              <Box boxSize='50px' w="50px">
                <Image src='../logo.png' alt='Local Pay ' />
              </Box>
              <chakra.h1 fontSize="3xl" fontWeight="bold" >
                Local Pay
              </chakra.h1>
            </Flex>
          </HStack>
          <HStack spacing={4} justify="center" >
            <Link href="https://www.instagram.com/jahirpendhari09/" aria-label="Instagram">
              <FaInstagram />
            </Link>
            <Link href="#" aria-label="Twitter">
              <FaTwitter />
            </Link>
            <Link href="https://www.linkedin.com/in/jahir-pendhari-342b801b7/" aria-label="LinkedinIn">
              <FaLinkedinIn/>
            </Link>
          </HStack>
        </VStack>
        <VStack>
          <Link href="#" fontWeight="bold" fontSize="xl">Legal </Link>
          <Link href="#">Term & Condition</Link>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">How to Pay</Link>
        </VStack>
        <VStack>
          <Link href="#" fontWeight="bold" fontSize="xl">General</Link>
          <Link href="#">Carrers</Link>
          <Link href="#">Contact Us</Link>
          <Link href="#">Blog</Link>
        </VStack>
      </Grid>

    </div>
  );
};

export default Footer;