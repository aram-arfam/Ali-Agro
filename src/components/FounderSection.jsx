import React from "react";
import { motion } from "motion/react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  Flex,
  Avatar,
  Image,
} from "@chakra-ui/react";
import { Quote } from "lucide-react";
import { Heart } from "lucide-react";
import { Leaf } from "lucide-react";
import { MapPin } from "lucide-react";
import { Users } from "lucide-react";
import { Star } from "lucide-react";

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

const headerVariants = {
  hidden: { opacity: 0, y: -40 },
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
      duration: 0.7,
      ease: "easeOut",
      delay: 0.2,
    },
  },
};

const photoVariants = {
  hidden: { 
    opacity: 0, 
    x: -60,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const contentVariants = {
  hidden: { 
    opacity: 0, 
    x: 60,
    y: 20
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.3,
    },
  },
};

const cardVariants = {
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
      duration: 0.6,
      ease: "easeOut",
    },
  },
  hover: {
    y: -5,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const quoteVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.2,
    },
  },
  hover: {
    scale: 1.02,
    boxShadow: "0 12px 32px rgba(122, 132, 113, 0.15)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const iconVariants = {
  hidden: { 
    opacity: 0, 
    rotate: -90,
    scale: 0.5
  },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  hover: {
    rotate: 15,
    scale: 1.2,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

const heartVariants = {
  beat: {
    scale: [1, 1.2, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const leafVariants = {
  sway: {
    rotate: [0, 10, -10, 0],
    y: [0, -5, 5, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const decorativeVariants = {
  float: {
    y: [0, -25, 0],
    x: [0, 15, 0],
    rotate: [0, 8, 0],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const badgeVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.5,
    },
  },
  hover: {
    scale: 1.1,
    y: -2,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

const keyPointVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: i * 0.1 + 0.3,
    },
  }),
  hover: {
    x: 5,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

const bottomAccentVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.6,
    },
  },
  hover: {
    scale: 1.02,
    y: -3,
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

const FounderSection = () => {
  const keyPoints = [
    { icon: MapPin, text: "Revolutionizing Agriculture in Bangladesh" },
    { icon: Users, text: "Community Empowerment & Sustainable Practices" },
    { icon: Star, text: "High-Quality Natural Products" },
  ];

  return (
    <MotionBox
      as="section"
      py={{ base: 16, md: 24 }}
      bg="linear-gradient(135deg, #FEFCF7 0%, #F2E7D5 100%)"
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
        top="12%"
        right="8%"
        width="100px"
        height="100px"
        borderRadius="full"
        bg="rgba(212, 181, 160, 0.2)"
        blur="25px"
        display={{ base: "none", md: "block" }}
        variants={decorativeVariants}
        animate="float"
      />
      <MotionBox
        position="absolute"
        bottom="20%"
        left="5%"
        width="140px"
        height="140px"
        borderRadius="full"
        bg="rgba(199, 210, 199, 0.15)"
        blur="30px"
        display={{ base: "none", md: "block" }}
        variants={{
          float: {
            y: [0, 20, 0],
            x: [0, -20, 0],
            rotate: [0, -10, 0],
            transition: {
              duration: 8,
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
          spacing={6} 
          textAlign="center" 
          mb={12}
          variants={containerVariants}
        >
          <MotionFlex 
            align="center" 
            gap={3}
            variants={headerVariants}
          >
            <MotionIcon 
              as={Heart} 
              boxSize={7} 
              color="brand.clayBrown"
              variants={heartVariants}
              animate="beat"
            />
            <MotionHeading
              as="h2"
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="700"
              color="brand.fernGreen"
              letterSpacing="-0.02em"
              lineHeight="1.1"
              variants={titleVariants}
            >
              Driven by Passion
            </MotionHeading>
            <MotionIcon 
              as={Heart} 
              boxSize={7} 
              color="brand.clayBrown"
              variants={heartVariants}
              animate="beat"
              style={{ animationDelay: "0.75s" }}
            />
          </MotionFlex>

          <MotionHeading
            as="h3"
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight="500"
            color="brand.clayBrown"
            maxW="4xl"
            variants={headerVariants}
          >
            Meet Md Shaheen Akhter
          </MotionHeading>
        </MotionVStack>

        {/* Main Content */}
        <MotionFlex
          direction={{ base: "column", lg: "row" }}
          gap={12}
          align="center"
          maxW="6xl"
          mx="auto"
          variants={containerVariants}
        >
          {/* Photo Section */}
          <MotionBox 
            flex="0 0 auto" 
            position="relative" 
            mb={{ base: 8, lg: 0 }}
            variants={photoVariants}
            whileHover="hover"
          >
            {/* Decorative background circle */}
            <MotionBox
              position="absolute"
              top="-20px"
              left="-20px"
              width="calc(100% + 40px)"
              height="calc(100% + 40px)"
              borderRadius="full"
              bg="linear-gradient(135deg, rgba(122, 132, 113, 0.1), rgba(168, 181, 160, 0.1))"
              zIndex={0}
              variants={{
                pulse: {
                  scale: [1, 1.05, 1],
                  opacity: [0.1, 0.2, 0.1],
                  transition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                },
              }}
              animate="pulse"
            />

            {/* Photo placeholder - Replace with actual image */}
            <MotionBox
              width="280px"
              height="380px"
              borderRadius="10px"
              // bg="linear-gradient(135deg, #C7D2C7, #A8B5A0)"
              position="relative"
              zIndex={1}
              boxShadow="0 12px 40px rgba(122, 132, 113, 0.2)"
              backgroundImage="url('/src/assets/images/Shahin.jpeg')"
              backgroundSize="cover"
              backgroundPosition="center"
              variants={{
                
                  
                  transition: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                
              }}
              animate="shimmer"
            />

            {/* Title Badge */}
            <MotionBox

              position="absolute"
              width="max-content"
              bottom="-10px"
              left="50%"
              transform="translateX(-50%)"
              bg="linear-gradient(135deg, #7A8471, #657A5C)"
              color="white"
              px={4}
              py={2}
              borderRadius="full"
              fontSize="sm"
              fontWeight="600"
              boxShadow="0 6px 20px rgba(122, 132, 113, 0.3)"
              zIndex={2}
              variants={badgeVariants}
              whileHover="hover"
            >
              Founder & Director
            </MotionBox>
          </MotionBox>

          {/* Content Section */}
          <MotionVStack 
            align="start" 
            spacing={6} 
            flex={1}
            variants={contentVariants}
          >
            {/* Company Info */}
            <MotionBox
              bg="rgba(254, 252, 247, 0.8)"
              backdropFilter="blur(10px)"
              borderRadius="xl"
              p={6}
              border="1px solid"
              borderColor="rgba(199, 210, 199, 0.3)"
              width="100%"
              variants={cardVariants}
              whileHover="hover"
            >
              <MotionHStack 
                spacing={3} 
                mb={3}
                variants={containerVariants}
              >
                <MotionIcon 
                  as={Leaf} 
                  boxSize={5} 
                  color="brand.mossGreen"
                  variants={leafVariants}
                  animate="sway"
                />
                <MotionText 
                  fontSize="lg" 
                  fontWeight="600" 
                  color="brand.fernGreen"
                  variants={headerVariants}
                >
                  Ali Agro Biotech Farming Enterprise
                </MotionText>
              </MotionHStack>

              <MotionText
                fontSize={{ base: "md", md: "lg" }}
                color="brand.driftwood"
                lineHeight="1.8"
                mb={4}
                variants={contentVariants}
              >
                Md Shahin Akhtar, Founder & Director of Ali Agro Biotech Farming
                Enterprise, is dedicated to revolutionizing agriculture in
                Bangladesh. With a vision for sustainable practices and
                community empowerment, he leads Ali Agro in producing
                high-quality, natural products that benefit both people and the
                planet.
              </MotionText>

              {/* Key Points */}
              <MotionVStack 
                align="start" 
                spacing={2}
                variants={containerVariants}
              >
                {keyPoints.map((point, index) => (
                  <MotionHStack 
                    key={index}
                    spacing={3}
                    variants={keyPointVariants}
                    custom={index}
                    whileHover="hover"
                    cursor="pointer"
                  >
                    <MotionIcon 
                      as={point.icon} 
                      boxSize={4} 
                      color="brand.clayBrown"
                      variants={iconVariants}
                      whileHover="hover"
                    />
                    <MotionText 
                      fontSize="sm" 
                      color="brand.driftwood"
                      variants={contentVariants}
                    >
                      {point.text}
                    </MotionText>
                  </MotionHStack>
                ))}
              </MotionVStack>
            </MotionBox>

            {/* Quote Section */}
            <MotionBox
              bg="linear-gradient(135deg, rgba(122, 132, 113, 0.05), rgba(168, 181, 160, 0.05))"
              borderRadius="xl"
              p={8}
              border="2px solid"
              borderColor="brand.mintLeaf"
              borderLeft="6px solid"
              borderLeftColor="brand.mossGreen"
              position="relative"
              width="100%"
              variants={quoteVariants}
              whileHover="hover"
            >
              {/* Quote Icon */}
              <MotionIcon
                as={Quote}
                boxSize={8}
                color="brand.dustySage"
                position="absolute"
                top={4}
                right={4}
                opacity={0.6}
                variants={{
                  float: {
                    y: [0, -8, 0],
                    rotate: [0, 10, 0],
                    transition: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  },
                }}
                animate="float"
              />

              <MotionVStack 
                align="start" 
                spacing={4}
                variants={containerVariants}
              >
                <MotionText
                  fontSize={{ base: "lg", md: "xl" }}
                  fontStyle="italic"
                  color="brand.fernGreen"
                  lineHeight="1.7"
                  fontWeight="500"
                  variants={contentVariants}
                >
                  "We believe in the power of nature to heal and nourish. At Ali
                  Agro, we're committed to bringing you the best of what our
                  land can offer, responsibly and sustainably."
                </MotionText>

                <MotionHStack 
                  spacing={2}
                  variants={containerVariants}
                >
                  <MotionBox 
                    width="40px" 
                    height="2px" 
                    bg="brand.clayBrown"
                    variants={{
                      expand: {
                        width: ["40px", "60px", "40px"],
                        transition: {
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      },
                    }}
                    animate="expand"
                  />
                  <MotionText 
                    fontSize="md" 
                    fontWeight="600" 
                    color="brand.clayBrown"
                    variants={contentVariants}
                  >
                    Md Shaheen Akhter
                  </MotionText>
                </MotionHStack>
              </MotionVStack>
            </MotionBox>
          </MotionVStack>
        </MotionFlex>

        {/* Bottom Accent */}
        <MotionBox
          mt={12}
          textAlign="center"
          p={6}
          bg="rgba(212, 181, 160, 0.1)"
          borderRadius="2xl"
          border="1px solid"
          borderColor="rgba(199, 210, 199, 0.2)"
          maxW="4xl"
          mx="auto"
          variants={bottomAccentVariants}
          whileHover="hover"
        >
          <MotionText
            fontSize={{ base: "md", md: "lg" }}
            color="brand.driftwood"
            fontStyle="italic"
            variants={contentVariants}
          >
            Leading the way in sustainable agriculture and natural wellness
            products
          </MotionText>
        </MotionBox>
      </Container>
    </MotionBox>
  );
};

export default FounderSection;