'use client'

import { Grid } from '@mui/material'
import Carousel from '../components/carousel/Carousel'
import SectionOne from '@/components/sectionOne/SectionOne'
import SectionTwo from '@/components/sectionTwo/SectionTwo'
import SectionTree from '@/components/sectionTree/SectionTree'

export default function Home() {


  return (
    <Grid>

      <Grid item xs={25}>

        <Carousel />

      </Grid>

      <SectionOne />

      <SectionTwo />

      <SectionTree />

    </Grid>

  )

}
