import { RootState } from '../../../store'

export const getFormValues = (state: RootState) => state.searchFlight.formValues
export const getFlightList = (state: RootState) => state.searchFlight.flightList
