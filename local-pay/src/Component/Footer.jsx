import React from 'react';
import { Flex, Image, Link, HStack ,VStack} from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
// import PhonePeLogo from './phonepe-logo.png'; // Import your logo image

const Footer = () => {
  return (
    <Flex
      as="footer"
      color="black"
      py={6}
      justifyContent="space-around"
      alignItems="center"
    >
      <Image src="../logo.png" alt="Local Pay" />

      <HStack spacing={6}  alignItems="center">
        <VStack>
            <Link  href="#">Business Solutions</Link>
            <Link  href="#">Payment Gateway</Link>
            <Link  href="#">Guardian by LocalPay</Link>
            <Link  href="#">LocalPay Switch</Link>
            <Link  href="#">Offline Merchant</Link>
        </VStack>
        <VStack>
            <Link  href="#">Insurance</Link>
            <Link  href="#"> Motor Insurance</Link>
            <Link  href="#">Bike Insurance</Link>
            <Link  href="#">Car Insurance</Link>
            <Link  href="#">Health Insurance</Link>
            <Link  href="#">Life Insurance</Link>
        </VStack>
        <VStack>
            <Link  href="#">Investment</Link>
            <Link  href="#">24 Gold</Link>
            <Link  href="#">Liquid Funds</Link>
            <Link  href="#">Equity Funds</Link>
            <Link  href="#">Hybrid Funds</Link>
            <Link  href="#">Debt Funds</Link>
        </VStack>
        <VStack>
            <Link  href="#">Legal </Link>
            <Link  href="#">Term & Condition</Link>
            <Link  href="#">Privacy Policy</Link>
            <Link  href="#">How to Pay</Link>
            <Link  href="#">Trust & Safety</Link>
            <Link  href="#">E-Waste Policy</Link>
        </VStack>
        <VStack>
            <Link  href="#">General</Link>
            <Link  href="#">About US</Link>
            <Link  href="#">Carrers</Link>
            <Link  href="#">Contact Us</Link>
            <Link  href="#">Blog</Link>
        </VStack>
        {/* Add more links as needed */}
      </HStack>

      <HStack spacing={4}>
        <Link href="#" aria-label="Facebook">
          <FaFacebook />
        </Link>
        <Link href="#" aria-label="Twitter">
          <FaTwitter />
        </Link>
        <Link href="#" aria-label="Instagram">
          <FaInstagram />
        </Link>
      </HStack>
    </Flex>
  );
};

export default Footer;