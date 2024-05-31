import { Box, Heading, VStack, Text } from "@chakra-ui/react";

const Legend = () => (
  <Box p={4} borderWidth={1} borderRadius="lg" w="full">
    <Heading size="md" mb={4}>Legend</Heading>
    <VStack spacing={4} align="start">
      <Text color="orange.500">Action</Text>
      <Text color="gray.500">Entity</Text>
      <Text color="purple.500">Enum/State</Text>
      <Text color="blue.500">Run Loop / Code</Text>
    </VStack>
  </Box>
);

export default Legend;