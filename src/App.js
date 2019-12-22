import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';

// components
import Skills from "./components/Skills";
import GitHub from "./components/GitHub";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Projects from "./components/Projects";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  color: #fafafa;

  .main-content {
    font-size: 1.4rem;
    margin: 5% 0;
    width: 75%;
    background: #2b2b94;
    border-radius: 0.5rem;
    min-height: 80vh;
    border: 1px solid #1b1b5e;
    display: flex;

    .navigation {
      background: #363636;
      width: 25%;
      border-top-left-radius: 0.5rem;
      border-right: 1px solid #303030;
      border-left: 1px solid #303030;
    }

    .routing {
      padding: 4rem 5rem;
      width: 75%;
      border-top-right-radius: 0.5rem;

      @media (max-width: 850px) {
        padding: 4rem 3rem;
        
      }
    }
  }
`;

function App() {
  return (
    <Container>
      <div className="main-content">
        <div className="navigation">
          <Nav />
        </div>
        <div class="routing">
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/github">
            <GitHub />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
        </div>
      </div>
    </Container>
  );
}

export default App;
