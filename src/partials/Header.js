import Drawer from './Drawer'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { Box } from '@mui/material'
import Link from 'next/link'

import {
    StyledAppBar,
    StyledToolbar,
    StyledLinkLogo,
    StyledTypographyLogo,
    StyledTypographyPartialLogo,
    StyledBoxButtons,
    StyledBoxButtonsMenu,
    StyledBoxContent,

} from './StylesHeader'

function ResponsiveAppBar() {
    return (
        <StyledAppBar position="static">
            <StyledToolbar disableGutters>
                <StyledBoxButtons>
                    <Drawer/>
                </StyledBoxButtons>
                <StyledLinkLogo href="/">
                    <StyledTypographyLogo >SITE</StyledTypographyLogo>
                    <StyledTypographyPartialLogo>VIX</StyledTypographyPartialLogo>
                </StyledLinkLogo>
                <StyledBoxContent>
                    <StyledBoxButtonsMenu href='/' id='botaoInicio'>
                        Inicío
                    </StyledBoxButtonsMenu>
                    <StyledBoxButtonsMenu href='/pages/contact' id='botaoContato'>
                        Contato
                    </StyledBoxButtonsMenu>
                    <StyledBoxButtonsMenu href='/pages/support' id='botaoSuporte'>
                        Suporte e Planos
                    </StyledBoxButtonsMenu>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
                        <Link href="https://api.whatsapp.com/send?phone=27997337338">
                            <WhatsAppIcon sx={{ color: 'green' }} />
                        </Link>
                    </Box>
                </StyledBoxContent>
            </StyledToolbar>
        </StyledAppBar>
    )
}
export default ResponsiveAppBar