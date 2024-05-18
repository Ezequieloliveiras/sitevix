import { Grid, Box } from '@mui/material'
import CarouselCards from '../carouselCards/Carousel'

import {
  StyledGridSectionTwo,
  StyledTitleSection,
} from './StylesSectionTwo'

export default function SectionTwo() {
  return (
    <>
      <StyledGridSectionTwo item xs={12}>
          <StyledTitleSection>
            Tipos de Sites que Criamos
          </StyledTitleSection>
          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }} >
              <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                <CarouselCards/>
              </Grid>
            </Box>
          </Box>
      </StyledGridSectionTwo>
    </>
  )
}