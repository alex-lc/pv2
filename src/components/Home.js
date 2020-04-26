import React from 'react';
import styled from 'styled-components';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

/* components */
import Skills from './Skills';

/* assets */
import LifeGPA from '../assets/lifegpa.PNG';
import PlantWise from '../assets/plantwise.png';
import Next from '../assets/Next.svg';
import Previous from '../assets/Previous.svg';

const HomeContainer = styled.div`
    padding-left: 15%;

    @media (max-width: 500px) {
        padding-left: 0;
    }

    h1 {
        font-size: 5rem;
        font-weight: 700;
        text-align: center;
        color: #705682;
        margin-bottom: 1rem;

        @media (max-width: 850px) {
            font-size: 4rem;
        }
    }

    .small {
        margin-top: 0;
        font-weight: 500;
        font-size: 1.6rem;
    }

    p {
        font-size: 2.3rem;
        font-weight: 300;
        line-height: 3rem;
        text-align: center;
        margin-bottom: 0.5rem;
        margin-top: 5rem;

        @media (max-width: 850px) {
            font-size: 1.6rem;
            line-height: 2.5rem;
        }

        @media (max-width: 500px) {
            font-size: 1.2rem;
        }
    }

    .what-i-do {

        h3 {
            font-size: 2rem;
            font-weight: 300;
            text-align: center;
            margin-top: 10rem;
        }

        p {
            font-size: 1.4rem;
            margin-top: 0.5rem;
        }
    }

    .what-i-know {
        margin-top: 10rem;
        border-top: 1px dashed #303030;

        h3 {
            font-size: 2rem;
            font-weight: 300;
            text-align: center;
            margin-top: 5rem;
        }

        p {
            font-size: 1.4rem;
            margin-top: 0.5rem;
        }
    }

    .recent-projects {
        margin-top: 5rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        h3 {
            font-size: 2rem;
            font-weight: 300;
            text-align: center;
            margin-bottom: 3rem;
        }

        .img-preview {
            width: 100%;

            img {
                width: 100%;
                height: 35rem;
                object-fit: contain;
            }
        }

        .controls {
            width: 100%;
            height: 5rem;
            display: flex;
            justify-content: center;

            button {
                width: 45%;
                margin-top: 1rem;
                background: none;
                border: none;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            img {
                width: 100%;
                height: 2rem;
                object-fit: contain;
            }
        }
    }
`;

export default function Home() {

    return (
        <HomeContainer>
            <p>Hello, I'm</p>
            <h1>Alex Cooter,</h1>
            <p className="small">a full stack web development student at Lambda School.</p>

            <div className="what-i-know">
                <h3>What I Know</h3>
                <div className="skills">
                    <Skills />
                </div>
            </div>

            <div className="recent-projects">
                <h3>Recent Projects</h3>
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={90}
                    totalSlides={3}
                    visibleSlides={1}
                >
                    <Slider>
                        <Slide index={0}>
                            <div className="img-preview">
                                <img src={PlantWise} alt="PlantWise" />
                            </div>
                            <div className="project-desc">
                                <p>React.js, Context API, Styled-Components, react-router-dom</p>
                            </div>
                        </Slide>
                        <Slide index={1}>
                            <div className="img-preview">
                                <img src={LifeGPA} alt="LifeGPA" />
                            </div>
                            <div className="project-desc">
                                <p>JavaScript, CSS3, HTML5</p>
                            </div>
                        </Slide>
                        <Slide index={2}>I am the third Slide.</Slide>
                    </Slider>
                    <div className="controls">
                        <ButtonBack><img src={Previous} alt="Previous" /></ButtonBack>
                        <ButtonNext><img src={Next} alt="Next" /></ButtonNext>
                    </div>
                </CarouselProvider>
            </div>
        </HomeContainer>
    )
}