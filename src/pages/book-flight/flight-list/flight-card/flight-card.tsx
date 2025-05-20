import { Card, CardContent, Grid } from '@mui/material'
import { FlightDepartureInfo } from './flight-departure-info'
import { FlightDurationInfo } from './flight-duration-info'
import { Flight } from '../../../search-flight/redux/type'
type FlightCardProps = {
    flight: Flight
}
export const FlightCard = (props: FlightCardProps) => {
    const { flight } = props
    return (
        <Grid container>
            <Grid item xs={12} sx={{ margin: '16px' }}>
                <Card>
                    <CardContent>
                        <Grid
                            container
                            direction="row"
                            display={'flex'}
                            sx={{ height: '70px' }}
                        >
                            <Grid item xs={8}>
                                <FlightDepartureInfo flight={flight} />
                            </Grid>
                            <Grid item xs={4}>
                                <FlightDurationInfo
                                    duration={flight.flightDuration}
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}
