/* eslint-disable react-hooks/exhaustive-deps */
import { Stack } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
//import { useNavigate } from 'react-router-dom'
import { commitHeaderTheme } from '../layout/redux/slice'
import { BookFlightHeader } from './book-flight-header'
import { PromotionCode } from './promotion-code'
import { FlightList } from './flight-list/flight-list'

export const BookFlight = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(commitHeaderTheme('whiteMode'))
    }, [])

    return (
        <div id="flight-list">
            <Stack
                direction="column"
                margin={'1em'}
                marginBottom={'10vh'}
                display={'flex'}
            >
                <BookFlightHeader />
                <PromotionCode />
                <FlightList />
            </Stack>
        </div>
    )
}
