import React from "react";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  Image,
  IconButton,
  VStack,
  HStack,
  Icon,
} from "@chakra-ui/react";
import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { Separator } from "@chakra-ui/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Enhanced color scheme with better contrast
  const footerBg = "brand.fernGreen";
  const textColor = "brand.mintLeaf";
  const linkColor = "brand.ivory";
  const linkHoverColor = "brand.dustySage";
  const iconColor = "brand.ivory";

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Moringa", href: "/moringa" },
    { label: "Our Process", href: "/process" },
    { label: "Partnerships", href: "/partnerships" },
    { label: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { label: "Facebook", icon: "src/assets/images/facebook.png", href: "#" },
    { label: "Twitter", icon: "src/assets/images/twitter.png", href: "#" },
    { label: "Instagram", icon: "src/assets/images/instagram.png", href: "#" },
    { label: "LinkedIn", icon: "src/assets/images/linkedin.png", href: "#" },
  ];

  const contactDetails = [
    {
      icon: MapPin,
      text: "Ali Agro Farming Enterprise, Alamdanga, Chuadanga 7210, Bangladesh",
      isBold: true,
 
    },
    {
      icon: Phone,
      text: "01755555555",
      href: "tel:01755555555",

      isBold: true,
    },
    {
      icon: Mail,
      text: "aliagrofarm@gmail.com",
      href: "mailto:aliagrofarm@gmail.com",

      isBold: true,
    },
  ];

  return (
    <Box 
      as="footer" 
      bg={footerBg} 
      color={textColor} 
      py={{ base: 12, md: 20 }}
      position="relative"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "1px",
        bgGradient: "linear(to-r, transparent, rgba(255,255,255,0.3), transparent)",
      }}
    >
      <Container maxW="7xl" px={{ base: 6, md: 8 }}>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 4 }}
          spacing={{ base: 10, md: 12, lg: 16 }}
          mb={{ base: 10, md: 16 }}
        >
          {/* Column 1: Logo & Brief */}
          <VStack 
            spacing={6} 
            align={{ base: "center", sm: "start" }}
            maxW={{ base: "full", sm: "280px" }}
          >
            <Box
              p={2}
              borderRadius="lg"
              bg="rgba(255,255,255,0.05)"
              backdropFilter="blur(10px)"
              border="1px solid"
              borderColor="rgba(255,255,255,0.1)"
            >
              <Image
                src="src/assets/images/Ali_Agro.png"
                alt="Ali Agro Logo"
                objectFit="contain"
              />
            </Box>
            <Text 
              fontSize="sm" 
              textAlign={{ base: "center", sm: "start" }}
              lineHeight="1.6"
              color="rgba(255,255,255,0.8)"
              fontWeight="400"
            >
              Nourishing lives, sustainably. Discover the power of Moringa with
              Ali Agro.
            </Text>
          </VStack>

          {/* Column 2: Navigation Links */}
          <VStack 
            spacing={5} 
            align={{ base: "center", sm: "start" }}
            pt={{ base: 2, sm: 0 }}
          >
            <Text 
              fontWeight="700" 
              fontSize="lg" 
              color={linkColor}
              letterSpacing="0.5px"
              textTransform="uppercase"
              position="relative"
              _after={{
                content: '""',
                position: "absolute",
                bottom: "-4px",
                left: { base: "50%", sm: "0" },
                transform: { base: "translateX(-50%)", sm: "none" },
                width: "30px",
                height: "2px",
                bg: "brand.dustySage",
              }}
            >
              Quick Links
            </Text>
            <VStack spacing={3} align={{ base: "center", sm: "start" }}>
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  color={textColor}
                  fontSize="sm"
                  fontWeight="500"
                  transition="all 0.3s ease"
                  position="relative"
                  _hover={{ 
                    color: linkHoverColor, 
                    textDecoration: "none",
                    transform: "translateX(4px)",
                    _before: {
                      width: "100%",
                    }
                  }}
                  _before={{
                    content: '""',
                    position: "absolute",
                    bottom: "-2px",
                    left: "0",
                    width: "0",
                    height: "1px",
                    bg: linkHoverColor,
                    transition: "width 0.3s ease",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </VStack>
          </VStack>

          {/* Column 3: Contact Information */}
          <VStack 
            spacing={5} 
            align={{ base: "center", sm: "start" }}
            pt={{ base: 2, sm: 0 }}
          >
            <Text 
              fontWeight="700" 
              fontSize="lg" 
              color={linkColor}
              letterSpacing="0.5px"
              textTransform="uppercase"
              position="relative"
              _after={{
                content: '""',
                position: "absolute",
                bottom: "-4px",
                left: { base: "50%", sm: "0" },
                transform: { base: "translateX(-50%)", sm: "none" },
                width: "30px",
                height: "2px",
                bg: "brand.dustySage",
              }}
            >
              Contact Us
            </Text>
            <VStack spacing={4} align={{ base: "center", sm: "start" }}>
              {contactDetails.map((item, index) => (
                <HStack
                  key={index}
                  align="start"
                  spacing={3}
                  w="full"
                  ml={item.ml || 0}
                  justify={{ base: "center", sm: "start" }}
                >
                  {item.icon && (
                    <Box
                      p={2}
                      borderRadius="md"
                      bg="rgba(255,255,255,0.05)"
                      minW="32px"
                      h="32px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Icon as={item.icon} boxSize={4} color={iconColor} />
                    </Box>
                  )}
                  <Link
                    href={item.href || undefined}
                    isExternal={
                      !!item.href &&
                      (item.href.startsWith("tel:") ||
                        item.href.startsWith("mailto:"))
                    }
                    color={item.isBold ? linkColor : "rgba(255,255,255,0.8)"}
                    fontSize="sm"
                    lineHeight="1.5"
                    transition="all 0.3s ease"
                    _hover={{
                      color: item.href ? linkHoverColor : undefined,
                      textDecoration: "none",
                      transform: item.href ? "translateX(2px)" : "none",
                    }}
                    fontWeight={item.isBold ? "600" : "400"}
                    textAlign={{ base: "center", sm: "left" }}
                  >
                    {item.text}
                  </Link>
                </HStack>
              ))}
            </VStack>
          </VStack>

          {/* Column 4: Social Media */}
          <VStack 
            spacing={6} 
            align={{ base: "center", sm: "start" }}
            pt={{ base: 2, sm: 0 }}
          >
            <Text 
              fontWeight="700" 
              fontSize="lg" 
              color={linkColor}
              letterSpacing="0.5px"
              textTransform="uppercase"
              position="relative"
              _after={{
                content: '""',
                position: "absolute",
                bottom: "-4px",
                left: { base: "50%", sm: "0" },
                transform: { base: "translateX(-50%)", sm: "none" },
                width: "30px",
                height: "2px",
                bg: "brand.dustySage",
              }}
            >
              Follow Us
            </Text>
            <HStack spacing={4} justify={{ base: "center", sm: "start" }}>
              {socialLinks.map((social) => (
                <Box
                  key={social.label}
                  as="a"
                  href={social.href}
                  aria-label={social.label}
                  w="48px"
                  h="48px"
                  p={2}
                  borderRadius="full"
                  bg="rgba(255,255,255,0.05)"
                  border="1px solid"
                  borderColor="rgba(255,255,255,0.1)"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  transition="all 0.3s ease"
                  cursor="pointer"
                  _hover={{ 
                    bg: "rgba(255,255,255,0.15)",
                    borderColor: "rgba(255,255,255,0.3)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={social.icon}
                    alt={social.label}
                    
                    objectFit="contain"
                 
                    opacity={0.9}
                    transition="all 0.3s ease"
                    _hover={{
                      opacity: 1,
                      transform: "scale(1.1)",
                    }}
                  />
                </Box>
              ))}
            </HStack>
            <Text 
              fontSize="xs" 
              color="rgba(255,255,255,0.6)"
              textAlign={{ base: "center", sm: "left" }}
              lineHeight="1.5"
              maxW="200px"
            >
              Stay connected for the latest updates and wellness tips.
            </Text>
          </VStack>
        </SimpleGrid>

        <Box
          my={{ base: 8, md: 12 }}
          position="relative"
        >
          <Separator
            borderColor="rgba(255,255,255,0.15)"
            opacity={0.6}
          />
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            bg={footerBg}
            px={4}
          >
            <Box
              w="8px"
              h="8px"
              borderRadius="full"
              bg="rgba(255,255,255,0.3)"
            />
          </Box>
        </Box>

        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 4, md: 0 }}
          justify="space-between"
          align="center"
          fontSize="sm"
          pt={4}
        >
          <Text 
            textAlign={{ base: "center", md: "left" }}
            color="rgba(255,255,255,0.7)"
            fontWeight="500"
          >
            © {currentYear} Ali Agro. All Rights Reserved.
          </Text>
          <HStack 
            spacing={6} 
            divider={
              <Box 
                w="1px" 
                h="16px" 
                bg="rgba(255,255,255,0.2)" 
              />
            }
          >
            <Link
              href="/privacy-policy"
              color="rgba(255,255,255,0.7)"
              fontSize="sm"
              fontWeight="500"
              transition="all 0.3s ease"
              _hover={{ 
                color: linkHoverColor, 
                textDecoration: "none",
                transform: "translateY(-1px)"
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              color="rgba(255,255,255,0.7)"
              fontSize="sm"
              fontWeight="500"
              transition="all 0.3s ease"
              _hover={{ 
                color: linkHoverColor, 
                textDecoration: "none",
                transform: "translateY(-1px)"
              }}
            >
              Terms of Service
            </Link>
          </HStack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;