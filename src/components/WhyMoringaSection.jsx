import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Icon,
  Flex,
} from "@chakra-ui/react";
import {
  Shield,
  Zap,
  Heart,
  Leaf,
  Sparkles,
  Activity,
  Sun,
  Star,
} from "lucide-react";

const WhyMoringaSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Immunity & Detox",
      description:
        "Rich in Antioxidants, Boosts Immunity, Helps Detoxify the Body.",
      details:
        "Shield your body from oxidative stress and support its natural cleansing processes.",
    },
    {
      icon: Zap,
      title: "Energy & Vitality",
      description:
        "A Natural Source of Energy and Vitality, Enhances Metabolism.",
      details:
        "Feel revitalized and support your body's natural energy production without jitters.",
    },
    {
      icon: Heart,
      title: "Overall Health",
      description:
        "Supports Healthy Skin, Hair, and Digestion, Controls Blood Sugar.",
      details:
        "Nourish yourself from within for radiant skin, healthy hair, balanced digestion, and stable blood sugar levels.",
    },
    {
      icon: Star,
      title: "Nutrient Powerhouse",
      description: "Packed with Essential Vitamins, Minerals, and Amino Acids.",
      details:
        "Contains vitamins A, C, E, K, B-vitamins, minerals like Calcium, Potassium, Iron, all 9 essential amino acids, and plant-based protein.",
    },
  ];

  return (
    <Box
      as="section"
      py={{ base: 16, md: 24 }}
      bg="linear-gradient(135deg, #F7F5F0 0%, #E6D7C3 100%)"
      position="relative"
      overflow="hidden"
    >
      {/* Decorative Elements */}
      <Box
        position="absolute"
        top="10%"
        right="5%"
        width="120px"
        height="120px"
        borderRadius="full"
        bg="rgba(199, 210, 199, 0.3)"
        blur="20px"
        display={{ base: "none", md: "block" }}
      />
      <Box
        position="absolute"
        bottom="15%"
        left="8%"
        width="80px"
        height="80px"
        borderRadius="full"
        bg="rgba(168, 181, 160, 0.2)"
        blur="15px"
        display={{ base: "none", md: "block" }}
      />

      <Container maxW="7xl" position="relative">
        {/* Header Section */}
        <VStack spacing={8} textAlign="center" mb={16}>
          <Flex align="center" gap={3}>
            <Icon as={Leaf} boxSize={8} color="brand.mossGreen" />
            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="700"
              color="brand.fernGreen"
              letterSpacing="-0.02em"
              lineHeight="1.1"
            >
              Moringa
            </Heading>
            <Icon as={Leaf} boxSize={8} color="brand.mossGreen" />
          </Flex>

          <Heading
            as="h3"
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight="500"
            color="brand.clayBrown"
            maxW="4xl"
          >
            Nature's Gift to Your Well-being
          </Heading>

          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color="brand.driftwood"
            maxW="3xl"
            lineHeight="1.8"
            fontWeight="400"
          >
            Often called the{" "}
            <Text as="span" fontWeight="600" color="brand.mossGreen">
              'Miracle Tree,'
            </Text>{" "}
            Moringa is one of the most nutrient-dense plants on earth. For
            centuries, it has been cherished for its remarkable health-boosting
            properties.
          </Text>
        </VStack>

        {/* Benefits Grid */}
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={8}
          maxW="6xl"
          mx="auto"
        >
          {benefits.map((benefit, index) => (
            <Box
              key={index}
              bg="rgba(254, 252, 247, 0.8)"
              backdropFilter="blur(10px)"
              borderRadius="2xl"
              p={8}
              border="1px solid"
              borderColor="rgba(199, 210, 199, 0.3)"
              boxShadow="0 8px 32px rgba(122, 132, 113, 0.1)"
              transition="all 0.3s ease"
              _hover={{
                transform: "translateY(-4px)",
                boxShadow: "0 12px 40px rgba(122, 132, 113, 0.15)",
                borderColor: "brand.dustySage",
              }}
              position="relative"
            >
              {/* Icon Background Circle */}
              <Box
                position="absolute"
                top={6}
                right={6}
                width="60px"
                height="60px"
                borderRadius="full"
                bg="linear-gradient(135deg, rgba(199, 210, 199, 0.2), rgba(168, 181, 160, 0.2))"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Icon
                  as={benefit.icon}
                  boxSize={6}
                  color="brand.mossGreen"
                  opacity={0.7}
                />
              </Box>

              <VStack align="start" spacing={4}>
                <HStack spacing={3}>
                  <Box
                    p={3}
                    borderRadius="lg"
                    bg="linear-gradient(135deg, #7A8471, #657A5C)"
                    boxShadow="0 4px 12px rgba(122, 132, 113, 0.3)"
                  >
                    <Icon as={benefit.icon} boxSize={6} color="white" />
                  </Box>
                  <Heading
                    as="h4"
                    fontSize="xl"
                    fontWeight="600"
                    color="brand.fernGreen"
                    letterSpacing="-0.01em"
                  >
                    {benefit.title}
                  </Heading>
                </HStack>

                <Text
                  fontSize="md"
                  fontWeight="500"
                  color="brand.clayBrown"
                  lineHeight="1.6"
                >
                  {benefit.description}
                </Text>

                <Text
                  fontSize="sm"
                  color="brand.driftwood"
                  lineHeight="1.7"
                  fontStyle="italic"
                >
                  {benefit.details}
                </Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>

        {/* Bottom Call-to-Action */}
        <VStack spacing={6} mt={16} textAlign="center">
          <Box
            p={8}
            bg="linear-gradient(135deg, rgba(122, 132, 113, 0.1), rgba(168, 181, 160, 0.1))"
            borderRadius="2xl"
            border="2px solid"
            borderColor="brand.mintLeaf"
            maxW="4xl"
          >
            <HStack justify="center" spacing={2} mb={4}>
              <Icon as={Sun} boxSize={6} color="brand.clayBrown" />
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="600"
                color="brand.fernGreen"
              >
                Experience the Power of Pure, Farm-Fresh Moringa
              </Text>
              <Icon as={Activity} boxSize={6} color="brand.clayBrown" />
            </HStack>
            <Text fontSize="md" color="brand.driftwood" lineHeight="1.7">
              Sustainably grown and carefully harvested to preserve maximum
              nutritional value for your health and wellness journey.
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default WhyMoringaSection;
