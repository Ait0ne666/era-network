import React, {useState} from "react";
import {useLanguage} from "../LanguageProvider/language.provider";
import {
    AuthWrapper,
    TitleBox,
    SlashTitle,
    PageWrapper,
    ChangeLink
} from "./auth.styles";

import * as yup from "yup";

import {useSelector} from "react-redux";
import {supportSelectors} from "../../redux/support/support.selectors";
import LoginSection from "./LoginSection/login.section";
import RegistrationSection from "./RegistrationSection/registration.section";
const validationSchema = yup.object().shape({
    login : yup.string().trim().required("Обязательное поле"),
    password: yup
        .string()
        .trim()
        .required("Обязательное поле"),
});

const Auth: React.FC = () => {
    const { language } = useLanguage();
    const loading = useSelector(supportSelectors.loading);
    const error = useSelector(supportSelectors.error);
    const handleSubmit = async(values: { login: string; password: string })=>{
    }

    const [isLogin, setIsLogin] = useState(false)

    const handleClick = ()=>{
        setIsLogin(!isLogin)
    }

    return(
        <PageWrapper
            style={{
        backgroundImage: `url('bg.png')`
    }}>
                <AuthWrapper>

                    <TitleBox>
                        <ChangeLink active={isLogin} onClick={()=>setIsLogin(false)}>{language.header.signIn}</ChangeLink>
                        <SlashTitle>/</SlashTitle>
                        <ChangeLink active={!isLogin} onClick={()=>setIsLogin(true)}>{language.header.signUp}</ChangeLink>
                    </TitleBox>

                    {
                        isLogin? <LoginSection/>:<RegistrationSection/>
                    }
                </AuthWrapper>

        </PageWrapper>
    )
}

export default Auth;
