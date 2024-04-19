import { useState } from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Button from '@mui/material/Button'

import {
    StyledAppBar,
    StyledToolbar,
    StyledTypographyOne,
    StyledTypographyLogo,
    StyledTypographyPartialLogo,
    StyledBoxButtons,
    StyledBoxButtonsMenu,
    StyledBoxContent,

} from './StylesHeader'


function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = useState(null)

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    return (
        <StyledAppBar position="static">

            <StyledToolbar disableGutters>

                <StyledTypographyOne
                    variant="h6"
                    noWrap
                    component="a"
                    href="#app-bar-with-responsive-menu"
                >
                    <StyledTypographyLogo >SITE</StyledTypographyLogo>

                    <StyledTypographyPartialLogo >VIX</StyledTypographyPartialLogo>

                </StyledTypographyOne>

                <StyledBoxButtons>

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
                </StyledBoxButtons>

                <StyledBoxContent >

                    <StyledBoxButtonsMenu href='/'>
                        Página Inicial
                    </StyledBoxButtonsMenu>

                    <StyledBoxButtonsMenu>
                        Sites
                    </StyledBoxButtonsMenu>

                    <StyledBoxButtonsMenu href='/pages/contact'>
                        Contato
                    </StyledBoxButtonsMenu>

                </StyledBoxContent>

            </StyledToolbar>

        </StyledAppBar>
    )
}
export default ResponsiveAppBar