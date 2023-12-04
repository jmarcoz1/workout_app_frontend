import React from 'react'
import { useRoutes } from 'react-router-dom';
//
import WorkoutTrainingPage from './Training/WorkoutTrainingPage';
import CalendarTrainingPage from './Training/CalendarTrainingPage';
import BlockReviewTrainingPage from './Training/BlockReviewTrainingPage';
import StatisticsTrainingPage from './Training/StatisticsTrainingPage';

const TrainingPage = () => {

  let trainingRoutes = useRoutes([
    { path: '/', element: <WorkoutTrainingPage /> },
    { path: '/calendar', element: <CalendarTrainingPage /> },
    { path: '/statistics', element: <StatisticsTrainingPage /> },
    { path: '/block-review', element: <BlockReviewTrainingPage /> }
  ]);

  return trainingRoutes;
}

export default TrainingPage