import { useState } from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'

import {
    StyledAppBar,
    StyledToolbar,
    StyledDivLogo,
    StyledTypographyLogo,
    StyledTypographyPartialLogo,
    StyledBoxButtons,
    StyledBoxButtonsMenuIcon,
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

                <StyledDivLogo
                    variant="h6"
                    noWrap
                    component="a"
                    href="#app-bar-with-responsive-menu"
                >
                    <StyledTypographyLogo >SITE</StyledTypographyLogo>

                    <StyledTypographyPartialLogo >VIX</StyledTypographyPartialLogo>

                </StyledDivLogo>

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
                            <StyledBoxButtonsMenuIcon href='/'>
                                Página Inicial
                            </StyledBoxButtonsMenuIcon>
                        </Box>

                        <Box>
                            <StyledBoxButtonsMenuIcon>
                                Sites
                            </StyledBoxButtonsMenuIcon>
                        </Box>

                        <Box>
                            <StyledBoxButtonsMenuIcon href='/pages/contact'>
                                Contato
                            </StyledBoxButtonsMenuIcon>
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