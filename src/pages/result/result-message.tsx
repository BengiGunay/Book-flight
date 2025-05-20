import { Grid, Typography } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CancelIcon from '@mui/icons-material/Cancel'
import { useSelector } from 'react-redux'
import { getSelectedSubCategoryStatus } from '../book-flight/redux/selector'

export const ResultMessage = () => {
    const selectedFlightState = useSelector(getSelectedSubCategoryStatus)

    return (
        <Grid container marginBottom={'10px'}>
            <Grid item xs={8} textAlign={'left'} display={'flex'}>
                {selectedFlightState === 'AVAILABLE' ? (
                    <CheckCircleIcon
                        color="success"
                        fontSize="large"
                        sx={{ marginRight: '10px' }}
                    />
                ) : (
                    <CancelIcon
                        color="error"
                        fontSize="large"
                        sx={{ marginRight: '10px' }}
                    />
                )}
                <Typography variant="h5" display={'inline'}>
                    {selectedFlightState === 'AVAILABLE'
                        ? 'Kabin seçiminiz tamamlandı.'
                        : 'Kabin seçiminiz tamamlanamadı.'}
                </Typography>
            </Grid>
        </Grid>
    )
}
