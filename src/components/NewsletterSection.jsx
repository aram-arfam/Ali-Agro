import React, { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Input,
  Button,
  Flex,
  VStack,
} from "@chakra-ui/react";
import { Mail } from "lucide-react"; // Optional icon for the input

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email) {
      return;
    }
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Subscribing email:", email);
    // Reset email field and loading state
    setEmail("");
    setIsLoading(false);

    // TODO: Replace with actual newsletter subscription logic
  };

  // Using a darker green from your brand palette for the background
  const sectionBg = "brand.fernGreen"; // A darker shade of your green
  // Or for a darker brown: const sectionBg = "brown.700";

  // Text color that contrasts well with the dark background
  const textColor = "brand.ivory"; // Lightest background color, good for text on dark BG
  const textMutedColor = "brand.sandBeige"; // Slightly less prominent text

  return (
    <Box as="section" bg={sectionBg} py={{ base: 16, md: 20 }}>
      <Container maxW={{ base: "xl", md: "2xl" }} textAlign="center">
        <VStack spacing={6}>
          <Heading
            as="h2"
            color={textColor}
            fontSize={{ base: "2xl", md: "3xl" }}
          >
            Stay Connected & Get a Taste of Wellness!
          </Heading>

          <Text
            color={textMutedColor}
            fontSize={{ base: "md", md: "lg" }}
            maxW="lg"
            mx="auto"
          >
            Sign up for the Ali Agro newsletter for exclusive offers, health
            tips, recipes, and updates from our farm.
          </Text>

          <Flex
            as="form"
            onSubmit={handleSubmit}
            direction={{ base: "column", sm: "row" }} // Stack on very small, row on sm+
            gap={3}
            w="full"
            maxW="md" // Max width for the form itself
            mx="auto" // Center the form
            mt={4}
          >
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email address for newsletter"
              // Styles to ensure good contrast and usability on the dark background
              // The theme's input recipe uses 'bg.subtle' (brand.ivory) which is good here
              // We might want to ensure border colors are visible too.
              bg="brand.ivory" // Explicitly ensuring light background for input
              color="brand.charcoal" // Dark text for readability
              borderColor="brand.dustySage" // A visible border from your theme
              _placeholder={{ color: "brand.driftwood" }} // Placeholder color
              _hover={{
                borderColor: "brand.mossGreen", // Hover border color
              }}
              _focusVisible={{
                borderColor: "brand.mossGreen", // Focus border color (from theme recipe)
              }}
              flexGrow={1} // Allows input to take available space
              size="lg" // Make input a bit larger
            />
            <Button
              type="submit"
              isLoading={isLoading}
              // Using earthy brown for the button, as it contrasts well with fernGreen BG
              bg="brand.clayBrown"
              color="brand.ivory" // Light text on brown button
              _hover={{
                bg: "brown.600", // Darker brown from your theme's scale
                transform: "translateY(-1px)",
                boxShadow: "md",
              }}
              _active={{
                bg: "brown.700",
                transform: "translateY(0)",
              }}
              size="lg" // Match input size
              px={8} // More padding for a prominent button
              w={{ base: "full", sm: "auto" }} // Full width on base, auto on sm+
            >
              Subscribe
            </Button>
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
};

// This is needed if you want to directly access theme values for boxShadow like in the example
// Otherwise, Chakra's _focusVisible should handle it with theme tokens.
// You'd typically get `customTheme` from your main theme file.
// For this component, if `customTheme` is not directly in scope,
// the default theme recipe for input's _focusVisible will apply.
// If you have access to your theme object here:
// import customTheme from './path-to-your-theme-file';

export default NewsletterSection;
