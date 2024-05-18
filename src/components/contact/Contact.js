import styled from 'styled-components'
import FormContact from './form/formContact'

const Contact = styled.div`
display: flex;
flex-direction: column;
align-items:center;
height: 100vh;
justify-content: center;
background-color: #f5f5f5;
`

const ContactPage = () => {
  return (
    <>
      <Contact>
        <div>
          <FormContact />
        </div>
      </Contact>
    </>
  )
}

export default ContactPage
