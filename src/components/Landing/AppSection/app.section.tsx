import { useLanguage } from "../../LanguageProvider/language.provider"
import { SectionContainer, SectionTitle, DevicesImageContainer, FounderButton, SectionInfo, SectionSubtitle } from "./app.section.styles"


import {ReactComponent as PlaySVG} from '../../../assets/play_black.svg'
import React from "react"






const AppSection: React.FC = () => {
    const {language} = useLanguage()




    return (
        <SectionContainer>
            <SectionInfo>
                <SectionTitle>
                    {language.app.title}
                </SectionTitle>
                <SectionSubtitle>
                    {language.app.subtitle}
                </SectionSubtitle>
                <FounderButton>
                    <PlaySVG/>
                    {language.app.founder}
                </FounderButton>
            </SectionInfo>
            <DevicesImageContainer>
                <img src='/devices.png' alt='device'/>
            </DevicesImageContainer>
        </SectionContainer>
    )
}




export default AppSection
