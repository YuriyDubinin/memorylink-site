import React from 'react';

import './MainPage.scss';

import IntroImage1 from './assets/image-1.svg?jsx';
import IntroImage2 from './assets/image-2.svg?jsx';
import IntroImage3 from './assets/image-3.svg?jsx';
import IntroImage4 from './assets/image-4.svg?jsx';
import PhotosIcon from './assets/photos.svg?jsx';
import VideosIcon from './assets/videos.svg?jsx';

import MiddleBlock from '../../components/MiddleBlock/MiddleBlock';
import CreateRequestForm from './elements/CreateRequestForm/CreateRequestForm';

import IntroContent from '../../content/IntroContent.json';
import ServiceContent from '../../content/ServicesContent.json';
import MissionContent from '../../content/MissionContent.json';
import ProductContent from '../../content/ProductContent.json';
import ContactContent from '../../content/ContactContent.json';

const MainPage = ({scrollToCoordinates}) => {
    return (
        <div className="main-page">
            <div className="main-page__container">
                <MiddleBlock>
                    <div className="main-page__body">
                        <h2>{IntroContent.title}</h2>
                        <p>{IntroContent.text}</p>
                        <div
                            className="main-page__btn"
                            onClick={() => scrollToCoordinates(0, 99999)}
                        >
                            <button>{IntroContent.button[0].title}</button>
                        </div>
                    </div>
                    <div className="main-page__image">
                        <IntroImage1 />
                    </div>
                </MiddleBlock>

                <MiddleBlock>
                    <div className="main-page__image">
                        <IntroImage3 />
                    </div>
                    <div className="main-page__body">
                        <h2>{MissionContent.title}</h2>
                        <p>{MissionContent.text}</p>
                    </div>
                </MiddleBlock>
                <MiddleBlock>
                    <div className="main-page__image">
                        <IntroImage2 />
                    </div>
                    <div className="main-page__body">
                        <h2>{ServiceContent.title}</h2>
                        <p>{ServiceContent.text}</p>
                        <div className="main-page__props">
                            <div className="main-page__props-block">
                                <PhotosIcon />
                                <h3>{ServiceContent.section[0].title}</h3>
                                <p>{ServiceContent.section[0].text}</p>
                            </div>
                            <div className="main-page__props-block">
                                <VideosIcon />
                                <h3>{ServiceContent.section[1].title}</h3>
                                <p>{ServiceContent.section[1].text}</p>
                            </div>
                        </div>
                    </div>
                </MiddleBlock>
                <MiddleBlock>
                    <div className="main-page__body">
                        <h2>{ProductContent.title}</h2>
                        <p>{ProductContent.text}</p>
                    </div>
                    <div className="main-page__image">
                        <IntroImage4 />
                    </div>
                </MiddleBlock>
                <MiddleBlock>
                    <div className="main-page__body">
                        <h2>{ContactContent.title}</h2>
                        <p>{ContactContent.text}</p>
                    </div>
                    <div className="main-page__image">
                        <CreateRequestForm />
                    </div>
                </MiddleBlock>
            </div>
        </div>
    );
};

export default MainPage;
