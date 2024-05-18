import styled from 'styled-components'

const Container = styled.div`
  min-height: auto;
  padding: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #837c7c3f;
  color: #ef6c00;
  border-radius: 5px;

  @media (max-width: 800px) {
    width: 300px;
  }
  @media (min-width: 820px) {
    width: 400px;
  }
`
const Title = styled.h1`
  margin-bottom: 14px;
`
const Form = styled.form`
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
`
const Input = styled.input`
  padding: 0 8px;
  height: 34px;
  margin-bottom: 14px;
  border-radius: 4px;
  border: 0;
`
const TextArea = styled.textarea`
  padding: 8px;
  height: 94px;
  resize: none;
  margin-bottom: 14px;
  border-radius: 4px;
  border: 0;
  font-family: Arial, sans-serif;
`
const Button = styled.input`
  height: 34px;
  border-radius: 4px;
  border: 0;
  cursor: pointer;
  color: #fff;
  background-color: #ef6c00;
  font-size: 18px;

  &:hover {
    background-color: #f58020;
    transform: scale(1.01);
  }
`

export {
    Container,
    Title,
    Form,
    Input,
    TextArea,
    Button,
}