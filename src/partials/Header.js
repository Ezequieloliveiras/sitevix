import Drawer from './Drawer'
import Link from 'next/link'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

import {
    StyledAppBar,
    StyledToolbar,
    StyledLinkLogo,
    StyledTypographyLogo,
    StyledTypographyPartialLogo,
    StyledBoxButtons,
    StyledBoxButtonsMenu,
    StyledBoxContent,
    BoxWhatsapp
} from './StylesHeader'

function ResponsiveAppBar() {
    return (
        <StyledAppBar position="static">
            <StyledToolbar disableGutters>
                <StyledBoxButtons>
                    <Drawer />
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
                    <BoxWhatsapp>
                        <Link href="https://api.whatsapp.com/send?phone=27997337338">
                            <WhatsAppIcon sx={{ color: '#66bb6a' }} id='iconeWhatsapp' />
                        </Link>
                    </BoxWhatsapp>
                </StyledBoxContent>
            </StyledToolbar>
        </StyledAppBar>
    )
}
export default ResponsiveAppBar