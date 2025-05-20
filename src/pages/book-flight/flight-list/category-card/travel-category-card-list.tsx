import { Grid } from '@mui/material'
import { Flight } from '../../../search-flight/redux/type'
import { TravelCategoryCard } from './travel-category-card'

type TravelCategoryCardListProp = {
    flight: Flight
    index: number
}

export const TravelCategoryCardList = (props: TravelCategoryCardListProp) => {
    const { flight, index } = props

    const bussiness = flight.fareCategories.BUSINESS.subcategories.find(
        (subCategory) => subCategory.brandCode === 'ecoFly'
    )
    const economy = flight.fareCategories.ECONOMY.subcategories.find(
        (subCategory) => subCategory.brandCode === 'ecoFly'
    )

    return (
        <Grid container>
            <Grid item xs={6}>
                <TravelCategoryCard
                    index={index}
                    type="ECONOMY"
                    price={economy?.price}
                    depTime={flight.departureDateTimeDisplay}
                />
            </Grid>
            <Grid item xs={6}>
                <TravelCategoryCard
                    index={index}
                    type="BUSINESS"
                    price={bussiness?.price}
                    depTime={flight.departureDateTimeDisplay}
                />
            </Grid>
        </Grid>
    )
}
