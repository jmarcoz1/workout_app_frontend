import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Typography, Grid, Box } from '@mui/material';
import ExerciseCard from './components/workout_components/ExerciseCard';
import AppWithSidebar from './components/navigation/AppWithSidebar';
import ComponentWithSidebar from './components/navigation/ComponentWithSidebar';

import './App.css';

import LoginPage from './components/pages/LoginPage';
import ProfilePage from './components/pages/ProfilePage';
import TrainingPage from './components/pages/TrainingPage';

const App = () => {

  const TrainingPageWithSidebar = ComponentWithSidebar(TrainingPage);
  const ProfilePageWithSidebar = ComponentWithSidebar(ProfilePage);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/training" element={<TrainingPageWithSidebar />} />
        <Route path="/profile" element={<ProfilePageWithSidebar />} />
      </Routes>
    </Router>
  );
}

export default App;
