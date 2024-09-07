import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  TableContainer,
} from '@chakra-ui/react';
import { useState, useRef, useEffect } from 'react';
import { colors } from '../../constants/colors';

const CashbackHistory = ({ CashHistory }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedCashback, setSelectedCashback] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const tableRef = useRef(null);

  const head = [
    'ID',
    'Transaction Date',
    'Amount Earned',
    'Booking Details',
    '',
  ];

  const handleViewDetails = (cashback) => {
    setSelectedCashback(cashback);
    onOpen();
  };

  useEffect(() => {
    let scrollSpeed = 0.1;
    let scrollPosition = 0;
    let animationFrameId;

    const scrollTable = () => {
      if (tableRef.current && !isPaused) {
        scrollPosition += scrollSpeed;
        tableRef.current.scrollTop = scrollPosition;

        if (
          tableRef.current.scrollTop + tableRef.current.clientHeight >=
          tableRef.current.scrollHeight
        ) {
          scrollPosition = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scrollTable);
    };

    // Start the scroll animation
    animationFrameId = requestAnimationFrame(scrollTable);

    // Cleanup on unmount
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  // Add event listeners for manual scrolling
  const handleManualScroll = () => {
    setIsPaused(true);
  };

  const handleResumeScroll = () => {
    setIsPaused(false);
  };

  return (
    <TableContainer
      border={`0.5px solid ${colors.sub}`}
      borderRadius={'6px'}
      ref={tableRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={handleResumeScroll}
      onClick={handleManualScroll}
      style={{
        maxHeight: '300px',
        overflowY: 'hidden',
      }}
    >
      <Table>
        <Thead position="sticky" top={0} bg={colors.background} zIndex={1}>
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
          {CashHistory.map((cashback, index) => (
            <Tr key={index}>
              <Td>{cashback.bookingId}</Td>
              <Td>{cashback.date}</Td>
              <Td>${cashback.amount}</Td>
              <Td>{cashback.bookingDetails}</Td>
              <Td>
                <Button
                  onClick={() => handleViewDetails(cashback)}
                  border="none"
                  variant={'outline'}
                  color={colors.primary}
                  fontSize={'12px'}
                  _hover={{
                    bg: colors.primary,
                    color: '#fff',
                  }}
                >
                  View
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      {/* Modal for Viewing Detailed Cashback Information */}
      {selectedCashback && (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Cashback Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>
                <strong>Transaction Date:</strong> {selectedCashback.date}
              </Text>
              <Text>
                <strong>Amount Earned:</strong> ${selectedCashback.amount}
              </Text>
              <Text>
                <strong>Booking Details:</strong>{' '}
                {selectedCashback.bookingDetails}
              </Text>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme={colors.hover} mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </TableContainer>
  );
};

export default CashbackHistory;
