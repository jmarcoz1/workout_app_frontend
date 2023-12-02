import { Typography, Grid, Box } from '@mui/material';
import ExerciseCard from './components/workout_components/ExerciseCard';
import './App.css';

const App = () => {
  return (
    <ExerciseCard
      exerciseName={'Bench Press'}
      muscleName={'Pectoralis Major'}
    />
  );
};

export default App;
