import { useState } from "react";
import { Box, Button, Input, VStack } from "@chakra-ui/react";

const TaskForm = ({ onSubmit, projectId }) => {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ description, projectId });
    setDescription("");
  };

  return (
    <Box as="form" onSubmit={handleSubmit} p={4} borderWidth={1} borderRadius="lg" w="full">
      <VStack spacing={4} align="start">
        <Input
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <Button type="submit" colorScheme="blue">
          Create Task
        </Button>
      </VStack>
    </Box>
  );
};

export default TaskForm;