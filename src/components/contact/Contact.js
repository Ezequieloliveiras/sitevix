import { Box, Typography, Link, Grid } from '@mui/material'
import styled from 'styled-components'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox'

const StyledGridContainer = styled(Grid)`
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
`

const StyledTypography = styled(Typography)`
    color: #ef6c00;
`

const StyledBox = styled(Box)`
    border: 1px solid grey;
    background-color: #f9f9f9;
    border-radius: 10px ;
    padding: 50px;
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

      <StyledGridContainer container>

        <Grid
          item xs={12}
          sm={8}
          md={6}
          lg={4}
          margin={10}
        >

          <StyledTypography
            variant="h3"
            align="center"
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

        </Grid>

      </StyledGridContainer>

    </>

  )

}

export default ContactPage
