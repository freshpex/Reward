import {
  Avatar,
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import { colors } from '../../constants/colors';
import React from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { Input, IconButton } from '@chakra-ui/react';
import { FiSearch, FiBell, FiMenu } from 'react-icons/fi';

const Navbar = ({ onToggleSidebar }) => {
  return (
    <Box
      py="20px"
      px="10px"
      bg="#fff"
      boxShadow={'0px 0.5px 1px 0px #0000000D'}
      alignItems="center"
      position={'fixed'}
      w="full"
      zIndex={10}
    >
      <Flex align="center" justify="space-between" w="full">
        {/* Sidebar Toggle Icon for Mobile */}
        <IconButton
          icon={<FiMenu />}
          bg="transparent"
          onClick={onToggleSidebar}
          display={{ base: 'block', md: 'none' }}
        />

        <Flex align="center" w="400px" maxW="100%">
          <Input
            placeholder="Search..."
            maxWidth="400px"
            mr={2}
            borderRadius="full"
          />
          <IconButton
            icon={<FiSearch />}
            bg={colors.primary}
            color="white"
            borderRadius="full"
          />
        </Flex>

        <Spacer />

        <Flex align="center" gap="20px">
          <IconButton
            icon={<FiBell />}
            bg="transparent"
            fontSize="20px"
            color={colors.primary}
            display={{ base: 'block', md: 'block' }}
          />

          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton as={Box} cursor="pointer">
                  <Flex align="center" gap="12px">
                    <Avatar size="sm" name="Enoch Epekipolu" />
                    <Box textAlign="left">
                      <Text
                        fontSize="14px"
                        fontWeight={500}
                        color={colors.primary}
                      >
                        Enoch Epekipolu
                      </Text>
                      <Text
                        fontSize="12px"
                        fontWeight={400}
                        color={colors.black700}
                      >
                        epekipoluenoch@gmail.com
                      </Text>
                    </Box>
                    {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </Flex>
                </MenuButton>
                <MenuList>
                  <MenuItem color="red">Logout</MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
