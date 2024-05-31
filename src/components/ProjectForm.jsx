import { useState } from "react";
import { Box, Button, Input, VStack } from "@chakra-ui/react";

const ProjectForm = ({ onSubmit }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name });
    setName("");
  };

  return (
    <Box as="form" onSubmit={handleSubmit} p={4} borderWidth={1} borderRadius="lg" w="full">
      <VStack spacing={4} align="start">
        <Input
          placeholder="Project Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Button type="submit" colorScheme="blue">
          Create Project
        </Button>
      </VStack>
    </Box>
  );
};

export default ProjectForm;