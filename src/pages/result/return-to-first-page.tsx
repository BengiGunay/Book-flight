import { Button, Grid } from '@mui/material'
import { useDispatch } from 'react-redux'
import { reset as resetSearchFlight } from '../search-flight/redux/slice'
import { reset as resetBookFlight } from '../book-flight/redux/slice'
import { reset as resetLayout } from '../layout/redux/slice'
import { useNavigate } from 'react-router-dom'

export const ReturnToFirstPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleReturnStart = () => {
        dispatch(resetSearchFlight())
        dispatch(resetBookFlight())
        dispatch(resetLayout())
        navigate('/')
    }
    return (
        <Grid
            container
            marginTop={'10px'}
            display={'flex'}
            flexDirection={'row-reverse'}
        >
            <Button className="return-button" onClick={handleReturnStart}>
                {' '}
                Başa Dön
            </Button>
        </Grid>
    )
}
