import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';


export default function Header(){
    return(
        <AppBar position="fixed" color="primary">
            <Toolbar>
                <AssignmentIndIcon style={{ fontSize: '30px' }} />
                <Typography variant='h6' component="h1" style={{ marginLeft: '8px' }}>Listagem de Trabalhadores</Typography>
            </Toolbar>
        </AppBar>
    )
}