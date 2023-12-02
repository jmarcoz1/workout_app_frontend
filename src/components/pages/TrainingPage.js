import React from 'react'
import { Typography, Grid } from '@mui/material';
import ExerciseCard from '../workout_components/ExerciseCard';

const TrainingPage = () => {
    return (
        <div>
          <ExerciseCard
             exerciseName={'Bench Press'}
             muscleName={'Pectoralis Major'}
          />
          <ExerciseCard
            exerciseName={'Chin ups'}
            muscleName={'Latismus Dorsis'}
          />
          <ExerciseCard
            exerciseName={'Hack squat'}
            muscleName={'Quadriceps'}
          />
        </div>
    )
}

export default TrainingPage