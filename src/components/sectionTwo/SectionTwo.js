import { Grid, Box } from '@mui/material'

import {
  StyledGridSectionTwo,
  StyledTitleSection,
} from '../HomeStyles'


import CardPrimary from './CardPrimary'
import CardTwo from './CardSecondary'
import CardThird from './CardThird'

export default function SectionTwo() {


  return (
    <>

      <StyledGridSectionTwo item xs={12}>

          <StyledTitleSection >

            Tipos de Sites que Criamos

          </StyledTitleSection>

          <Box item xs={1} >

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