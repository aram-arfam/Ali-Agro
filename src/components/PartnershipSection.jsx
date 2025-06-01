import React from "react";
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
} from "@chakra-ui/react";
import { MapPin, BookOpen, Users, ArrowRight } from "lucide-react";

const AgriculturalVenturesItem = ({ icon, title, description }) => (
  <Flex align="start" w="full">
    <Icon
      as={icon}
      color="brand.mossGreen"
      boxSize="22px"
      mr={3}
      mt="5px" // Fine-tuning for alignment
      flexShrink={0}
    />
    <Box>
      <Text fontWeight="600" color="brand.fernGreen">
        {title}
      </Text>
      <Text fontSize="sm" color="brand.driftwood" lineHeight="1.6">
        {description}
      </Text>
    </Box>
  </Flex>
);

// --- Main Component ---
const PartnershipSection = ({
  headline = "Join Us in Spreading Wellness: Partnerships & Ventures",

  sectionBg = "brand.warmTaupe",
  ctaText = "Contact Us for Partnerships",
  onCtaClick,
  businessPharmaContent = {
    title: "For Businesses & Pharma",
    description:
      "Looking for a reliable source of high-quality, bulk Moringa powder for your products? Ali Agro offers competitive B2B pricing and consistent supply for pharmaceutical, nutraceutical, food, and cosmetic industries.",
  },
  agriculturalVenturesContent = {
    title: "Agricultural Ventures",
    quote: "We are 'By Your Side for New Agriculture Opportunities!'",
    intro: "Ali Agro also engages in:",
    items: [
      {
        id: "land-lease", // Using ID for key
        icon: MapPin,
        title: "Land Lease",
        description: "Opportunities for collaborative farming.",
      },
      {
        id: "agri-consulting",
        icon: BookOpen,
        title: "Agricultural Consulting",
        description: "Sharing our expertise in sustainable and modern farming.",
      },
      {
        id: "joint-ventures",
        icon: Users,
        title: "Joint Ventures",
        description: "Exploring innovative agricultural projects together.",
      },
    ],
  },
}) => {
  const handleCtaButtonClick = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      // Default action or log
      console.log(
        "Contact Us for Partnerships button clicked. Implement navigation or action."
      );
      // Example: window.location.href = '/contact-us';
    }
  };

  return (
    <Box as="section" py={{ base: 16, md: 24 }} bg={sectionBg}>
      <Container maxW="7xl">
        <VStack
          spacing={{ base: 4, md: 6 }}
          textAlign="center"
          mb={{ base: 10, md: 16 }}
        >
          <Heading as="h2" size="xl">
            {" "}
            {/* Consider explicit size from theme */}
            {headline}
          </Heading>
          {/* {subHeadline && (
            <Text fontSize={{ base: "md", md: "lg" }} color="brand.driftwood" maxW="2xl">
              {subHeadline}
            </Text>
          )} */}
        </VStack>

        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 8, md: 10 }}
          // alignItems="stretch" // Not needed if cards have height: "100%"
        >
          {/* Column 1: For Businesses & Pharma */}
          <Box p={{ base: 6, md: 8 }}>
            <VStack spacing={4} align="start" flexGrow={1}>
              <Heading as="h3" size="lg">
                {" "}
                {/* Consider explicit size */}
                {businessPharmaContent.title}
              </Heading>
              <Text color="brand.driftwood" lineHeight="1.7">
                {businessPharmaContent.description}
              </Text>
            </VStack>
          </Box>

          {/* Column 2: Agricultural Ventures */}
          <Box p={{ base: 6, md: 8 }}>
            <VStack spacing={5} align="start" flexGrow={1}>
              <Heading as="h3" size="lg">
                {" "}
                {/* Consider explicit size */}
                {agriculturalVenturesContent.title}
              </Heading>
              {agriculturalVenturesContent.quote && (
                <Text
                  fontWeight="500"
                  color="brand.clayBrown"
                  fontStyle="italic"
                >
                  {agriculturalVenturesContent.quote}
                </Text>
              )}
              {agriculturalVenturesContent.intro && (
                <Text color="brand.driftwood" lineHeight="1.7" pt={2}>
                  {agriculturalVenturesContent.intro}
                </Text>
              )}
              <VStack spacing={4} align="start" w="full" pt={1}>
                {agriculturalVenturesContent.items.map((item) => (
                  <AgriculturalVenturesItem
                    key={item.id} // Use unique ID
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </VStack>
            </VStack>
          </Box>
        </SimpleGrid>

        <VStack mt={{ base: 12, md: 16 }}>
          <Button
            size="lg"
            bg="brand.clayBrown"
            color="brand.ivory"
            _hover={{
              bg: "brown.600", // Assuming 'brown.600' exists in your theme.colors
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
            _active={{
              bg: "brown.700", // Assuming 'brown.700' exists
              transform: "translateY(0)",
            }}
            rightIcon={<Icon as={ArrowRight} boxSize={5} />}
            onClick={handleCtaButtonClick}
            aria-label={ctaText} // Good for accessibility if text could be ambiguous
          >
            {ctaText}
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default PartnershipSection;
