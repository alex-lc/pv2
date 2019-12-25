import React from 'react';
import styled from 'styled-components';

// components
import Job from "./Job";

const ResumeContainer = styled.div`
    font-weight: 200;

    h2 {
        font-size: 2.4rem;
        font-weight: 200;
        margin-bottom: 4rem;
    }

    .education {
        margin-bottom: 4rem;

        h3 {
            font-size: 1.8rem;
            font-weight: 200;
            color: #fafc68;
            margin-bottom: 1rem;
        }

        div {
            line-height: 3rem;
            border-left: 2px solid #fafc68;
            padding-left: 3rem;

            .insitution {
                font-weight: 300;
            }
        }

        .dates {
            color: #fafc68;
            font-weight: 300;
        }
    }

    .work-history {
        margin-bottom: 2rem;

        h3 {
            font-size: 1.8rem;
            font-weight: 200;
            color: #fafc68;
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
                    <h4>Bachelor's of Arts in Information Technology</h4>
                    <p className="insitution">Stephen F. Austin State University</p>
                    <p className="dates">2014 - 2018</p>
                </div>
            </div>

            <div className="work-history">
                <h3>Work History: </h3>
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