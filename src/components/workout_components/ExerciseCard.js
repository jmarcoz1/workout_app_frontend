import React, { useState } from 'react';
//
import { Box, Card, CardActions, CardContent, Button } from '@mui/material';
//
import { getWorkouts } from '../../API/API';
import PerformedSets from './PerformedSets';

const ExerciseCard = (props) => {

    const [workouts, setWorkouts] = useState([]);

    const handleButtonClick = async () => {
        const data = await getWorkouts();
        setWorkouts(data);
        console.log(data)
    }

    const card = (
        <React.Fragment>
            <CardContent>
                <PerformedSets
                    exerciseName={props.exerciseName}
                    muscleName={props.muscleName}
                />
            </CardContent>
            <CardActions>
                <Button size="small" onClick={handleButtonClick} >Learn More</Button>
            </CardActions>
        </React.Fragment>
    )

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            maxWidth="600px" // Adjust the max width as needed
            margin={[0, 'auto', 2, 'auto']} // Center the box horizontally, 0 padding top 2 padding bottom
            padding={3}
            border="1px solid #ccc"
            borderRadius="20px"
        >
            <Card>{card}</Card>
        </Box>
    );
};

export default ExerciseCard;
