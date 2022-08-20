import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';
import imges from '../../images/cryptocurrencies.png'
import Login from '../Login/Login';
export default function AppBarrr() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toolbar sx={{
        backgroundImage: 'radial-gradient(circle, #36fb18, #00ed9b, #00d7e4, #00bafc, #0a99e5);',
        borderRadius: '15px',
        mt: 1,
        mb: 4
      }}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          {/* <MenuBar /> */}
        </IconButton>
        <AppBar />
        <Link to='/'>
        <Avatar sx={{mr:4}} alt="Remy Sharp" src={imges} />
        </Link>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to='/'>
            CryptoCoins
          </Link>

        </Typography>

        {/* <button className="mr-5 hover:bg-red-600 rounded-full w-20" color="inherit"><Login/></button> */}
      </Toolbar>
    </Box>
  );
}
