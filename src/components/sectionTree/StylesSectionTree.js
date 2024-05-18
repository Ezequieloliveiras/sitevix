import styled from 'styled-components'
import { Box, Grid } from '@mui/material'

const StyledBoxSection = styled(Box)`
&& {
      max-width: 1200px;
      margin: 0 auto;
        @media (max-width: 600px) {
            padding: 0 15px;
        }
    }
`
const StyledTitleSection = styled.p`
&& {
      font-size: 2.6em;
      color: #482880;
      margin-top: 50px;
      margin-bottom: 15px;
      padding-bottom: 50px;
      text-align: center;

      @media (max-width: 600px) {
        margin-top: 10px;
        padding-bottom: 10px;
        margin-bottom: 10px;
        font-size: 20px;
      }
    }
`
const StyledSubtitle = styled.p`
&& {
      color: #8561c5;
      font-size: 1.5em;
      margin-bottom: 15px;
      text-align: center;

      @media (max-width: 600px) {
          font-size: 1rem;
          margin-bottom: 0px;
      }
    }
`
const StyledParagraphy = styled.p`
&& {
      margin-bottom: 20px;
      font-size: 1.2em;
      line-height: 1.6;
      text-align: center;
      letter-spacing: 1px;
      color: #666;
      @media (max-width: 768px) {
        margin-bottom: 0px;
        font-size: 1em;
        text-align: center;
        padding-left: 3%;
        letter-spacing: 1px;
      }
    }
`
const StyledGridSectionTree = styled(Grid)`
&& {
        min-height: 580px;
        padding: 50px 0;
        text-align: center;
        background-color: #fff;
      @media (max-width: 500px) {
        height: auto;
        padding: 25px 0;
      }
    }
`

export {
   StyledBoxSection,
   StyledTitleSection,
   StyledSubtitle,
   StyledParagraphy,
   StyledGridSectionTree,
}