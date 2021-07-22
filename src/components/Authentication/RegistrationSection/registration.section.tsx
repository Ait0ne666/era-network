import {Input, Label} from "../../../styles/common.styles";
import {Formik} from "formik";
import React, {useEffect, useState} from "react";
import {useLanguage} from "../../LanguageProvider/language.provider";
import {Spinner} from '@chakra-ui/spinner'
import infoImg from "../../../assets/RightImg.svg";
import {
    InputContainer,
    FormContainer,
    Submit,
    Error,
    SpinnerBox,
} from "../auth.styles";

import * as yup from "yup";
import {clearUserError, registerUser} from "../../../redux/user/user.actions";
import {
    Checkbox,
    CheckboxContainer,
    CheckboxLink,
    CheckboxNote,
    NotePassword,
    RightImg
} from "./registration.section.styles";
import {Tooltip, useToast} from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux";
import {userSelectors} from "../../../redux/user/user.selectors";


const validationSchema = yup.object().shape({
    username_invited: yup.string(),
    username: yup.string().trim().required("Обязательное поле"),
    email: yup.string().email().required("Обязательное поле"),
    password: yup
        .string()
        .trim()
        .required("Обязательное поле")
        .min(9, "Короткий пароль")
        .matches(/^((?=.*\d)(?=.*[A-Z]).+)$/, "Не все символы соблюдены"),
    password_repeat: yup
        .string()
        .trim()
        .oneOf([yup.ref("password")], "Пароли не совпадают").required("Пароли не совпадают"),
    telegram: yup.string().trim().matches(/@+/, "Неверный формат"),
    agreement: yup.boolean().isTrue("Необходимо принять соглашение")
});

const RegSection: React.FC = () => {
    const {language} = useLanguage();
    const loading = useSelector(userSelectors.loading)
    const error = useSelector(userSelectors.error)
    const handleSubmit = async (values: {
        username_invited: string;
        username: string;
        email: string;
        password: string;
        password_repeat: string;
        telegram: string
    }) => {

        registerUser({
            username_invited: values.username_invited,
            username: values.username,
            email: values.email,
            password: values.password,
            telegram: values.telegram
        })

    }

    const dispatch = useDispatch();
    const toast = useToast()
    const showErrorToast = (message: String, status: "error" | "info" | "warning" | "success", title: string) => {
        toast({
            title: title ? title : "Ошибка",
            description: message,
            position: "top-right",
            status: status ? status : "error",
            duration: 8000,
            isClosable: true,
        });
    };

    useEffect(() => {
            if (error) {
                showErrorToast('', 'error', error);
                dispatch(dispatch(clearUserError()))
            }
        },
        [error])

    return (
        <Formik
            initialValues={{
                username_invited: "",
                username: "",
                email: "",
                password: "",
                password_repeat: "",
                telegram: "",
                agreement: true
            }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            {({handleChange, handleSubmit, values, errors}) => (
                <>
                    <FormContainer onSubmit={handleSubmit}>
                        <InputContainer>
                            <Label>
                                {language.auth.registration.username_invited_title}
                                <Tooltip hasArrow
                                         textAlign="center"
                                         label={language.auth.registration.username_invited_tooltip}>
                                    <RightImg src={infoImg}/>
                                </Tooltip>
                            </Label>
                            <Input
                                type="text"
                                name="username_invited"
                                value={values.username_invited}
                                onChange={handleChange}
                                placeholder={language.auth.registration.username_invited_placeholder}
                            />
                            <Error>{errors.username_invited}</Error>
                        </InputContainer>
                        <InputContainer>
                            <Label>{language.auth.registration.username_title}
                                <Tooltip hasArrow
                                         textAlign="center"
                                         label={language.auth.registration.username_tooltip}>
                                    <RightImg src={infoImg}/>
                                </Tooltip>
                            </Label>
                            <Input
                                type="text"
                                name="username"
                                value={values.username}
                                onChange={handleChange}
                                placeholder={language.auth.registration.username_placeholder}
                            />
                            <Error>{errors.username}</Error>
                        </InputContainer>
                        <InputContainer>
                            <Label>{language.auth.registration.email_title}</Label>
                            <Input
                                type="email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                placeholder={language.auth.registration.email_placeholder}
                            />
                            <Error>{errors.email}</Error>
                        </InputContainer>
                        <InputContainer>
                            <Label>{language.auth.registration.password_title}</Label>
                            <Input
                                type="password"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                placeholder={language.auth.registration.password_placeholder}
                            />
                            <Error>{errors.password}</Error>
                        </InputContainer><InputContainer>
                        <Label>{language.auth.registration.password_repeat_title}</Label>
                        <Input
                            type="password"
                            name="password_repeat"
                            value={values.password_repeat}
                            onChange={handleChange}
                            placeholder={language.auth.registration.password_repeat_placeholder}
                        />
                        <Error>{errors.password_repeat}</Error>
                        <NotePassword>{language.auth.registration.password_info}</NotePassword>

                    </InputContainer>
                        <InputContainer>
                            <Label>
                                {language.auth.registration.telegram_title}
                                <Tooltip hasArrow
                                         textAlign="center"
                                         label={language.auth.registration.telegram_tooltip}>
                                    <RightImg src={infoImg}/>
                                </Tooltip>
                            </Label>
                            <Input
                                type="text"
                                name="telegram"
                                value={values.telegram}
                                onChange={handleChange}
                                placeholder={language.auth.registration.telegram_placeholder}
                            />
                            <Error>{errors.telegram}</Error>
                        </InputContainer>
                        <CheckboxContainer>
                            <Checkbox
                                type="checkbox"
                                name="agreement"
                                checked={values.agreement}
                                onChange={handleChange}
                            />
                            <CheckboxNote>
                                {language.auth.registration.agreement}
                                <CheckboxLink href="#">{language.auth.registration.agreement_link}</CheckboxLink>
                            </CheckboxNote>
                        </CheckboxContainer>
                        <Error>{errors.agreement}</Error>
                        <Submit type="submit">
                            <SpinnerBox>
                                {
                                    loading && <Spinner size='sm' color='#004181'/>
                                }
                            </SpinnerBox>
                            {language.auth.registration.submit}
                        </Submit>

                    </FormContainer>
                </>
            )}
        </Formik>
    )
}

export default RegSection;
