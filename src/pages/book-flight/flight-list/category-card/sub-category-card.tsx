import {
    Button,
    Card,
    Grid,
    Typography,
    List,
    ListItem,
    Divider,
    ListItemText,
} from '@mui/material'
import { Price, SubCategory } from '../../../search-flight/redux/type'
import { useDispatch, useSelector } from 'react-redux'
import {
    commitSelectedCurrency,
    commitSelectedPrice,
    commitSelectedSubCategoryStatus,
} from '../../redux/slice'
import { useNavigate } from 'react-router-dom'
import { getPromotionCodeState } from '../../redux/selector'

type SubCategoryCardProps = {
    item: SubCategory
    type: string
}

type SubCategoryCardHeaderProps = {
    brandCode: string
    price: Price
    type: string
}
const SubCategoryCardHeader = (props: SubCategoryCardHeaderProps) => {
    const promotionCodeState = useSelector(getPromotionCodeState)
    const { brandCode, price, type } = props
    const amount = price?.amount ?? 0
    return (
        <Grid container sx={{ backgroundColor: '#f4f5f9', padding: '5px' }}>
            <Grid item xs={7}>
                <Typography textAlign={'left'} variant={'h5'}>
                    {brandCode}
                </Typography>
            </Grid>
            <Grid item xs={5} display={'flex'} flexDirection={'row-reverse'}>
                <Typography
                    variant={'h6'}
                    alignSelf={'flex-start'}
                    paddingTop={0}
                >
                    {promotionCodeState && type === 'ECONOMY'
                        ? Math.round(amount / 2)
                        : amount}
                </Typography>
                <Typography variant={'caption'} alignSelf={'flex-start'}>
                    {price?.currency ?? ''}
                </Typography>
            </Grid>
        </Grid>
    )
}
export const SubCategoryCard = (props: SubCategoryCardProps) => {
    const promotionCodeState = useSelector(getPromotionCodeState)
    const { item, type } = props
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
        <Card sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            <SubCategoryCardHeader
                brandCode={item.brandCode ?? ''}
                price={item.price}
                type={type}
            />

            <List
                dense
                sx={{ flexGrow: 1 }}
                key={'list' + item.price.amount + type}
            >
                {item.rights?.map((right) => {
                    return (
                        <>
                            <ListItem
                                key={
                                    item.rights?.toString() +
                                    ' -' +
                                    item.price.amount
                                }
                            >
                                <ListItemText primary={right} />
                            </ListItem>
                            <Divider />
                        </>
                    )
                })}
            </List>

            <Button
                className="flight-pick-button"
                size="large"
                disabled={promotionCodeState && item.brandCode !== 'ecoFly'}
                onClick={() => {
                    const amount = item.price?.amount ?? 0
                    const selectedPriceAmount =
                        promotionCodeState && type === 'ECONOMY'
                            ? Math.round(amount / 2)
                            : amount

                    dispatch(commitSelectedSubCategoryStatus(item.status))
                    dispatch(commitSelectedPrice(selectedPriceAmount))
                    dispatch(commitSelectedCurrency(item.price?.currency ?? ''))

                    navigate('/result')
                }}
            >
                Uçuşu Seç
            </Button>
        </Card>
    )
}
