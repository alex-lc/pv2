import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';

// components
import Skills from "./components/Skills";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  color: #fafafa;

  .main-content {
    font-size: 1.4rem;
    padding: 5rem;
    margin: 5% 0;
    width: 75%;
    background: #2b2b94;
    border-radius: 0.5rem;
    height: 80vh;
    border: 1px solid #1b1b5e;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

function App() {
  return (
    <Container>
      <div className="main-content">
        <h2>Let's render our content here.</h2>
        <Route path="/skills">
          <Skills />
        </Route>
      </div>
    </Container>
  );
}

export default App;
