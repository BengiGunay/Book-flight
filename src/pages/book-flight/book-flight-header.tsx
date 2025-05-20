/* eslint-disable react-hooks/exhaustive-deps */
import { Chip, Grid, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { useMemo, useEffect } from 'react'
//import { useNavigate } from 'react-router-dom'
import { getFormValues } from '../search-flight/redux/selector'
import { useNavigate } from 'react-router-dom'

export const BookFlightHeader = () => {
    const formValues = useSelector(getFormValues)
    const navigate = useNavigate()

    const capitalizeFirstLetter = (str: string) =>
        str.charAt(0).toUpperCase() + str.slice(1)
    const source = useMemo(
        () => (formValues?.from ? capitalizeFirstLetter(formValues.from) : ''),
        [formValues]
    )
    const destination = useMemo(
        () => (formValues?.to ? capitalizeFirstLetter(formValues.to) : ''),
        [formValues]
    )
    const peopleCount = useMemo(
        () => formValues?.personNumber ?? 1,
        [formValues]
    )
    useEffect(() => {
        if (formValues === null) navigate('/')
    }, [formValues])
    return (
        <Grid container spacing={2} sx={{ textAlign: 'left' }}>
            <Grid item xs={3} />
            <Grid item xs={3}>
                <Chip color="error" label="Uçuş" className="chip" />
            </Grid>
            <Grid item xs={6} />
            <Grid item xs={3} />
            <Grid item xs={4}>
                <Typography variant="h5">
                    {source +
                        ' - ' +
                        destination +
                        ', ' +
                        peopleCount +
                        ' Yolcu'}
                </Typography>
            </Grid>
            <Grid item xs={4} />
        </Grid>
    )
}
