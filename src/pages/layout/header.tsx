import Stack from '@mui/material/Stack/Stack'
import Typography from '@mui/material/Typography/Typography'
import { useSelector } from 'react-redux'
import { getHeaderColor } from './redux/selector'

export const Header = () => {
    const color = useSelector(getHeaderColor)
    return (
        <Stack
            spacing={0.5}
            sx={{
                minHeight: '10vh',

                backgroundColor: color == 'darkMode' ? '#072f48' : 'white',
            }}
        >
            <Typography
                variant="h5"
                color={color == 'darkMode' ? 'white' : 'black'}
                sx={{ paddingTop: '1em' }}
            >
                Bengi Hava Yolları
            </Typography>
            <div
                style={{
                    margin: '0px 1em',
                    borderTop: `2px solid ${
                        color === 'darkMode' ? 'white' : 'black'
                    }`,
                }}
            />
        </Stack>
    )
}
