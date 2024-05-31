import { Box, Button, VStack, HStack, Text } from "@chakra-ui/react";

const TaskList = ({ tasks, onUpdate, onDelete }) => {
  return (
    <VStack spacing={4} align="start" w="full">
      {tasks.map((task) => (
        <Box key={task.id} p={4} borderWidth={1} borderRadius="lg" w="full">
          <HStack justify="space-between">
            <Text>{task.description}</Text>
            <HStack>
              <Button colorScheme="yellow" onClick={() => onUpdate(task)}>
                Update
              </Button>
              <Button colorScheme="red" onClick={() => onDelete(task.id)}>
                Delete
              </Button>
            </HStack>
          </HStack>
        </Box>
      ))}
    </VStack>
  );
};

export default TaskList;