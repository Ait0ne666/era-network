import {Input, Label} from "../../../styles/common.styles";
import {Formik} from "formik";
import React, {useState} from "react";
import {useLanguage} from "../../LanguageProvider/language.provider";
import {Spinner} from '@chakra-ui/spinner'
import infoImg from  "../../../assets/RightImg.svg";


import {
    InputContainer,
    FormContainer,
    Submit,
    Error,
    SpinnerBox,
} from "../auth.styles";

import * as yup from "yup";

import {loginUser} from "../../../redux/user/user.actions";
import {
    Checkbox,
    CheckboxContainer,
    CheckboxLink,
    CheckboxNote,
    NotePassword,
    RightImg
} from "./registration.section.styles";

const validationSchema = yup.object().shape({
    username_invited : yup.string().trim().required("Обязательное поле"),
    username : yup.string().trim().required("Обязательное поле"),
    email : yup.string().trim().required("Обязательное поле"),
    password: yup
        .string()
        .trim()
        .required("Обязательное поле"),
    password_repeat: yup
        .string()
        .trim()
        .required("Обязательное поле"),
    telegram: yup.string().trim().required("Обязательное поле"),
    agreement: yup.boolean().isTrue("Необходимо принять соглашение")
});

const RegSection: React.FC = () => {
    const { language } = useLanguage();
    const [loading, setLoading] = useState(false)
    const handleSubmit = async(values: { username_invited: string;
    username: string;
    email: string;
    password: string;
    password_repeat: string;
    telegram: string})=>{

        // loginUser({username: values.login, password: values.password})

    }
    return(
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
                    {({handleChange, handleSubmit, values, errors})=>(
                        <>
                            <FormContainer onSubmit={handleSubmit}>
                                <InputContainer>
                                    <Label>{language.auth.registration.username_invited_title} <RightImg src={infoImg} /> </Label>
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
                                    <Label>{language.auth.registration.username_title}<RightImg src={infoImg} /> </Label>
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
                                    <NotePassword>{language.auth.registration.password_info}</NotePassword>
                                    <Error>{errors.password_repeat}</Error>
                                </InputContainer>
                                <InputContainer>
                                    <Label>{language.auth.registration.telegram_title} <RightImg src={infoImg} /> </Label>
                                    <Input
                                        type="text"
                                        name="password"
                                        value={values.password}
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
