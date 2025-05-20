import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    Typography,
} from '@mui/material'
type TravelClassPickerProps = {
    value: string
    onChangeValue: (newValue: string) => void
}
export const TravelClassPicker = (props: TravelClassPickerProps) => {
    const { value, onChangeValue } = props
    return (
        <>
            <FormControl sx={{ p: 2 }}>
                <FormLabel id="demo-row-radio-buttons-group-label">
                    Kabin Seçimi
                </FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    value={value}
                    onChange={(_, value) => onChangeValue(value)}
                >
                    <FormControlLabel
                        value="E"
                        control={<Radio size="small" />}
                        label={
                            <Typography variant="body2" color="textSecondary">
                                Economy Class
                            </Typography>
                        }
                    />
                    <FormControlLabel
                        value="B"
                        control={<Radio size="small" />}
                        label={
                            <Typography variant="body2" color="textSecondary">
                                Busines Class
                            </Typography>
                        }
                    />
                </RadioGroup>
            </FormControl>
        </>
    )
}
