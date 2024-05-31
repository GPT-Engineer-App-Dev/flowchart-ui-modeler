import { Box, Heading, VStack, Button } from "@chakra-ui/react";

const TaskManager = () => (
  <Box p={4} borderWidth={1} borderRadius="lg" w="full">
    <Heading size="md" mb={4}>Task Manager</Heading>
    <VStack spacing={4} align="start">
      <Button colorScheme="gray" variant="solid">Task</Button>
      <Button colorScheme="blue" variant="solid">Active</Button>
    </VStack>
  </Box>
);

export default TaskManager;