import React from "react";
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
  Image, // Added Image import
} from "@chakra-ui/react";
import { Quote } from "lucide-react";
import { Heart } from "lucide-react";
import { Leaf } from "lucide-react";
import { MapPin } from "lucide-react";
import { Users } from "lucide-react";
import { Star } from "lucide-react";

const FounderSection = () => {
  return (
    <Box
      as="section"
      py={{ base: 16, md: 24 }}
      bg="linear-gradient(135deg, #FEFCF7 0%, #F2E7D5 100%)"
      position="relative"
      overflow="hidden"
    >
      {/* Decorative Elements */}
      <Box
        position="absolute"
        top="12%"
        right="8%"
        width="100px"
        height="100px"
        borderRadius="full"
        bg="rgba(212, 181, 160, 0.2)"
        blur="25px"
        display={{ base: "none", md: "block" }}
      />
      <Box
        position="absolute"
        bottom="20%"
        left="5%"
        width="140px"
        height="140px"
        borderRadius="full"
        bg="rgba(199, 210, 199, 0.15)"
        blur="30px"
        display={{ base: "none", md: "block" }}
      />

      <Container maxW="7xl" position="relative">
        {/* Header Section */}
        <VStack spacing={6} textAlign="center" mb={12}>
          <Flex align="center" gap={3}>
            <Icon as={Heart} boxSize={7} color="brand.clayBrown" />
            <Heading
              as="h2"
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="700"
              color="brand.fernGreen"
              letterSpacing="-0.02em"
              lineHeight="1.1"
            >
              Driven by Passion
            </Heading>
            <Icon as={Heart} boxSize={7} color="brand.clayBrown" />
          </Flex>

          <Heading
            as="h3"
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight="500"
            color="brand.clayBrown"
            maxW="4xl"
          >
            Meet Md Shaheen Akhter
          </Heading>
        </VStack>

        {/* Main Content */}
        <Flex
          direction={{ base: "column", lg: "row" }}
          gap={12}
          align="center"
          maxW="6xl"
          mx="auto"
        >
          {/* Photo Section */}
          <Box flex="0 0 auto" position="relative" mb={{ base: 8, lg: 0 }}>
            {/* Decorative background circle */}
            <Box
              position="absolute"
              top="-20px"
              left="-20px"
              width="calc(100% + 40px)"
              height="calc(100% + 40px)"
              borderRadius="full"
              bg="linear-gradient(135deg, rgba(122, 132, 113, 0.1), rgba(168, 181, 160, 0.1))"
              zIndex={0}
            />

            {/* Photo placeholder - Replace with actual image */}

            {/* Title Badge */}
            <Box
              position="absolute"
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
            >
              Founder & Director
            </Box>
          </Box>

          {/* Content Section */}
          <VStack align="start" spacing={6} flex={1}>
            {/* Company Info */}
            <Box
              bg="rgba(254, 252, 247, 0.8)"
              backdropFilter="blur(10px)"
              borderRadius="xl"
              p={6}
              border="1px solid"
              borderColor="rgba(199, 210, 199, 0.3)"
              width="100%"
            >
              <HStack spacing={3} mb={3}>
                <Icon as={Leaf} boxSize={5} color="brand.mossGreen" />
                <Text fontSize="lg" fontWeight="600" color="brand.fernGreen">
                  Ali Agro Biotech Farming Enterprise
                </Text>
              </HStack>

              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="brand.driftwood"
                lineHeight="1.8"
                mb={4}
              >
                Md Shahin Akhtar, Founder & Director of Ali Agro Biotech Farming
                Enterprise, is dedicated to revolutionizing agriculture in
                Bangladesh. With a vision for sustainable practices and
                community empowerment, he leads Ali Agro in producing
                high-quality, natural products that benefit both people and the
                planet.
              </Text>

              {/* Key Points */}
              <VStack align="start" spacing={2}>
                <HStack spacing={3}>
                  <Icon as={MapPin} boxSize={4} color="brand.clayBrown" />
                  <Text fontSize="sm" color="brand.driftwood">
                    Revolutionizing Agriculture in Bangladesh
                  </Text>
                </HStack>
                <HStack spacing={3}>
                  <Icon as={Users} boxSize={4} color="brand.clayBrown" />
                  <Text fontSize="sm" color="brand.driftwood">
                    Community Empowerment & Sustainable Practices
                  </Text>
                </HStack>
                <HStack spacing={3}>
                  <Icon as={Star} boxSize={4} color="brand.clayBrown" />
                  <Text fontSize="sm" color="brand.driftwood">
                    High-Quality Natural Products
                  </Text>
                </HStack>
              </VStack>
            </Box>

            {/* Quote Section */}
            <Box
              bg="linear-gradient(135deg, rgba(122, 132, 113, 0.05), rgba(168, 181, 160, 0.05))"
              borderRadius="xl"
              p={8}
              border="2px solid"
              borderColor="brand.mintLeaf"
              borderLeft="6px solid"
              borderLeftColor="brand.mossGreen"
              position="relative"
              width="100%"
            >
              {/* Quote Icon */}
              <Icon
                as={Quote}
                boxSize={8}
                color="brand.dustySage"
                position="absolute"
                top={4}
                right={4}
                opacity={0.6}
              />

              <VStack align="start" spacing={4}>
                <Text
                  fontSize={{ base: "lg", md: "xl" }}
                  fontStyle="italic"
                  color="brand.fernGreen"
                  lineHeight="1.7"
                  fontWeight="500"
                >
                  "We believe in the power of nature to heal and nourish. At Ali
                  Agro, we're committed to bringing you the best of what our
                  land can offer, responsibly and sustainably."
                </Text>

                <HStack spacing={2}>
                  <Box width="40px" height="2px" bg="brand.clayBrown" />
                  <Text fontSize="md" fontWeight="600" color="brand.clayBrown">
                    Md Shaheen Akhter
                  </Text>
                </HStack>
              </VStack>
            </Box>
          </VStack>
        </Flex>

        {/* Bottom Accent */}
        <Box
          mt={12}
          textAlign="center"
          p={6}
          bg="rgba(212, 181, 160, 0.1)"
          borderRadius="2xl"
          border="1px solid"
          borderColor="rgba(199, 210, 199, 0.2)"
          maxW="4xl"
          mx="auto"
        >
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="brand.driftwood"
            fontStyle="italic"
          >
            Leading the way in sustainable agriculture and natural wellness
            products
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default FounderSection;
