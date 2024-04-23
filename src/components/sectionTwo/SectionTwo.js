import { Grid } from '@mui/material'

import {
  StyledGridSectionTwo,
  StyledBoxTitle,
  StyledBoxSection,
  StyledTitleSection,
  StyledSubtitle,
  StyledParagraphy,
  StyledBoxImage,
  StyledImage,
} from '../HomeStyles'

import CardCorporate from'./CardCorporate'

export default function SectionTwo() {


  return (
    <>

      <StyledGridSectionTwo item xs={12}>

        <StyledBoxSection>

          <StyledTitleSection >

            Tipos de Sites que Criamos

          </StyledTitleSection>

          <Grid container spacing={3} justifyContent="center" >
<<<<<<< HEAD
            <Grid item xs={12} sm={5}>
=======

            <Grid item xs={12} sm={4}>
              <StyledBoxTitle>
>>>>>>> fd0335541bcb2d1f7c9731c310c9afa068bc2039

                <StyledSubtitle >

                  Sites Corporativos

<<<<<<< HEAD
              </StyledSubtitle>
            <CardCorporate />

              {/* <StyledParagraphy>
=======
                </StyledSubtitle>

                <StyledParagraphy>
>>>>>>> fd0335541bcb2d1f7c9731c310c9afa068bc2039

                  Destaque a sua marca e alcance um público global com um site corporativo profissional.

                </StyledParagraphy>
              </StyledBoxTitle>


              <StyledBoxImage>

                <StyledImage src='https://i.imgur.com/9ogyyKs.png' alt="Corporativo" />
<<<<<<< HEAD
=======

              </StyledBoxImage>

            </Grid>



            <Grid item xs={12} sm={4}>
              <StyledBoxTitle>
                <StyledSubtitle>

                  Lojas Online

                </StyledSubtitle>

                <StyledParagraphy>

                  Venda seus produtos e serviços 24 horas por dia, 7 dias por semana, com uma loja online personalizada.

                </StyledParagraphy>
              </StyledBoxTitle>
              <StyledBoxImage>

                <StyledImage src='https://i.imgur.com/Gw0oBSf.png' alt="Lojas Online" />
>>>>>>> fd0335541bcb2d1f7c9731c310c9afa068bc2039

              </StyledBoxImage> */}

            </Grid>

            <Grid item xs={12} sm={4}>
<<<<<<< HEAD
               <StyledSubtitle>
=======
              <StyledBoxTitle>
                <StyledSubtitle>

                  Portfólios de Arte
>>>>>>> fd0335541bcb2d1f7c9731c310c9afa068bc2039

                </StyledSubtitle>

<<<<<<< HEAD
              </StyledSubtitle>
            <CardCorporate />

              {/* <StyledParagraphy>

                Venda seus produtos e serviços 24 horas por dia, 7 dias por semana, com uma loja online personalizada.

              </StyledParagraphy>

              <StyledBoxImage>

                <StyledImage src='https://i.imgur.com/Gw0oBSf.png' alt="Lojas Online" />

              </StyledBoxImage>  */}

            </Grid>

            <Grid item xs={12} sm={4}>

              <StyledSubtitle>

                Portfólios de Arte

              </StyledSubtitle>
              <CardCorporate />
{/* 
              <StyledParagraphy>

                Exiba seu trabalho de forma deslumbrante e conquiste novos clientes com um portfólio de arte online.

              </StyledParagraphy>
=======
                <StyledParagraphy>

                  Exiba seu trabalho de forma deslumbrante e conquiste novos clientes com um portfólio de arte online.
>>>>>>> fd0335541bcb2d1f7c9731c310c9afa068bc2039

                </StyledParagraphy>
              </StyledBoxTitle>
              <StyledBoxImage>

                <StyledImage src='https://i.imgur.com/wuxDWOn.png' alt="Portfólios de Arte" />

              </StyledBoxImage> */}

            </Grid>

          </Grid>

        </StyledBoxSection>

      </StyledGridSectionTwo>

    </>

  )

}
