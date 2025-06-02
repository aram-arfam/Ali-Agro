import React from "react";
import { motion } from "motion/react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Button,
  Icon,
  Flex,
  HStack,
  Badge,
} from "@chakra-ui/react";
import { 
  MapPin, 
  BookOpen, 
  Users, 
  ArrowRight, 
  Building2, 
  Handshake,
  TrendingUp,
  Shield,
  Award,
  Globe,
  CheckCircle,
  Sparkles
} from "lucide-react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
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

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.95
  },
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
  hidden: { 
    opacity: 0, 
    rotate: -45,
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
    
    scale: 1.1,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: i * 0.1 + 0.2,
    },
  }),
  hover: {
    x: 8,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

const buttonVariants = {
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
      duration: 0.6,
      ease: "easeOut",
      delay: 0.4,
    },
  },
  hover: {
    scale: 1.05,
    y: -3,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
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

const sparkleVariants = {
  twinkle: {
    scale: [1, 1.2, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
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
const MotionButton = motion(Button);
const MotionSimpleGrid = motion(SimpleGrid);

const AgriculturalVenturesItem = ({ icon, title, description, index }) => (
  <MotionFlex 
    align="start" 
    w="full"
    variants={itemVariants}
    custom={index}
    whileHover="hover"
    cursor="pointer"
  >
    <MotionBox
      bg="linear-gradient(135deg, rgba(122, 132, 113, 0.1), rgba(168, 181, 160, 0.1))"
      borderRadius="lg"
      p={3}
      mr={4}
      variants={iconVariants}
      whileHover="hover"
    >
      <Icon
        as={icon}
        color="brand.mossGreen"
        boxSize="20px"
        flexShrink={0}
      />
    </MotionBox>
    <Box flex={1}>
      <MotionText 
        fontWeight="600" 
        color="brand.fernGreen"
        mb={1}
        variants={headerVariants}
      >
        {title}
      </MotionText>
      <MotionText 
        fontSize="sm" 
        color="brand.driftwood" 
        lineHeight="1.7"
        variants={headerVariants}
      >
        {description}
      </MotionText>
    </Box>
  </MotionFlex>
);

const PartnershipBenefit = ({ icon, text }) => (
  <MotionHStack
    spacing={2}
    variants={itemVariants}
    whileHover="hover"
    cursor="pointer"
  >
    <MotionIcon 
      as={icon} 
      boxSize={4} 
      color="brand.clayBrown"
      variants={iconVariants}
      whileHover="hover"
    />
    <Text fontSize="sm" color="brand.driftwood" fontWeight="500">
      {text}
    </Text>
  </MotionHStack>
);

// --- Main Component ---
const PartnershipSection = ({
  headline = "Join Us in Spreading Wellness: Partnerships & Ventures",
  sectionBg = "linear-gradient(135deg, #FEFCF7 0%, #F2E7D5 100%)",
  ctaText = "Start Your Partnership Journey",
  onCtaClick,
  businessPharmaContent = {
    title: "For Businesses & Pharma",
    subtitle: "Premium B2B Solutions",
    description: "Partner with Ali Agro for reliable, high-quality bulk Moringa powder and agricultural products. We serve pharmaceutical, nutraceutical, food, and cosmetic industries with competitive pricing and consistent supply chains.",
    benefits: [
      { icon: Shield, text: "Quality Guaranteed" },
      { icon: TrendingUp, text: "Competitive Pricing" },
      { icon: Globe, text: "Reliable Supply Chain" },
      { icon: Award, text: "Industry Certified" }
    ]
  },
  agriculturalVenturesContent = {
    title: "Agricultural Ventures",
    subtitle: "Growing Together",
    quote: "We are 'By Your Side for New Agriculture Opportunities!'",
    intro: "Ali Agro extends beyond production to create meaningful partnerships in:",
    items: [
      {
        id: "land-lease",
        icon: MapPin,
        title: "Land Lease Partnerships",
        description: "Collaborative farming opportunities with shared expertise and sustainable land management practices."
      },
      {
        id: "agri-consulting",
        icon: BookOpen,
        title: "Agricultural Consulting",
        description: "Comprehensive guidance in modern farming techniques, crop optimization, and sustainable agriculture practices."
      },
      {
        id: "joint-ventures",
        icon: Users,
        title: "Strategic Joint Ventures",
        description: "Innovative agricultural projects focusing on technology integration and market expansion."
      },
    ],
  },
}) => {
  const handleCtaButtonClick = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      console.log("Partnership inquiry initiated");
      // Example: window.location.href = '/contact-partnerships';
    }
  };

  return (
    <MotionBox 
      as="section" 
      py={{ base: 16, md: 24 }} 
      bg={sectionBg}
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
        top="15%"
        right="5%"
        width="120px"
        height="120px"
        borderRadius="full"
        bg="rgba(212, 181, 160, 0.15)"
        blur="35px"
        display={{ base: "none", md: "block" }}
        variants={decorativeVariants}
        animate="float"
      />
      <MotionBox
        position="absolute"
        bottom="25%"
        left="8%"
        width="80px"
        height="80px"
        borderRadius="full"
        bg="rgba(122, 132, 113, 0.1)"
        blur="25px"
        display={{ base: "none", md: "block" }}
        variants={{
          float: {
            y: [0, 15, 0],
            x: [0, -15, 0],
            transition: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
          },
        }}
        animate="float"
      />

      {/* Sparkle Elements */}
      <MotionIcon
        as={Sparkles}
        position="absolute"
        top="20%"
        left="12%"
        boxSize={6}
        color="brand.dustySage"
        opacity={0.6}
        variants={sparkleVariants}
        animate="twinkle"
        display={{ base: "none", lg: "block" }}
      />
      <MotionIcon
        as={Sparkles}
        position="absolute"
        bottom="35%"
        right="15%"
        boxSize={5}
        color="brand.clayBrown"
        opacity={0.4}
        variants={sparkleVariants}
        animate="twinkle"
        style={{ animationDelay: "1s" }}
        display={{ base: "none", lg: "block" }}
      />

      <Container maxW="7xl" position="relative">
        {/* Header Section */}
        <MotionVStack
          spacing={{ base: 4, md: 6 }}
          textAlign="center"
          mb={{ base: 12, md: 16 }}
          variants={containerVariants}
        >
          <MotionHStack 
            spacing={3}
            variants={headerVariants}
          >
            <MotionIcon 
              as={Handshake} 
              boxSize={8} 
              color="brand.clayBrown"
              variants={{
                shake: {
                  rotate: [0, -10, 10, -5, 5, 0],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut",
                  },
                },
              }}
              animate="shake"
            />
            <MotionHeading 
              as="h2" 
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="700"
              color="brand.fernGreen"
              letterSpacing="-0.02em"
              lineHeight="1.1"
              variants={headerVariants}
            >
              {headline}
            </MotionHeading>
          </MotionHStack>
          
          <MotionText 
            fontSize={{ base: "md", md: "lg" }} 
            color="brand.driftwood" 
            maxW="3xl"
            lineHeight="1.7"
            variants={headerVariants}
          >
            Discover how Ali Agro can be your trusted partner in sustainable agriculture and premium natural products. Together, we can create lasting impact.
          </MotionText>
        </MotionVStack>

        <MotionSimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 12 }}
          variants={containerVariants}
        >
          {/* Column 1: For Businesses & Pharma */}
          <MotionBox 
            variants={cardVariants}
            whileHover="hover"
          >
            <MotionBox
              bg="rgba(254, 252, 247, 0.8)"
              backdropFilter="blur(10px)"
              borderRadius="2xl"
              p={{ base: 6, md: 8 }}
              border="2px solid"
              borderColor="rgba(199, 210, 199, 0.3)"
              boxShadow="0 8px 32px rgba(122, 132, 113, 0.1)"
              height="100%"
              position="relative"
              overflow="hidden"
              mr={4}
              variants={cardVariants}
            >
              {/* Card Accent */}
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                height="4px"
                bg="linear-gradient(90deg, #7A8471, #A8B5A0)"
                borderTopRadius="2xl"
              />

              <MotionVStack 
                spacing={5} 
                align="start" 
                height="100%"
                variants={containerVariants}
              >
                <MotionHStack 
                  spacing={3}
                  variants={headerVariants}
                >
                  <MotionBox
                    bg="linear-gradient(135deg, #7A8471, #657A5C)"
                    borderRadius="lg"
                    p={3}
                    variants={iconVariants}
                  >
                    <Icon as={Building2} boxSize={6} color="white" />
                  </MotionBox>
                  <MotionVStack align="start" spacing={1}>
                    <MotionHeading 
                      as="h3" 
                      fontSize={{ base: "xl", md: "2xl" }}
                      fontWeight="700"
                      color="brand.fernGreen"
                      variants={headerVariants}
                    >
                      {businessPharmaContent.title}
                    </MotionHeading>
                    <Badge 
                      colorScheme="green" 
                      variant="subtle" 
                      fontSize="xs"
                      px={2}
                      py={1}
                      borderRadius="full"
                    >
                      {businessPharmaContent.subtitle}
                    </Badge>
                  </MotionVStack>
                </MotionHStack>

                <MotionText 
                  color="brand.driftwood" 
                  lineHeight="1.8"
                  fontSize={{ base: "md", md: "lg" }}
                  variants={headerVariants}
                >
                  {businessPharmaContent.description}
                </MotionText>

                <MotionVStack 
                  align="start" 
                  spacing={3} 
                  w="full"
                  variants={containerVariants}
                >
                  <MotionText 
                    fontSize="md" 
                    fontWeight="600" 
                    color="brand.fernGreen"
                    variants={headerVariants}
                  >
                    Partnership Benefits:
                  </MotionText>
                  <SimpleGrid columns={2} spacing={3} w="full">
                    {businessPharmaContent.benefits.map((benefit, index) => (
                      <PartnershipBenefit 
                        key={index} 
                        icon={benefit.icon} 
                        text={benefit.text} 
                      />
                    ))}
                  </SimpleGrid>
                </MotionVStack>
              </MotionVStack>
            </MotionBox>
          </MotionBox>

          {/* Column 2: Agricultural Ventures */}
          <MotionBox 
            variants={cardVariants}
            whileHover="hover"
          >
            <MotionBox
              bg="rgba(254, 252, 247, 0.8)"
              backdropFilter="blur(10px)"
              borderRadius="2xl"
              p={{ base: 6, md: 8 }}
              border="2px solid"
              borderColor="rgba(168, 181, 160, 0.3)"
              boxShadow="0 8px 32px rgba(168, 181, 160, 0.1)"
              height="100%"
              position="relative"
              overflow="hidden"
              variants={cardVariants}
            >
              {/* Card Accent */}
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                height="4px"
                bg="linear-gradient(90deg, #A8B5A0, #7A8471)"
                borderTopRadius="2xl"
              />

              <MotionVStack 
                spacing={5} 
                align="start" 
                height="100%"
                variants={containerVariants}
              >
                <MotionHStack 
                  spacing={3}
                  variants={headerVariants}
                >
                  <MotionBox
                    bg="linear-gradient(135deg, #A8B5A0, #8FA087)"
                    borderRadius="lg"
                    p={3}
                    variants={iconVariants}
                  >
                    <Icon as={Users} boxSize={6} color="white" />
                  </MotionBox>
                  <MotionVStack align="start" spacing={1}>
                    <MotionHeading 
                      as="h3" 
                      fontSize={{ base: "xl", md: "2xl" }}
                      fontWeight="700"
                      color="brand.fernGreen"
                      variants={headerVariants}
                    >
                      {agriculturalVenturesContent.title}
                    </MotionHeading>
                    <Badge 
                      colorScheme="teal" 
                      variant="subtle" 
                      fontSize="xs"
                      px={2}
                      py={1}
                      borderRadius="full"
                    >
                      {agriculturalVenturesContent.subtitle}
                    </Badge>
                  </MotionVStack>
                </MotionHStack>

                {agriculturalVenturesContent.quote && (
                  <MotionBox
                    bg="linear-gradient(135deg, rgba(168, 181, 160, 0.1), rgba(122, 132, 113, 0.1))"
                    borderRadius="lg"
                    p={4}
                    borderLeft="4px solid"
                    borderLeftColor="brand.mossGreen"
                    variants={cardVariants}
                  >
                    <MotionText
                      fontWeight="600"
                      color="brand.clayBrown"
                      fontStyle="italic"
                      fontSize="md"
                      variants={headerVariants}
                    >
                      "{agriculturalVenturesContent.quote}"
                    </MotionText>
                  </MotionBox>
                )}

                {agriculturalVenturesContent.intro && (
                  <MotionText 
                    color="brand.driftwood" 
                    lineHeight="1.8"
                    fontSize={{ base: "md", md: "lg" }}
                    variants={headerVariants}
                  >
                    {agriculturalVenturesContent.intro}
                  </MotionText>
                )}

                <MotionVStack 
                  spacing={4} 
                  align="start" 
                  w="full"
                  variants={containerVariants}
                >
                  {agriculturalVenturesContent.items.map((item, index) => (
                    <AgriculturalVenturesItem
                      key={item.id}
                      icon={item.icon}
                      title={item.title}
                      description={item.description}
                      index={index}
                    />
                  ))}
                </MotionVStack>
              </MotionVStack>
            </MotionBox>
          </MotionBox>
        </MotionSimpleGrid>

        {/* Enhanced CTA Section */}
        <MotionVStack 
          mt={{ base: 12, md: 16 }} 
          spacing={6}
          variants={containerVariants}
        >
          <MotionBox
            bg="linear-gradient(135deg, rgba(122, 132, 113, 0.05), rgba(168, 181, 160, 0.05))"
            borderRadius="2xl"
            p={8}
            border="2px solid"
            borderColor="rgba(199, 210, 199, 0.3)"
            textAlign="center"
            maxW="4xl"
            mx="auto"
            variants={cardVariants}
            whileHover="hover"
          >
            <MotionVStack spacing={4}>
              <MotionHeading
                fontSize={{ base: "xl", md: "2xl" }}
                color="brand.fernGreen"
                variants={headerVariants}
              >
                Ready to Partner with Ali Agro?
              </MotionHeading>
              <MotionText
                color="brand.driftwood"
                fontSize="lg"
                maxW="2xl"
                variants={headerVariants}
              >
                Let's discuss how we can create sustainable value together. Join our network of partners committed to agricultural excellence.
              </MotionText>
              <MotionButton
                size="lg"
                bg="linear-gradient(135deg, #7A8471, #657A5C)"
                color="brand.ivory"
                _hover={{
                  bg: "linear-gradient(135deg, #657A5C, #5A6B51)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 12px 24px rgba(122, 132, 113, 0.25)",
                }}
                _active={{
                  transform: "translateY(0)",
                }}
                rightIcon={<Icon as={ArrowRight} boxSize={5} />}
                onClick={handleCtaButtonClick}
                aria-label={ctaText}
                borderRadius="full"
                px={8}
                py={6}
                fontSize="lg"
                fontWeight="600"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                {ctaText}
              </MotionButton>
            </MotionVStack>
          </MotionBox>
        </MotionVStack>
      </Container>
    </MotionBox>
  );
};

export default PartnershipSection;