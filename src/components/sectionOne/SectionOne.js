import {
  StyledGridSectionOne,
  StyledBoxSectionOne,
  StyledTitleOne,
  StyledParagraphyOne,
  StyledButtonGo,
} from '../HomeStyles'

export default function SectionOne() {


  return (
    <>

      <StyledGridSectionOne item xs={12}>

        <StyledBoxSectionOne>

          <StyledTitleOne >

            Tenha um site incrível para o seu negócio!

          </StyledTitleOne>

          <StyledParagraphyOne >

            Nossa equipe especializada está pronta para criar um site que destaque sua marca, atraia mais clientes e impulsione suas vendas. Não perca tempo, dê o próximo passo para o sucesso online!

          </StyledParagraphyOne>

          <StyledButtonGo>

              Comece agora

          </StyledButtonGo>

        </StyledBoxSectionOne>

      </StyledGridSectionOne>

    </>

  )

}
