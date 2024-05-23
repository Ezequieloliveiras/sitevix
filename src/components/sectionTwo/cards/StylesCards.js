import { Card } from '@mui/material'
import styled from 'styled-components'

const Box = styled.div`
 height: auto;
 width: auto;
`

const StyleCard = styled(Card)`
&& {
    max-width: 345px;
    margin: 5px;
    padding:10px;
    @media (max-width:768px) {
        max-width: 300px;
    }
}
`

const TitleCard = styled.h2`
    color: #8561c5;
    font-weight: 400;
    @media (max-width:768px) {
        font-size: 1.3em;
    }
`

export {
    Box,
    TitleCard,
    StyleCard
}