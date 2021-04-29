import React from "react";
import styled from "styled-components";

const EmailInput = (props) => {
  return (
    <Container {...props}>
      <TextInput
        placeholder={props.textInput || "correo electrónico"}
      ></TextInput>
      <Rect2></Rect2>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

const TextInput = styled.input`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 28px;
  align-self: stretch;
  flex: 1 1 0%;
  border: none;
  background: transparent;
  display: flex;
  flex-direction: column;
`;

const Rect2 = styled.div`
  height: 3px;
  background-color: rgba(0,0,0,1);
  align-self: stretch;
`;

export default EmailInput;
