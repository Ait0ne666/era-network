import {Input, Label} from "../../styles/common.styles";
import {Formik} from "formik";
import React, {useState} from "react";
import {useLanguage} from "../LanguageProvider/language.provider";
import infoImg from '../../assets/InfoImg.png'
import playImg from '../../assets/PlayImg.png';
import lockImg from '../../assets/Lock.png';
import {Spinner} from '@chakra-ui/spinner'

import {
    AuthWrapper,
    InputContainer,
    FormContainer,
    ChangePassword,
    Submit,
    Error,
    Inscription, InlineImg, LinkBox, LinkButton, TitleBox, ActiveLink, SlashTitle, UnactiveLink, LinkText, LinkImg, SpinnerBox,PageWrapper
} from "./auth.section.styles";

import * as yup from "yup";

import {loginUser} from "../../redux/user/user.actions";
import { useDispatch } from "react-redux";
import {Link} from "react-router-dom";
const validationSchema = yup.object().shape({
    login : yup.string().trim().required("Обязательное поле"),
    password: yup
        .string()
        .trim()
        .required("Обязательное поле"),
});

const AuthSection: React.FC = () => {
    const { language } = useLanguage();
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const handleSubmit = async(values: { login: string; password: string })=>{
        setLoading(true);

        dispatch(loginUser({username: values.login, password: values.password}))

        // setTimeout(()=>setLoading(false), 1000);
    }


    return(
        <PageWrapper
            style={{
        backgroundImage: `url('bg.png')`
    }}>

                <AuthWrapper>

                    <TitleBox>
                        <ActiveLink>{language.header.signIn}</ActiveLink>
                        <SlashTitle>/</SlashTitle>
                        <UnactiveLink><Link to="/reg">{language.header.signUp}</Link></UnactiveLink>
                    </TitleBox>
                    <Inscription>
                        <InlineImg src={infoImg} />
                        {language.auth.inscription}
                    </Inscription>
                    <LinkBox>
                        <LinkText>
                            <LinkImg src={lockImg}/>
                            https://eracoin.io/
                        </LinkText>
                        <LinkButton><img src={playImg}/></LinkButton>
                    </LinkBox>
                    <Formik
                        initialValues={{
                            login: "",
                            password: ""
                        }}
                        onSubmit={handleSubmit}
                        validationSchema={validationSchema}
                    >
                        {({handleChange, handleSubmit, values, errors})=>(
                            <>
                                <FormContainer onSubmit={handleSubmit}>
                                    <InputContainer>
                                        <Label>{language.auth.login_title}</Label>
                                        <Input
                                            type="text"
                                            name="login"
                                            value={values.login}
                                            onChange={handleChange}
                                            placeholder={language.auth.login_placeholder}
                                        />
                                        <Error>{errors.login}</Error>
                                    </InputContainer>
                                    <InputContainer>
                                        <Label>{language.auth.password_title}</Label>
                                        <Input
                                            type="password"
                                            name="password"
                                            value={values.password}
                                            onChange={handleChange}
                                            placeholder={language.auth.password_placeholder}
                                        />
                                        <Error>{errors.password}</Error>
                                    </InputContainer>
                                    <Submit type="submit">
                                        <SpinnerBox>
                                            {
                                                loading && <Spinner size='sm' color='#004181'/>
                                            }
                                        </SpinnerBox>
                                        {language.auth.submitButton}
                                    </Submit>

                                </FormContainer>
                                <ChangePassword>{language.auth.changePassword}</ChangePassword>
                            </>
                        )}
                    </Formik>
                </AuthWrapper>

        </PageWrapper>
    )
}

export default AuthSection;
