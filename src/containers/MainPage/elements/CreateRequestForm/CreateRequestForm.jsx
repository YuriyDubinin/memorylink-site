import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import toast from 'react-hot-toast';

import './CreateRequestForm.scss';

import InfoIcon from './assets/info.svg?jsx';

import {validateSimpleRequired} from '../../../../helpers/validation';

import {createRequest} from '../../../../api/request';

const CreateRequestForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm({
        mode: 'all',
        defaultValues: {
            name: '',
            surname: '',
            patronymic: '',
            email: '',
            phone: '',
            text: '',
        },
    });

    const fieldDescription = {
        name: 'Имя пользователя',
        surname: 'Фамилия пользователя',
        patronymic: 'Отчество пользователя',
        email: 'Емейл должен быть написан в стандартном формате и содержать в себе символ "@"',
        phone: 'Телефон пользователя должен начинаться с +7',
        text: 'Текст заявки',
    };

    const onSubmit = (data) => {
        createRequest(data).then(() => reset());
    };

    return (
        <>
            <div className="create-request-form">
                <div className="create-request-form__row">
                    <div className="create-request-form__header">Создание нового пользователя</div>
                    <div className="create-request-form__body">
                        <form
                            className="create-request-form__body default-form"
                            method="post"
                            encType="multipart/form-data"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <div className="default-form__input-wrapper create-request-form__input">
                                <div
                                    className="create-request-form__info-icon"
                                    onClick={() => {
                                        toast(fieldDescription.name, {
                                            icon: 'ℹ️',
                                            duration: 1500,
                                        });
                                    }}
                                >
                                    <InfoIcon />
                                </div>
                                <input
                                    className="default-form__input"
                                    placeholder="Имя"
                                    {...register('name', {
                                        validate: (value) => validateSimpleRequired(value, true),
                                    })}
                                />
                                {errors.name && (
                                    <span className="default-form__error-message">
                                        {/* {errors.name?.message} */}
                                        обязательное поле
                                    </span>
                                )}
                            </div>
                            <div className="default-form__input-wrapper create-request-form__input">
                                <div
                                    className="create-request-form__info-icon"
                                    onClick={() => {
                                        toast(fieldDescription.surname, {
                                            icon: 'ℹ️',
                                            duration: 1500,
                                        });
                                    }}
                                >
                                    <InfoIcon />
                                </div>
                                <input
                                    className="default-form__input"
                                    placeholder="Фамилия"
                                    {...register('surname', {
                                        validate: (value) => validateSimpleRequired(value, true),
                                    })}
                                />
                                {errors.surname && (
                                    <span className="default-form__error-message">
                                        {errors.surname?.message}
                                    </span>
                                )}
                            </div>
                            <div className="default-form__input-wrapper create-request-form__input">
                                <div
                                    className="create-request-form__info-icon"
                                    onClick={() => {
                                        toast(fieldDescription.patronymic, {
                                            icon: 'ℹ️',
                                            duration: 1500,
                                        });
                                    }}
                                >
                                    <InfoIcon />
                                </div>
                                <input
                                    className="default-form__input"
                                    placeholder="Отчество"
                                    {...register('patronymic', {
                                        validate: (value) => validateSimpleRequired(value, true),
                                    })}
                                />
                                {errors.patronymic && (
                                    <span className="default-form__error-message">
                                        {errors.patronymic?.message}
                                    </span>
                                )}
                            </div>
                            <div className="default-form__input-wrapper create-request-form__input">
                                <div
                                    className="create-request-form__info-icon"
                                    onClick={() => {
                                        toast(fieldDescription.phone, {
                                            icon: 'ℹ️',
                                            duration: 1500,
                                        });
                                    }}
                                >
                                    <InfoIcon />
                                </div>
                                <input
                                    className="default-form__input"
                                    placeholder="Телефон"
                                    {...register('phone', {
                                        validate: (value) => validateSimpleRequired(value, true),
                                    })}
                                />
                                {errors.phone && (
                                    <span className="default-form__error-message">
                                        {errors.phone?.message}
                                    </span>
                                )}
                            </div>
                            <div className="default-form__input-wrapper create-request-form__input">
                                <div
                                    className="create-request-form__info-icon"
                                    onClick={() => {
                                        toast(fieldDescription.email, {
                                            icon: 'ℹ️',
                                            duration: 1500,
                                        });
                                    }}
                                >
                                    <InfoIcon />
                                </div>
                                <input
                                    className="default-form__input"
                                    placeholder="Почта"
                                    {...register('email')}
                                />
                                {errors.email && (
                                    <span className="default-form__error-message">
                                        {errors.email?.message}
                                    </span>
                                )}
                            </div>

                            <div className="default-form__input-wrapper create-request-form__input">
                                <div
                                    className="create-request-form__info-icon"
                                    onClick={() => {
                                        toast(fieldDescription.text, {
                                            icon: 'ℹ️',
                                            duration: 1500,
                                        });
                                    }}
                                >
                                    <InfoIcon />
                                </div>
                                <textarea
                                    className="default-form__textarea"
                                    placeholder="Текст"
                                    {...register('text', {
                                        validate: (value) => validateSimpleRequired(value, true),
                                    })}
                                />
                                {errors.text && (
                                    <span className="default-form__error-message">
                                        {errors.text?.message}
                                    </span>
                                )}
                            </div>
                            <button
                                type="submit"
                                className="default-form__submit-btn create-request-form__submit-btn"
                            >
                                Отправить
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateRequestForm;
