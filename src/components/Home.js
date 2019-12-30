import React from 'react';
import styled from 'styled-components';

// components
import Skills from './Skills';

const HomeContainer = styled.div`
    padding-left: 15%;

    @media (max-width: 500px) {
        padding-left: 0;
    }

    h1 {
        font-size: 4rem;
        font-weight: 200;
        text-align: center;
        color: #705682;
        margin-bottom: 0.5rem;

        @media (max-width: 850px) {
            font-size: 3rem;
        }
    }

    .small {
        margin-top: 0;
        font-weight: 200;
        font-size: 1.6rem;
    }

    p {
        font-size: 2.3rem;
        font-weight: 300;
        line-height: 3rem;
        text-align: center;
        margin-bottom: 0.5rem;
        margin-top: 5rem;

        @media (max-width: 850px) {
            font-size: 1.6rem;
            line-height: 2.5rem;
        }

        @media (max-width: 500px) {
            font-size: 1.2rem;
        }
    }

    .what-i-do {

        h3 {
            font-size: 2rem;
            font-weight: 300;
            text-align: center;
            margin-top: 10rem;
        }

        p {
            font-size: 1.4rem;
            margin-top: 0.5rem;
        }
    }

    .what-i-know {
        margin-top: 10rem;
        border-top: 1px dashed #303030;

        h3 {
            font-size: 2rem;
            font-weight: 300;
            text-align: center;
            margin-top: 5rem;
        }

        p {
            font-size: 1.4rem;
            margin-top: 0.5rem;
        }
    }
`;

export default function Home() {

    return (
        <HomeContainer>
            <p>Hello, I'm</p>
            <h1>Alex Cooter,</h1>
            <p className="small">a full stack web development student at Lambda School.</p>

            <div className="what-i-know">
                <h3>What I Know</h3>
                <div className="skills">
                    <Skills />
                </div>
            </div>
        </HomeContainer>
    )
}