import styled from 'styled-components'
import { Box, Grid } from '@mui/material'

const StyledGridSectionOne = styled(Grid)`
&& {
      height: 600px;
      display: flex;
      align-items: center;
      padding: 50px 10px 50px 10px;
      text-align: center;
      @media (max-width: 500px) {
        height: 400px;
        padding: 0px 10px 0px 10px;
      }
    }
`
const StyledBoxSectionOne = styled(Box)`
&& {
      max-width: 800px;
      margin: 0 auto;
    }
`
const StyledTitleOne = styled.text`
&& {
      font-size: 2.8em;
      color: #482880;
      margin-bottom: 50px;
      text-align: center;

      @media (max-width: 600px) {
          font-size: 1.4rem;
          margin-bottom: 30px;
      }
    }
`
const StyledParagraphyOne = styled.h3`
  && {
      font-size: 20px;
      color: #666;
      line-height: 1.6;
      font-weight: 400;
      margin-bottom: 30px;
      text-align: center;
      letter-spacing: 1px;

      @media (max-width: 600px) {
          font-size: 1rem;
          letter-spacing: 1px;
          margin-bottom: 20px;
          margin-top: 40px;
      }
    }
`
const StyledButtonGo = styled.button`
&& {
      padding: 15px 30px;
      background-color: #f57c00;
      margin-top: 50px;
      font-size: 18px;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      
      @media (max-width: 600px) {
        padding: 8px 8px;
        margin-bottom: 0px;
        font-size: 16px;
      }
    }
`
export {
  StyledGridSectionOne,
  StyledBoxSectionOne,
  StyledTitleOne,
  StyledParagraphyOne,
  StyledButtonGo,
}