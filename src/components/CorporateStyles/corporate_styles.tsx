import {
  CustomButton,
  PageContainer,
  PageWrapper,
} from "../../styles/common.styles";
import {
  StylesHeader,
  LogoContainer,
  LogoInnerContainer,
  LogoSection,
  LogoSectionTitle,
  DownloadContainer,
  LogoImage,
  LogoInnerContainerTitle,
  LogosWrapper,
  ColorSection,
  ColorSectionTitle,
  ColorContainer,
  ColorDisplay,
  ColorDescriptionContainer,
  ColorsContainer,
  CarSection,
  CarSectionHeader,
} from "./corporates_styles.styles";

import { useLanguage } from "../LanguageProvider/language.provider";
import { useTheme } from "styled-components";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import CarsImage from '../../assets/cars.png'



const CorporateStyles = () => {
  const { language } = useLanguage();
  const theme = useTheme();

  return (
    <PageWrapper>
      <PageContainer>
        <StylesHeader>Стиль Era coin</StylesHeader>
        <LogoSection>
          <LogoContainer>
            <LogoSectionTitle>{language.styles.logo.title}</LogoSectionTitle>
            <LogosWrapper>
              <LogoInnerContainer>
                <LogoInnerContainerTitle>
                  {language.styles.logo.mainVariant}
                </LogoInnerContainerTitle>
                <LogoImage>
                  <Logo />
                  <span>Era coin</span>
                </LogoImage>
              </LogoInnerContainer>
              <LogoInnerContainer>
                <LogoInnerContainerTitle>
                  {language.styles.logo.mainVariant}
                </LogoInnerContainerTitle>
                <LogoImage width={"60px"}>
                  <Logo />
                </LogoImage>
              </LogoInnerContainer>
            </LogosWrapper>
          </LogoContainer>
          <DownloadContainer>
            <a href="#" target="_blank">
              <CustomButton>{language.styles.logo.download}</CustomButton>
            </a>
            <span>{language.styles.logo.archive}</span>
          </DownloadContainer>
        </LogoSection>
        <ColorSection>
          <ColorSectionTitle>
            {language.styles.mainColors.title}
          </ColorSectionTitle>
          <ColorsContainer>
            <ColorContainer>
              <ColorDisplay color={theme.style.colors.main} />

              <ColorDescriptionContainer>
                <h6>{language.styles.mainColors.main}</h6>
                <span>
                  {"HEX: " + theme.style.colors.main.replace("#", "")}
                </span>
              </ColorDescriptionContainer>
            </ColorContainer>
            <ColorContainer>
              <ColorDisplay color={theme.style.colors.positive} />

              <ColorDescriptionContainer>
                <h6>{language.styles.mainColors.positive}</h6>
                <span>
                  {"HEX: " + theme.style.colors.positive.replace("#", "")}
                </span>
              </ColorDescriptionContainer>
            </ColorContainer>
            <ColorContainer>
              <ColorDisplay color={theme.style.colors.negative} />

              <ColorDescriptionContainer>
                <h6>{language.styles.mainColors.negative}</h6>
                <span>
                  {"HEX: " + theme.style.colors.negative.replace("#", "")}
                </span>
              </ColorDescriptionContainer>
            </ColorContainer>
            <ColorContainer>
              <ColorDisplay color={theme.style.colors.accent} />

              <ColorDescriptionContainer>
                <h6>{language.styles.mainColors.accent}</h6>
                <span>
                  {"HEX: " + theme.style.colors.accent.replace("#", "")}
                </span>
              </ColorDescriptionContainer>
            </ColorContainer>
            <ColorContainer>
              <ColorDisplay color={theme.style.colors.disabled} />

              <ColorDescriptionContainer>
                <h6>{language.styles.mainColors.inactive}</h6>
                <span>
                  {"HEX: " + theme.style.colors.disabled.replace("#", "")}
                </span>
              </ColorDescriptionContainer>
            </ColorContainer>
            <ColorContainer>
              <ColorDisplay color={theme.style.colors.main} />

              <ColorDescriptionContainer>
                <h6>{language.styles.mainColors.main}</h6>
                <span>
                  {"HEX: " +
                    theme.style.colors.mainGradient.start.replace("#", "") +
                    ", HEX: " +
                    theme.style.colors.mainGradient.end.replace("#", "")}
                </span>
              </ColorDescriptionContainer>
            </ColorContainer>
          </ColorsContainer>


          
        </ColorSection>



        <ColorSection>
          <ColorSectionTitle>
            {language.styles.typography.title}
          </ColorSectionTitle>
          <ColorsContainer>
            <ColorContainer>
              <ColorDisplay color={theme.style.colors.headers} />

              <ColorDescriptionContainer>
                <h6>{language.styles.typography.headers}</h6>
                <span>
                  {"HEX: " + theme.style.colors.headers.replace("#", "")}
                </span>
              </ColorDescriptionContainer>
            </ColorContainer>
            <ColorContainer>
              <ColorDisplay color={theme.style.colors.mainText} />

              <ColorDescriptionContainer>
                <h6>{language.styles.typography.main}</h6>
                <span>
                  {"HEX: " + theme.style.colors.mainText.replace("#", "")}
                </span>
              </ColorDescriptionContainer>
            </ColorContainer>
            <ColorContainer>
              <ColorDisplay color={theme.style.colors.subtitle} />

              <ColorDescriptionContainer>
                <h6>{language.styles.typography.subtitle}</h6>
                <span>
                  {"HEX: " + theme.style.colors.subtitle.replace("#", "")}
                </span>
              </ColorDescriptionContainer>
            </ColorContainer>
            <ColorContainer>

              <ColorDescriptionContainer>
                <h6>{language.styles.typography.font}</h6>
                <span>
                Montserrat
                </span>
              </ColorDescriptionContainer>
            </ColorContainer>
            <ColorContainer>

              <ColorDescriptionContainer>
                <h6>{language.styles.typography.size}</h6>
                <span>
                {`32 / 16 / 14 / 12`}
                </span>
              </ColorDescriptionContainer>
            </ColorContainer>
            <ColorContainer>

              <ColorDescriptionContainer>
                <h6>{language.styles.typography.fontVariants}</h6>
                <span>
                {'HEX: C4C4C4'}
                </span>
              </ColorDescriptionContainer>
            </ColorContainer>
          </ColorsContainer>

          <ColorSection>
          <ColorSectionTitle>
            {language.styles.mobileLight.title}
          </ColorSectionTitle>
          <ColorsContainer>
            <ColorContainer>
              <ColorDisplay color={theme.style.colors.bg} />

              <ColorDescriptionContainer>
                <h6>{language.styles.mobileLight.bg}</h6>
                <span>
                  {"HEX: " + theme.style.colors.bg.replace("#", "")}
                </span>
              </ColorDescriptionContainer>
            </ColorContainer>
            <ColorContainer>
              <ColorDisplay color={theme.style.colors.mainText} />

              <ColorDescriptionContainer>
                <h6>{language.styles.mobileLight.text}</h6>
                <span>
                  {"HEX: " + theme.style.colors.mainText.replace("#", "")}
                </span>
              </ColorDescriptionContainer>
            </ColorContainer>
            <ColorContainer>
              <ColorDisplay color={theme.style.colors.subtitle} />

              <ColorDescriptionContainer>
                <h6>{language.styles.mobileLight.subtitle}</h6>
                <span>
                  {"HEX: " + theme.style.colors.subtitle.replace("#", "")}
                </span>
              </ColorDescriptionContainer>
            </ColorContainer>
            <ColorContainer>
              <ColorDisplay color={theme.style.colors.input} />

              <ColorDescriptionContainer>
                <h6>{language.styles.mobileLight.input}</h6>
                <span>
                  {"HEX: " + theme.style.colors.input.replace("#", "")}
                </span>
              </ColorDescriptionContainer>
            </ColorContainer>
            <ColorContainer>
              <ColorDisplay color={theme.style.colors.infoBg} />

              <ColorDescriptionContainer>
                <h6>{language.styles.mobileLight.info}</h6>
                <span>
                  {"HEX: " + theme.style.colors.infoBg.replace("#", "")}
                </span>
              </ColorDescriptionContainer>
            </ColorContainer>

          </ColorsContainer>


          
        </ColorSection>




        <ColorSection>
          <ColorSectionTitle>
            {language.styles.mobileDark.title}
          </ColorSectionTitle>
          <ColorsContainer>
            <ColorContainer>
              <ColorDisplay color={theme.style.colors.app.bg} />

              <ColorDescriptionContainer>
                <h6>{language.styles.mobileLight.bg}</h6>
                <span>
                  {"HEX: " + theme.style.colors.app.bg.replace("#", "")}
                </span>
              </ColorDescriptionContainer>
            </ColorContainer>
            <ColorContainer>
              <ColorDisplay color={theme.style.colors.app.text} />

              <ColorDescriptionContainer>
                <h6>{language.styles.mobileLight.text}</h6>
                <span>
                  {"HEX: " + theme.style.colors.app.text.replace("#", "")}
                </span>
              </ColorDescriptionContainer>
            </ColorContainer>
            <ColorContainer>
              <ColorDisplay color={theme.style.colors.app.subtitle} />

              <ColorDescriptionContainer>
                <h6>{language.styles.mobileLight.subtitle}</h6>
                <span>
                  {"HEX: " + theme.style.colors.app.subtitle.replace("#", "")}
                </span>
              </ColorDescriptionContainer>
            </ColorContainer>
            <ColorContainer>
              <ColorDisplay color={theme.style.colors.app.textField} />

              <ColorDescriptionContainer>
                <h6>{language.styles.mobileLight.input}</h6>
                <span>
                  {"HEX: " + theme.style.colors.app.textField.replace("#", "")}
                </span>
              </ColorDescriptionContainer>
            </ColorContainer>
            <ColorContainer>
              <ColorDisplay color={theme.style.colors.infoBg} />

              <ColorDescriptionContainer>
                <h6>{language.styles.mobileLight.info}</h6>
                <span>
                  {"HEX: " + theme.style.colors.infoBg.replace("#", "")}
                </span>
              </ColorDescriptionContainer>
            </ColorContainer>

          </ColorsContainer>


          
        </ColorSection>
          
        </ColorSection>

        <CarSection>
            <CarSectionHeader>
                {language.styles.car.title}
                <CustomButton>
                    {language.styles.car.download}
                </CustomButton>
            </CarSectionHeader>
            <img alt='cars' src={CarsImage}/>
        </CarSection>
      </PageContainer>
    </PageWrapper>
  );
};

export default CorporateStyles;
