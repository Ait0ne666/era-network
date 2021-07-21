import {
    FormContainer,
    SupportTitle,
    SupportWrapper,
    InputContainer,
    Error,
    Submit, SpinnerBox, TextArea, SupportContainer, PageWrapper
} from "./support.section.styles";
import React, {useEffect, useState} from "react";
import {Formik} from "formik";
import {useLanguage} from "../LanguageProvider/language.provider";
import * as yup from "yup";
import {Input, Label} from "../../styles/common.styles";
import {Spinner} from "@chakra-ui/spinner";
import { useToast } from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux";
import {supportSelectors} from "../../redux/support/support.selectors";
import {send} from "../../data/data-sources/support_remote_data_source";
import {clearSupportError, sendSupport} from "../../redux/support/support.actions";

const validationSchema = yup.object().shape({
    name: yup.string().trim().required("Обязательное поле"),
    email: yup
        .string()
        .trim()
        .email("Введите корректный email")
        .required("Обязательное поле"),
    message: yup.string().trim().required("Обязательное поле"),
    
});

const SupportSection: React.FC = () => {
    const {currentLanguage, language} = useLanguage();
    const loading = useSelector(supportSelectors.loading);
    const error = useSelector(supportSelectors.error);
    const success = useSelector(supportSelectors.success);
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

    const handleSubmit = async (values: { name: string, email: string; message: string }) => {
        dispatch(sendSupport(values))
    }

    useEffect(()=>{
        if (error )
            showErrorToast('','error',error);
        },
        [error])

    useEffect(()=>{
            if (success )
                showErrorToast('','success', success);
        },
        [success])

    useEffect(()=>{
        return ()=>{dispatch(clearSupportError())}
    },)

    return (
        <PageWrapper style={{
            backgroundImage: `url('bg.png')`
        }}>
            <SupportWrapper>
                <SupportContainer>
                    <SupportTitle>Поддержка</SupportTitle>
                    <Formik
                        initialValues={{
                            name: "",
                            email: "",
                            message: ""
                        }}
                        onSubmit={handleSubmit}
                        validationSchema={validationSchema}
                    >
                        {({handleChange, handleSubmit, values, errors}) => (
                            <>
                                <FormContainer onSubmit={handleSubmit}>
                                    <InputContainer>
                                        <Label>{language.helpsection.name_title}</Label>
                                        <Input
                                            type="text"
                                            name="name"
                                            value={values.name}
                                            onChange={handleChange}
                                            placeholder={language.helpsection.name_placeholder}
                                        />
                                        <Error>{errors.name}</Error>
                                    </InputContainer>
                                    <InputContainer>
                                        <Label>{language.helpsection.email_title}</Label>
                                        <Input
                                            type="email"
                                            name="email"
                                            value={values.email}
                                            onChange={handleChange}
                                            placeholder={language.helpsection.email_placeholder}
                                        />
                                        <Error>{errors.email}</Error>


                                    </InputContainer>
                                    <InputContainer>
                                        <Label>{language.helpsection.mes_title}</Label>
                                        <TextArea
                                            name="message"
                                            value={values.message}
                                            onChange={handleChange}
                                            placeholder={language.helpsection.mes_placeholder}
                                        />
                                        <Error>{errors.message}</Error>
                                    </InputContainer>
                                    <Submit>
                                        <SpinnerBox>
                                            {
                                                loading && <Spinner size='sm' color='#004181'/>
                                            }
                                        </SpinnerBox>
                                        Отправить
                                    </Submit>
                                </FormContainer>

                            </>
                        )}
                    </Formik>
                </SupportContainer>
            </SupportWrapper>
        </PageWrapper>

    )
}


export default SupportSection
