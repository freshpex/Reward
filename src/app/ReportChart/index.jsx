import React, { useState, useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  BubbleController,
  RadarController,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  RadialLinearScale,
} from 'chart.js';
import { Line, Bar, Bubble, Radar, Pie, Doughnut } from 'react-chartjs-2';
import { Box } from '@chakra-ui/react';
import { colors } from '../../constants/colors';

ChartJS.register(
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  PointElement,
  LineElement,
  BarElement,
  BubbleController,
  RadarController,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

const ReportChart = () => {
  const [chartType, setChartType] = useState('line');
  const chartRef = useRef(null);

  // Cycle through chart types every 5 seconds
  useEffect(() => {
    const chartTypes = ['line', 'bar', 'bubble', 'radar', 'pie', 'doughnut'];
    let currentTypeIndex = 0;

    const interval = setInterval(() => {
      setChartType(chartTypes[currentTypeIndex]);
      currentTypeIndex = (currentTypeIndex + 1) % chartTypes.length;
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [chartType]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1000,
      easing: 'easeInOutQuad',
    },
    plugins: {
      legend: {
        display: true,
      },
    },
    scales:
      chartType === 'radar' || chartType === 'pie' || chartType === 'doughnut'
        ? {}
        : {
            x: {
              title: {
                display: true,
                text: 'Months',
                color: colors.primary,
              },
            },
            y: {
              title: {
                display: true,
                text: 'Cashout Amount',
                color: colors.primary,
              },
              min: 0,
              beginAtZero: true,
            },
          },
  };

  const details = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Cashout Trend',
        data: [120, 190, 30, 50, 200],
        backgroundColor:
          chartType === 'bubble'
            ? colors.primary
            : chartType === 'pie' || chartType === 'doughnut'
              ? [
                  colors.primary,
                  colors.secondary,
                  colors.tertiary,
                  colors.quaternary,
                  colors.quinary,
                ]
              : colors.primary,
        borderColor: colors.primary,
        fill: chartType !== 'bubble',
        borderWidth: 1,
        radius: chartType === 'bubble' ? 10 : undefined,
      },
    ],
  };

  const renderChart = () => {
    switch (chartType) {
      case 'bar':
        return <Bar ref={chartRef} data={details} options={options} />;
      case 'bubble':
        return <Bubble ref={chartRef} data={details} options={options} />;
      case 'radar':
        return <Radar ref={chartRef} data={details} options={options} />;
      case 'pie':
        return <Pie ref={chartRef} data={details} options={options} />;
      case 'doughnut':
        return <Doughnut ref={chartRef} data={details} options={options} />;
      default:
        return <Line ref={chartRef} data={details} options={options} />;
    }
  };

  return (
    <Box width="100%" height="300px">
      {renderChart()}
    </Box>
  );
};

export default ReportChart;
