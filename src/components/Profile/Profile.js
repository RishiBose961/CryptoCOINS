import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';

export default function Profile() {
    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('sm');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleMaxWidthChange = (event) => {
        setMaxWidth(
            // @ts-expect-error autofill of arbitrary value is not handled.
            event.target.value,
        );
    };

    const handleFullWidthChange = (event) => {
        setFullWidth(event.target.checked);
    };

    return (
        <React.Fragment>
            <Button onClick={handleClickOpen} sx={{ color: 'black' }}>
                Profile
            </Button>
            <Dialog
                fullWidth
                maxWidth='lg'
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>Profile</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Welcome,
                    </DialogContentText>
                    <div className="grid grid-rows-3 grid-flow-col gap-4 mt-5">
                        <div className="row-span-3 ...">01</div>
                        <div className="col-span-2 ...">
                            <p className="font-semibold">Name : </p>
                        </div>
                        <div className="row-span-2 col-span-2 ...">
                        <p className="font-semibold">Email @ : </p>
                        <p className="font-semibold">Phone Number : </p>
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment >
    );
}
