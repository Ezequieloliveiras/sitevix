
import React from 'react'
import { Box, Typography, Link, Grid } from '@mui/material'
import styled from 'styled-components'


const StyledGridContainer= styled(Grid) `
 justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;

`

const ContactPage = () => {


  return (
    <div>

      <StyledGridContainer container>

        <Grid item xs={12} sm={8} md={4} lg={2} margin={10}>
        
            <Typography variant="h4" align="center" gutterBottom>
              Contato
            </Typography>

            <Box bgcolor="#f9f9f9" borderRadius={10} padding={8} marginTop={2}>

              <Typography variant="body1">

                Para entrar em contato conosco, utilize os seguintes meios:

              </Typography>

              <Box display="flex" flexDirection="column" marginTop={2}>
                
                <Box marginBottom={1}>

                  <Typography variant="body1">

                    <span>Email:</span>

                    <Link href="mailto:ezequieloliveiraes@outlook.com">ezequieloliveiraes@outlook.com</Link>

                  </Typography>

                </Box>

                <Box>

                  <Typography variant="body1">

                    <span >WhatsApp:</span>

                    <Link href="https://api.whatsapp.com/send?phone=27997337338">Seu número de WhatsApp</Link>

                  </Typography>

                </Box>

              </Box>

            </Box>
          
        </Grid>

      </StyledGridContainer>

    </div>

  )

}

export default ContactPage
