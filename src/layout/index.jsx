import React from 'react';
import { Box, Flex, useDisclosure } from '@chakra-ui/react';
import Sidebar from '../components/sideBar';
import Navbar from '../components/navBar';

const Layout = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex>
      <Box display={{ base: 'none', md: 'block' }}>
        <Sidebar />
      </Box>

      {/* Sidebar for Mobile (Drawer) */}
      {isOpen && <Sidebar isMobile={true} onClose={onClose} />}

      <Box flex="1" minHeight="100vh" bg="gray.50">
        <Navbar onToggleSidebar={onOpen} />

        {/* Main Content */}
        <Box p={8}>{children}</Box>
      </Box>
    </Flex>
  );
};

export default Layout;
