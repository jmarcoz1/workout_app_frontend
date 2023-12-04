import React from 'react'
import { useRoutes } from 'react-router-dom';
import { Typography, Grid } from '@mui/material';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
//
import AppWithTopBar from '../../navigation/AppWithTopBar';
import ExerciseCard from '../../workout_components/ExerciseCard';

const WorkoutTrainingPage = () => {
  return (
    <div>
      <ExerciseCard
          key={1}
          exerciseName={'Bench Press'}
          muscleName={'Pectoralis Major'}
      />
      <ExerciseCard
        key={2}
        exerciseName={'Chin ups'}
        muscleName={'Latismus Dorsis'}
      />
      <ExerciseCard
        key={3}
        exerciseName={'Hack squat'}
        muscleName={'Quadriceps'}
      />
    </div>
  )
}

export default WorkoutTrainingPage