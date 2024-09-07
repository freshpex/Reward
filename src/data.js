import { colors } from './constants/colors';

export const History = [
  {
    bookingId: 'B1234',
    date: '2024-09-01',
    amount: 50,
    bookingDetails: 'hgdhdshjd Service: Hotel Booking',
  },
  {
    bookingId: 'B1235',
    date: '2024-09-02',
    amount: 30,
    bookingDetails: 'hjdhjsdh Service: Flight Booking',
  },
  {
    bookingId: 'B1236',
    date: '2024-09-01',
    amount: 50,
    bookingDetails: 'hdhhdhhd Service: Hotel Booking',
  },
  {
    bookingId: 'B1237',
    date: '2024-09-02',
    amount: 430,
    bookingDetails: 'lkejcfsjid Service: Taxi Booking',
  },
  {
    bookingId: 'B1237',
    date: '2024-09-02',
    amount: 130,
    bookingDetails: 'kfjfgj Service: Travel Booking',
  },
  {
    bookingId: 'B1238',
    date: '2024-09-02',
    amount: 130,
    bookingDetails: 'mfkkkv Service: Hotel Booking',
  },
  {
    bookingId: 'B1238',
    date: '2024-09-02',
    amount: 230,
    bookingDetails: 'kfkkkfkkf Service: Flight Booking',
  },
];

export const totalCashback = 300;
export const currentBalance = 120;

export const cashoutOptions = [
  {
    type: 'Direct Cashout',
    details: 'Withdraw to Bank Account',
  },
  {
    type: 'Promo Code',
    details: 'Apply for a discount on future bookings',
  },
];

export const earnings = {
  totalBookings: 15,
  totalCashbackEarned: totalCashback,
  currentBalance: currentBalance,
  cashoutTrends: [
    { type: 'Direct Cashout', lastUsed: '2024-09-01', count: 5 },
    { type: 'Promo Code', lastUsed: '2024-09-03', count: 10 },
  ],
};
