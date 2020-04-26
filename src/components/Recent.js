import React from 'react';
import styled from 'styled-components';

/* assets */
import plantwise from '../assets/plantwise.png';
import lifegpa from '../assets/lifegpa.PNG';

const RecentContainer = styled.div`
    margin: 8em 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h4 {
        font-size: 2.5rem;
        font-weight: 500;
    }

    .projects {
        width: 100%;
        height: 40rem;
        display: flex;
        justify-content: space-evenly;
        border: 1px solid purple;
        
        .project {
            margin-top: 5rem;
            width: 45%;
            transition: all 300ms;
            border: 1px solid red;
            
            &:hover {
                transform: scale(1);
                margin: 2rem;
            }

            h5 {
                background: #e8d295;
                border-top-left-radius: 0.3rem;
                border-top-right-radius: 0.3rem;
                height: 4rem;
                color: #1a1a1a;
                font-size: 1.8rem;
                font-weight: 500;
                display: flex;
                align-items: center;
                padding-left: 2rem;
            }
            
            .preview {
                width: 100%;

                img {
                    width: 100%;
                    object-fit: contain;
                }
            }
        }
    }
`;

function Recent() {
    return (
        <RecentContainer>
            <h4>Recent Projects</h4>
            <div className="projects">
                <div className="project">
                    <h5>PlantWise</h5>
                    <div className="preview">
                        <img src={plantwise} alt="Plant Wise" />
                    </div>
                </div>
                <div className="project">
                    <h5>LifeGPA</h5>
                    <div className="preview">
                        <img src={lifegpa} alt="LifeGPA" />
                    </div>
                </div>
            </div>
        </RecentContainer>
    )
}

export default Recent;
