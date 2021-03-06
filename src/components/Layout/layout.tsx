import LanguageProvider from "../LanguageProvider/language.provider";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
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
import SupportSection from "../Support/support.section";
import Auth from "../Authentication/auth";
import Authentication from "../../pages/Authentication/authentication";
import { userSelectors } from "../../redux/user/user.selectors";
import Support from "../../pages/Support/support";
import Application from "../../pages/Application/application";

import RegSection from "../Authentication/RegistrationSection/registration.section";






const Layout: React.FC = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const user = useSelector(userSelectors.user);

  useEffect(() => {
    dispatch(getMediumArticles());
  }, [dispatch]);

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  const theme = useSelector(settingsSelectors.theme);

  console.log(user);

  return (
    <ThemeProvider theme={themes[theme]}>
      <LanguageProvider>
        <ChakraProvider>
          <Header />
          <Switch>
            <Route exact path="/">
              {user ? <Redirect to="/app" /> : <LandingPage />}
            </Route>
            <Route exact path="/styles">
              <CorporateStylesPage />
            </Route>
            <Route exact path="/support">
              <Support />
            </Route>

            <Route exact path="/auth">
              {user ? <Redirect to="/" /> : <Authentication />}
            </Route>
            {/* <Route exact path="/reg">
              <RegSection/>
            </Route> */}
            <Route path="/app">
              {!user ? <Redirect to="/auth" /> : <Application />}
            </Route>
          </Switch>
          <Footer />
        </ChakraProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Layout;
