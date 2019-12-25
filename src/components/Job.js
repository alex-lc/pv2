import React from 'react';
import styled from 'styled-components';

const JobContainer = styled.div`

        line-height: 3rem;
        border-left: 2px solid #fafc68;
        padding-left: 3rem;
`;

export default function Job() {

    return (
        <JobContainer>
            job goes here
        </JobContainer>
    )
}