import React from 'react';
import styled from 'styled-components';

// assets
import reactLogo from '../assets/react.svg';
import jsLogo from '../assets/js.svg';
import html5Logo from '../assets/html5.svg';
import css3Logo from '../assets/css3.svg';

const SkillsContainer = styled.div`

    h2 {
        font-size: 2.4rem;
        font-weight: 200;
    }
    
    .container {
        margin-top: 5rem;
        width: 100%;
        display: flex;
        justify-content: center;
    
        div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 25%;
    
            h3 {
                font-size: 2rem;
                font-weight: 200;
            }
    
            img {
                width: 9rem;
                margin-bottom: 1rem;
                transition: all 500ms;
    
                &:hover {
                    transition: transform 500ms;
                    transform: translateY(-1rem);
                }
            }
        }
    }
`;

export default function Skills() {

    return (
        <SkillsContainer>
            <h2>Skills and Knowledge</h2>
            <div className="container">
                <div>
                    <img src={reactLogo} alt='React.js Logo' />
                    <h3>React.js</h3>
                </div>
                <div>
                    <img src={jsLogo} alt='JavaScript Logo' />
                    <h3>JavaScript</h3>
                </div>
                <div>
                    <img src={html5Logo} alt='HTML5 Logo' />
                    <h3>HTML5</h3>
                </div>
                <div>
                    <img src={css3Logo} alt='CSS3 Logo' />
                    <h3>CSS3</h3>
                </div>
            </div>
        </SkillsContainer>
    )
}