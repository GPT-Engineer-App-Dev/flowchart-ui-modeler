import { Box, Heading, VStack, Text } from "@chakra-ui/react";

const MainChatThreads = () => (
  <Box p={4} borderWidth={1} borderRadius="lg" w="full">
    <Heading size="md" mb={4}>Main Chat Threads</Heading>
    <VStack spacing={4} align="start">
      <Text>Mention task in chat with #task-slug</Text>
      <Text>Add a login button</Text>
      <Text>Queued the #login-button task! Do you want it to be functional?</Text>
      <Text>Reply to #add-about-page: Yes, have close button.</Text>
      <Text>Noted! BTW, added some suggested tasks, please accept them if they look interesting!</Text>
      <Text>Also, #like-button should be green now! Please review!</Text>
    </VStack>
  </Box>
);

export default MainChatThreads;