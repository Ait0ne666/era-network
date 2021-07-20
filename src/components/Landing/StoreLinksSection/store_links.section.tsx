import {
  SectionContainer,
  StoreLinkContainer,
  StoreLinkInfo,
} from "./store_links.styles";


import { useLanguage } from "../../LanguageProvider/language.provider";

import AppStore from "../../../assets/app_store.png";
import GooglePlay from "../../../assets/google_play.png";
import Mac from "../../../assets/mac.png";
import Windows from "../../../assets/windows.png";

const StoreLinksSection: React.FC = () => {
  const { language } = useLanguage();

  return (
    <SectionContainer>
      <StoreLinkContainer>
        <img src={AppStore} alt="app_store" />
        <StoreLinkInfo>
          <span>{language.storeLinks.upload}</span>
          <span>App Store</span>
        </StoreLinkInfo>
      </StoreLinkContainer>
      <StoreLinkContainer>
        <img src={GooglePlay} alt="google_play" />
        <StoreLinkInfo>
          <span>{language.storeLinks.avalable}</span>
          <span>Google Play</span>
        </StoreLinkInfo>
      </StoreLinkContainer>
      <StoreLinkContainer>
        <img src={Mac} alt="mac" />
        <StoreLinkInfo>
          <span>{language.storeLinks.download}</span>
          <span>Mac OS</span>
        </StoreLinkInfo>
      </StoreLinkContainer>
      <StoreLinkContainer>
        <img src={Windows} alt="windows" />
        <StoreLinkInfo>
          <span>{language.storeLinks.download}</span>
          <span>Windows</span>
        </StoreLinkInfo>
      </StoreLinkContainer>
    </SectionContainer>
  );
};

export default StoreLinksSection;
