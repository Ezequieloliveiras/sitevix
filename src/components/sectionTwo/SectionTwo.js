import { Grid } from '@mui/material'

import {
  StyledGridSectionTwo,
  StyledBoxSection,
  StyledTitleSection,
  StyledSubtitle,
  StyledParagraphy,
  StyledBoxImage,
  StyledImage,
} from '../HomeStyles'

export default function SectionTwo() {


  return (
    <>

      <StyledGridSectionTwo item xs={12}>

        <StyledBoxSection>

          <StyledTitleSection >

            Tipos de Sites que Criamos

          </StyledTitleSection>

          <Grid container spacing={3} justifyContent="center" >

            <Grid item xs={12} sm={4}>

              <StyledSubtitle >

                Sites Corporativos

              </StyledSubtitle>

              <StyledParagraphy>

                Destaque a sua marca e alcance um público global com um site corporativo profissional.

              </StyledParagraphy>

              <StyledBoxImage>

              <StyledImage src='https://i.imgur.com/9ogyyKs.png' alt="Corporativo" />

              </StyledBoxImage>

            </Grid>

            <Grid item xs={12} sm={4}>

              <StyledSubtitle>

                Lojas Online

              </StyledSubtitle>

              <StyledParagraphy>

                Venda seus produtos e serviços 24 horas por dia, 7 dias por semana, com uma loja online personalizada.

              </StyledParagraphy>

              <StyledBoxImage>

              <StyledImage src='https://i.imgur.com/Gw0oBSf.png' alt="Lojas Online" />

              </StyledBoxImage>

            </Grid>

            <Grid item xs={12} sm={4}>

              <StyledSubtitle>

                Portfólios de Arte

              </StyledSubtitle>

              <StyledParagraphy>

                Exiba seu trabalho de forma deslumbrante e conquiste novos clientes com um portfólio de arte online.

              </StyledParagraphy>

              <StyledBoxImage>

                <StyledImage src='https://i.imgur.com/wuxDWOn.png' alt="Portfólios de Arte" />

              </StyledBoxImage>

            </Grid>

          </Grid>

        </StyledBoxSection>

      </StyledGridSectionTwo>

    </>

  )

}
