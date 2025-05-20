import { FormControlLabel, Grid, Typography } from '@mui/material'
import { BSwitch } from '../../components/Switch'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { commitPromotionCodeState } from './redux/slice'

export const PromotionCode = () => {
    const dispatch = useDispatch()
    const [promotionCode, setPromotionCode] = useState(false)
    useEffect(() => {
        return () => {
            dispatch(commitPromotionCodeState(false))
        }
    }, [])
    return (
        <>
            <Grid container spacing={2} sx={{ textAlign: 'left' }}>
                <Grid item xs={3} />
                <Grid item xs={3}>
                    <FormControlLabel
                        value="start"
                        control={
                            <BSwitch
                                color="primary"
                                value={promotionCode}
                                onChange={(_, value) => {
                                    setPromotionCode(value)
                                    dispatch(commitPromotionCodeState(value))
                                }}
                            />
                        }
                        label="Promosyon Kodu"
                        labelPlacement="start"
                        sx={{
                            marginLeft: 0,
                            fontWeight: 'bold',
                            color: 'gray',
                        }}
                    />
                </Grid>
            </Grid>

            {promotionCode && (
                <Grid container spacing={2} sx={{ textAlign: 'left' }}>
                    <Grid item xs={3} />
                    <Grid item xs={8}>
                        <Typography
                            variant="caption"
                            display="block"
                            gutterBottom
                        >
                            {' '}
                            Promosyon Kodu seçeneği ile tüm ekonomi kabini Eco
                            Fly paketlerini %50 indirimle satın alabilirsiniz!{' '}
                        </Typography>
                        <Typography
                            variant="caption"
                            display="block"
                            gutterBottom
                        >
                            {' '}
                            Promosyon Kodu seçeneği aktifken Eco Fly paketi
                            haricinde seçim yapılmamaktadır.{' '}
                        </Typography>
                    </Grid>
                </Grid>
            )}
        </>
    )
}
