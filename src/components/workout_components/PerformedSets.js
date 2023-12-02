import React from 'react';
import { Typography, Grid } from '@mui/material';
import Set from './Set'; // Import the Set component

const PerformedSets = (props) => {
    // Sample data for the Set components
    const setsData = [
      {
          "id": 1,
          "intensity": 8,
          "repetitions": 10,
          "is_bodyweight": false,
          "weight": "0.00",
          "exerciseId": [
              1
          ],
          "workoutId": 1
      },
      {
          "id": 2,
          "intensity": 8,
          "repetitions": 4,
          "is_bodyweight": false,
          "weight": "0.00",
          "exerciseId": [
              5
          ],
          "workoutId": 2
      },
      {
          "id": 3,
          "intensity": 8,
          "repetitions": 4,
          "is_bodyweight": false,
          "weight": "0.00",
          "exerciseId": [
              5
          ],
          "workoutId": 2
      },
      {
          "id": 4,
          "intensity": 8,
          "repetitions": 4,
          "is_bodyweight": false,
          "weight": "0.00",
          "exerciseId": [
              5
          ],
          "workoutId": 2
      },
      {
          "id": 5,
          "intensity": 10,
          "repetitions": 3,
          "is_bodyweight": false,
          "weight": "0.00",
          "exerciseId": [
              3
          ],
          "workoutId": 2
      },
      {
          "id": 6,
          "intensity": 10,
          "repetitions": 3,
          "is_bodyweight": false,
          "weight": "0.00",
          "exerciseId": [
              3
          ],
          "workoutId": 2
      },
      {
          "id": 7,
          "intensity": 10,
          "repetitions": 3,
          "is_bodyweight": false,
          "weight": "0.00",
          "exerciseId": [
              3
          ],
          "workoutId": 2
      },
      {
          "id": 8,
          "intensity": 7,
          "repetitions": 3,
          "is_bodyweight": false,
          "weight": "0.00",
          "exerciseId": [
              1
          ],
          "workoutId": 2
      },
      {
          "id": 9,
          "intensity": 7,
          "repetitions": 3,
          "is_bodyweight": false,
          "weight": "0.00",
          "exerciseId": [
              9
          ],
          "workoutId": 2
      },
      {
          "id": 10,
          "intensity": 7,
          "repetitions": 3,
          "is_bodyweight": false,
          "weight": "0.00",
          "exerciseId": [
              9
          ],
          "workoutId": 2
      },
      {
          "id": 11,
          "intensity": 7,
          "repetitions": 20,
          "is_bodyweight": false,
          "weight": "20.00",
          "exerciseId": [
              6
          ],
          "workoutId": 2
      }
    ]

    const FieldLabels = () => {
      return(
          <Grid container item spacing={2}>
              <Grid item xs={3}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                      Set
                  </Typography>
              </Grid>
              <Grid item xs={3}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                      Weight
                  </Typography>
              </Grid>
              <Grid item xs={3}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                      Reps
                  </Typography>
              </Grid>
              <Grid item xs={3}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                      RIR
                  </Typography>
              </Grid>
          </Grid>
      )
    }

    return (
        <Grid container item spacing={2}>
            {/* First Section */}
            <Grid item xs={12}>
                <Typography variant="h5">{props.exerciseName}</Typography>
            </Grid>

            {/* Second Section */}
            <Grid item xs={12}>
                <Typography variant="h5">{props.muscleName}</Typography>
            </Grid>

            {/* Third Section - Sets */}
            <FieldLabels/>
            <Grid item xs={12}>
                {/* Mapping through the setsData to generate Set components */}
                {setsData.map((set, index) => (
                    <Set
                        key={index}
                        setNumber={set.id}
                        weight={set.weight}
                        reps={set.repetitions}
                        rir={set.intensity}
                    />
                ))}
            </Grid>
        </Grid>
    );
};

export default PerformedSets;
