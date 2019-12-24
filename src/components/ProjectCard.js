import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 5rem;
    border: 1px solid #303030;
    border-radius: 1rem;

    .content {
        background: #363636;
        padding: 2rem;
        border-radius: 1rem;
        display: flex;
        justify-content: space-evenly;
        width: 100%;

        @media (max-width: 800px) {
            flex-direction: column;
        }
    
        .title-links {
            width: 20%;
            border-right: 1px solid #303030;

            @media (max-width: 800px) {
                width: 100%;
                border-right: none;
            }

            h2 {
                transition: all 300ms;

                &:hover {
                    transition: color 300ms;
                    color: #fafc68;
                }

                @media (max-width: 1200px) {
                    font-size: 2rem;
                }

                @media (max-width: 1000px) {
                    font-size: 1.4rem;
                }

                @media (max-width: 800px) {
                    margin-bottom: 1rem;
                    font-size: 2rem;
                }
            }

            div {
                display: flex;
                flex-direction: column;
                text-align: center;
                margin-top: 3rem;

                @media (max-width: 800px) {
                    margin-top: 0;
                    border-bottom: 1px solid #303030;
                }

                a {
                    margin: 1rem 0;
                    transition: all 300ms;

                    @media (max-width: 1000px) {
                        font-size: 1.2rem;
                        textl-align: left;
                    }

                    &:hover {
                        transition: color 300ms;
                        color: #fafc68;
                    }
                }
            }

            h2 {
                text-align: center;
                padding-bottom: 1rem;
                border-bottom: 1px solid #303030;
            }

            a {
                color: #fafafa;
                text-decoration: none;
                font-weight: 200;
            }
        }
    
        .desc {
            padding: 1rem 2rem;
            width: 80%;
            font-weight: 200;

            @media (max-width: 800px) {
                width: 100%;
            }

            div {

                h3 {
                    margin: 2rem 0 0.5rem;
                    color: #fafc68;
                }
            }

            p {
                line-height: 2.5rem;
            }
        }
    }
`;

export default function ProjectCard(props) {

    const { title, livePreview, github, desc, tech } = props;

    return (
        <CardContainer>
            <div className="content">
                <div className="title-links">
                    <h2>{title}</h2>
                    <div>
                        <a href={livePreview} target="_blank" rel="noopener noreferrer">Preview</a>
                        <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                </div>
                <div className="desc">
                    <p>{desc}</p>
                    <div>
                        <h3>Technology Used:</h3>
                        <p>{tech}</p>
                    </div>
                </div>
            </div>
        </CardContainer>
    )
}