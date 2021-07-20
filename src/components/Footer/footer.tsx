import {
  FooterContainer,
  FooterWrapper,
  CompanyInfoContainer,
  CompanyInfoHeader,
  CompanyLogo,
  CompanySubtitle,
  CompanyTitle,
  CompanyInfoHeaderInnerContainer,
  CompanyAddress,
  CompanyLink,
  NavigationContainer,
  NavigationItem,
  ContactsContainer,
  ContactsItem,
  ControlsContainer,
  MainnetInfo,
  LanguageControlsContainer,
  LanguageSelect
} from "./footer.styles";
import {Link} from 'react-router-dom'
import {useState} from 'react'
import {Menu, MenuButton, MenuList, MenuItem} from '@chakra-ui/react'

import {useDispatch} from 'react-redux'

import { ReactComponent as CaretDownSVG } from "../../assets/caret-down.svg";
import { changeLanguage } from "../../redux/settings/settings.actions";

import { ReactComponent as LogoSVG } from "../../assets/logo.svg";
import { useLanguage } from "../LanguageProvider/language.provider";
import { CustomButton } from "../../styles/common.styles";





const Footer: React.FC = () => {
  const [mainnetStatus, setMainnetStatus] = useState<'inactive' | 'active'>('active')
  const { language, currentLanguage } = useLanguage();
  const dispatch = useDispatch()

  const changeLang = (lang: "en" | 'Russian') => {
    dispatch(changeLanguage(lang))
  }



  return (
    <FooterWrapper>
      <FooterContainer>
        <CompanyInfoContainer>
          <CompanyInfoHeader>
            <CompanyLogo>
              <LogoSVG />
            </CompanyLogo>
            <CompanyInfoHeaderInnerContainer>
              <CompanyTitle>Era coin</CompanyTitle>
              <CompanySubtitle>Network Corporation</CompanySubtitle>
            </CompanyInfoHeaderInnerContainer>
          </CompanyInfoHeader>
          <CompanyAddress>
            <span>{language.footer.number}</span>
            <span>{language.footer.address}</span>
          </CompanyAddress>
          <CompanyLink target="_blank">{language.footer.agreement}</CompanyLink>
          <CompanyLink target="_blank">
            {language.footer.confidentiality}
          </CompanyLink>
        </CompanyInfoContainer>
        <NavigationContainer>
            <NavigationItem>
                <Link to='/'>
                    {language.header.main}
                </Link>
            </NavigationItem>
            <NavigationItem>
                <Link to='/whitepaper'>
                    {language.header.whitePaper}
                </Link>
            </NavigationItem>
            <NavigationItem>
                <Link to='/blockchain'>
                    {language.header.blockChain}
                </Link>
            </NavigationItem>
            <NavigationItem>
                <Link to='/support'>
                    {language.header.support}
                </Link>
            </NavigationItem>
        </NavigationContainer>
        <ContactsContainer>
            <ContactsItem>
                <span>{language.footer.contacts.general}</span>
                <span>info@eracoin.ru</span>
            </ContactsItem>
            <ContactsItem>
                <span>{language.footer.contacts.partnership}</span>
                <span>partnership@eracoin.ru</span>
            </ContactsItem>
            <ContactsItem>
                <span>{language.footer.contacts.pr}</span>
                <span>pr@eracoin.ru</span>
            </ContactsItem>
        </ContactsContainer>
        <ControlsContainer>
            <Link to='/auth'>
                <CustomButton width={'300px'}>
                    {language.header.auth}
                </CustomButton>
            </Link>
            <MainnetInfo active={mainnetStatus==='active'}>
                {language.footer.mainnet.status}
                <span>
                  {language.footer.mainnet[mainnetStatus]}
                <div/>
                  
                  </span>
            </MainnetInfo>
                        <LanguageControlsContainer>
                          {language.footer.language}
            <Menu placement='bottom-start'>
              {
                  ({isOpen}) => (
                      <>
                    <MenuButton>
                          <LanguageSelect>
                            {currentLanguage === "en" ? "EN" : "RU"}
                            <CaretDownSVG/>
                          </LanguageSelect>
                        </MenuButton>
                        <MenuList width='50px' minWidth='50px'>
                            <MenuItem width='min-content' color='#1B1919' fontWeight={currentLanguage !== 'en' ?'bold' : 'normal'} onClick={() => changeLang('Russian')}>RU</MenuItem>
                            <MenuItem width='min-content' color='#1B1919' fontWeight={currentLanguage === 'en' ?'bold' : 'normal'} onClick={() => changeLang('en')}>EN</MenuItem>
                            </MenuList>
                    </>
                  )
                }
          </Menu>
                </LanguageControlsContainer>
        </ControlsContainer>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
