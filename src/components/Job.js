import React from 'react';
import styled from 'styled-components';

const JobContainer = styled.div`
        line-height: 3rem;
        border-left: 2px solid #705682;
        padding-left: 3rem;
        margin-bottom: 2rem;

        h4 {
            font-weight: 300;
        }

        .dates {
            font-weight: 300;
            color: #705682;
        }
`;

export default function Job(props) {

    const { title, company, dates, desc } = props;

    return (
        <JobContainer>
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="dates">{dates}</p>
            <p>{desc}</p>
        </JobContainer>
    )
}