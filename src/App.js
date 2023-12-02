import { Typography, Grid, Box } from '@mui/material';
import ExerciseCard from './components/workout_components/ExerciseCard';
import AppWithSidebar from './components/navigation/AppWithSidebar';
import './App.css';

const App = () => {
  return (
    <div>
      <AppWithSidebar />
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
