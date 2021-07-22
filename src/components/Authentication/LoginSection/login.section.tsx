import {
    ChangePassword,
    Error,
    FormContainer,
    InlineImg,
    InputContainer,
    Inscription,

    SpinnerBox, Submit
} from "../auth.styles";
import infoImg from "../../../assets/InfoImg.png";
import lockImg from "../../../assets/Lock.png";
import playImg from "../../../assets/PlayImg.png";
import {Formik} from "formik";
import {Input, Label} from "../../../styles/common.styles";
import {Spinner} from "@chakra-ui/spinner";
import React, {useState} from "react";
import * as yup from "yup";
import {useLanguage} from "../../LanguageProvider/language.provider";
import {useDispatch, useSelector} from "react-redux";
import {supportSelectors} from "../../../redux/support/support.selectors";
import {Link} from "react-router-dom";
import {LinkBox, LinkButton, LinkImg, LinkText} from "./login.styles";
import { loginUser } from "../../../redux/user/user.actions";


const validationSchema = yup.object().shape({
    login : yup.string().trim().required("Обязательное поле"),
    password: yup
        .string()
        .trim()
        .required("Обязательное поле"),
});

const LoginSection: React.FC = () => {
    const { language } = useLanguage();
    const loading = useSelector(supportSelectors.loading);
    const error = useSelector(supportSelectors.error);
    const dispatch = useDispatch()
    const handleSubmit = async(values: { login: string; password: string })=>{
        dispatch(loginUser({password: values.password, username: values.login}))
    }

    const isLogin = useState(false)

    return(
        <>
            <Inscription>
                <InlineImg src={infoImg} />
                {language.auth.login.inscription}
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
                                <Label>{language.auth.login.login_title}</Label>
                                <Input
                                    type="text"
                                    name="login"
                                    value={values.login}
                                    onChange={handleChange}
                                    placeholder={language.auth.login.login_placeholder}
                                />
                                <Error>{errors.login}</Error>
                            </InputContainer>
                            <InputContainer>
                                <Label>{language.auth.login.password_title}</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    placeholder={language.auth.login.password_placeholder}
                                />
                                <Error>{errors.password}</Error>
                            </InputContainer>
                            <Submit type="submit">

                                <SpinnerBox>
                                    {
                                        loading && <Spinner size='sm' color='#004181'/>
                                    }
                                </SpinnerBox>

                                {language.auth.login.submitButton}
                            </Submit>

                        </FormContainer>
                        <ChangePassword>{language.auth.login.changePassword}</ChangePassword>
                    </>
                )}
            </Formik>
        </>
    )
}

export default LoginSection;


