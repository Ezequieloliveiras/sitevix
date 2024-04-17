'use client'

import React from 'react';
import { Container, Grid, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#757575', color: '#fff', padding: '50px 0' }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Contato do Criador</Typography>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>Email: ezequieloliveiraes@outlook.com</li>
              <li>Telefone: (27) 99733-7338</li>
              <li>Endereço: Vitória-ES</li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Sobre</Typography>
            <Typography> Somos apaixonados por transformar ideias em realidade digital. Como criador de sites, nosso objetivo é ajudar indivíduos e empresas a alcançarem sua presença online de forma impactante e eficaz.

            </Typography>
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
