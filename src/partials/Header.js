'use client'


import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Button from '@mui/material/Button'
import styled from 'styled-components'

const StyledAppBar = styled(AppBar).attrs({

    position: "static"
})`

&& {

    background-color:#fff;
     display:flex;
     justify-content:center;
     align-items:'center'
}

`

const StyledToolbar = styled(Toolbar)`

&& {

    display: flex;
     justify-content: center;
      margin: auto;
      color: #757575;
}
`

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = useState(null)

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    return (
        <StyledAppBar position="static" >

            <StyledToolbar disableGutters >
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="#app-bar-with-responsive-menu"
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    <Typography sx={{ fontWeight: 'bold', fontSize: '30px', color: '#757575' }}>SITE</Typography>
                    <Typography sx={{ fontWeight: 'bold', color: '#ef6c00', fontSize: '30px' }}>VIX</Typography>
                </Typography>


                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                        <Box>

                            <Button href='/' >Página Inicial</Button>
                        </Box>
                        <Box>

                            <Button>Sites</Button>
                        </Box>
                        <Box>

                            <Button href='/pages/contact'>Contato</Button>
                        </Box>

                    </Menu>
                </Box>
                <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href="#app-bar-with-responsive-menu"
                    sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    <Typography sx={{ fontWeight: 'bold', fontSize: '30px', color: '#757575' }}>SITE</Typography>
                    <Typography sx={{ fontWeight: 'bold', color: '#ef6c00', fontSize: '30px' }}>VIX</Typography>
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    <Button
                        href='/'
                        sx={{ my: 2, color: '#757575', display: 'block' }}>
                        Página Inicial
                    </Button>
                    <Button
                        sx={{ my: 2, color: '#757575', display: 'block' }}>
                        Sites
                    </Button>
                    <Button
                        href='/pages/contact'
                        sx={{ my: 2, color: '#757575', display: 'block' }}>
                        Contato
                    </Button>
                </Box>
            </StyledToolbar>

        </StyledAppBar>
    );
}
export default ResponsiveAppBar;