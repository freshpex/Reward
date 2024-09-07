# Rewards Summary Page

This project demonstrates my ability to build user-centric, feature-rich components in React, focusing on a seamless and responsive user interface. The task was to create a **Rewards Summary Page**, allowing customers to track their earnings, view cashback history, and redeem rewards.

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Features](#features)
  - [Earnings Overview](#earnings-overview)
  - [Cashback History](#cashback-history)
  - [Cashout Options](#cashout-options)
- [Design Choices](#design-choices)
- [Animations and UI Enhancements](#animations-and-ui-enhancements)
- [Future Improvements](#future-improvements)

---

## Overview

This **Rewards Summary Page** was designed to give customers a clear, intuitive way to manage their cashback rewards. Users can easily track their earnings, view transaction history, and choose how they would like to redeem their rewards—either as direct cashouts or through promo codes.

The page is built with **React** and leverages a modular component structure, ensuring scalability and maintainability.

---

## Project Structure

The project follows a clean component-based architecture, divided into:

- `EarningsOverview`: Displays total cashback and current balance.
- `CashbackHistory`: Lists past cashback transactions, including date, amount, and booking details.
- `CashoutOptions`: Provides cashout options, either directly or via promo codes.

Dummy data is used for showcasing functionality, simulating API responses via JSON.

---

src/
├── app/
│ ├── CashbackHistory # Shows Cashback History/Booking Details in a table
│ ├── CashBsckOptions # Cashout selection functionality
│ ├── Home # Earnings Overview, connects other pages
│ └── ReportChart # Chart showing cashout trends
│
├── components/
│ ├── card # Reusable card structure for overview and other components
│ ├── emptystate # Fallback UI for empty data scenarios
│ ├── navBar # Top navigation bar
│ └── SideBar # Side navigation bar
│
├── data.js # File for dummy data
├── App.jsx # Main App component for routing
├── main.jsx # React entry point
├── ErrorBoundary.jsx # Catches errors in the app
├── Layout/ # Contains side bar and nav bar for the app structure
└── constants/ # Defines all colors used throughout the app

'''

## Technologies Used

- **React.js** for building the UI components.
- **JavaScript** for handling logic and state management.
- **Tailwind CSS and chakra UI** for styling the page.
- **Axios** for handling API calls (mocked in this case).
- **Git** for version control.

---

## Features

### 1. Earnings Overview

- **Purpose**: To give users a quick snapshot of their total cashback and current balance.
- **Details**:
  - **Total Cashback Earned**: Sum of all cashback from bookings.
  - **Current Balance**: Available cashback for withdrawal.

### 2. Cashback History

- **Purpose**: Displays previous cashback transactions for transparency and user reference.
- **Details**:
  - **Transaction Date**: The date when the cashback was credited.
  - **Amount Earned**: The specific amount earned per transaction.
  - **Booking Details**: A brief summary of the booking that generated the cashback.

### 3. Cashout Options

- **Purpose**: Offers users flexibility in how they redeem their rewards.
- **Cashout Methods**:
  - **Direct Cashout**: Transfer cashback to a bank account or apply as a discount for future bookings.
  - **Promo Codes**: Convert cashback into promo codes for future use.

---

## Design Choices

### **Component Structure**

I adopted a modular approach for the project. Each section of the Rewards Summary Page (Earnings Overview, Cashback History, and Cashout Options) is encapsulated in its own component, which promotes reusability and scalability.

### **State Management**

State is managed using React's `useState` hook, allowing efficient updating of the component as new cashback data is fetched (simulated using dummy data). This ensures a smooth user experience as users interact with the page.

### **chakra UI**

I chose **chakra UI** for styling because it enables rapid prototyping while maintaining a clean and maintainable CSS structure. chakra UI's utility-first approach allowed me to create responsive layouts with minimal code, resulting in a highly customizable UI. I also added tailwind css to the branch of this project to make the project more sophiscated and dynamic.

---

## Animations and UI Enhancements

To enhance the user experience, subtle animations were added for interactions such as hovering over buttons and transitioning between views. This not only makes the page more engaging but also provides visual feedback to users as they navigate through different sections.

---

## Future Improvements

- **Additional Filters**: Allow users to filter cashback transactions by date range or booking category for a more personalized experience.

## Deploymet Link
- [Rewards Summary Page](https://reward-beryl.vercel.app/)