import { Box, Flex, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <Box bg="gray.800" color="white" px={4}>
    <Flex h={16} alignItems="center" justifyContent="space-between">
      <Box>Flowchart UI</Box>
      <Flex alignItems="center">
        <NavLink to="/" style={{ marginRight: '10px' }}>Home</NavLink>
        <NavLink to="/app-section" style={{ marginRight: '10px' }}>App Section</NavLink>
        <NavLink to="/task-manager" style={{ marginRight: '10px' }}>Task Manager</NavLink>
        <NavLink to="/attempt-exploration-runner" style={{ marginRight: '10px' }}>Attempt-Exploration-Runner</NavLink>
        <NavLink to="/legend" style={{ marginRight: '10px' }}>Legend</NavLink>
        <NavLink to="/main-chat-threads" style={{ marginRight: '10px' }}>Main Chat Threads</NavLink>
      </Flex>
    </Flex>
  </Box>
);

export default Navbar;