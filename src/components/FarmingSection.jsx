import React from "react";
import { motion } from "motion/react";
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

// Create motion components
const MotionBox = motion(Box);
const MotionContainer = motion(Container);
const MotionVStack = motion(VStack);
const MotionHStack = motion(HStack);
const MotionGrid = motion(Grid);
const MotionGridItem = motion(GridItem);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionBadge = motion(Badge);
const MotionFlex = motion(Flex);

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const staggeredFadeVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const processStepVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
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
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.2,
    },
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      duration: 0.2,
    },
  },
};

const valueIconVariants = {
  hidden: { opacity: 0, scale: 0, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.15,
    y: -5,
    transition: {
      duration: 0.2,
    },
  },
};

const highlightBadgeVariants = {
  hidden: { opacity: 0, scale: 0.8, x: -20 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
    },
  },
};

const floatingVariants = {
  float: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

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
    <Box as="section">
      {/* Main Background with Alternating Colors */}
      <MotionBox
        bg="brand.warmTaupe"
        position="relative"
        overflow="hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Decorative Background Pattern */}
        <MotionBox
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          opacity="0.03"
          backgroundImage="radial-gradient(circle at 25% 25%, currentColor 2px, transparent 2px)"
          backgroundSize="60px 60px"
          color="brand.fernGreen"
          animate={{
            backgroundPosition: ["0px 0px", "60px 60px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <MotionContainer
          maxW="7xl"
          position="relative"
          py={{ base: 12, md: 16 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Header Section */}
          <MotionVStack
            spacing={6}
            textAlign="center"
            mb={{ base: 12, md: 16 }}
            variants={containerVariants}
          >
            <MotionBadge
              bg="brand.mintLeaf"
              color="brand.fernGreen"
              px={4}
              py={2}
              borderRadius="full"
              fontSize="sm"
              fontWeight="600"
              variants={staggeredFadeVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            >
              Our Farming Philosophy
            </MotionBadge>

            <MotionHeading
              as="h2"
              size={{ base: "xl", md: "2xl" }}
              color="brand.fernGreen"
              maxW="4xl"
              fontWeight="700"
              variants={fadeInUpVariants}
            >
              Rooted in Sustainability: The Ali Agro Way
            </MotionHeading>

            <MotionText
              fontSize={{ base: "lg", md: "xl" }}
              color="brand.driftwood"
              maxW="3xl"
              lineHeight="1.8"
              variants={staggeredFadeVariants}
            >
              From Seed to Spoon: Our Commitment to Quality & Nature
            </MotionText>
          </MotionVStack>

          {/* Process Steps */}
          <MotionGrid
            templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
            gap={{ base: 8, md: 12 }}
            mb={{ base: 12, md: 16 }}
            variants={containerVariants}
          >
            {processSteps.map((step, index) => (
              <MotionGridItem
                key={index}
                variants={processStepVariants}
                whileHover="hover"
              >
                <MotionBox
                  bg="brand.mist"
                  p={{ base: 6, md: 8 }}
                  borderRadius="xl"
                  boxShadow="base"
                  border="1px solid"
                  borderColor="brand.mintLeaf"
                  height="100%"
                  whileHover={{
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    borderColor: "brand.dustySage",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <VStack spacing={4} align="start" height="100%">
                    {/* Step Number & Icon */}
                    <HStack spacing={3}>
                      <MotionBox
                        bg={step.color}
                        p={3}
                        borderRadius="lg"
                        color="white"
                        variants={iconVariants}
                        whileHover="hover"
                      >
                        <Icon as={step.icon} boxSize={6} />
                      </MotionBox>
                      <MotionBadge
                        bg="brand.sandBeige"
                        color="brand.charcoal"
                        borderRadius="full"
                        px={3}
                        py={1}
                        fontSize="xs"
                        fontWeight="bold"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        Step {index + 1}
                      </MotionBadge>
                    </HStack>

                    {/* Content */}
                    <VStack spacing={3} align="start" flex="1">
                      <MotionHeading
                        as="h3"
                        size="md"
                        color="brand.fernGreen"
                        fontWeight="600"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                      >
                        {step.title}
                      </MotionHeading>
                      <MotionText
                        color="brand.driftwood"
                        lineHeight="1.7"
                        fontSize="sm"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        {step.description}
                      </MotionText>
                    </VStack>
                  </VStack>
                </MotionBox>
              </MotionGridItem>
            ))}
          </MotionGrid>
        </MotionContainer>
      </MotionBox>

      {/* Philosophy Section */}
      <MotionBox
        bg="brand.sandBeige"
        py={{ base: 12, md: 16 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <MotionContainer
          maxW="6xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <MotionVStack spacing={8} textAlign="center" variants={containerVariants}>
            <MotionVStack spacing={4} variants={staggeredFadeVariants}>
              <MotionHeading
                as="h3"
                size="lg"
                color="brand.fernGreen"
                fontWeight="600"
                variants={fadeInUpVariants}
              >
                Our Underlying Philosophy
              </MotionHeading>
              <MotionText
                fontSize={{ base: "md", md: "lg" }}
                color="brand.charcoal"
                maxW="4xl"
                lineHeight="1.8"
                fontWeight="500"
                variants={staggeredFadeVariants}
              >
                Our goal is safe food, building self-reliance in domestic
                production, and making a positive global impact through every
                packet of Moringa we produce.
              </MotionText>
            </MotionVStack>

            {/* Values Icons */}
            <MotionHStack
              spacing={{ base: 6, md: 12 }}
              flexWrap="wrap"
              justify="center"
              pt={4}
              variants={containerVariants}
            >
              {values.map((value, index) => (
                <motion.div key={index} variants={valueIconVariants} whileHover="hover">
                  <VStack spacing={3} minW="120px">
                    <MotionBox
                      bg="brand.mossGreen"
                      p={4}
                      borderRadius="full"
                      color="white"
                      variants={floatingVariants}
                      animate="float"
                      style={{ animationDelay: `${index * 0.5}s` }}
                    >
                      <Icon as={value.icon} boxSize={6} />
                    </MotionBox>
                    <Text
                      fontSize="sm"
                      color="brand.charcoal"
                      fontWeight="600"
                      textAlign="center"
                    >
                      {value.text}
                    </Text>
                  </VStack>
                </motion.div>
              ))}
            </MotionHStack>
          </MotionVStack>
        </MotionContainer>
      </MotionBox>

      {/* Feature Highlight */}
      <MotionBox
        bg="brand.mist"
        py={{ base: 8, md: 12 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <MotionContainer
          maxW="4xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <MotionFlex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="center"
            spacing={6}
            gap={6}
            variants={containerVariants}
          >
            <motion.div variants={highlightBadgeVariants} whileHover="hover">
              <Box
                bg="brand.mintLeaf"
                px={6}
                py={3}
                borderRadius="full"
                border="2px solid"
                borderColor="brand.dustySage"
              >
                <HStack spacing={3}>
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Icon as={Leaf} color="brand.fernGreen" boxSize={5} />
                  </motion.div>
                  <Text color="brand.fernGreen" fontWeight="700" fontSize="lg">
                    100% Sun-Dried Moringa Leaves
                  </Text>
                </HStack>
              </Box>
            </motion.div>

            <motion.div
              variants={highlightBadgeVariants}
              whileHover="hover"
              style={{ marginLeft: "auto" }}
            >
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
            </motion.div>
          </MotionFlex>
        </MotionContainer>
      </MotionBox>
    </Box>
  );
};

export default FarmingSection;