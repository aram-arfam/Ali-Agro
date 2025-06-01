import React from "react";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  Image, // Assuming you'll have a logo image
  IconButton,
  VStack,
  HStack,
  Icon,
} from "@chakra-ui/react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
} from "lucide-react"; // Social media and contact icons
import { Separator } from "@chakra-ui/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Using a darker green from your brand palette for the background
  const footerBg = "brand.fernGreen"; // Darker shade of green
  // Or for a darker brown: const footerBg = "brown.700";

  // Text and link colors that contrast well with the dark background
  const textColor = "brand.mintLeaf"; // A lighter, muted green for general text
  const linkColor = "brand.ivory"; // A very light color for links to make them stand out
  const linkHoverColor = "brand.dustySage"; // Hover color for links
  const iconColor = "brand.ivory"; // For social media icons

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Moringa", href: "/moringa" },
    { label: "Our Process", href: "/process" },
    { label: "Partnerships", href: "/partnerships" }, // Link to the section you just created
    { label: "Contact", href: "/contact" }, // Link to contact page/form
  ];

  const socialLinks = [
    { label: "Facebook", icon: Facebook, href: "#" }, // Replace # with actual links
    { label: "Twitter", icon: Twitter, href: "#" },
    { label: "Instagram", icon: Instagram, href: "#" },
    { label: "LinkedIn", icon: Linkedin, href: "#" },
  ];

  const contactDetails = [
    {
      icon: MapPin,
      text: "Ali Agro Farming Enterprise",
      isBold: true,
    },
    {
      icon: null, // No icon for the second line of address
      text: "Alamdanga, Chuadanga 7210, Bangladesh",
      ml: "28px", // Indent to align with text below icon
    },
    {
      icon: Phone,
      text: "[Your Phone Number]", // Replace with actual phone
      href: "tel:[YourPhoneNumber]", // Replace with actual phone
    },
    {
      icon: Mail,
      text: "[Your Email Address]", // Replace with actual email
      href: "mailto:[YourEmailAddress]", // Replace with actual email
    },
  ];

  return (
    <Box as="footer" bg={footerBg} color={textColor} py={{ base: 10, md: 16 }}>
      <Container maxW="7xl">
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 4 }}
          spacing={{ base: 8, md: 10 }}
          mb={{ base: 8, md: 12 }}
        >
          {/* Column 1: Logo & Brief */}
          <VStack spacing={4} align={{ base: "center", sm: "start" }}>
            <Image
              src="/path-to-your-logo-small.png" // Replace with your logo path
              alt="Ali Agro Logo"
              htmlWidth="120px" // Adjust size as needed
              // filter="brightness(0) invert(1)" // If your logo is dark and needs to be white on dark BG
            />
            <Text fontSize="sm" textAlign={{ base: "center", sm: "start" }}>
              Nourishing lives, sustainably. Discover the power of Moringa with
              Ali Agro.
            </Text>
          </VStack>

          {/* Column 2: Navigation Links */}
          <VStack spacing={3} align={{ base: "center", sm: "start" }}>
            <Text fontWeight="600" fontSize="lg" color={linkColor}>
              Quick Links
            </Text>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                color={textColor}
                _hover={{ color: linkHoverColor, textDecoration: "underline" }}
              >
                {link.label}
              </Link>
            ))}
          </VStack>

          {/* Column 3: Contact Information */}
          <VStack spacing={3} align={{ base: "center", sm: "start" }}>
            <Text fontWeight="600" fontSize="lg" color={linkColor}>
              Contact Us
            </Text>
            {contactDetails.map((item, index) => (
              <HStack
                key={index}
                align="start"
                spacing={2}
                w="full"
                ml={item.ml || 0}
              >
                {item.icon && (
                  <Icon as={item.icon} boxSize={5} mt="2px" color={iconColor} />
                )}
                <Link
                  href={item.href || undefined}
                  isExternal={
                    !!item.href &&
                    (item.href.startsWith("tel:") ||
                      item.href.startsWith("mailto:"))
                  }
                  color={textColor}
                  _hover={
                    item.href
                      ? { color: linkHoverColor, textDecoration: "underline" }
                      : {}
                  }
                  fontWeight={item.isBold ? "500" : "normal"}
                >
                  {item.text}
                </Link>
              </HStack>
            ))}
          </VStack>

          {/* Column 4: Social Media */}
          <VStack spacing={4} align={{ base: "center", sm: "start" }}>
            <Text fontWeight="600" fontSize="lg" color={linkColor}>
              Follow Us
            </Text>
            <HStack spacing={3}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.label}
                  as="a"
                  href={social.href}
                  aria-label={social.label}
                  icon={<Icon as={social.icon} boxSize={5} />}
                  isRound
                  variant="ghost"
                  color={iconColor}
                  _hover={{ bg: "rgba(255,255,255,0.1)" }} // Subtle hover for icons
                  target="_blank"
                  rel="noopener noreferrer"
                />
              ))}
            </HStack>
            {/* Optional: Newsletter Teaser if not prominent elsewhere */}
            {/* <Text fontSize="sm" mt={4}>
              Get updates & wellness tips straight to your inbox.
            </Text>
            <Button
              colorScheme="brand" // Assumes you have a brand colorScheme
              variant="outline"
              borderColor={linkColor}
              color={linkColor}
              _hover={{ bg: "rgba(255,255,255,0.1)" }}
              onClick={() => {/* Scroll to newsletter or open modal * /}}
            >
              Subscribe
            </Button> */}
          </VStack>
        </SimpleGrid>

        <Separator
          borderColor="rgba(255,255,255,0.2)"
          my={{ base: 6, md: 8 }}
        />

        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 3, md: 0 }}
          justify="space-between"
          align="center"
          fontSize="sm"
        >
          <Text textAlign={{ base: "center", md: "left" }}>
            © {currentYear} Ali Agro. All Rights Reserved.
          </Text>
          <HStack spacing={4} Separator={<Text mx={2}>|</Text>}>
            <Link
              href="/privacy-policy"
              _hover={{ color: linkHoverColor, textDecoration: "underline" }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              _hover={{ color: linkHoverColor, textDecoration: "underline" }}
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
