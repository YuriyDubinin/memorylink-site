import React, {useState} from 'react';
import classNames from 'classnames';

import './Header.scss';

import LoginIcon from './assets/business-person.svg?jsx';
import CheckMarkIcon from './assets/check-mark-circle-color.svg?jsx';
import CircleDisableIcon from './assets/circledisable.svg?jsx';
import ListIcon from './assets/list.svg?jsx';

import Modal from '../../../components/Modal/Modal';

const Header = ({scrollToCoordinates}) => {
    const [loginModal, setLoginModal] = useState(false);
    const [menuShown, setMenuShown] = useState(false);

    return (
        <div className="main-header">
            <ul className="main-header__bars">
                <li className="main-header__bar"></li>
                <li className="main-header__desktop-bar">
                    <div
                        className="main-header__desktop-bar-item"
                        onClick={() => {
                            scrollToCoordinates(0, 1230);
                        }}
                    >
                        Ознакомиться
                    </div>
                    <div
                        className="main-header__desktop-bar-item"
                        onClick={() => {
                            scrollToCoordinates(0, 700);
                        }}
                    >
                        О нас
                    </div>
                    <div
                        className="main-header__desktop-bar-item"
                        onClick={() => {
                            scrollToCoordinates(0, 1900);
                        }}
                    >
                        Цель
                    </div>
                    <div
                        className={classNames({
                            'main-header__desktop-bar-item': true,
                            'main-header__desktop-bar-item_locked': true,
                        })}
                    >
                        Специальные предложения
                    </div>
                    <div
                        className="main-header__desktop-bar-item"
                        onClick={() => {
                            scrollToCoordinates(0, 2600);
                        }}
                    >
                        Оформить
                    </div>
                </li>
                <li className="main-header__bar">
                    <div className="main-header__bar-item">
                        {/* <div className="main-header__bar-icon" onClick={() => setLoginModal(true)}>
                            <LoginIcon />
                        </div> */}
                        {true && (
                            <div className="main-header__bar-icon-badge">
                                <CheckMarkIcon />
                            </div>
                        )}
                        {false && (
                            <div className="main-header__bar-icon-badge main-header__bar-icon-badge_not-auth">
                                <CircleDisableIcon />
                            </div>
                        )}
                    </div>
                    <div className="main-header__burger">
                        <div
                            className="main-header__bar-icon"
                            onClick={() => setMenuShown(!menuShown)}
                        >
                            <ListIcon />
                        </div>
                        {menuShown && (
                            <ul className="main-header__mob-menu">
                                <li
                                    className="main-header__mob-menu-item"
                                    onClick={() => {
                                        scrollToCoordinates(0, 1690);
                                        setMenuShown(false);
                                    }}
                                >
                                    Ознакомиться
                                </li>
                                <li
                                    className="main-header__mob-menu-item"
                                    onClick={() => {
                                        scrollToCoordinates(0, 890);
                                        setMenuShown(false);
                                    }}
                                >
                                    О нас
                                </li>
                                <li
                                    className="main-header__mob-menu-item"
                                    onClick={() => {
                                        scrollToCoordinates(0, 2610);
                                        setMenuShown(false);
                                    }}
                                >
                                    Цель
                                </li>
                                <li className="main-header__mob-menu-item main-header__mob-menu-item_locked">
                                    Специальные предложения
                                </li>
                                <li
                                    className="main-header__mob-menu-item"
                                    onClick={() => {
                                        scrollToCoordinates(0, 99999);
                                        setMenuShown(false);
                                    }}
                                >
                                    Оформить
                                </li>
                            </ul>
                        )}
                    </div>
                </li>
            </ul>
            <Modal isVisible={loginModal} content={<></>} onClose={() => setLoginModal(false)} />
        </div>
    );
};

export default Header;
