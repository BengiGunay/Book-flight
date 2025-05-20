import { Card, CardContent, Stack } from '@mui/material'
import { Category } from '../../../search-flight/redux/type'
import { SubCategoryCard } from './sub-category-card'
type SubCategoryCardListProps = {
    category: Category
    depTime: string
    type: string
}
export const SubCategoryCardList = (props: SubCategoryCardListProps) => {
    const { category, type } = props
    return (
        <Card sx={{ margin: '16px' }}>
            <CardContent>
                <Stack
                    direction={'row'}
                    justifyContent="space-between"
                    spacing={2}
                >
                    {category.subcategories.map((sub) => (
                        <SubCategoryCard
                            item={sub}
                            type={type}
                            key={sub.price + '-' + sub.order}
                        />
                    ))}
                </Stack>
            </CardContent>
        </Card>
    )
}
