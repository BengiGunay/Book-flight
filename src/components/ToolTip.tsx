/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react'
import { Tooltip } from '@mui/material'

type ToolTipProps = {
    title: ReactNode
    children: React.ReactElement<any, any>
}

export const ToolTip = (props: ToolTipProps) => {
    const { children, title } = props
    return (
        <Tooltip title={title} arrow placement="bottom" disableFocusListener>
            {children}
        </Tooltip>
    )
}
