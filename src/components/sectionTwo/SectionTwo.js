import { Grid, Box } from '@mui/material'

import {
  StyledGridSectionTwo,
  StyledTitleSection,
} from '../HomeStyles'


import CardPrimary from './cards/CardPrimary'
import CardTwo from './cards/CardSecondary'
import CardThird from './cards/CardThird'

export default function SectionTwo() {


  return (
    <>

      <StyledGridSectionTwo item xs={12}>

          <StyledTitleSection>

            Tipos de Sites que Criamos

          </StyledTitleSection>

          <Box>

            <Box sx={{ display: 'flex', justifyContent: 'center' }} >

              <Grid container sx={{ display: 'flex', justifyContent: 'center' }} >

                <CardPrimary />

                <CardTwo />

                <CardThird />

              </Grid>

            </Box>

          </Box>

      </StyledGridSectionTwo>

    </>

  )

}