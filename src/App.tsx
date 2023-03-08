import React from 'react';
import LoginScreen from './screens/login';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  background-color: #30a6a6;
`;

const Content = styled.div`
  width: 80%;
  padding: 20px;
`;

function App() {
  return (
    <Container>
      <Content>
        <LoginScreen />
      </Content>
    </Container>
  );
}

export default App;
