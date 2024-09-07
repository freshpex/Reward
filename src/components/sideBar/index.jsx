import React, { useState } from 'react';
import {
  Box,
  Text,
  IconButton,
  VStack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  useDisclosure,
} from '@chakra-ui/react';
import { FiHome, FiActivity, FiCreditCard } from 'react-icons/fi';
import { colors } from '../../constants/colors';

const Sidebar = ({ isMobile, onClose }) => {
  const [activeTab, setActiveTab] = useState('Overview');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    if (isMobile) onClose();
  };

  const sidebarContent = (
    <VStack spacing={4} align="start" width="100%" mt={12}>
      <Box
        bg={activeTab === 'Overview' ? colors.primary : 'transparent'}
        color={activeTab === 'Overview' ? colors.text : colors.primary}
        width="100%"
        p={2}
        borderRadius="md"
        onClick={() => handleTabClick('Overview')}
        cursor="pointer"
      >
        <Text fontSize="lg" fontWeight="bold">
          <IconButton
            icon={<FiHome size="24px" />}
            mr={2}
            bg="transparent"
            _hover={{ bg: 'transparent' }}
          />
          Overview
        </Text>
      </Box>

      <Box
        color={activeTab === 'Dashboard' ? colors.text : colors.primary}
        bg={activeTab === 'Dashboard' ? colors.primary : 'transparent'}
        width="100%"
        p={2}
        borderRadius="md"
        onClick={() => handleTabClick('Dashboard')}
        cursor="pointer"
      >
        <Text fontSize="lg" fontWeight="bold">
          <IconButton
            icon={<FiActivity size="24px" />}
            mr={2}
            bg="transparent"
            _hover={{ bg: 'transparent' }}
          />
          Dashboard
        </Text>
      </Box>

      <Box
        color={activeTab === 'Cards' ? colors.text : colors.primary}
        bg={activeTab === 'Cards' ? colors.primary : 'transparent'}
        width="100%"
        p={2}
        borderRadius="md"
        onClick={() => handleTabClick('Cards')}
        cursor="pointer"
      >
        <Text fontSize="lg" fontWeight="bold">
          <IconButton
            icon={<FiCreditCard size="24px" />}
            mr={2}
            bg="transparent"
            _hover={{ bg: 'transparent' }}
          />
          Cards
        </Text>
      </Box>
    </VStack>
  );

  return isMobile ? (
    <Drawer isOpen={isMobile} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerBody>{sidebarContent}</DrawerBody>
      </DrawerContent>
    </Drawer>
  ) : (
    <Box bg={colors.sub} minHeight="100vh" width="250px" color="white" p={4}>
      {sidebarContent}
    </Box>
  );
};

export default Sidebar;
