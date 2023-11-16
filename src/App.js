import { Typography, Grid, Box } from '@mui/material';
import PerformedExercises from './components/workout_components/PerformedSets';
import './App.css';

const App = () => {
  return (
    <PerformedExercises
      exerciseName={'Bench Press'}
      muscleName={'Pectoralis Major'}
    />
  );
};

export default App;
