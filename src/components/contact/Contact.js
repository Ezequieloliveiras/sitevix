import FormContact from './form/formContact'

const ContactPage = () => {

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '100vh',
          justifyContent: 'center',
          backgroundColor:'#f5f5f5'
        }}>
        <div>
        <FormContact />
        </div>
      </div>
    </>
  )
}

export default ContactPage
