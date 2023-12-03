import React from 'react'
import { Typography, Grid } from '@mui/material';
import ExerciseCard from '../workout_components/ExerciseCard';

const TrainingPage = () => {
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

export default TrainingPage