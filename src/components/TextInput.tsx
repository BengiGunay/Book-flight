import { Box, InputAdornment, TextField } from '@mui/material'
import { Icon } from './Icon'
import { ToolTip } from './ToolTip'
import { ReactNode, useState } from 'react'

type TextInputProps = {
    id: string
    icon: string
    label: string
    type: string
    value: string | number
    tooltip?: boolean
    tooltipElement?: ReactNode
    errorText?: string
    onChangeValue: (value: string | number) => void
}

export const TextInput = (props: TextInputProps) => {
    const {
        id,
        icon,
        label,
        type,
        tooltip,
        tooltipElement,
        value,
        onChangeValue,
        errorText,
    } = props
    const [error, setError] = useState(false)
    const numberControl = (value: string | number) => {
        if (type === 'number') {
            if (Number(value) > 0) {
                setError(false)
                return true
            } else return false
        } else return true
    }
    return (
        <>
            <Box
                sx={{
                    '& > :not(style)': { m: 1 },
                    backgroundColor: 'white',
                    borderRadius: '4px',
                }}
            >
                {tooltip ? (
                    <ToolTip title={tooltipElement}>
                        <TextField
                            id={id}
                            error={error}
                            label={label}
                            type={type}
                            value={value}
                            onChange={(e) => {
                                if (numberControl(e.target.value)) {
                                    onChangeValue(e.target.value)
                                } else {
                                    setError(true)
                                }
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Icon name={icon} />
                                    </InputAdornment>
                                ),
                            }}
                            helperText={errorText ?? ''}
                            variant="outlined"
                        />
                    </ToolTip>
                ) : (
                    <TextField
                        id="input-with-icon-textfield"
                        label={label}
                        type={type}
                        value={value}
                        onChange={(e) => {
                            if (numberControl(e.target.value)) {
                                onChangeValue(e.target.value)
                            } else {
                                setError(true)
                            }
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Icon name={icon} />
                                </InputAdornment>
                            ),
                        }}
                        helperText={errorText ?? ''}
                        variant="outlined"
                    />
                )}
            </Box>
        </>
    )
}
