import { Typography, Grid } from '@mui/material';
import TextField from '@mui/material/TextField';

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
                <TextField
                    required
                    id="outlined-required"
                    defaultValue={weight}
                />
            </Grid>
            <Grid item xs={3}>
                <TextField
                    required
                    id="outlined-required"
                    defaultValue={reps}
                />
            </Grid>
            <Grid item xs={3}>
                <TextField
                    required
                    id="outlined-required"
                    defaultValue={rir}
                />
            </Grid>
        </Grid>
    );
};

export default Set;