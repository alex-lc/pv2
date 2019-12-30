import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavMenu = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 500px) {
        flex-direction: row;
    }

    a {
        color: #fafafa;
        width: 100%;
        text-transform: uppercase;
        padding: 2rem 0;
        text-decoration: none;
        background: #363636;
        border-bottom: 1px solid #303030;
        transition: all 500ms;
        font-weight: 200;
        text-align: center;

        &:hover {
            transition: background, color 500ms;
            background: #303030;
            color: #ffffff;
        }

        @media (max-width: 850px) {
            padding: 2rem 0;
            text-align: center;
        }

        @media (max-width: 550px) {
            font-size: 1.2rem;
        }
    }
`;

export default function Nav() {

    return (
        <NavMenu>
            <Link to="/">Home</Link>
            <Link to="/projects">Work</Link>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/alex-lc">GitHub</a>
            <Link to="/resume">Resume</Link>
            <a target="_blank" rel="noopener noreferrer" href="http://twitter.com/alexlcooter">Twitter</a>
        </NavMenu>
    )
}