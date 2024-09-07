import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import CashBackOptions from '../../app/CashBackOptions';
import styles from '../styles.module.css';
import { colors } from '../../constants/colors';

const OverviewCard = ({ title, amount, status, renderCashoutOptions }) => {
  return (
    <Box
      border={`0.5px solid ${colors.sub}`}
      borderRadius={'10px'}
      pl="16px"
      pb="12px"
      bgColor={status ? `${colors.primary}` : 'none'}
      className={styles.bg}
    >
      <Text
        fontSize="12px"
        fontWeight="400"
        color={!status ? `${colors.primary}` : `${colors.text}`}
        pt="12px"
      >
        {title}
      </Text>
      {renderCashoutOptions ? (
        <CashBackOptions />
      ) : (
        <Text
          fontSize="18px"
          fontWeight="600"
          color={!status ? `${colors.primary}` : `${colors.text}`}
          pt="7px"
        >
          {amount}
        </Text>
      )}
    </Box>
  );
};

export default OverviewCard;
