import styled from 'styled-components'

import { Box, Grid } from '@mui/material'

const StyledGridSectionOne = styled(Grid)`
    && {
      background-color: #fff;
      padding: 50px 10px 50px 10px;
      text-align: center;
    }
`

const StyledBoxSectionOne = styled(Box)`
    && {
      max-width: 800px;
      margin: 0 auto;
    }
`

const StyledTitleOne = styled.h1`
    && {
      font-size: 2.8em;
      color: #757575;
      margin-bottom: 20px;
      text-align: center;

      @media (max-width: 600px) {
          font-size: 2rem;
      }
    }
`
const StyledParagraphyOne = styled.h3`
    && {
      font-size: 20;
      color: #666;
      line-height: 1.6;
      font-weight: 400;
      margin-bottom: 30px;
      text-align: center;
    }
`

const StyledButtonGo = styled.button`
    && {
      padding: 15px 30px;
      background-color: #f57c00;
      font-size: 18px;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
`

const StyledGridSectionTwo = styled(Grid)`
    && {
      background-color: #f9f9f9;
      padding-top: 50px;
      padding-bottom: 50px;
      text-align: center;
    }
`
const StyledBoxTitle = styled(Box)`
  && {
    @media (min-width: 700px) and (max-width: 1200px) {
        height: 202px;
    }
  }
`;

const StyledBoxSection = styled(Box)`
    && {
      max-width: 1200px;
      margin: 0 auto;
        @media (max-width: 600px) {
            padding: 0 15px;
        }
    }
`

const StyledTitleSection = styled.h1`
    && {
      font-size: 2.6em;
      color: #757575;
      margin-top: 50px;
      margin-bottom: 40px;
      text-align: center;

      @media (max-width: 600px) {
          font-size: 2rem;
      }
    }
`
const StyledSubtitle= styled.h3`
    && {
      color: #f57c00;
      font-size: 1.5em;
      margin-bottom: 15px;
      text-align: center;

      @media (max-width: 600px) {
          font-size: 1.5rem;
      }
    }
`

const StyledParagraphy= styled.p`
    && {
      margin-bottom: 20px;
      color: #666;
      font-size: 1.2em;
      line-height: 1.6;
      text-align: center;
    }
`

const StyledBoxImage= styled.div`
    && {
      width: 100%;
      height: auto;
      margin-top: 20px;
      box-shadow: 1px 1px 10px black;
                
      @media (max-width: 600px) {
          font-size: 1.rem;
      }
    }
`

const StyledGridSectionTree = styled(Grid)`
    && {
      background-color: #fff;
      padding: 50px 0;
      text-align: center;
    }
`

const StyledImage = styled.img`
    && {
      width: 100%;
      height: auto;      
    }
`

export{
    StyledGridSectionOne,
    StyledBoxSectionOne,
    StyledTitleOne,
    StyledParagraphyOne,
    StyledButtonGo,
    StyledGridSectionTwo,
    StyledBoxTitle,
    StyledBoxSection,
    StyledTitleSection,
    StyledSubtitle,
    StyledParagraphy,
    StyledBoxImage,
    StyledGridSectionTree,
    StyledImage,
}