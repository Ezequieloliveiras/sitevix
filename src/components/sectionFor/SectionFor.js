import { Grid, Box } from '@mui/material'

import {
  StyledBoxSection,
  StyledTitleSection,
  StyledSubtitle,
  StyledParagraphy,
  StyledGridSectionTree,
} from '../HomeStyles'

import Card from './Card'

export default function SectionTree() {


  return (
    <>

      <StyledGridSectionTree item xs={1} >

        <Box sx={{display:'flex', justifyContent:'center'}} >


          <Grid container  sx={{display: 'flex', justifyContent: 'center'}} >

          

            <Card />

        

        

            <Card />

         


             <Card />

       

          </Grid>

        </Box>

      </StyledGridSectionTree>

    </>

  )

}
