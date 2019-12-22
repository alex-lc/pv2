import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`

    h1 {
        font-size: 3rem;
        font-weight: 200;
        margin-bottom: 2rem;

        @media (max-width: 850px) {
            font-size: 2rem;
        }
    }

    p {
        font-size: 1.6rem;
        font-weight: 300;
        line-height: 3rem;

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
            Current full stack web development student in Lambda School. Graduated from Stephen F. Austin State University with a Bachelor's of Arts in Information Technology. Primary interest in cybersecurity, focused on web application security and penetration testing.
            </p>
        </HomeContainer>
    )
}