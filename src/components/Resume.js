import React from 'react';
import styled from 'styled-components';

// components
import Job from "./Job";

const ResumeContainer = styled.div`
    font-weight: 200;
    width: 100%;

    @media (max-width: 500px) {
        padding: 1rem;
        margin-top: 5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h2 {
        font-size: 2.4rem;
        font-weight: 200;
        margin-bottom: 4rem;
    }

    .education {
        margin-bottom: 4rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        h3 {
            font-size: 1.8rem;
            font-weight: 200;
            color: #705682;
            margin-bottom: 1rem;
            width: 100%;
        }

        div {
            width: 100%;
            line-height: 3rem;
            border-left: 2px solid #705682;
            padding-left: 3rem;
            margin-bottom: 2rem;

            .institution {
                font-weight: 300;
            }
        }

        .dates {
            color: #705682;
            font-weight: 300;
        }
    }

    .work-history {
        margin-bottom: 2rem;

        @media (max-width: 500px) {
            width: 100%;
            display: flex;
            flex-direction: column;
        }

        h3 {
            font-size: 1.8rem;
            font-weight: 200;
            color: #705682;
            margin-bottom: 1rem;
        }
    }
`;

export default function Resume() {

    return (
        <ResumeContainer>
            <h2>Resume</h2>

            <div className="education">
                <h3>Education: </h3>
                <div>
                    <h4>Full Stack Web Development</h4>
                    <p className="institution">Lambda School</p>
                    <p className="dates">2019 - Present</p>
                </div>
                <div>
                    <h4>Bachelor's of Arts in Information Technology</h4>
                    <p className="institution">Stephen F. Austin State University</p>
                    <p className="dates">2014 - 2018</p>
                </div>
            </div>

            <div className="work-history">
                <h3>Work History: </h3>
                <Job
                    title="Part-Time Team Lead"
                    company="Lambda School"
                    dates="2019 - Present"
                    desc="Mentor and guide a team of Lambda School students through previously completed 
                    curriculum. As their first point of contact for support, Team Leads must also conduct 
                    daily code reviews, one on one meetings reviewing projects and sprint challenges, as well as 
                    team standup meetings." />
                <Job
                    title="Technical Support Assistant"
                    company="School of Human Sciences at Stephen F. Austin State University"
                    dates="2016 - 2018"
                    desc="Provide technical support and assistnace to all faculty and staff members in the School of Human Sciences, and support
                    and maintain all classroom equipment and technology." />
            </div>
        </ResumeContainer>
    )
}