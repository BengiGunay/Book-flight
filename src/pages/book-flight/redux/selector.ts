import { RootState } from '../../../store'

export const getOrderCriteria = (state: RootState) =>
    state.bookFlight.orderCriteria
export const getPromotionCodeState = (state: RootState) =>
    state.bookFlight.promotionCodeState
export const getSelectedSubCategoryStatus = (state: RootState) =>
    state.bookFlight.selectedSubCategoryStatus
export const getSelectedPrice = (state: RootState) =>
    state.bookFlight.selectedPrice
export const getSelectedCurrency = (state: RootState) =>
    state.bookFlight.selectedCurrency
