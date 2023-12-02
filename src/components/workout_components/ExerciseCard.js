import React from 'react';
import PerformedSets from './PerformedSets';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ExerciseCard = (props) => {

    const card = (
        <React.Fragment>
            <CardContent>
                <PerformedSets 
                    exerciseName={props.exerciseName}
                    muscleName={props.muscleName}
                />
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </React.Fragment>
    )

    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card}</Card>
        </Box>
    );
};

export default ExerciseCard;
