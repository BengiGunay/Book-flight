import { useDispatch, useSelector } from 'react-redux'
import { getSelectedSubCategoryStatus } from '../book-flight/redux/selector'
import { Grid, Divider } from '@mui/material'

import { useEffect } from 'react'
import { commitHeaderTheme } from '../layout/redux/slice'
import { ResultMessage } from './result-message'
import { PriceInfo } from './price-info'
import { ReturnToFirstPage } from './return-to-first-page'

export const Result = () => {
    const dispatch = useDispatch()
    const selectedFlightState = useSelector(getSelectedSubCategoryStatus)

    useEffect(() => {
        dispatch(commitHeaderTheme('whiteMode'))
    }, [])
    return (
        <Grid container>
            <Grid item xs={3} />
            <Grid item xs={7} textAlign={'left'}>
                <ResultMessage />
                <Divider />
                {selectedFlightState === 'AVAILABLE' ? (
                    <PriceInfo />
                ) : (
                    <ReturnToFirstPage />
                )}
            </Grid>
            <Grid item xs={2} />
        </Grid>
    )
}
{
    /* // Result: {selectedFlightState}, personNumber*price: //{' '}
                    {personNumber * selectedPrice} */
}
