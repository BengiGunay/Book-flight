/* eslint-disable react-hooks/exhaustive-deps */
import { Stack } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { WelcomeMessage } from './welcome-message'
import { SearchForm } from './search-form'
import { getFormValues } from './redux/selector'
import { useEffect, useState } from 'react'
import { flightInfo } from '../../data/flights'
import BDialog from '../../components/Dialog'
import { useNavigate } from 'react-router-dom'
import { commitHeaderTheme } from '../layout/redux/slice'
import { commitSelectedFlights } from './redux/slice'

export const SearchFlight = () => {
    const formValues = useSelector(getFormValues)
    const dispatch = useDispatch()
    const [dialogOpen, setDialogOpen] = useState(false)
    const navigate = useNavigate()

    const convertEnglish = (phrase: string) => {
        let returnString = phrase.toLowerCase()
        //Convert Characters
        returnString = returnString.replace(/ö/g, 'o')
        returnString = returnString.replace(/ç/g, 'c')
        returnString = returnString.replace(/ş/g, 's')
        returnString = returnString.replace(/ı/g, 'i')
        returnString = returnString.replace(/ğ/g, 'g')
        returnString = returnString.replace(/ü/g, 'u')

        // if there are other invalid chars, convert them into blank spaces
        returnString = returnString.replace(/[^a-z0-9\s-]/g, '')
        // convert multiple spaces and hyphens into one space
        returnString = returnString.replace(/[\s-]+/g, ' ')
        // trims current string
        returnString = returnString.replace(/^\s+|\s+$/g, '')
        return returnString
    }
    const searchForFlights = () => {
        const flightsExist = flightInfo.flights.filter(
            (elem) =>
                elem.originAirport.city.name.toLowerCase() ===
                    convertEnglish(formValues?.from ?? '') &&
                elem.destinationAirport.city.name.toLowerCase() ===
                    convertEnglish(formValues?.to ?? '')
        )
        if (flightsExist.length === 0) setDialogOpen(true)
        else {
            dispatch(commitHeaderTheme('whiteMode'))
            dispatch(commitSelectedFlights(flightsExist))
            navigate('/flight-list')
        }
    }
    useEffect(() => {
        dispatch(commitHeaderTheme('darkMode'))
    }, [])
    useEffect(() => {
        if (formValues) {
            searchForFlights()
        }
    }, [formValues])

    return (
        <div id="search-flight">
            <Stack
                alignItems={'center'}
                direction="column"
                justifyContent={'center'}
                margin={'1em'}
                marginBottom={'10vh'}
                display={'flex'}
            >
                <WelcomeMessage />
                <SearchForm />
                <BDialog
                    title="Uyarı"
                    text="Seçtiğiniz kalkış ve varış noktaları için uygun uçuş bulunamamıştır."
                    buttonName="Tamam"
                    open={dialogOpen}
                    handleDialog={(value) => {
                        setDialogOpen(value)
                    }}
                />
            </Stack>
        </div>
    )
}
