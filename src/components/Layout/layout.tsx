import LanguageProvider from "../LanguageProvider/language.provider";
import { Switch, Route, useLocation } from "react-router-dom";
import LandingPage from "../../pages/landing/landing.page";
import { useSelector, useDispatch } from "react-redux";
import { settingsSelectors } from "../../redux/settings/settings.selectors";
import { ThemeProvider } from "styled-components";
import { themes } from "../../theme/theme";
import Header from "../Header/header";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "../Footer/footer";
import { useEffect } from "react";
import { getMediumArticles } from "../../redux/content/content.actions";
import CorporateStylesPage from "../../pages/CorporateStyles/corporateStyles";
import HelpSection from "../Help/help.section";
import AuthSection from "../Authentication/auth.section";
import Authentication from "../../pages/Authentication/authentication";
import Help from "../../pages/Help/help";
import RegSection from "../Authentication/registration.section";






const Layout: React.FC = () => {
  const dispatch = useDispatch();
  const {pathname} = useLocation()

  useEffect(() => {
    dispatch(getMediumArticles());
  }, [dispatch]);


  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [pathname])

  const theme = useSelector(settingsSelectors.theme);

  return (
    <ThemeProvider theme={themes[theme]}>
      <LanguageProvider>
        <ChakraProvider>
          <Header />
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route exact path="/styles">
              <CorporateStylesPage />
            </Route>
            <Route exact path="/help">
              <Help/>
            </Route>
            <Route exact path="/auth">
              <Authentication/>
            </Route>
            <Route exact path="/reg">
              <RegSection/>
            </Route>
          </Switch>
          <Footer />
        </ChakraProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Layout;
