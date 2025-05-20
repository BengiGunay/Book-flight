import { Stack } from '@mui/material'
import { FlightListHeader } from './flight-list-header'
import { FlightCardList } from './flight-card-list'

export const FlightList = () => {
    return (
        <Stack>
            <FlightListHeader />
            <FlightCardList />
        </Stack>
    )
}
