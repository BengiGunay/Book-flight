import { Box } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import { Dayjs } from 'dayjs'
type BDatePickerProps = {
    value: Dayjs | null
    onChangeValue: (newValue: Dayjs | null) => void
}
export const BDatePicker = (props: BDatePickerProps) => {
    const { value, onChangeValue } = props
    return (
        <Box
            sx={{
                '& > :not(style)': { m: 1 },
                backgroundColor: 'white',
                borderRadius: '4px',
            }}
        >
            <DatePicker label="Tarih" value={value} onChange={onChangeValue} />
        </Box>
    )
}
