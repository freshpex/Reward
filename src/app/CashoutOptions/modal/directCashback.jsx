import React from 'react';
import { Box, Input, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, Select, FormControl, FormLabel } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import { colors } from '../../../constants/colors';

const DirectCashback = ({ isOpen, onClose, handleSubmit, loading, hasError }) => {

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Direct Cashout</ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{ bankName: '', quantity: '', accountNumber: '' }}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
          >
            <Form>
              <FormControl isRequired>
                <FormLabel mb="8px" textStyle="md">
                  Bank Name
                </FormLabel>
                <Box display="flex" alignContent="center" alignItems="center" border="1px solid #D9D8DA" borderRadius="10px">
                  <Field name="bankName" as="select" focusBorderColor={colors.primary}>
                    {({ field }) => (
                      <Select {...field} border="none" borderRight="1px solid #D9D8DA" width="200px">
                        <option value="">--Type--</option>
                        <option value="bbank">B Bank</option>
                        <option value="cbank">C Bank</option>
                      </Select>
                    )}
                  </Field>
                  <Field name="quantity">
                    {({ field }) => (
                      <Input
                        {...field}
                        type="text"
                        placeholder="Quantity to Cashback"
                        border="none"
                        focusBorderColor={colors.primary}
                      />
                    )}
                  </Field>
                </Box>
              </FormControl>

              <FormControl isRequired mt={4}>
                <FormLabel mb="8px" textStyle="md">
                  Account Number
                </FormLabel>
                <Field name="accountNumber">
                  {({ field }) => (
                    <Input
                      {...field}
                      type="text"
                      placeholder="Account Number"
                      focusBorderColor={colors.primary}
                      _placeholder={{ color: colors.sub }}
                    />
                  )}
                </Field>
              </FormControl>

              <Button
              color={colors.primary}
                size="sm"
                variant="outline"
                mt={4}
                isLoading={loading}
                type="submit"
                _hover={{ bg: colors.primary, color: "#fff" }}
              >
                Submit
              </Button>
            </Form>
          </Formik>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default DirectCashback;
