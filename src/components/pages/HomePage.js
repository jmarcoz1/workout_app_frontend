import React from 'react';
import { useRoutes } from 'react-router-dom';
import AppWithSidebar from '../draftComponents/AppWithSidebar';
import TrainingPage from './TrainingPage';
import ProfilePage from './ProfilePage';
import AppWithTopBar from '../navigation/AppWithTopBar';

const HomePage = () => {
    let routes = useRoutes([
        { path: '/training', element: <TrainingPage /> },
        { path: '/profile', element: <ProfilePage /> },
    ]);

    return (
        <div>
            <AppWithTopBar/>
            {routes}
        </div>
    );
}

export default HomePage;
