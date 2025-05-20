import { Flight } from '../../../search-flight/redux/type'
import { Stack, Typography } from '@mui/material'

type FlightDepartureInfoProps = {
    flight: Flight
}

type InfoProps = {
    timeDisplay: string
    city: {
        code: string
        name: string
    }
}
const Info = (props: InfoProps) => {
    const { timeDisplay, city } = props
    return (
        <Stack direction={'column'}>
            <Typography
                variant="body2"
                sx={{ color: '#545557', fontWeight: 'bold' }}
            >
                {timeDisplay}
            </Typography>
            <Typography variant="body2" sx={{ color: '#a0a2a1' }}>
                {city.code}
            </Typography>
            <Typography variant="body2" sx={{ color: '#a0a2a1' }}>
                {city.name}
            </Typography>
        </Stack>
    )
}
export const FlightDepartureInfo = (props: FlightDepartureInfoProps) => {
    const { flight } = props
    return (
        <Stack
            direction={'row'}
            display={'flex'}
            justifyContent={'center'}
            alignContent={'center'}
        >
            <Info
                timeDisplay={flight.departureDateTimeDisplay}
                city={flight.originAirport.city}
            />
            <div
                style={{
                    margin: '2em 0.5em',
                    borderTop: '2px solid #8a8a8a',
                    width: '100%',
                }}
            />
            <Info
                timeDisplay={flight.arrivalDateTimeDisplay}
                city={flight.destinationAirport.city}
            />
        </Stack>
    )
}
