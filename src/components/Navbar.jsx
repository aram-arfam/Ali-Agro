import React from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button, // If you want a CTA button in the navbar
  Image,
  useDisclosure,
  VStack,
  CloseButton,
  Container,
} from "@chakra-ui/react";
import { Menu as MenuIcon, ChevronDownIcon } from "lucide-react"; 
import logo from "../assets/images/Ali_Agro.png";



const NavLinkItem = ({ href, children, isActive, ...rest }) => {
 

  return (
    <Link
      href={href}
      px={3}
      py={2}
      rounded="md"
      fontWeight={isActive ? "600" : "500"}
      color={isActive ? "brand.fernGreen" : "brand.clayBrown"} // Active vs. Inactive color
      _hover={{
        textDecoration: "none",

        color: "brand.fernGreen",
      }}
      transition="all 0.2s ease"
      {...rest}
    >
      {children}
    </Link>
  );
};

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Example: Using window.location.pathname for active link (replace with your router's method)
  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : "";

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Moringa", href: "/moringa" },
    { label: "Our Process", href: "/process" },
    { label: "Partnerships", href: "/partnerships" },
    { label: "Contact", href: "/contact" },
  ];

  // Navbar background - using a light, professional color from your theme
  const navbarBg = "brand.mist"; // Light card background
  const navbarBorderColor = "border.subtle"; // `brand.mintLeaf`

  return (
    <Box
      as="nav"
      bg={navbarBg}
      px={{ base: 4, md: 6 }}
      py={3}
      position="sticky"
      top="0"
      zIndex="sticky" // Ensure it's above other content
      boxShadow="sm" // Subtle shadow from your theme
      borderBottom="1px solid"
      borderColor={navbarBorderColor}
    >
      <Container maxW="7xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          {/* Logo */}
          <Link href="/" _hover={{ textDecoration: "none" }}>
            <Image
              src={logo}
              alt="Ali Agro Logo"
              height="85px" 
              htmlHeight="40px" // Adjust size as needed
              objectFit="contain"
            />
            {/* Or Text Logo:
            <Heading as="h1" size="md" color="brand.fernGreen">Ali Agro</Heading>
            */}
          </Link>

          {/* Desktop Navigation */}
          <HStack spacing={6} display={{ base: "none", md: "flex" }}>
            {navLinks.map((link) => (
              <NavLinkItem
                key={link.label}
                href={link.href}
                isActive={currentPath === link.href}
              >
                {link.label}
              </NavLinkItem>
            ))}
            {/* Optional CTA Button */}
            {/* <Button
              variant="solid" // Uses your theme's solid button recipe
              size="sm"
              // Example: Link to a specific product or shop page
              // onClick={() => window.location.href = '/shop'}
            >
              Shop Now
            </Button> */}
          </HStack>

          {/* Mobile Menu Button */}
          <Flex display={{ base: "flex", md: "none" }} alignItems="center">
            <IconButton
              size="md"
              icon={<MenuIcon size={24} />}
              aria-label="Open Menu"
              onClick={onOpen}
              variant="ghost" // Use ghost variant from your theme
              color="brand.fernGreen"
            />
          </Flex>
        </Flex>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <Box
            pb={4}
            display={{ md: "none" }}
            position="fixed" // Or absolute depending on desired effect
            top="0"
            left="0"
            right="0"
            bottom="0"
            bg={navbarBg} // Same background as navbar
            zIndex="overlay" // Ensure it's above sticky navbar but can be closed
          >
            <Flex
              justifyContent="space-between"
              alignItems="center"
              p={4}
              borderBottom="1px solid"
              borderColor={navbarBorderColor}
            >
              <Link href="/" onClick={onClose}>
                <Image
                  src="/path-to-your-logo.png" // Replace with your logo path
                  alt="Ali Agro Logo"
                  htmlHeight="36px"
                  objectFit="contain"
                />
              </Link>
              <CloseButton onClick={onClose} color="brand.fernGreen" />
            </Flex>
            <VStack as="nav" spacing={4} p={4} alignItems="stretch">
              {navLinks.map((link) => (
                <NavLinkItem
                  key={link.label}
                  href={link.href}
                  onClick={onClose} // Close menu on link click
                  isActive={currentPath === link.href}
                  textAlign="left"
                  w="full"
                  _hover={{ bg: "brand.mintLeaf" }}
                >
                  {link.label}
                </NavLinkItem>
              ))}
              {/* Optional CTA Button in Mobile Menu */}
              {/* <Button
                variant="solid"
                w="full"
                mt={4}
                // onClick={() => { window.location.href = '/shop'; onClose(); }}
              >
                Shop Now
              </Button> */}
            </VStack>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Navbar;
