import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Grid,
  GridItem,
  Icon,
  Badge,
  Flex,
} from "@chakra-ui/react";
import { Leaf, Sun, Package, Sprout, Heart, Shield, Globe } from "lucide-react";

const FarmingSection = () => {
  const processSteps = [
    {
      icon: Sprout,
      title: "Cultivation with Care",
      description:
        "We employ modern, sustainable agricultural practices, including biotechnological insights, to grow vibrant Moringa trees without harmful pesticides or chemicals. Our focus is on soil health and biodiversity.",
      color: "brand.mossGreen",
    },
    {
      icon: Sun,
      title: "Harvesting & Sun-Drying",
      description:
        "Leaves are hand-picked at their peak nutrient value and gently sun-dried, preserving their natural goodness and vibrant green color.",
      color: "brand.clayBrown",
    },
    {
      icon: Package,
      title: "Milling & Packaging",
      description:
        "The dried leaves are carefully milled into a fine powder and hygienically packed by Ali Agro Farming Enterprise, ensuring you receive the purest product.",
      color: "brand.fernGreen",
    },
  ];

  const values = [
    {
      icon: Shield,
      text: "Safe Food Production",
    },
    {
      icon: Heart,
      text: "Building Self-Reliance",
    },
    {
      icon: Globe,
      text: "Positive Global Impact",
    },
  ];

  return (
    <Box as="section" py={{ base: 16, md: 24 }}>
      {/* Main Background with Alternating Colors */}
      <Box bg="brand.warmTaupe" position="relative" overflow="hidden">
        {/* Decorative Background Pattern */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          opacity="0.03"
          backgroundImage="radial-gradient(circle at 25% 25%, currentColor 2px, transparent 2px)"
          backgroundSize="60px 60px"
          color="brand.fernGreen"
        />

        <Container maxW="7xl" position="relative" py={{ base: 12, md: 16 }}>
          {/* Header Section */}
          <VStack spacing={6} textAlign="center" mb={{ base: 12, md: 16 }}>
            <Badge
              bg="brand.mintLeaf"
              color="brand.fernGreen"
              px={4}
              py={2}
              borderRadius="full"
              fontSize="sm"
              fontWeight="600"
            >
              Our Farming Philosophy
            </Badge>

            <Heading
              as="h2"
              size={{ base: "xl", md: "2xl" }}
              color="brand.fernGreen"
              maxW="4xl"
              fontWeight="700"
            >
              Rooted in Sustainability: The Ali Agro Way
            </Heading>

            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="brand.driftwood"
              maxW="3xl"
              lineHeight="1.8"
            >
              From Seed to Spoon: Our Commitment to Quality & Nature
            </Text>
          </VStack>

          {/* Process Steps */}
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
            gap={{ base: 8, md: 12 }}
            mb={{ base: 12, md: 16 }}
          >
            {processSteps.map((step, index) => (
              <GridItem key={index}>
                <Box
                  bg="brand.mist"
                  p={{ base: 6, md: 8 }}
                  borderRadius="xl"
                  boxShadow="base"
                  border="1px solid"
                  borderColor="brand.mintLeaf"
                  transition="all 0.3s ease"
                  _hover={{
                    transform: "translateY(-4px)",
                    boxShadow: "lg",
                    borderColor: "brand.dustySage",
                  }}
                  height="100%"
                >
                  <VStack spacing={4} align="start" height="100%">
                    {/* Step Number & Icon */}
                    <HStack spacing={3}>
                      <Box
                        bg={step.color}
                        p={3}
                        borderRadius="lg"
                        color="white"
                      >
                        <Icon as={step.icon} boxSize={6} />
                      </Box>
                      <Badge
                        bg="brand.sandBeige"
                        color="brand.charcoal"
                        borderRadius="full"
                        px={3}
                        py={1}
                        fontSize="xs"
                        fontWeight="bold"
                      >
                        Step {index + 1}
                      </Badge>
                    </HStack>

                    {/* Content */}
                    <VStack spacing={3} align="start" flex="1">
                      <Heading
                        as="h3"
                        size="md"
                        color="brand.fernGreen"
                        fontWeight="600"
                      >
                        {step.title}
                      </Heading>
                      <Text
                        color="brand.driftwood"
                        lineHeight="1.7"
                        fontSize="sm"
                      >
                        {step.description}
                      </Text>
                    </VStack>
                  </VStack>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Philosophy Section */}
      <Box bg="brand.sandBeige" py={{ base: 12, md: 16 }}>
        <Container maxW="6xl">
          <VStack spacing={8} textAlign="center">
            <VStack spacing={4}>
              <Heading
                as="h3"
                size="lg"
                color="brand.fernGreen"
                fontWeight="600"
              >
                Our Underlying Philosophy
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="brand.charcoal"
                maxW="4xl"
                lineHeight="1.8"
                fontWeight="500"
              >
                Our goal is safe food, building self-reliance in domestic
                production, and making a positive global impact through every
                packet of Moringa we produce.
              </Text>
            </VStack>

            {/* Values Icons */}
            <HStack
              spacing={{ base: 6, md: 12 }}
              flexWrap="wrap"
              justify="center"
              pt={4}
            >
              {values.map((value, index) => (
                <VStack key={index} spacing={3} minW="120px">
                  <Box
                    bg="brand.mossGreen"
                    p={4}
                    borderRadius="full"
                    color="white"
                  >
                    <Icon as={value.icon} boxSize={6} />
                  </Box>
                  <Text
                    fontSize="sm"
                    color="brand.charcoal"
                    fontWeight="600"
                    textAlign="center"
                  >
                    {value.text}
                  </Text>
                </VStack>
              ))}
            </HStack>
          </VStack>
        </Container>
      </Box>

      {/* Feature Highlight */}
      <Box bg="brand.mist" py={{ base: 8, md: 12 }}>
        <Container maxW="4xl">
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="center"
            spacing={6}
            gap={6}
          >
            <Box
              bg="brand.mintLeaf"
              px={6}
              py={3}
              borderRadius="full"
              border="2px solid"
              borderColor="brand.dustySage"
            >
              <HStack spacing={3}>
                <Icon as={Leaf} color="brand.fernGreen" boxSize={5} />
                <Text color="brand.fernGreen" fontWeight="700" fontSize="lg">
                  100% Sun-Dried Moringa Leaves
                </Text>
              </HStack>
            </Box>

            <Box
              bg="brand.dustyRose"
              px={6}
              py={3}
              borderRadius="full"
              border="2px solid"
              borderColor="brand.clayBrown"
            >
              <Text color="brand.charcoal" fontWeight="700" fontSize="lg">
                Modern Biotechnological Farming
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default FarmingSection;
