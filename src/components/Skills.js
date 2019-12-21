import React from 'react';
import styled from 'styled-components';

// assets
import reactLogo from '../assets/react.svg';
import jsLogo from '../assets/js.svg';
import html5Logo from '../assets/html5.svg';
import css3Logo from '../assets/css3.svg';

const SkillsContainer = styled.div`
    margin-top: 5rem;
    width: 70%;
    display: flex;
    justify-content: center;

    div {
        display: flex;
        justify-content: center;
        width: 25%;
    }
`;

export default function Skills() {

    return (
        <SkillsContainer>
            <div>
                <img src={reactLogo} alt='React.js Logo' />
            </div>
            <div>
                <img src={jsLogo} alt='JavaScript Logo' />
            </div>
            <div>
                <img src={html5Logo} alt='HTML5 Logo' />
            </div>
            <div>
                <img src={css3Logo} alt='CSS3 Logo' />
            </div>
        </SkillsContainer>
    )
}