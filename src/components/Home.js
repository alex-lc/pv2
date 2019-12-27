import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`

    h1 {
        font-size: 3rem;
        font-weight: 200;
        margin-bottom: 2rem;
        text-align: center;

        @media (max-width: 850px) {
            font-size: 2rem;
        }
    }

    p {
        font-size: 1.6rem;
        font-weight: 300;
        line-height: 3rem;
        text-align: center;

        @media (max-width: 850px) {
            font-size: 1.4rem;
            line-height: 2.5rem;
        }

        @media (max-width: 500px) {
            font-size: 1.2rem;
        }
    }
`;

export default function Home() {

    return (
        <HomeContainer>
            <h1>Alexander Cooter</h1>
            <p>
                Hey there. I'm Alex.
            </p>
        </HomeContainer>
    )
}