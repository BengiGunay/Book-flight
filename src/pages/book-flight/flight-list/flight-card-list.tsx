import { useSelector } from 'react-redux'
import {
    getFlightList,
    getFormValues,
} from '../../search-flight/redux/selector'
import { useEffect, useMemo, useState } from 'react'
import { Grid, Paper, RadioGroup } from '@mui/material'
import { FlightCard } from './flight-card/flight-card'
import { TravelCategoryCardList } from './category-card/travel-category-card-list'
import { SubCategoryCardList } from './category-card/sub-category-card-list'
import { getOrderCriteria } from '../redux/selector'
import dayjs from 'dayjs'
type Category = 'BUSINESS' | 'ECONOMY'
export const FlightCardList = () => {
    const [radioButtonValue, setRadioButtonValue] = useState('')
    const [subCategoryIndex, setSubCategoryIndex] = useState(-1)
    const [selectedCategory, setSelectedCategory] =
        useState<Category>('ECONOMY')

    const flightList = useSelector(getFlightList)
    const formValues = useSelector(getFormValues)
    const orderCriteria = useSelector(getOrderCriteria)
    const orderedFlightList = useMemo(() => {
        const selectedCategory = formValues?.classType.toUpperCase() ?? 'E' // Economy or bussines
        const categoryKey = selectedCategory === 'E' ? 'ECONOMY' : 'BUSINESS'
        const flightSumList = flightList.map((flight) => {
            const depDate = flight.departureDateTimeDisplay
            const ecoFly = flight.fareCategories[
                categoryKey
            ].subcategories.find((sub) => sub.brandCode == 'ecoFly')

            return {
                deperatureDate: depDate,
                ecoFlyPrice: ecoFly?.price.amount ?? 0,
            }
        })
        if (orderCriteria === 'ecoFly')
            flightSumList.sort((f1, f2) => f1.ecoFlyPrice - f2.ecoFlyPrice)
        else
            flightSumList.sort(
                (f1, f2) =>
                    dayjs(f1.deperatureDate, 'HH:mm').toDate().getTime() -
                    dayjs(f2.deperatureDate, 'HH:mm').toDate().getTime()
            )
        const sortedFlightList = flightSumList.map((summedFlight) => {
            return flightList.find(
                (flight) =>
                    flight.departureDateTimeDisplay ==
                    summedFlight.deperatureDate
            )
        })
        return sortedFlightList
    }, [flightList, formValues, orderCriteria])

    useEffect(() => {
        setRadioButtonValue('')
        setSubCategoryIndex(-1)
        setSelectedCategory('ECONOMY')
    }, [orderCriteria])

    return (
        <Grid container>
            <Grid item xs={3} />
            <Grid item xs={7}>
                <Paper elevation={3} sx={{ backgroundColor: '#f8f8f8' }}>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={radioButtonValue}
                        onChange={(_, value) => {
                            const selected = value.split('-')
                            setRadioButtonValue(value)
                            setSelectedCategory(selected[1] as Category)
                            setSubCategoryIndex(Number(selected[2]))
                        }}
                    >
                        {(orderedFlightList ?? []).map((flight, index) => {
                            if (flight)
                                return (
                                    <Grid
                                        container
                                        key={
                                            flight.departureDateTimeDisplay +
                                            flight.arrivalDateTimeDisplay
                                        }
                                    >
                                        <Grid item xs={6}>
                                            <FlightCard flight={flight} />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TravelCategoryCardList
                                                index={index}
                                                flight={flight}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            {radioButtonValue.length > 0 &&
                                                subCategoryIndex === index && (
                                                    <SubCategoryCardList
                                                        type={selectedCategory}
                                                        depTime={
                                                            flight.departureDateTimeDisplay
                                                        }
                                                        category={
                                                            flight
                                                                .fareCategories[
                                                                selectedCategory
                                                            ]
                                                        }
                                                    />
                                                )}
                                        </Grid>
                                    </Grid>
                                )
                        })}
                    </RadioGroup>
                </Paper>
            </Grid>
            <Grid item xs={2} />
        </Grid>
    )
}
