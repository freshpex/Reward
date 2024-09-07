import React from 'react';
import { Box, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from '@chakra-ui/react';

const CashbackModal = ({ isOpen, onClose }) => {
  // Dummy cashback data, should be replaced by real data
  const CashHistory = [
    { id: '1', date: '2024-09-01', amount: '50', details: 'Booking #12345' },
    { id: '2', date: '2024-09-03', amount: '30', details: 'Booking #12346' },
    { id: '3', date: '2024-09-05', amount: '20', details: 'Booking #12347' },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Cashback History</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box overflowY="auto" maxHeight="400px">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {CashHistory.map((cashback) => (
                  <tr key={cashback.id}>
                    <td>{cashback.id}</td>
                    <td>{cashback.date}</td>
                    <td>{cashback.amount}</td>
                    <td>{cashback.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
