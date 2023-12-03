import React from 'react';
import AppWithSidebar from './AppWithSidebar';

const ComponentWithSidebar = (WrappedComponent) => {
    return (props) => {
        return (
            <div>
                <AppWithSidebar />
                <WrappedComponent {...props} />
            </div>
        );
    }
}

export default ComponentWithSidebar;
