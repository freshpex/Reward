import React from 'react';
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';
import { colors } from '../../../constants/colors';

const CashbackModal = ({ isOpen, onClose }) => {
  const head = [
    'ID',
    'Transaction Date',
    'Amount Earned',
    'Booking Details',
    '',
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Cashback Full History</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box overflowY="auto" maxHeight="400px">
            <TableContainer border={`0.5px solid ${colors.sub}`}>
              <Table>
                <Thead
                  position="sticky"
                  top={0}
                  bg={colors.background}
                  zIndex={1}
                >
                  <Tr>
                    {head.map((head, idx) => (
                      <Th
                        key={idx}
                        color={colors.text}
                        textTransform={'capitalize'}
                        fontSize="12"
                        fontWeight="500"
                      >
                        {head}
                      </Th>
                    ))}
                  </Tr>
                </Thead>
                <Tbody>
                  {[...new Array(15)].map((_, idx) => (
                    <Tr key={idx} fontSize="12px" textTransform={'capitalize'}>
                      <Td>B1234</Td>
                      <Td>2024-09-01</Td>
                      <Td>50</Td>
                      <Td>Booked an Hotel room for 3 Nights</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>

          <Button mt={4} colorScheme="blue" onClick={onClose}>
            Close
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CashbackModal;
