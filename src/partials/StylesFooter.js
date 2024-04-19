import { Box } from '@mui/material'
import { Link } from '@mui/material'
import styled from 'styled-components'

const StyledBoxFooter = styled(Box)`

    && {
      background-color: #757575;
      color: #fff;
      padding: 50px 0 ;
    }
`
const StyledList = styled.li`

    && {
      list-style: none;
      padding: 0 ;
    }
`

const StyledLink = styled(Link)`

    && {
      color: #fff;
      text-decoration: none;
    }
`
export {
    StyledBoxFooter,
    StyledList,
    StyledLink,
}