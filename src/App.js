import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './components/pages/LoginPage';
import HomePage from './components/pages/HomePage';

import CalendarTrainingPage from './components/pages/Training/CalendarTrainingPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home/*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
