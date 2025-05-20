import { Grid, Button, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { commitOrderCriteria } from '../redux/slice'

export const FlightListHeader = () => {
    const dispatch = useDispatch()

    return (
        <Grid container>
            <Grid item xs={3} />
            <Grid
                item
                xs={7}
                sx={{ backgroundColor: '#242a38' }}
                textAlign={'right'}
            >
                <Typography variant="body2" color="white" display={'inline'}>
                    Sıralama Kriteri
                </Typography>
                <Button
                    variant="outlined"
                    className="filter-buttons"
                    onClick={() => {
                        dispatch(commitOrderCriteria('ecoFly'))
                    }}
                >
                    Ekonomi Ücreti
                </Button>
                <Button
                    variant="outlined"
                    className="filter-buttons"
                    onClick={() => {
                        dispatch(commitOrderCriteria('depTime'))
                    }}
                >
                    Kalkış Saati
                </Button>
            </Grid>
            <Grid item xs={2} />
        </Grid>
    )
}
