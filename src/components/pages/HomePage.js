import React from 'react';
import { useRoutes } from 'react-router-dom';
import AppWithSidebar from '../navigation/AppWithSidebar';
import TrainingPage from './TrainingPage';
import ProfilePage from './ProfilePage';

const HomePage = () => {
    let routes = useRoutes([
        { path: '/training', element: <TrainingPage /> },
        { path: '/profile', element: <ProfilePage /> },
    ]);

    return (
        <div>
            <AppWithSidebar />
            {routes}
        </div>
    );
}

export default HomePage;
