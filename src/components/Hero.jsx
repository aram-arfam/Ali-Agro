import React from "react";
import { motion } from "motion/react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Stack,
} from "@chakra-ui/react";
import HeroImage from "../assets/images/HeroImage.jpeg";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9, x: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { 
      duration: 1, 
      ease: "easeOut",
      delay: 0.2
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    },
  },
  hover: {
    y: -4,
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  tap: { 
    scale: 0.98,
    transition: { duration: 0.1 }
  },
};

const floatingVariants = {
  float: {
    y: [0, -20, 0],
    rotate: [0, 5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Create motion components
const MotionBox = motion(Box);
const MotionStack = motion(Stack);
const MotionVStack = motion(VStack);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionHStack = motion(HStack);
const MotionFlex = motion(Flex);
const MotionImage = motion(Image);

const Hero = () => {
  return (
    <Box bg="bg.canvas" w="100%" overflow="hidden" minH="100vh" display="flex" alignItems="center">
      <Container maxW="container.xl" py={{ base: "16", md: "24" }}>
        <MotionStack
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          direction={{ base: "column-reverse", lg: "row" }}
          spacing={{ base: "12", lg: "24" }}
          align="center"
        >
          {/* Text Content */}
          <MotionVStack
            variants={containerVariants}
            alignItems={{ base: "center", lg: "flex-start" }}
            spacing="8"
            textAlign={{ base: "center", lg: "left" }}
            flex="1"
          >
            <MotionHeading
              variants={textVariants}
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl", xl: "6xl" }}
              color="brand.fernGreen"
              lineHeight="1.1"
              fontWeight="bold"
            >
              Ali Agro: Cultivating Wellness, Naturally.
            </MotionHeading>

            <MotionText
              variants={textVariants}
              fontSize={{ base: "lg", md: "xl" }}
              color="fg.muted"
              maxW="600px"
              lineHeight="1.6"
            >
              Experience the pure power of Moringa Leaf Powder, sustainably
              grown at our farm in Alamdanga, Bangladesh. We blend traditional
              wisdom with modern biotech for natural, organic products that
              boost your immunity, energy, and overall well-being.
              Farm-to-packet, for a healthier you and a healthier planet.
            </MotionText>

            <MotionText
              variants={textVariants}
              fontSize="md"
              color="fg.subtle"
              fontStyle="italic"
              maxW="500px"
            >
              Founded by Mo Shaheen Akhter, committed to safe food and
              self-reliance.
            </MotionText>

            <MotionHStack
              variants={containerVariants}
              spacing="6"
              pt="4"
              flexWrap="wrap"
              justify={{ base: "center", lg: "flex-start" }}
            >
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Button
                  size="lg"
                  colorScheme="green"
                  px="8"
                  py="6"
                  fontSize="lg"
                  onClick={() => console.log("Learn More Clicked")}
                >
                  Discover Moringa
                </Button>
              </motion.div>

              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Button
                  variant="outline"
                  size="lg"
                  px="8"
                  py="6"
                  fontSize="lg"
                  colorScheme="green"
                  onClick={() => console.log("Explore Services Clicked")}
                >
                  Our Services
                </Button>
              </motion.div>
            </MotionHStack>
          </MotionVStack>

          {/* Image Content */}
          <MotionFlex
            variants={imageVariants}
            flex="1"
            justifyContent="center"
            alignItems="center"
            position="relative"
            w={{ base: "90%", md: "80%", lg: "full" }}
            maxW={{ base: "450px", md: "550px", lg: "full" }}
            mx="auto"
          >
            <MotionBox
              borderRadius="2xl"
              overflow="hidden"
              boxShadow="2xl"
              border="3px solid"
              borderColor="brand.mintLeaf"
              position="relative"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              transition={{ duration: 0.3 }}
            >
              <MotionImage
                src={HeroImage}
                alt="Lush Moringa leaves or Ali Agro farm"
                objectFit="cover"
                w="full"
                h="auto"
                htmlWidth="600"
                htmlHeight="400"
                fallbackSrc="https://via.placeholder.com/600x400/C7D2C7/657A5C?text=Ali+Agro+Moringa"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
            </MotionBox>

            {/* Animated decorative elements */}
            <MotionBox
              variants={floatingVariants}
              animate="float"
              display={{ base: "none", lg: "block" }}
              position="absolute"
              bottom="-30px"
              right="-30px"
              width="120px"
              height="120px"
              bg="brand.dustySage"
              borderRadius="full"
              opacity="0.4"
              zIndex="-1"
            />
            
            <MotionBox
              variants={{
                float: {
                  y: [0, 15, 0],
                  x: [0, -10, 0],
                  transition: {
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }
              }}
              animate="float"
              display={{ base: "none", md: "block" }}
              position="absolute"
              top="-20px"
              left="-20px"
              width="80px"
              height="80px"
              bg="brand.mintLeaf"
              borderRadius="full"
              opacity="0.3"
              zIndex="-1"
            />
          </MotionFlex>
        </MotionStack>
      </Container>
    </Box>
  );
};

export default Hero;