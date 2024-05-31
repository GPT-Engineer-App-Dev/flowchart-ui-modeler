import { Box, Heading, VStack, Button } from "@chakra-ui/react";

const AttemptExplorationRunner = () => (
  <Box p={4} borderWidth={1} borderRadius="lg" w="full">
    <Heading size="md" mb={4}>Attempt-Exploration-Runner</Heading>
    <VStack spacing={4} align="start">
      <Button colorScheme="gray" variant="solid">Attempt</Button>
      <Button colorScheme="blue" variant="solid">Refinement</Button>
      <Button colorScheme="teal" variant="solid">Outcome</Button>
    </VStack>
  </Box>
);

export default AttemptExplorationRunner;