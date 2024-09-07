import { Box, Grid, Text } from '@chakra-ui/react';
import CashbackHistory from '../CashbackHistory';
import CashBackOptions from '../CashoutOptions';
import ReportChart from '../ReportChart';
import { History } from '../../data';
import MainCard from '../../components/Card/mainCard';
import EmptyState from "../../components/emptyState";
import box from "../../assets/box.png";
import OverviewCard from '../../components/Card/overviewCard';
import commaNumber from 'comma-number';
import Layout from '../../layout';

const Home = () => {
  const info = [
    {
      id: 1,
      title: "Total Cashback Earned",
      amount: `NGN ${commaNumber(1200) || 0}`,
      selected: true,
    },
    {
      id: 2,
      title: "Current Balance",
      amount: `NGN ${commaNumber(200) || 0}`,
      selected: false,
    },
    {
      id: 3,
      title: "Earnings",
      amount: 10 || "0",
      selected: false,
    },
    {
      id: 4,
      title: "Cashout Options",
      amount: <CashBackOptions />,
      selected: false,
    },
  ];

  return (
    <Layout>
    <Box p={12}>
      <Box mt="32px">
        <Grid templateColumns={{ base: "auto", md: "repeat(4,1fr)" }} gap={6}>
          {info.map((data, idx) => (
            <OverviewCard key={data.id * idx} title={data.title} amount={data.amount} status={data.selected} />
          ))}
        </Grid>
      </Box>

      <Box mt="32px" display={"flex"} flexDir={{ base: "column", md: "row" }} gap={6}>
        <MainCard
          title="Cashback History"
          width={{ base: "auto", md: "100%" }}
          borderRadius="10px"
          border="0.5px solid #D9D8DA"
          bg="#fff"
          linkTo="/"
          show={true}
        >
          {History.length >= 1 ? (
            <CashbackHistory CashHistory={History} />
          ) : (
            <EmptyState title={"No Cashback"} description={"You don't have a Cashback"} icon={box} />
          )}
        </MainCard>

        <MainCard
          flex={1}
          title="Cashout Trend"
          width="100%"
          height="400px"
          borderRadius="10px"
          border="0.5px solid #D9D8DA"
          bg="#fff"
        >
          <ReportChart />
        </MainCard>
      </Box>
    </Box>
    </Layout>
  );
};

export default Home;
