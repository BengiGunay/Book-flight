export type City = {
    code: string
    name: string
}
export type Country = {
    code: string
    name: string
}
export type Airport = {
    name: string
    code: string
    city: City
    country: Country
}
export type Price = {
    amount: number
    currency: string
}
export type SubCategory = {
    brandCode?: string
    price: Price
    order: number
    status: string
    rights?: string[]
}
export type Category = {
    subcategories: SubCategory[]
}
export type Flight = {
    originAirport: Airport
    destinationAirport: Airport
    arrivalDateTimeDisplay: string
    departureDateTimeDisplay: string
    flightDuration: string
    fareCategories: {
        BUSINESS: Category
        ECONOMY: Category
    }
}
export type Index = {
    orderCriteria: string
    selectedSubCategoryStatus: string
    promotionCodeState: boolean
    selectedCurrency: string
    selectedPrice: number
}
