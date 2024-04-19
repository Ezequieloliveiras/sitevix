'use client'

import { Grid , Typography} from '@mui/material'
import Carousel from '../components/Carousel'
import image1 from '../app/images/image1.png'
import image2 from '../app/images/image2.png'
import image3 from '../app/images/image3.png'


import {
  StyledGridSectionOne,
  StyledBoxSectionOne,
  StyledTitleOne,
  StyledParagraphyOne,
  StyledButtonGo,
  StyledGridSectionTwo,
  StyledBoxSection,
  StyledTitleSection,
  StyledSubtitle,
  StyledParagraphy,
  StyledBoxImage,
  StyledGridSectionTree,
  StyledImage,
} from './HomeStyles'

export default function Home() {


  return (
    <Grid>

      <Grid item xs={25}>

        <Carousel />

      </Grid>

      <StyledGridSectionOne item xs={12} >

        <StyledBoxSectionOne>

          <StyledTitleOne >

            Tenha um site incrível para o seu negócio!

          </StyledTitleOne>

          <StyledParagraphyOne >

            Nossa equipe especializada está pronta para criar um site que destaque sua marca, atraia mais clientes e impulsione suas vendas. Não perca tempo, dê o próximo passo para o sucesso online!

          </StyledParagraphyOne>

          <StyledButtonGo>

            <Typography>

              Comece agora

            </Typography>

          </StyledButtonGo>

        </StyledBoxSectionOne>

      </StyledGridSectionOne>

      <StyledGridSectionTwo item xs={12} >

        <StyledBoxSection>

          <StyledTitleSection >

            Tipos de Sites que Criamos

          </StyledTitleSection>

          <Grid container spacing={3} justifyContent="center">

            <Grid item xs={12} sm={4}>

              <StyledSubtitle >

                Sites Corporativos

              </StyledSubtitle>

              <StyledParagraphy>

                Destaque a sua marca e alcance um público global com um site corporativo profissional.

              </StyledParagraphy>

              <StyledBoxImage>

                <StyledImage src={image1} alt="Sites Corporativos"/>

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

                <StyledImage src={image2} alt="Lojas Online"/>

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

                <StyledImage src={image3} alt="Portfólios de Arte"/>

              </StyledBoxImage>

            </Grid>

          </Grid>

        </StyledBoxSection>

      </StyledGridSectionTwo>

      <StyledGridSectionTree item xs={12}>

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

    </Grid>

  )
  
}
