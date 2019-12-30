import React from 'react';
import styled from 'styled-components';

// components
import ProjectCard from './ProjectCard';

const ProjectsContainer = styled.div`
    padding-left: 15%;
    width: 100%;

    @media (max-width: 500px) {
        margin-top: 5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-left: 5%;
    }
    
    h2 {
        font-size: 2.4rem;
        font-weight: 200;
    }
`;

export default function Projects() {

    return (
        <ProjectsContainer>
            <h2>Previous Work and Projects</h2>

            <ProjectCard
                title="LifeGPA"
                livePreview="https://lifegpa-lambda.netlify.com/"
                github="https://github.com/BW-11-18-LIFE-GPA/__marketing"
                desc="In Build Week #1 of Lambda School, I was tasked to create a landing / marketing page, as well as an about team page for LifeGPA, an app that allows you to monitor what matters most in life by tracking your daily habits when it comes to your career, personal development, health, relationships, etc., and calculates an overall LifeGPA. I was the sole UX / UI Developer for the marketing / landing page."
                tech="HTML5, CSS3, LESS, JavaScript"
            />
        </ProjectsContainer>
    )
}