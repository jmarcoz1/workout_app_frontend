import { Typography, Grid, Box } from '@mui/material';
import ExerciseCard from './components/workout_components/ExerciseCard';
import './App.css';

const App = () => {
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
    
  );
};

export default App;
