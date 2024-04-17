'use client'

import React from 'react';
import { Box, Typography, Link, Grid, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const ContactPage = () => {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        sx={{ justifyContent: "center", alignItems: "center", height: '100vh', bgcolor: "#f0f0f0" }}
      >
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Box
            padding={4}
            bgcolor="white"
            borderRadius={10}
            boxShadow={3}
          >
            <Typography variant="h4" align="center" gutterBottom>
              Contato
            </Typography>
            <Box bgcolor="#f9f9f9" borderRadius={10} padding={4} marginTop={2}>
              <Typography variant="body1">
                Para entrar em contato conosco, utilize os seguintes meios:
              </Typography>
              <Box display="flex" flexDirection="column" marginTop={2}>
                <Box marginBottom={1}>
                  <Typography variant="body1">
                    <span style={{ fontWeight: 'bold', marginRight: theme.spacing(1) }}>Email:</span>
                    <Link href="mailto:seuemail@example.com">seuemail@example.com</Link>
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body1">
                    <span style={{ fontWeight: 'bold', marginRight: theme.spacing(1) }}>WhatsApp:</span>
                    <Link href="https://api.whatsapp.com/send?phone=seunumerodetelefone">Seu número de WhatsApp</Link>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default ContactPage;
