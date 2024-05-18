import Image from 'next/image'
import styled from 'styled-components'

const PageContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const SectionTitle = styled.h2`
  text-align: center;
  color: #f57c00;
  margin-top: 40px;
`
const BenefitItem = styled.div`
  margin-bottom: 20px;
`
const BenefitTitle = styled.h3`
  color: #555;
  display: flex;
  align-items: center;
`
const BenefitDescription = styled.p`
  color: #777;
`
const ContactButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20%;
  margin-bottom: 20%;
  background-color: #f57c00;
  transition: background-color 0.3s;
  color: #fff;
  &:hover {
    background-color: #e65100;
    
    @media (max-width: 768px) {
      margin-top: 5%;
      margin-bottom: 5%;
    }
  }


`
const IconWrapper = styled.span`
  margin-right: 10px;
`
const Content = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  align-items: center ;
    @media (max-width: 768px) {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      justify-content:center;
      align-items: center;
}
`
const Box = styled.div`
  max-width: 50%;

    @media (max-width: 768px) {
      max-width: 100%
}

`
const StyledImage = styled(Image)`
  margin-right: 30px;
  border-radius: 5px;
  height: 100%;
  width: auto;

    @media (max-width: 768px) {
      margin-right: 0px;
      height: auto;
      width: 100%;
      margin-bottom: 20px;
}
    @media (min-width: 769px) {
      height: 100%;
      width: 90%;
}
`
const BoxText = styled.div`
  height: auto;
    @media (max-width: 768px) {
     width: auto;
}

`

export {
    PageContainer,
    SectionTitle,
    BenefitItem,
    BenefitTitle,
    BenefitDescription,
    ContactButton,
    IconWrapper,
    Content,
    Box,
    StyledImage,
    BoxText,
}