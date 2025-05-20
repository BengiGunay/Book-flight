import { Typography } from '@mui/material'

export const WelcomeMessage = () => {
    return (
        <>
            <Typography variant="h4" color={'white'} sx={{ paddingTop: '1em' }}>
                Merhaba
            </Typography>
            <Typography variant="h5" color={'white'} sx={{ paddingTop: '1em' }}>
                Nereyi keşfetmek isterdiniz ?
            </Typography>
        </>
    )
}
