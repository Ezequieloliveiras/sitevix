'use client'

import styled from 'styled-components'
import Link from 'next/link'
import { CalendarToday, Lightbulb, BarChart, People, Mail } from '@mui/icons-material' // Importando ícones do Material-UI

const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`

const SectionTitle = styled.h2`
  text-align: center;
  color: #f57c00;
  margin-top: 40px;
  margin-bottom: 50px;
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
  background-color: #f57c00;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #e65100;
  }
`

const IconWrapper = styled.span`
  margin-right: 10px;
`

const Icon = ({ icon }) => <IconWrapper>{icon}</IconWrapper>;

const SupportPage = () => {
  return (
    <PageContainer>

      <SectionTitle>Suporte Premium para o Seu Site</SectionTitle>

      <BenefitItem>

        <BenefitTitle><Icon icon={<CalendarToday />} />Plano de Pagamento Mensal Flexível</BenefitTitle>

        <BenefitDescription>

          Oferecemos um plano de pagamento mensal flexível, adaptado às necessidades de cada cliente. Combinamos para que você tenha 5 horas de suporte para alterações no site por mês.

        </BenefitDescription>

      </BenefitItem>

      <BenefitItem>

        <BenefitTitle><Icon icon={<Lightbulb />} />Dicas de Melhorias</BenefitTitle>

        <BenefitDescription>

          Nossa equipe de especialistas está aqui para fornecer dicas valiosas de melhorias para o seu site. Desde aprimoramentos na usabilidade até sugestões de design, estamos prontos para ajudar a elevar o seu site ao próximo nível.

        </BenefitDescription>

      </BenefitItem>

      <BenefitItem>

        <BenefitTitle><Icon icon={<BarChart />} />Foco em Otimização do Site</BenefitTitle>

        <BenefitDescription>

          Nosso suporte não se limita apenas a correções de bugs e alterações simples. Nós nos concentramos na otimização do seu site para garantir um desempenho excepcional. Isso inclui melhorias na velocidade de carregamento, SEO aprimorado e muito mais.

        </BenefitDescription>

      </BenefitItem>

      <BenefitItem>

        <BenefitTitle><Icon icon={<People />} />Atendimento Personalizado</BenefitTitle>

        <BenefitDescription>

          Cada cliente é único, e tratamos cada projeto com a atenção e dedicação que ele merece. Nosso suporte é totalmente personalizado para atender às suas necessidades específicas, garantindo que você obtenha o máximo valor do nosso serviço.

        </BenefitDescription>

      </BenefitItem>

      <BenefitItem>

        <BenefitTitle><Icon icon={<Mail />} />Suporte Técnico Especializado</BenefitTitle>

        <BenefitDescription>

          Nossa equipe de suporte técnico é composta por profissionais experientes e qualificados. Estamos sempre disponíveis para ajudar a resolver quaisquer problemas ou dúvidas que você possa ter em relação ao seu site.

        </BenefitDescription>

      </BenefitItem>

      <Link href='/pages/contact'>

        <ContactButton>Entre em Contato Conosco</ContactButton>

      </Link>

    </PageContainer>

  )
}

export default SupportPage;
