import {
    FormContainer,
    HelpTitle,
    HelpWrapper,
    InputContainer,
    Error,
    Submit, SpinnerBox, TextArea, HelpContainer, PageWrapper
} from "./help.section.styles";
import React, {useState} from "react";
import {Formik} from "formik";
import {useLanguage} from "../LanguageProvider/language.provider";
import * as yup from "yup";
import {Input, Label} from "../../styles/common.styles";
import {Spinner} from "@chakra-ui/spinner";

const validationSchema = yup.object().shape({
    name: yup.string().trim().required("Обязательное поле"),
    email: yup
        .string()
        .trim()
        .email("Введите корректный email")
        .required("Обязательное поле"),
    message: yup.string().trim().required("Обязательное поле"),
    
});

const HelpSection: React.FC = () => {
    const {currentLanguage, language} = useLanguage();
    const [loading, setLoading] = useState(false)


    const handleSubmit = async (values: { name: string, email: string; message: string }) => {
        setLoading(true);

        setTimeout(() => setLoading(false), 1000);
    }

    return (
        <PageWrapper style={{
            backgroundImage: `url('bg.png')`
        }}>
            <HelpWrapper>
                <HelpContainer>
                    <HelpTitle>Поддержка</HelpTitle>
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
                </HelpContainer>
            </HelpWrapper>
        </PageWrapper>

    )
}


export default HelpSection
