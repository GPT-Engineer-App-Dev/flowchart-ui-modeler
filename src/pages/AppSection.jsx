import { Box, Heading, VStack, Button } from "@chakra-ui/react";

const AppSection = () => (
  <Box p={4} borderWidth={1} borderRadius="lg" w="full">
    <Heading size="md" mb={4}>App</Heading>
    <VStack spacing={4} align="start">
      <Button colorScheme="gray" variant="solid">Project</Button>
      <Button colorScheme="blue" variant="solid">Active</Button>
      <Button colorScheme="teal" variant="solid">Add Task</Button>
      <Button colorScheme="orange" variant="solid">Change Prio</Button>
    </VStack>
  </Box>
);

export default AppSection;