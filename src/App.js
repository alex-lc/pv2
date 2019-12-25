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
import Resume from "./components/Resume";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  color: #2e343b;

  .main-content {
    font-size: 1.4rem;
    width: 100%;
    background: #b5d0e8;
    min-height: 80vh;
    display: flex;

    @media (max-width: 800px) {
      width: 85%;
    }

    @media (max-width: 500px) {
      width: 95%;
    }

    .navigation {
      background: #363636;
      width: 10%;
      border-right: 1px solid #303030;
      border-left: 1px solid #303030;
      position: fixed;
      height: 100%;
    }

    .routing {
      padding: 4rem 5rem;
      width: 75%;
      border-top-right-radius: 0.5rem;
      margin-left: 10%;

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
        <div className="routing">
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
          <Route path="/resume">
            <Resume />
          </Route>
        </div>
      </div>
    </Container>
  );
}

export default App;
