import React from "react";
import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Badge,
  Image,
  Flex,
  Icon, // Import Chakra's Icon component
} from "@chakra-ui/react";
import product_img from "../assets/images/product_img.png";

// Import Lucid React icons
import {
  Leaf,
  Award,
  ShieldCheck,
  PackageCheck,
  Blend,
  ShoppingCart, // Example for Shop Now button
  Eye, // Example for View Details button
} from "lucide-react";

const MoringaProductSection = () => {
  const features = [
    {
      icon: Leaf,
      text: "Sustainably Grown in Alamdanga, Chuadanga, Bangladesh",
    },
    {
      icon: Award,
      text: "Single Origin, Farm-Direct",
    },
    {
      icon: ShieldCheck,
      text: "No Additives, No Preservatives, No Fillers",
    },
    {
      icon: PackageCheck,
      text: "Carefully Harvested and Processed to Retain Maximum Nutrients",
    },
    {
      icon: Blend,
      text: "Fine, easily-miscible powder for your smoothies, teas, meals, and more",
    },
  ];

  const sizes = ["100g", "250g", "500g", "1kg"];

  // Consistent icon styling for features
  const featureIconProps = {
    boxSize: "22px", // Equivalent to ~5.5 in theme spacing if 1 unit = 4px
    color: "brand.fernGreen", // Using a theme color
    strokeWidth: "2.5px", // Lucid icon specific prop, passed down
  };

  return (
    <Box
      bg="brand.sandBeige"
      py={{ base: 16, md: 20 }}
      position="relative"
      overflow="hidden"
    >
      {/* Subtle background pattern */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity="0.03"
        backgroundImage="radial-gradient(circle at 2px 2px, brand.mossGreen 1px, transparent 0)"
        backgroundSize="40px 40px"
        zIndex={0}
      />

      <Container maxW="7xl" position="relative" zIndex={1}>
        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          gap={{ base: 12, lg: 16 }}
          alignItems="center"
        >
          {/* Left Side - Image */}
          <GridItem>
            <Box position="relative">
              <Box
                bg="brand.ivory"
                borderRadius="2xl"
                p={{ base: 6, md: 8 }}
                boxShadow="2xl"
                border="2px solid"
                borderColor="brand.mintLeaf"
                transform="rotate(-2deg)"
                transition="all 0.3s ease"
                _hover={{
                  transform: "rotate(0deg) scale(1.02)",
                }}
              >
                <Image
                  src={product_img}
                  alt="Ali Agro Moringa Leaf Powder packaging with bowl of powder and fresh moringa leaves"
                  borderRadius="xl"
                  w="100%"
                  maxH="450px" // Adjusted for consistency
                  objectFit="cover"
                  filter="brightness(1.05) contrast(1.03)" // Slightly adjusted
                />
              </Box>

              <Badge
                position="absolute"
                top={{ base: "-15px", md: "-10px" }}
                right={{ base: "-15px", md: "-10px" }}
                bg="brand.clayBrown"
                color="white"
                px={4}
                py={2}
                borderRadius="full"
                fontSize="sm"
                fontWeight="600"
                boxShadow="lg"
                transform="rotate(15deg)"
              >
                100% Natural
              </Badge>

              <Box
                position="absolute"
                bottom={{ base: "-20px", md: "-15px" }}
                left={{ base: "-20px", md: "-15px" }}
                w={{ base: "50px", md: "60px" }}
                h={{ base: "50px", md: "60px" }}
                bg="brand.mossGreen"
                borderRadius="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
                boxShadow="xl"
              >
                <Icon
                  as={Leaf}
                  color="white"
                  boxSize={{ base: 6, md: 8 }} // ~24px on base, 32px on md
                  strokeWidth="2.5px"
                />
              </Box>
            </Box>
          </GridItem>

          {/* Right Side - Content */}
          <GridItem>
            <VStack align="flex-start" spacing={8}>
              <Box>
                <Heading
                  as="h2"
                  fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} // Responsive font size
                  color="brand.fernGreen"
                  lineHeight="1.2"
                  mb={4}
                  fontWeight="700"
                >
                  Ali Agro Moringa Leaf Powder:
                  <Text
                    as="span"
                    color="brand.clayBrown"
                    display="block"
                    mt={1}
                  >
                    Pure, Potent, Perfect.
                  </Text>
                </Heading>

                <Text
                  fontSize={{ base: "lg", md: "xl" }}
                  color="brand.mossGreen"
                  fontWeight="600"
                  fontStyle="italic"
                  mb={3}
                >
                  From Our Fields, To Your Spoon: The Ali Agro Promise
                </Text>

                <Badge
                  bg="brand.mintLeaf"
                  color="brand.fernGreen"
                  px={4}
                  py={2}
                  borderRadius="full"
                  fontSize={{ base: "sm", md: "md" }}
                  fontWeight="600"
                >
                  100% Natural & Organic. Sun-Dried.
                </Badge>
              </Box>

              <Box w="100%">
                <Heading
                  as="h3"
                  fontSize={{ base: "xl", md: "2xl" }}
                  color="brand.fernGreen"
                  mb={6}
                  fontWeight="600"
                >
                  Why Choose Our Moringa?
                </Heading>

                <VStack spacing={4} align="stretch">
                  {features.map((feature, index) => (
                    <HStack key={index} align="flex-start" spacing={3}>
                      <Flex
                        align="center"
                        justify="center"
                        bg="brand.dustySage"
                        p={2.5} // Adjusted padding
                        borderRadius="lg" // Softer rounding
                        minW="44px" // Consistent size
                        h="44px"
                        mt={0.5}
                      >
                        <Icon as={feature.icon} {...featureIconProps} />
                      </Flex>
                      <Text
                        fontSize={{ base: "md", lg: "lg" }}
                        color="brand.charcoal"
                        fontWeight="500"
                        lineHeight="1.6"
                        pt={1.5} // Align text better with icon center
                      >
                        {feature.text}
                      </Text>
                    </HStack>
                  ))}
                </VStack>
              </Box>

              <Box w="100%">
                <Text
                  fontSize={{ base: "md", lg: "lg" }}
                  color="brand.fernGreen"
                  fontWeight="600"
                  mb={3}
                >
                  Available Sizes (Net Weight):
                </Text>
                <HStack spacing={3} flexWrap="wrap">
                  {sizes.map((size, index) => (
                    <Badge
                      key={index}
                      bg="brand.mist"
                      color="brand.charcoal"
                      px={3}
                      py={1.5}
                      borderRadius="md"
                      fontSize="sm"
                      fontWeight="600"
                      border="1px solid"
                      borderColor="brand.mushroom"
                    >
                      {size}
                    </Badge>
                  ))}
                </HStack>
              </Box>

              <Flex gap={4} flexWrap="wrap" w="100%">
                <Button
                  size="lg"
                  bg="brand.clayBrown"
                  color="brand.ivory"
                  px={{ base: 6, md: 8 }}
                  py={6} // Height consistency
                  fontSize={{ base: "md", lg: "lg" }}
                  fontWeight="600"
                  borderRadius="xl"
                  boxShadow="lg"
                  _hover={{
                    bg: "brand.driftwood",
                    transform: "translateY(-2px)",
                    boxShadow: "xl",
                  }}
                  _active={{
                    transform: "translateY(0)",
                  }}
                  leftIcon={<Icon as={ShoppingCart} boxSize={5} />} // Added icon
                  flexGrow={{ base: 1, sm: 0 }} // Full width on small screens
                >
                  Shop Now
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  borderColor="brand.clayBrown"
                  color="brand.clayBrown"
                  px={{ base: 6, md: 8 }}
                  py={6} // Height consistency
                  fontSize={{ base: "md", lg: "lg" }}
                  fontWeight="600"
                  borderRadius="xl"
                  borderWidth="2px"
                  _hover={{
                    bg: "brand.mintLeaf",
                    borderColor: "brand.fernGreen",
                    color: "brand.fernGreen",
                  }}
                  leftIcon={<Icon as={Eye} boxSize={5} />} // Added icon
                  flexGrow={{ base: 1, sm: 0 }} // Full width on small screens
                >
                  View Product Details
                </Button>
              </Flex>

              <HStack
                spacing={{ base: 4, md: 6 }}
                pt={4}
                w="100%"
                justify="space-around"
              >
                <VStack spacing={0.5} textAlign="center">
                  <Text
                    fontSize={{ base: "xl", md: "2xl" }}
                    fontWeight="700"
                    color="brand.mossGreen"
                  >
                    100%
                  </Text>
                  <Text fontSize="sm" color="brand.driftwood">
                    Organic
                  </Text>
                </VStack>
                <VStack spacing={0.5} textAlign="center">
                  <Text
                    fontSize={{ base: "xl", md: "2xl" }}
                    fontWeight="700"
                    color="brand.mossGreen"
                  >
                    Farm
                  </Text>
                  <Text fontSize="sm" color="brand.driftwood">
                    Direct
                  </Text>
                </VStack>
                <VStack spacing={0.5} textAlign="center">
                  <Text
                    fontSize={{ base: "xl", md: "2xl" }}
                    fontWeight="700"
                    color="brand.mossGreen"
                  >
                    Zero
                  </Text>
                  <Text fontSize="sm" color="brand.driftwood">
                    Additives
                  </Text>
                </VStack>
              </HStack>
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default MoringaProductSection;
