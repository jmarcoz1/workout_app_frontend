import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, IconButton, List, ListItem, ListItemText } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import HotelIcon from '@mui/icons-material/Hotel';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import DateCalendarServerRequest from '../../UI/CalendarComponent';

const CalendarTrainingPage = () => {
  // const [workouts, setWorkouts] = useState([]);
  

  // useEffect(() => {
  //   // Fetch workouts from API
  //   axios.get('/api/workouts')
  //     .then(response => {
  //       setWorkouts(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching workouts', error);
  //     });
  // }, []);

  const handleSelectWorkout = (workout) => {
    setSelectedWorkout(workout);
  };

  const workouts = [
    {
      date: '2023-12-01',
      isTrainingDay: true,
      exercises: [
        {
          name: 'Bench Press',
          sets: [
            { repetitions: 10, weight: 60.0, RIR: 2, completed: true },
            { repetitions: 8, weight: 70.0, RIR: 1, completed: true },
            { repetitions: 6, weight: 80.0, RIR: 0, completed: false },
          ],
        },
        {
          name: 'Squat',
          sets: [
            { repetitions: 10, weight: 80.0, RIR: 2, completed: true },
            { repetitions: 8, weight: 90.0, RIR: 1, completed: true },
            { repetitions: 6, weight: 100.0, RIR: 0, completed: false },
          ],
        },
      ],
    },
    {
      date: '2023-12-02',
      isTrainingDay: false,
      exercises: [],
    },
    {
      date: '2023-12-03',
      isTrainingDay: true,
      exercises: [
        {
          name: 'Deadlift',
          sets: [
            { repetitions: 10, weight: 100.0, RIR: 2, completed: true },
            { repetitions: 8, weight: 110.0, RIR: 1, completed: true },
            { repetitions: 6, weight: 120.0, RIR: 0, completed: false },
          ],
        },
      ],
    },
  ];
  
  const [selectedWorkout, setSelectedWorkout] = useState(workouts[0]);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Box sx={{ display: 'flex', flexGrow: 4, alignItems: 'center', height: '100%' }}>
        <DateCalendarServerRequest sx={{ transform: 'scale(1.5)' }} />
      </Box>
      <Box sx={{ display: 'flex', flexGrow: 6, alignItems: 'center', height: '100%' }}>
        <DateCalendarServerRequest />
      </Box>
    </Box>
  );
};

export default CalendarTrainingPage;
