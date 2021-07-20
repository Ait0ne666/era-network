import {
  HeaderWrapper,
  HeaderContainer,
  LanguageControlsContainer,
  LogoContainer,
  NavigationContainer,
  NavigationItem,
  SettingsControls,
} from "./header.styles";
import { useLocation, Link } from "react-router-dom";
import {Menu, MenuButton, MenuList, MenuItem} from '@chakra-ui/react'
import {useDispatch} from 'react-redux'

import { ReactComponent as LogoSVG } from "../../assets/logo.svg";
import { ReactComponent as CaretDownSVG } from "../../assets/caret-down.svg";
import { useLanguage } from "../LanguageProvider/language.provider";
import { changeLanguage } from "../../redux/settings/settings.actions";
import React from "react";

const Header: React.FC = () => {
  const { currentLanguage, language } = useLanguage();
  const location = useLocation();
  const dispatch = useDispatch()


  const changeLang = (lang: "en" | 'Russian') => {
    dispatch(changeLanguage(lang))
  }

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <LogoContainer>
          <Link to="/">
            <LogoSVG />
          </Link>
        </LogoContainer>
        <NavigationContainer>
          <Link to="/">
            <NavigationItem active={location.pathname === "/"}>
              {language.header.main}
            </NavigationItem>
          </Link>
          <Link to="/whitepaper">
            <NavigationItem active={location.pathname === "/whitepaper"}>
            {language.header.whitePaper}
            </NavigationItem>
          </Link>
          <Link to="/blockchain">
            <NavigationItem active={location.pathname === "/blockchain"}>
            {language.header.blockChain}
            </NavigationItem>
          </Link>
          <Link to="/support">
            <NavigationItem active={location.pathname === "/support"}>
            {language.header.support}
            </NavigationItem>
          </Link>
        </NavigationContainer>
        <SettingsControls>
          <Link to="/auth">
            <NavigationItem active={location.pathname === "/auth"}>
            {language.header.auth}
            </NavigationItem>
          </Link>
          <Menu placement='bottom-end'>
              {
                  ({isOpen}) => (
                      <>
                    <MenuButton >
                        <LanguageControlsContainer>
                            {currentLanguage === "en" ? "EN" : "RU"}
                            <CaretDownSVG/>
                        </LanguageControlsContainer>
                        </MenuButton>
                        <MenuList width='50px' minWidth='50px'>
                            <MenuItem width='min-content' fontWeight={currentLanguage !== 'en' ?'bold' : 'normal'} onClick={() => changeLang('Russian')}>RU</MenuItem>
                            <MenuItem width='min-content' fontWeight={currentLanguage === 'en' ?'bold' : 'normal'} onClick={() => changeLang('en')}>EN</MenuItem>
                            </MenuList>
                    </>
                  )
              }
          </Menu>
        </SettingsControls>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
