import React from 'react';
import { AppBar, Toolbar, Grid, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const navigate = useNavigate()

    const handleHomePage = ()=>{
        navigate("/")
    }
    const handleCreateUser = () =>{
        navigate("/create-user")

    }
    const handleBlog = () =>{
        navigate("/blog")
    }
    const handleUserList = () =>{
        navigate("/user-list")
    }
    return (
        <>
            <AppBar>
                <Toolbar color='primary'>
                    <Grid container alignItems="center" marginLeft={10} onClick={handleHomePage}>
                        <AccessibilityNewIcon sx={{fontSize: '35px', cursor: 'pointer'}}/>
                        <Typography variant='h5' marginLeft={1} sx={{cursor:"pointer"}}>Myth</Typography>
                    </Grid>
                    <Grid container>
                        <Typography sx={{marginLeft: '55px', transition: 'all .8s ease', cursor: 'pointer','&:hover':{color: '#000'}}} onClick={handleHomePage}>Home</Typography>
                        <Typography sx={{marginLeft: '55px', transition: 'all .8s ease', cursor: 'pointer','&:hover':{color: '#000'}}} onClick={handleUserList}>Table</Typography>
                        <Typography sx={{marginLeft: '55px', transition: 'all .8s ease', cursor: 'pointer','&:hover':{color: '#000'}}} onClick={handleBlog}>Myth</Typography>
                        <Typography sx={{marginLeft: '55px', transition: 'all .8s ease', cursor: 'pointer','&:hover':{color: '#000'}}} onClick={handleCreateUser}>Create User</Typography>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;