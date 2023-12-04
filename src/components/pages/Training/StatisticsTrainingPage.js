import React from 'react'
import LineChart from '../../UI/BasicLineChart'

const StatisticsTrainingPage = () => {
  const series = [
    { data: [2, 5.5, 2, 8.5, 1.5, 5] },
    { data: [1, 4.5, 3, 7.5, 2.5, 6] },
    // Add more series here...
  ];
  return (
    
    <LineChart xData={[1, 2, 3, 5, 8, 10]} yData={series}/>
  )
}

export default StatisticsTrainingPage