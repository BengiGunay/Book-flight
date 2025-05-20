import { RootState } from '../../../store'

export const getHeaderColor = (state: RootState) => state.layout.headerTheme
