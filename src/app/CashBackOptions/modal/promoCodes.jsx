import React from 'react';
import {
  Box,
  Input,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import { colors } from '../../../constants/colors';

const PromoCodes = ({
  isOpen,
  onClose,
  handleSubmit,
  loading,
  generateCode,
  code,
  hasError,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>PromoCode</ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{ amount: '', promoCode: code || '' }}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
          >
            {({ setFieldValue }) => (
              <Form>
                <FormControl isRequired>
                  <FormLabel mb="8px" textStyle="md" mt="16px">
                    Amount
                  </FormLabel>
                  <Field name="amount">
                    {({ field }) => (
                      <Input
                        {...field}
                        placeholder="Enter Amount to Cashback to Code"
                        focusBorderColor={colors.primary}
                        _placeholder={{ color: colors.sub }}
                      />
                    )}
                  </Field>
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel mb="8px" textStyle="md">
                    Promo Code
                  </FormLabel>
                  <InputGroup>
                    <Field name="promoCode">
                      {({ field }) => (
                        <Input
                          {...field}
                          focusBorderColor={colors.primary}
                          placeholder="Promo code"
                          _placeholder={{ color: colors.sub }}
                        />
                      )}
                    </Field>
                    {!code && (
                      <InputRightElement w="auto">
                        <Box
                          onClick={() => {
                            const newCode = generateCode();
                            setFieldValue('promoCode', newCode);
                          }}
                          color={colors.primary}
                          cursor="pointer"
                          pr="15px"
                        >
                          Generate Promo Code
                        </Box>
                      </InputRightElement>
                    )}
                  </InputGroup>
                </FormControl>

                <Button
                  color={colors.primary}
                  size="sm"
                  variant="outline"
                  mt={4}
                  isLoading={loading}
                  type="submit"
                  _hover={{ bg: colors.primary, color: '#fff' }}
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default PromoCodes;
