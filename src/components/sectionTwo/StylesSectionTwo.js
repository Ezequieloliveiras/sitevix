import styled from 'styled-components'
import { Grid } from '@mui/material'

const StyledGridSectionTwo = styled(Grid)`
&& {
      padding-top: 30px;
      padding-bottom: 50px;
      text-align: center;
      background-color: #f9f9f9;
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

export {
    StyledGridSectionTwo,
    StyledTitleSection,
}