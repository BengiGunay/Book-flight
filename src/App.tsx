import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import './App.css'

import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'

function App() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <RouterProvider router={routes} />
        </LocalizationProvider>
    )
}

export default App
