import { Box, Typography, Link, Grid } from '@mui/material'
import styled from 'styled-components'

const StyledGridContainer = styled(Grid)`
 justify-content: center;
  align-items: center;

  background-color: #f0f0f0;
`
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';

const ContactPage = () => {


  return (
    <>

      <StyledGridContainer container>

        <Grid item xs={12} sm={8} md={6} lg={4} margin={10}>

          <Typography color={'#ef6c00'} sx={{color:'#ef6c00'}} variant="h3" align="center" gutterBottom>
            Contato
          </Typography>

          <Box bgcolor="#f9f9f9"  sx={{ border: '1px solid grey' }}  borderRadius={10} padding={8} marginTop={2}>

            <Typography >

              Para entrar em contato conosco, utilize os seguintes meios:

            </Typography>

            <Box display="flex" flexDirection="column" marginTop={2}>



              <Box marginBottom={1} sx={{display:'flex'}}>

                <ForwardToInboxIcon sx={{marginRight:'10px', color:'#0f3464'}}/>

                <Link href="mailto:ezequieloliveiraes@outlook.com">ezequieloliveiraes@outlook.com</Link>

              </Box>

              <Box sx={{display:'flex'}} >

                <WhatsAppIcon sx={{marginRight:'10px', color:'#25d366'}}/>

                <Link href="https://api.whatsapp.com/send?phone=27997337338">WhatsApp</Link>

              </Box>




            </Box>

          </Box>

        </Grid>

      </StyledGridContainer>

    </>

  )

}

export default ContactPage
