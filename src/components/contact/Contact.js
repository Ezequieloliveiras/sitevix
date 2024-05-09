import { Box, Typography, Link } from '@mui/material'
import styled from 'styled-components'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox'

import FormContact from './form/formContact'

const StyledTypography = styled(Typography)`
    color: #ef6c00;
`

const StyledBox = styled(Box)`
    border: 1px solid grey;
    background-color: #f9f9f9;
    border-radius: 10px ;
    padding: 20px;
    margin: 5px;
    max-width: 300px;
`

const StyledBoxContacts = styled(Box)`
    display: flex;
    
`
const StyledForwardToInboxIcon = styled(ForwardToInboxIcon)`
    margin-right: 10px;
    color: #0f3464;
`

const StyledWhatsAppIcon = styled(WhatsAppIcon)`
    margin-right: 10px;
    color: #25d366;
`

const ContactPage = () => {

  return (
    <>


      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '100vh',
          justifyContent: 'center'
        }}>


        {/* <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>

          <StyledTypography
            variant="h3"

            gutterBottom

          >
            Contato
          </StyledTypography>

          <StyledBox
          >

            <Typography color="grey">

              Para entrar em contato conosco, utilize os seguintes meios:

            </Typography>

            <Box
              display="flex"
              flexDirection="column"
              marginTop={2}
            >

              <StyledBoxContacts marginBottom={1}>

                <StyledForwardToInboxIcon />

                <Link href="mailto:ezequieloliveiraes@outlook.com">ezequieloliveiraes@outlook.com</Link>

              </StyledBoxContacts>

              <StyledBoxContacts >

                <StyledWhatsAppIcon />

                <Link href="https://api.whatsapp.com/send?phone=27997337338">WhatsApp</Link>

              </StyledBoxContacts>

            </Box>

          </StyledBox>

        </div> */}
        <div>

        <FormContact />
        </div>

      </div>
    </>

  )

}

export default ContactPage
