import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff'
import FlightLandIcon from '@mui/icons-material/FlightLand'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
type IconProps = {
    name: string
}

export const Icon = (props: IconProps) => {
    const { name } = props
    switch (name) {
        case 'flight-take-off':
            return <FlightTakeoffIcon />
        case 'flight-land':
            return <FlightLandIcon />
        case 'person':
            return <PersonAddIcon />
        default:
            return ''
    }
}
