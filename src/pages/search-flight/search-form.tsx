import { BDatePicker } from '../../components/DatePicker'
import { TextInput } from '../../components/TextInput'
import { Grid, IconButton } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { TravelClassPicker } from './travel-class-picker'
import { useDispatch } from 'react-redux'
import { commitFormValues } from './redux/slice'
import { Form } from './redux/type'
import { useState } from 'react'
import dayjs from 'dayjs'
import BDialog from '../../components/Dialog'

export const SearchForm = () => {
    const dispatch = useDispatch()
    const [dialogOpen, setDialogOpen] = useState(false)
    const [formValues, setFormValues] = useState<Form>({
        from: '',
        to: '',
        flightDate: dayjs(new Date()),
        personNumber: 1,
        classType: 'E',
    })
    const handleOnClick = () => {
        if (formValues.to === '' || formValues.from === '') {
            setDialogOpen(true)
        } else dispatch(commitFormValues(formValues))
    }
    return (
        <Grid
            container
            spacing={1}
            direction="row"
            alignItems="center"
            sx={{
                backgroundColor: '#506275',
                padding: '15px',
                margin: '2em',
            }}
        >
            <Grid item xs={3}>
                <TextInput
                    id="from"
                    type="text"
                    icon={'flight-take-off'}
                    label={'Nereden'}
                    value={formValues.from}
                    onChangeValue={(value) => {
                        setFormValues((prev) => ({
                            ...prev,
                            from: value as string,
                        }))
                    }}
                />
            </Grid>
            <Grid item xs={3}>
                <TextInput
                    id="to"
                    type="text"
                    icon={'flight-land'}
                    label={'Nereye'}
                    value={formValues.to}
                    onChangeValue={(value) => {
                        setFormValues((prev) => ({
                            ...prev,
                            to: value as string,
                        }))
                    }}
                />
            </Grid>
            <Grid item xs={3}>
                <BDatePicker
                    value={formValues.flightDate}
                    onChangeValue={(value) => {
                        setFormValues((prev) => ({
                            ...prev,
                            flightDate: value,
                        }))
                    }}
                />
            </Grid>
            <Grid item xs={2}>
                <TextInput
                    id="person-number"
                    value={formValues.personNumber}
                    onChangeValue={(value) => {
                        setFormValues((prev) => ({
                            ...prev,
                            personNumber: value as number,
                        }))
                    }}
                    icon={'person'}
                    label={'Yolcu Sayısı'}
                    tooltip
                    tooltipElement={
                        <TravelClassPicker
                            value={formValues.classType}
                            onChangeValue={(value) => {
                                setFormValues((prev) => ({
                                    ...prev,
                                    classType: value,
                                }))
                            }}
                        />
                    }
                    type="number"
                />
            </Grid>
            <Grid item xs={1}>
                <IconButton
                    className="icon-button"
                    aria-label="delete"
                    onClick={() => handleOnClick()}
                >
                    <NavigateNextIcon sx={{ fontSize: 40, color: 'white' }} />
                </IconButton>
            </Grid>
            <BDialog
                title="Uyarı"
                text="Devam etmek için lütfen kalkış ve varış noktaları seçiniz."
                buttonName="Tamam"
                open={dialogOpen}
                handleDialog={(value) => {
                    setDialogOpen(value)
                }}
            />
        </Grid>
    )
}
