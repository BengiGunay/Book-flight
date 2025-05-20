import {
    Card,
    CardContent,
    FormControlLabel,
    Grid,
    Radio,
    Typography,
} from '@mui/material'
import { Price } from '../../../search-flight/redux/type'
import { getPromotionCodeState } from '../../redux/selector'
import { useSelector } from 'react-redux'
type TravelCategoryCardProp = {
    type: string
    price: Price | undefined
    depTime: string
    index: number
}

export const TravelCategoryCard = (props: TravelCategoryCardProp) => {
    const promotionCodeState = useSelector(getPromotionCodeState)
    const { type, price, depTime, index } = props
    const amount = price?.amount ?? 0
    return (
        <Grid container>
            <Grid item xs={12} sx={{ margin: '16px' }}>
                <Card>
                    <CardContent>
                        <Grid
                            container
                            direction="row"
                            display={'flex'}
                            sx={{ alignItems: 'center', height: '70px' }}
                        >
                            <Grid item xs={6} display={'flex'}>
                                <FormControlLabel
                                    value={depTime + '-' + type + '-' + index}
                                    control={<Radio />}
                                    label={
                                        <Typography
                                            variant="caption"
                                            sx={{
                                                color: '#545557',
                                                fontSize: '10px',
                                            }}
                                        >
                                            {type}
                                        </Typography>
                                    }
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography
                                    variant="body2"
                                    sx={{ color: '#545557', fontSize: '11px' }}
                                >
                                    Yolcu Başı
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: '#545557',
                                        fontWeight: 'bold',
                                        fontSize: '12px',
                                    }}
                                >
                                    {price?.currency ?? ' '}{' '}
                                    {promotionCodeState && type === 'ECONOMY'
                                        ? Math.round(amount / 2)
                                        : amount}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}
