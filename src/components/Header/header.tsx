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
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as LogoSVG } from "../../assets/logo.svg";
import { ReactComponent as LogoutSVG } from "../../assets/Logout.svg";
import { ReactComponent as CaretDownSVG } from "../../assets/caret-down.svg";
import { useLanguage } from "../LanguageProvider/language.provider";
import { changeLanguage } from "../../redux/settings/settings.actions";
import React from "react";
import { userSelectors } from "../../redux/user/user.selectors";
import { logoutUser } from "../../redux/user/user.actions";

const Header: React.FC = () => {
  const { currentLanguage, language } = useLanguage();
  const user = useSelector(userSelectors.user);
  const location = useLocation();
  const dispatch = useDispatch();

  const changeLang = (lang: "en" | "Russian") => {
    dispatch(changeLanguage(lang));
  };



  const handleLogout = () => {
    console.log('log')
    dispatch(logoutUser())
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
            <NavigationItem active={location.pathname === "/"||location.pathname.includes("/app")}>
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
          {user ? (
            <NavigationItem active={location.pathname === "/app/profile"}>
              <Link to="/app/profile">{language.header.profile}</Link>
              <LogoutSVG onClick={handleLogout}/>
            </NavigationItem>
          ) : (
            <Link to="/auth">
              <NavigationItem active={location.pathname === "/auth"}>
                {language.header.auth}
              </NavigationItem>
            </Link>
          )}
          <Menu placement="bottom-end">
            {({ isOpen }) => (
              <>
                <MenuButton>
                  <LanguageControlsContainer>
                    {currentLanguage === "en" ? "EN" : "RU"}
                    <CaretDownSVG />
                  </LanguageControlsContainer>
                </MenuButton>
                <MenuList width="50px" minWidth="50px">
                  <MenuItem
                    width="min-content"
                    fontWeight={currentLanguage !== "en" ? "bold" : "normal"}
                    onClick={() => changeLang("Russian")}
                  >
                    RU
                  </MenuItem>
                  <MenuItem
                    width="min-content"
                    fontWeight={currentLanguage === "en" ? "bold" : "normal"}
                    onClick={() => changeLang("en")}
                  >
                    EN
                  </MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
        </SettingsControls>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
