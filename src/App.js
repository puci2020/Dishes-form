import React from 'react';
import styled from 'styled-components';
import Form from './components/Form/Form';
import FormContainer from './components/FormContainer/FormContainer';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  background-image: url('https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 0;
  background-attachment: fixed;
  overflow: hidden;
`;

const App = () => (
  <Wrapper>
    <FormContainer title="Choose your dish">
      <Form />
    </FormContainer>
  </Wrapper>
);

export default App;
