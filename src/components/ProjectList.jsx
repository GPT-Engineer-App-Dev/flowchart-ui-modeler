import { Box, Button, VStack, HStack, Text } from "@chakra-ui/react";

const ProjectList = ({ projects, onUpdate, onDelete }) => {
  return (
    <VStack spacing={4} align="start" w="full">
      {projects.map((project) => (
        <Box key={project.id} p={4} borderWidth={1} borderRadius="lg" w="full">
          <HStack justify="space-between">
            <Text>{project.name}</Text>
            <HStack>
              <Button colorScheme="yellow" onClick={() => onUpdate(project)}>
                Update
              </Button>
              <Button colorScheme="red" onClick={() => onDelete(project.id)}>
                Delete
              </Button>
            </HStack>
          </HStack>
        </Box>
      ))}
    </VStack>
  );
};

export default ProjectList;