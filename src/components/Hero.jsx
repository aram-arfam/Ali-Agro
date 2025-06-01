import { motion } from "framer-motion";
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
      staggerChildren: 0.2,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const buttonVariants = {
  hover: {
    y: -3,
    transition: {
      y: { duration: 0.2, ease: "easeOut" },
      backgroundColor: { duration: 0.3 },
    },
  },
  tap: { scale: 0.98 },
};

const floatingVariants = {
  float: {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Hero = () => {
  return (
    <Box bg="bg.canvas" w="100%" overflow="hidden">
      <Container maxW="container.xl" py={{ base: "16", md: "24" }}>
        <Stack
          as={motion.div}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          direction={{ base: "column-reverse", lg: "row" }}
          spacing={{ base: "12", lg: "24" }}
          align="center"
        >
          {/* Text Content */}
          <VStack
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            alignItems={{ base: "center", lg: "flex-start" }}
            spacing="6"
            textAlign={{ base: "center", lg: "left" }}
            flex="1"
          >
            <Heading
              as={motion.h1}
              variants={textVariants}
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              color="brand.fernGreen"
              lineHeight="1.2"
            >
              Ali Agro: Cultivating Wellness, Naturally.
            </Heading>

            <Text
              as={motion.p}
              variants={textVariants}
              fontSize={{ base: "lg", md: "xl" }}
              color="fg.muted"
            >
              Experience the pure power of Moringa Leaf Powder, sustainably
              grown at our farm in Alamdanga, Bangladesh. We blend traditional
              wisdom with modern biotech for natural, organic products that
              boost your immunity, energy, and overall well-being.
              Farm-to-packet, for a healthier you and a healthier planet.
            </Text>

            <Text
              as={motion.p}
              variants={textVariants}
              fontSize="md"
              color="fg.subtle"
              fontStyle="italic"
            >
              Founded by Mo Shaheen Akhter, committed to safe food and
              self-reliance.
            </Text>

            <HStack
              spacing="4"
              pt="4"
              as={motion.div}
              variants={containerVariants}
            >
              <Button
                as={motion.button}
                variants={textVariants}
                whileHover="hover"
                whileTap="tap"
                variant={buttonVariants}
                size="lg"
                onClick={() => console.log("Learn More Clicked")}
              >
                Discover Moringa
              </Button>

              <Button
                as={motion.button}
                variants={textVariants}
                whileHover="hover"
                whileTap="tap"
                variant="outline"
                size="lg"
                onClick={() => console.log("Explore Services Clicked")}
              >
                Our Services
              </Button>
            </HStack>
          </VStack>

          {/* Image Content */}
          <Flex
            as={motion.div}
            variants={imageVariants}
            flex="1"
            justifyContent="center"
            alignItems="center"
            position="relative"
            w={{ base: "80%", md: "70%", lg: "full" }}
            maxW={{ base: "400px", md: "500px", lg: "full" }}
            mx="auto"
          >
            <Box
              as={motion.div}
              initial="hidden"
              animate="visible"
              borderRadius="xl"
              overflow="hidden"
              boxShadow="xl"
              border="2px solid"
              borderColor="brand.mintLeaf"
            >
              <Image
                src={HeroImage}
                alt="Lush Moringa leaves or Ali Agro farm"
                objectFit="cover"
                htmlWidth="1000"
                htmlHeight="667"
                fallbackSrc="https://via.placeholder.com/500x350/C7D2C7/657A5C?text=Ali+Agro+Moringa"
                as={motion.img}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </Box>

            {/* Animated decorative element */}
            <Box
              as={motion.div}
              variants={floatingVariants}
              animate="float"
              display={{ base: "none", lg: "block" }}
              position="absolute"
              bottom="-20px"
              right="-20px"
              width="150px"
              height="150px"
              bg="brand.dustySage"
              borderRadius="full"
              opacity="0.3"
              zIndex="-1"
            />
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
