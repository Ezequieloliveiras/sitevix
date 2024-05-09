import React, { useState } from 'react';

import emailjs from '@emailjs/browser';

import {
  Container,
  Title,
  Form,
  Input,
  TextArea,
  Button,
} from './StylesForm'

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    if (name === '' || email === '' || message === '') {
      alert('Preencha todos os campos necessários!');
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs.send('service_rewwzv9', 'template_shmj468', templateParams, '3AEl9b3Rkc7PXJki-').then(
      (response) => {
        console.log('email enviado', response.status, response.text);
        setName('');
        setEmail('');
        setMessage('');
      },
      (err) => {
        console.log('Erro: ', err);
      }
    );
  };

  return (
    <Container>
      <Title>Contato</Title>
      <Form onSubmit={sendEmail}>
        <Input
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <Input
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <TextArea
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <Button className="button" type="submit" value="Enviar" />
      </Form>
    </Container>
  );
};

export default App;
