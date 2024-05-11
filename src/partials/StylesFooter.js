import styled from 'styled-components'
import {
  Box,
  Link,
  Container,
  Grid,
  Typography
} from '@mui/material'


const ConatinerFooter = styled(Container)`
&& {
  display:flex;
  justify-content:center;
  align-items:center;
}
`
const BoxContent = styled(Grid)`
&& {
  display:flex;
  justify-content:center;
  text-align:center;
}
`
const ContentFooter = styled(Grid)`
&& {
  display: flex;
  flex-direction: column ;
  align-items: center;
}
`

const TitleFooter = styled(Typography)`
&& {
  text-align:left;
  margin-bottom:10px;
}
`
const Description = styled(Grid)`
&& {
  text-align:left;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}
`

const BoxFooter = styled(Box)`

    && {
      background-color: #fb8c00;
      color: #fff;
      padding: 50px 0 ;
    }
`
const List = styled.li`

    && {
      list-style: none;
      padding: 0 ;
    }
`
const LinkFooter = styled(Link)`

    && {
      color: #fff;
      text-decoration: none;
    }
`
const StyledIframe = styled.iframe`
&& {
  border: none;
  height: 250px;
  width: 700px;
  border-radius:3px;

  @media (max-width: 768px) {
    height: 200px;
    width: 300px;
  }
}

`

const ContainerMap = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 40px;
`

const Info = styled.div`
  text-align: center;
  font-size: 10px;
  margin-top: 40px;
  color: #fafafa;
`
export {
  ConatinerFooter,
  BoxContent,
  ContentFooter,
  TitleFooter,
  Description,
  BoxFooter,
  List,
  LinkFooter,
  StyledIframe,
  ContainerMap,
  Info,
}