import { Grid } from '@mui/material'

import {
  StyledBoxSection,
  StyledTitleSection,
  StyledSubtitle,
  StyledParagraphy,
  StyledGridSectionTree,
} from '../HomeStyles'

export default function SectionTree() {


  return (
    <>

      <StyledGridSectionTree item xs={12} sx={{height:'auto'}}>

        <StyledBoxSection>

          <StyledTitleSection>

            Por que nos escolher?

          </StyledTitleSection>

          <Grid container spacing={3} justifyContent="center">

            <Grid item xs={12} sm={4} >

              <StyledSubtitle>

                Experiência Profissional

              </StyledSubtitle>

              <StyledParagraphy>

                Nossa equipe tem anos de experiência em design e desenvolvimento de sites, garantindo qualidade e profissionalismo em cada projeto.

              </StyledParagraphy>

            </Grid>

            <Grid item xs={12} sm={4}>

              <StyledSubtitle>

                Design Personalizado

              </StyledSubtitle>

              <StyledParagraphy>

                Criamos sites sob medida para cada cliente, garantindo que cada detalhe represente fielmente a sua marca e atraia seu público-alvo.

              </StyledParagraphy>

            </Grid>

            <Grid item xs={12} sm={4}>

              <StyledSubtitle>

                Suporte Contínuo

              </StyledSubtitle>

              <StyledParagraphy>

                Estamos sempre aqui para ajudar! Oferecemos suporte contínuo após o lançamento do site, garantindo que você esteja sempre satisfeito com nosso serviço.

              </StyledParagraphy>

            </Grid>

          </Grid>

        </StyledBoxSection>

      </StyledGridSectionTree>

    </>

  )

}
