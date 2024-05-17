import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import styled from 'styled-components'
import Link from 'next/link'

const StyledAppBar = styled(AppBar)`
    && {
        background-color:#482880;
        display:flex;
        justify-content:center;
    }
`
const StyledToolbar = styled(Toolbar)`
    && {
        display: flex;
        justify-content: center;
        margin: auto;
    }
`
const StyledLinkLogo= styled(Link)`
    && {
        display: flex;
        font-family: monospace;
        font-weight: 700;
        letter-spacing: .3rem;
        color: inherit;
        text-decoration: none;
        margin-right: 10px;
    }
`
const StyledTypographyLogo = styled(Typography)`
    && {
        font-weight: bold;
        font-size: 30px;
        color: #fff;
    }
`
const StyledTypographyPartialLogo = styled(Typography)`
    && {
        font-weight: bold;
        color: #ef6c00;
        font-size: 30px;
    }
`
const StyledBoxButtons = styled(Box)`
    && {
        flex-grow: 1;
        display: flex;
        @media (min-width: 768px) {
        display: none; /* Esconde em telas médias e maiores */
        }
    }
`
const StyledBoxButtonsMenuIcon = styled(Button)`
    && {
        color: #ef6c00;
    }
`
const StyledBoxButtonsMenu = styled(Button)`

    && {
        color: #fff;
        display: block;
        text-transform: none;
    }
`
const StyledBoxContent = styled(Box)`
    && {
        flex-grow: 1;
        display: none; /* Por padrão, esconde em telas extra pequenas (xs) */
        margin-left: 5px;

        @media (min-width: 768px) {
            display: flex; /* Exibe em telas de tamanho médio (md) e maiores */
        }
    }
`
const BoxWhatsapp = styled(Box)`
&&{
    display: flex;
    align-items: center;
     margin-left: 10px;
}

`
export {
    StyledAppBar,
    StyledToolbar,
    StyledLinkLogo,
    StyledTypographyLogo,
    StyledTypographyPartialLogo,
    StyledBoxButtons,
    StyledBoxButtonsMenuIcon,
    StyledBoxButtonsMenu,
    StyledBoxContent,
    BoxWhatsapp,
}