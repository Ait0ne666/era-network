import {
  SectionContainer,
  ImageContainer,
  InfoContainer,
  InfoSubtitle,
  InfoSubtitleBorder,
  InfoSubtitleText,
  InfoTitle,
  TelegramContainer,
  TelegramIcon,
  TelegramInfoContainer,
  TelegramInfoSubtitle,
  TelegramInfoTitle,
} from "./general.sections.styles";

import {ReactComponent as ValidatorSVG} from '../../../assets/validator.svg'
import {ReactComponent as TgSVG} from '../../../assets/telegram.svg'
import { useLanguage } from "../../LanguageProvider/language.provider";




interface SectionProps {
  ref:
    | ((instance: HTMLElement | null) => void)
    | React.RefObject<HTMLElement>
    | null
    | undefined;
}

const GeneralSection: React.FC<SectionProps> = ({ ref }) => {
    const {language} = useLanguage()





  return <SectionContainer ref={ref}>
      <InfoContainer>
        <InfoTitle>
            {language.general.title}
        </InfoTitle>
        <InfoSubtitle>
            <InfoSubtitleBorder/>
            <InfoSubtitleText>
            {language.general.subtitle}
            </InfoSubtitleText>
        </InfoSubtitle>
        <TelegramContainer>
            <TelegramIcon>
                <TgSVG/>
            </TelegramIcon>
            <TelegramInfoContainer>
                <TelegramInfoTitle>
                {language.general.tgTitle}
                </TelegramInfoTitle>
                <TelegramInfoSubtitle>
                {language.general.tgSubtitle}
                </TelegramInfoSubtitle>
            </TelegramInfoContainer>
        </TelegramContainer>
      </InfoContainer>
      <ImageContainer>
          <ValidatorSVG/>
      </ImageContainer>
  </SectionContainer>;
};

export default GeneralSection;
