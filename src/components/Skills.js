import React from 'react';
import styled from 'styled-components';

// assets
import reactLogo from '../assets/react.svg';
import reduxLogo from '../assets/reduxLogo.svg';
import jsLogo from '../assets/js.svg';
import node from '../assets/node.svg';
import html5Logo from '../assets/html5.svg';
import css3Logo from '../assets/css3.svg';

const SkillsContainer = styled.div`
    
    .container {
        margin-top: 1rem;
        width: 100%;
        display: grid;
        grid-template-columns: 33% 33% 33%;
        justify-items: center;

        @media (max-width: 800px) {
            grid-template-columns: 50% 50%;
        }

        @media (max-width: 400px) {
            grid-template-columns: 100%;
        }
    
        div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 25%;
            margin: 2rem 0;
    
            h3 {
                font-size: 2rem;
                font-weight: 200;
                margin-top: 1rem;
            }
    
            img {
                width: 9rem;
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
            <div className="container">
                <div>
                    <img src={reactLogo} alt='React.js Logo' />
                    <h3>React.js</h3>
                </div>
                <div>
                    <img src={reduxLogo} alt='Redux Logo' />
                    <h3>Redux</h3>
                </div>
                <div>
                    <img src={jsLogo} alt='JavaScript Logo' />
                    <h3>JavaScript</h3>
                </div>
                <div>
                    <img src={node} alt="Node.js Logo" />
                    <h3>Node.js</h3>
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