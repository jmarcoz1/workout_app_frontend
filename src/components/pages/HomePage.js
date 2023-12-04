import React from 'react';
import { useRoutes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
//

import HomeIcon from '@mui/icons-material/Home';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
//
import TrainingPage from './TrainingPage';
import ProfilePage from './ProfilePage';
import AppWithTopBar from '../navigation/AppWithTopBar';

const HomePage = () => {
    let routes = useRoutes([
        { path: '/training/*', element: <TrainingPage /> },
        { path: '/profile', element: <ProfilePage /> },
    ]);

    const navigate = useNavigate();

    const handlePageChange = (page) => {
        navigate(page);
    };

    const profileMenuItems = [
        { text: 'My Profile', onClick: () => handlePageChange('/home/profile') },
    ];
    
    const trainingMenuItems = [
        { text: 'Calendar', onClick: () => handlePageChange('/home/training/calendar') },
        { text: 'Statistics', onClick: () => handlePageChange('/home/training/statistics') },
        { text: 'Block Review', onClick: () => handlePageChange('/home/training/block-review') },
    ];

    const tabs = [
        { flex: 1, icon: <FitnessCenterIcon />, menuItems: trainingMenuItems },
        { flex: 1, icon: <HomeIcon />, menuItems: profileMenuItems },
    ];

    return (
        <div>
            <AppWithTopBar tabs={tabs} />
            {routes}
        </div>
    );
}

export default HomePage;
