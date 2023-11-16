import { Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

const Set = (props) => {

    const setNumber = props.setNumber
    const weight = props.weight
    const reps = props.reps
    const rir = props.rir

    return (
        <Grid container spacing={1}>
            <Grid item xs={3}>
                <Typography>#{setNumber}</Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography>{weight}</Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography>{reps}</Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography>{rir}</Typography>
            </Grid>
        </Grid>
    );
};



export default Set;