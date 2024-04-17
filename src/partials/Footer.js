'use client'

import React from 'react';
import { Container, Grid, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#757575', color: '#fff', padding: '50px 0' }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Contato</Typography>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>Email: exemplo@example.com</li>
              <li>Telefone: (00) 1234-5678</li>
              <li>Endereço: Rua Exemplo, 123</li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Sobre</Typography>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius nec mauris at tincidunt.</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Saiba Mais</Typography>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><Link href="#" style={{ color: '#fff', textDecoration: 'none' }}>Termos de Serviço</Link></li>
              <li><Link href="#" style={{ color: '#fff', textDecoration: 'none' }}>Política de Privacidade</Link></li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
