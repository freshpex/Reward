import { useState } from 'react';
import { Box, Button, useDisclosure, useToast } from '@chakra-ui/react';
import { colors } from '../../constants/colors';
import DirectCashback from './modal/directCashback';
import PromoCodes from './modal/promoCodes';
import voucher_codes from 'voucher-code-generator';

const CashBackOptions = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedOption, setSelectedOption] = useState(null);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const [hasError, setHasError] = useState(false);

  // Simulate API call
  const simulateCashoutAPI = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const isSuccess = Math.random() > 0.3;
        if (isSuccess) resolve('Success');
        else reject('Error');
      }, 2000);
    });
  };

  // Handle Cashback Submission
  const handleCashoutSubmit = async (values) => {
    setLoading(true);
    setHasError(false);

    // Simulate the cashout API call
    try {
      await simulateCashoutAPI();
      toast({
        title: 'CashBack successful.',
        description: `You've successfully cashed out via ${selectedOption === 'direct' ? 'Direct Cashout' : 'Promo Codes'}.`,
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top',
      });
      onClose();
    } catch (error) {
      setHasError(true);
      handleCashoutError();
    } finally {
      setLoading(false);
    }
  };

  // Handle Error during cashout
  const handleCashoutError = () => {
    toast({
      title: 'Transaction failed.',
      description:
        'There was an error processing your cash back. Please try again.',
      status: 'error',
      duration: 3000,
      isClosable: true,
      position: 'top',
    });
  };

  const handleCashout = (option) => {
    setSelectedOption(option);
    onOpen();
  };

  // Generate promo code and return the generated value to Formik
  const generateCode = () => {
    const code = voucher_codes.generate({
      length: 8,
      count: 1,
      charset: voucher_codes.charset('alphanumeric'),
    })[0];
    return code;
  };

  return (
    <Box display="flex" gap={2} mt={2}>
      <Button
        color={colors.primary}
        size="sm"
        variant="outline"
        _hover={{
          bg: colors.primary,
          color: '#fff',
        }}
        onClick={() => handleCashout('direct')}
      >
        Direct Cashout
      </Button>

      <Button
        color={colors.primary}
        size="sm"
        variant="outline"
        _hover={{
          bg: colors.primary,
          color: '#fff',
        }}
        onClick={() => handleCashout('promo')}
      >
        Promo Codes
      </Button>

      {/* Modal for Direct Cashout or Promo Codes */}
      {selectedOption === 'direct' && (
        <DirectCashback
          isOpen={isOpen}
          onClose={onClose}
          handleSubmit={handleCashoutSubmit}
          loading={loading}
          hasError={hasError}
        />
      )}
      {selectedOption === 'promo' && (
        <PromoCodes
          isOpen={isOpen}
          onClose={onClose}
          handleSubmit={handleCashoutSubmit}
          loading={loading}
          generateCode={generateCode}
          hasError={hasError}
        />
      )}
    </Box>
  );
};

export default CashBackOptions;
