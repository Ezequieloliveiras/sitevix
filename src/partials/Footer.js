import {
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
} from './StylesFooter'

const Footer = () => {

  return (
    <BoxFooter>
      <ConatinerFooter>
        <BoxContent container spacing={3}>
          <ContentFooter item xs={12} sm={4}>
            <TitleFooter variant="h6" >Contato</TitleFooter>
            <Description>
              <Description>Email: ezequieloliveiraes@outlook.com</Description>
              <Description>Telefone: +55 27 99733-7338</Description>
            </Description>
          </ContentFooter>
          <ContentFooter item xs={12} sm={4}>
            <TitleFooter variant="h6">Sobre</TitleFooter>
            <Description>
              Somos apaixonados por transformar ideias em realidade digital. Como criador de sites, nosso objetivo é ajudar indivíduos e empresas a alcançarem sua presença online de forma impactante e eficaz.
            </Description>
          </ContentFooter>
          <ContentFooter item xs={12} sm={4} >
            <TitleFooter variant="h6">Saiba Mais</TitleFooter>
            <List>
              <Description>
                <LinkFooter>
                  Termos de Serviço
                </LinkFooter>
              </Description>
              <Description>
                <LinkFooter>
                  Política de Privacidade
                </LinkFooter>
              </Description>
            </List>
          </ContentFooter>
        </BoxContent>
      </ConatinerFooter>
      <ContainerMap>
        <StyledIframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239519.1999118129!2d-40.32175681504925!3d-20.280079037509164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb83d5d85374ee9%3A0x97595e7ea70ed809!2zVml0w7NyaWEsIEVT!5e0!3m2!1spt-BR!2sbr!4v1715382117162!5m2!1spt-BR!2sbr" alt='localização'>
        </StyledIframe>
      </ContainerMap>
      <Info>
      © 2024 Site Vix - Todos os direitos reservados.
      </Info>
    </BoxFooter>
  )
}

export default Footer