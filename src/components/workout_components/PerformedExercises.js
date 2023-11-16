import React from 'react';
import { Typography, Box } from '@mui/material';
import PerformedSets from './PerformedSets';

const PerformedExercises = (props) => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            maxWidth="600px" // Adjust the max width as needed
            margin="0 auto" // Center the box horizontally
            padding={3}
            border="1px solid #ccc"
            borderRadius="8px"
        >

            {/* PerformedSet component */}
            <PerformedSets 
                exerciseName={props.exerciseName}
                muscleName={props.muscleName}
            />
        </Box>
    );
};

export default PerformedExercises;
