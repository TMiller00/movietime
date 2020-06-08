import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  box-sizing: border-box;
  height: 60px;
  width: 620px;
  background: #3B3B3B;
  border-radius: 4px;
  align-items: center;
  padding-left: 16px;
  padding-right: 8px;
`;

const InputBox = styled.input.attrs({
  type: 'text',
  placeholder: 'Email'
})`
  flex: 1;
  background-color: transparent;
  border: none;
  font-size: 18px;
  line-height: 21px;
  color: rgba(255, 255, 255, 0.64);
`;

const SubmitButton = styled.input.attrs({
  type: 'submit',
  value: 'Get updated'
})`
  background-color: #FE7200;
  border-radius: 4px;
  color: #FFFFFF;
  border: none;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  height: 48px;
  width: 182px;
`

const Input = () => {

  return (
    <Form>
      <InputBox/>
      <SubmitButton/>
    </Form>
  )
}

export default Input
