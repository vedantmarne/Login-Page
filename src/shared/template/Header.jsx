import React, { useState } from 'react';
import { MenuIcon } from '../my-cart-icons'
import {
    AppBar, Box, Toolbar, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem, IconButton
} from '../my-cart-material'
import MyCartMenu from './MyCartMenu'
import { useHistory } from 'react-router-dom';

const Header = ({ currentUser }) => {

    const [showMenu, setShowMenu] = useState(false)
    const [allUserMenu, setallUserMenu] = useState(['My Profile', 'Logout'])
    const history = useHistory()

    const handleOpenMenu = () => {
        setShowMenu(true)
    }
    const handleCloseMenu = () => {
        setShowMenu(false)
    }

    const navigateByUserMenu = (menuName) =>{
        console.log(menuName);
        if(menuName=='My Profile')
            history.push('/home/' + currentUser.role + '/MyProfile')
        else if(menuName=='Logout')
            history.push('/login')
    }

    const webbody = {
        backgroundColor: "#006999"
    }

    return (
        <div >
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography>My cart</Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <MyCartMenu role={currentUser.role} />
                        </Box>
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title={`${currentUser.firstName} ${currentUser.lastName}`} >
                                <IconButton sx={{ p: 0 }} onClick={handleOpenMenu}>
                                    <Avatar></Avatar>
                                </IconButton>
                            </Tooltip>
                            <Menu open={showMenu} onClose={handleCloseMenu}
                                sx={{ mt: '45px' }}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}>
                                {
                                    allUserMenu.map((userMenu, index) => (
                                        <MenuItem key={index} onClick={()=>navigateByUserMenu(userMenu)}>
                                            <Typography>{userMenu}</Typography>
                                        </MenuItem>
                                    ))

                                }
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}

export default Header;