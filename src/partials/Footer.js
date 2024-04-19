import {
  Container,
  Grid,
  Typography
} from '@mui/material'

import {
  StyledBoxFooter,
  StyledList,
  StyledLink,
} from './StylesFooter'


const Footer = () => {

  return (

    <StyledBoxFooter >

      <Container>

        <Grid container spacing={3}>

          <Grid item xs={12} sm={4}>

            <Typography variant="h6">Contato do Criador</Typography>

            <StyledList >

              <li>Email: ezequieloliveiraes@outlook.com</li>

              <li>Telefone: (27) 99733-7338</li>

              <li>Endereço: Vitória-ES</li>

            </StyledList>

          </Grid>

          <Grid item xs={12} sm={4}>

            <Typography variant="h6">Sobre</Typography>

            <Typography>

              Somos apaixonados por transformar ideias em realidade digital. Como criador de sites, nosso objetivo é ajudar indivíduos e empresas a alcançarem sua presença online de forma impactante e eficaz.

            </Typography>

          </Grid>

          <Grid item xs={12} sm={4}>

            <Typography variant="h6">Saiba Mais</Typography>

            <StyledList>

              <li>

                <StyledLink href="#" >

                  Termos de Serviço

                </StyledLink>

              </li>

              <li>

                <StyledLink href="#">

                  Política de Privacidade

                </StyledLink>

              </li>

            </StyledList>

          </Grid>

        </Grid>

      </Container>

    </StyledBoxFooter>

  )
  
}

export default Footer
