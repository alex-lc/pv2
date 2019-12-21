import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavMenu = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    a {
        color: #fafafa;
        width: 100%;
        text-transform: uppercase;
        padding: 2rem 0 2rem 40%;
        text-decoration: none;
        background: #363636;
        border-bottom: 1px solid #303030;
        transition: all 500ms;

        &:hover {
            transition: background, color 500ms;
            background: #303030;
            color: #ffffff;
        }
    }
`;

export default function Nav() {

    return (
        <NavMenu>
            <Link to="/">Home</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/github">GitHub</Link>
            <Link to="/resume">Resume</Link>
            <a target="_blank" href="http://twitter.com/alexlcooter">Twitter</a>
        </NavMenu>
    )
}