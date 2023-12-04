import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const BasicLineChart = ({ xData, yData }) => {
  return (
    <LineChart
      xAxis={[{ data: xData }]}
      series={yData}
      width={500}
      height={300}
    />
  );
};

export default BasicLineChart;