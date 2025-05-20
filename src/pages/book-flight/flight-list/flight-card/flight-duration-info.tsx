import { Stack, Typography } from '@mui/material'
type FlightDurationInfoProps = {
    duration: string
}

export const FlightDurationInfo = (props: FlightDurationInfoProps) => {
    const { duration } = props
    return (
        <Stack direction={'column'}>
            <Typography variant="body2" sx={{ color: '#a0a2a1' }}>
                Uçuş Süresi
            </Typography>
            <Typography
                variant="body2"
                sx={{ color: '#545557', fontWeight: 'bold' }}
            >
                {duration}
            </Typography>
        </Stack>
    )
}
