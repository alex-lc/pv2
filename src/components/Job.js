import React from 'react';
import styled from 'styled-components';

const JobContainer = styled.div`

        line-height: 3rem;
        border-left: 2px solid #fafc68;
        padding-left: 3rem;

        h4 {
            font-weight: 300;
        }

        .dates {
            font-weight: 300;
            color: #fafc68;
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