import styled from 'styled-components';

const SuccessMessage = styled.div`
  display: ${props => (props['data-visible'] ? 'block' : 'none')};
  color: green;
  margin-top: 10px;
`;

const Message = ({ visible }) => {
  return (
    <div className="App">
      <SuccessMessage data-visible={visible}>E-mail enviado com sucesso!</SuccessMessage>
    </div>
  );
};

export default Message;


// examinar funcionamento