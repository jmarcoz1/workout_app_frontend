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
      }
    ]

    const FieldLabels = () => {
      return(
          <Grid container item spacing={1}>
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
                <Typography variant="h7">{props.exerciseName}</Typography>
            </Grid>

            {/* Second Section */}
            <Grid item xs={12}>
                <Typography variant="h7">{props.muscleName}</Typography>
            </Grid>

            {/* Third Section - Sets */}
            <FieldLabels/>
            <Grid item container xs={12}>
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
