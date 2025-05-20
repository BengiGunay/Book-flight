import { useSelector } from 'react-redux'
import { getFormValues } from '../search-flight/redux/selector'
import {
    getSelectedCurrency,
    getSelectedPrice,
} from '../book-flight/redux/selector'
import { Grid, Typography } from '@mui/material'

export const PriceInfo = () => {
    const personNumber = useSelector(getFormValues)?.personNumber ?? 1
    const selectedPrice = useSelector(getSelectedPrice)
    const selectedCurrency = useSelector(getSelectedCurrency)

    return (
        <Grid
            container
            marginTop={'10px'}
            display={'flex'}
            justifyContent={'space-between'}
        >
            <Typography variant="h4" sx={{ fontWeight: '100' }}>
                Toplam Tutar
            </Typography>

            <Typography
                variant="h4"
                sx={{ fontWeight: '100', color: '#496a8d' }}
            >
                {selectedCurrency} {personNumber * selectedPrice}
            </Typography>
        </Grid>
    )
}
