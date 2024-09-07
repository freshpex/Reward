import React from 'react';
import { Box, Button, Text, useDisclosure } from '@chakra-ui/react';
import CashbackModal from '../../app/CashbackHistory/modal';
import { colors } from '../../constants/colors';
import { Link } from 'react-router-dom';

const MainCard = ({ title, width, height, flex, children, show, linkTo }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      border={`0.5px solid ${colors.sub}`}
      borderRadius={'10px'}
      width={width}
      height={height}
      bg="#fff"
      flex={flex}
    >
      <Box
        borderBottom={`0.5px solid ${colors.sub}`}
        p="16px"
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Text
          textTransform="capitalize"
          fontSize="16px"
          fontWeight="500"
          color={colors.primary}
        >
          {title}
        </Text>
        {show && (
          <Link to={linkTo}>
            <Button
              onClick={onOpen}
              borderColor={colors.primary}
              size="sm"
              variant={'outline'}
              _hover={{
                bg: colors.primary,
                color: '#fff',
              }}
            >
              View All
            </Button>
          </Link>
        )}
      </Box>
      <CashbackModal isOpen={isOpen} onClose={onClose} />
      <Box p="16px">{children}</Box>
    </Box>
  );
};

export default MainCard;
