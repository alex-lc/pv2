import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

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

    @media (max-width: 500px) {
      flex-direction: column;
      align-items: center;
    }

    .navigation {
      background: #363636;
      width: 15%;
      border-right: 1px solid #303030;
      border-left: 1px solid #303030;
      position: fixed;
      height: 100%;

      @media (max-width: 500px) {
        width: 100%;
        height: 5rem;
        border: none;
      }
    }

    .routing {
      padding: 4rem 5rem;
      width: 75%;
      border-top-right-radius: 0.5rem;
      margin-left: 15%;

      @media (max-width: 850px) {
        padding: 4rem 3rem;     
      }

      @media (max-width: 500px) {
        width: 95%;
        padding: 4rem 0;
        margin-left: 0;
      }
    }
  }
`;

function App() {
  return (
    <Container>
      <Helmet>
        <meta charset="utf-8" />
        <meta name="description" content="Full Stack Web Development Team Lead and Student for Lambda School." />
        <meta name="keywords" content="full stack web development, front end development, backend development, HTML5, CSS3, JavaScript, React, React.js, full stack web developer, alex cooter" />
        <link rel="canonical" href="http://alexcooter.com" />
      </Helmet>
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
