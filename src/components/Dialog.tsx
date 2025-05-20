import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles/'

type BDialogProps = {
    title: string
    text: string
    buttonName: string
    open: boolean
    handleDialog: (value: boolean) => void
}
export default function BDialog(props: BDialogProps) {
    const { title, text, buttonName, open, handleDialog } = props
    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

    const handleClose = () => {
        handleDialog(false)
    }

    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>{text}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        {buttonName}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
