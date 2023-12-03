import { Grid, Checkbox, FormControlLabel } from '@mui/material';
import TextField from '@mui/material/TextField';

const Set = (props) => {

    const weight = props.weight
    const reps = props.reps
    const rir = props.rir

    return (
        <Grid container spacing={1}>
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
            <Grid item xs={3} justify='center'>
                <FormControlLabel
                    control={<Checkbox />}
                    label="Done"
                />
            </Grid>
        </Grid>
    );
};

export default Set;