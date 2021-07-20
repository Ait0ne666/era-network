import { useLanguage } from "../../LanguageProvider/language.provider"
import { SectionContainer, SectionHeader, SectionTitle, SocialContainer } from "./social.styles"



import Medium from '../../../assets/medium.png'
import Youtube from '../../../assets/youtube.png'
import Telegram from '../../../assets/telegram.png'
import Github from '../../../assets/github.png'
import WhitePaper from '../../../assets/whitepaper.png'




const SocialSection: React.FC = () => {
    const {language} = useLanguage()



    return (
        <SectionContainer>
            <SectionHeader>
                <SectionTitle>
                    {language.intouch}
                </SectionTitle>
            </SectionHeader>
            <SocialContainer>
                <img src={Medium} alt='medium'/>
                <img src={Youtube} alt='youtube'/>
                <img src={Telegram} alt='telegram'/>
                <img src={Github} alt='github'/>
                <img src={WhitePaper} alt='whitepaper'/>
            </SocialContainer>
        </SectionContainer>
    )
}




export default SocialSection