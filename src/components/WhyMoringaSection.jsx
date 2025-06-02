import React from "react";
import { motion } from "motion/react";
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

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.2,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const iconVariants = {
  hidden: { 
    opacity: 0, 
    rotate: -180,
    scale: 0.5
  },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.2,
    },
  },
  hover: {
    rotate: 10,
    scale: 1.1,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

const decorativeVariants = {
  float: {
    y: [0, -20, 0],
    x: [0, 10, 0],
    rotate: [0, 5, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const leafVariants = {
  wiggle: {
    rotate: [0, 10, -10, 0],
    scale: [1, 1.1, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const callToActionVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.5,
    },
  },
  hover: {
    scale: 1.02,
    boxShadow: "0 20px 40px rgba(122, 132, 113, 0.2)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

// Create motion components
const MotionBox = motion(Box);
const MotionVStack = motion(VStack);
const MotionHStack = motion(HStack);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionFlex = motion(Flex);
const MotionIcon = motion(Icon);
const MotionSimpleGrid = motion(SimpleGrid);

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
    <MotionBox
      as="section"
      py={{ base: 16, md: 24 }}
      bg="linear-gradient(135deg, #F7F5F0 0%, #E6D7C3 100%)"
      position="relative"
      overflow="hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Animated Decorative Elements */}
      <MotionBox
        position="absolute"
        top="10%"
        right="5%"
        width="120px"
        height="120px"
        borderRadius="full"
        bg="rgba(199, 210, 199, 0.3)"
        blur="20px"
        display={{ base: "none", md: "block" }}
        variants={decorativeVariants}
        animate="float"
      />
      <MotionBox
        position="absolute"
        bottom="15%"
        left="8%"
        width="80px"
        height="80px"
        borderRadius="full"
        bg="rgba(168, 181, 160, 0.2)"
        blur="15px"
        display={{ base: "none", md: "block" }}
        variants={{
          float: {
            y: [0, 15, 0],
            x: [0, -15, 0],
            rotate: [0, -8, 0],
            transition: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
          },
        }}
        animate="float"
      />

      <Container maxW="7xl" position="relative">
        {/* Header Section */}
        <MotionVStack
          spacing={8}
          textAlign="center"
          mb={16}
          variants={containerVariants}
        >
          <MotionFlex
            align="center"
            gap={3}
            variants={headerVariants}
          >
            <MotionIcon 
              as={Leaf} 
              boxSize={8} 
              color="brand.mossGreen"
              variants={leafVariants}
              animate="wiggle"
            />
            <MotionHeading
              as="h2"
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="700"
              color="brand.fernGreen"
              letterSpacing="-0.02em"
              lineHeight="1.1"
              variants={titleVariants}
            >
              Moringa
            </MotionHeading>
            <MotionIcon 
              as={Leaf} 
              boxSize={8} 
              color="brand.mossGreen"
              variants={leafVariants}
              animate="wiggle"
              style={{ animationDelay: "1.5s" }}
            />
          </MotionFlex>

          <MotionHeading
            as="h3"
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight="500"
            color="brand.clayBrown"
            maxW="4xl"
            variants={textVariants}
          >
            Nature's Gift to Your Well-being
          </MotionHeading>

          <MotionText
            fontSize={{ base: "lg", md: "xl" }}
            color="brand.driftwood"
            maxW="3xl"
            lineHeight="1.8"
            fontWeight="400"
            variants={textVariants}
          >
            Often called the{" "}
            <Text as="span" fontWeight="600" color="brand.mossGreen">
              'Miracle Tree,'
            </Text>{" "}
            Moringa is one of the most nutrient-dense plants on earth. For
            centuries, it has been cherished for its remarkable health-boosting
            properties.
          </MotionText>
        </MotionVStack>

        {/* Benefits Grid */}
        <MotionSimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={8}
          maxW="6xl"
          mx="auto"
          variants={containerVariants}
        >
          {benefits.map((benefit, index) => (
            <MotionBox
              key={index}
              bg="rgba(254, 252, 247, 0.8)"
              backdropFilter="blur(10px)"
              borderRadius="2xl"
              p={10}
              mb={4}
              mr={4}
              border="1px solid"
              borderColor="rgba(199, 210, 199, 0.3)"
              boxShadow="0 8px 32px rgba(122, 132, 113, 0.1)"
              position="relative"
              variants={cardVariants}
              whileHover="hover"
              custom={index}
            >
              <VStack align="center" spacing={4}>
                <MotionHStack 
                  spacing={3}
                  variants={containerVariants}
                >
                  <MotionBox
                    p={3}
                    borderRadius="lg"
                    bg="linear-gradient(135deg, #7A8471, #657A5C)"
                    boxShadow="0 4px 12px rgba(122, 132, 113, 0.3)"
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <MotionIcon 
                      as={benefit.icon} 
                      boxSize={6} 
                      color="white"
                      variants={iconVariants}
                    />
                  </MotionBox>
                  <MotionHeading
                    as="h4"
                    fontSize="xl"
                    fontWeight="600"
                    color="brand.fernGreen"
                    letterSpacing="-0.01em"
                    variants={textVariants}
                  >
                    {benefit.title}
                  </MotionHeading>
                </MotionHStack>

                <MotionText
                  fontSize="md"
                  fontWeight="500"
                  color="brand.clayBrown"
                  lineHeight="1.6"
                  variants={textVariants}
                >
                  {benefit.description}
                </MotionText>

                <MotionText
                  fontSize="sm"
                  color="brand.driftwood"
                  lineHeight="1.7"
                  fontStyle="italic"
                  variants={textVariants}
                >
                  {benefit.details}
                </MotionText>
              </VStack>
            </MotionBox>
          ))}
        </MotionSimpleGrid>

        {/* Bottom Call-to-Action */}
        <MotionVStack 
          spacing={6} 
          mt={16} 
          textAlign="center"
          variants={containerVariants}
        >
          <MotionBox
            p={8}
            bg="linear-gradient(135deg, rgba(122, 132, 113, 0.1), rgba(168, 181, 160, 0.1))"
            borderRadius="2xl"
            border="2px solid"
            borderColor="brand.mintLeaf"
            maxW="4xl"
            variants={callToActionVariants}
            whileHover="hover"
          >
            <MotionHStack 
              justify="center" 
              spacing={2} 
              mb={4}
              variants={containerVariants}
            >
              <MotionIcon 
                as={Sun} 
                boxSize={6} 
                color="brand.clayBrown"
                variants={{
                  rotate: {
                    rotate: [0, 360],
                    transition: {
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    },
                  },
                }}
                animate="rotate"
              />
              <MotionText
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="600"
                color="brand.fernGreen"
                variants={textVariants}
              >
                Experience the Power of Pure, Farm-Fresh Moringa
              </MotionText>
              <MotionIcon 
                as={Activity} 
                boxSize={6} 
                color="brand.clayBrown"
                variants={{
                  pulse: {
                    scale: [1, 1.2, 1],
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  },
                }}
                animate="pulse"
              />
            </MotionHStack>
            <MotionText 
              fontSize="md" 
              color="brand.driftwood" 
              lineHeight="1.7"
              variants={textVariants}
            >
              Sustainably grown and carefully harvested to preserve maximum
              nutritional value for your health and wellness journey.
            </MotionText>
          </MotionBox>
        </MotionVStack>
      </Container>
    </MotionBox>
  );
};

export default WhyMoringaSection;