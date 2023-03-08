import React from "react";
import styled from 'styled-components';

const Container = styled.div`
    display: flex;    
    align-items: center;
    justify-content: center;
    width: 100%;
`;
const Col = styled.div`
    flex: 1;
    display: flex;    
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

function LoginScreen() {
    return (
      <Container>
        <Col>Teste 1</Col>
        <Col>Teste 2</Col>
      </Container>
    );
  }
  
  export default LoginScreen;
  