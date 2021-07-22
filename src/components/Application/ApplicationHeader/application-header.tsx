import {useSelector} from 'react-redux'
import {useRouteMatch, useLocation, Link} from 'react-router-dom'





import { ApplicationHeaderContainer, ApplicationNavigationContainer, ApplicationNavigationItem, ApplicationPageTitleContainer } from "./application-header.styles"
import { useLanguage } from "../../LanguageProvider/language.provider"
import { userSelectors } from "../../../redux/user/user.selectors"



import {ReactComponent as LockSVG} from '../../../assets/lock.svg'

const ApplicationHeader = () => {
    const {path, url} = useRouteMatch()
    const {pathname} = useLocation()
    const {language} = useLanguage()
    const user = useSelector(userSelectors.user)
    
    const matchPathToHeader = (pathname: string) => {
        if (pathname.includes('tariff')) return language.application.routes.tariff
        if (pathname.includes('profile')) return language.application.routes.profile
        if (pathname.includes('academy')) return language.application.routes.academy
        if (pathname.includes('team')) return language.application.routes.team
        return language.application.routes.wallet
    }

    return (
        <ApplicationHeaderContainer>
            <ApplicationPageTitleContainer>
                <h2>
                    {matchPathToHeader(pathname)}
                </h2>
                {
                    pathname.includes('tariff') &&
                    <span>
                        {
                            user?.isTariffPaid ?
                            language.application.tariff.paid
                            :language.application.tariff.unpaid
                        }
                    </span>
                }
            </ApplicationPageTitleContainer>
            <ApplicationNavigationContainer>
                <Link to='/app'>
                    <ApplicationNavigationItem active={pathname.replaceAll('/','') === 'app'}>
                        {language.application.routes.wallet}
                    </ApplicationNavigationItem>
                </Link>
                <Link to='/app/tariff'>
                    <ApplicationNavigationItem active={pathname.replaceAll('/','') === 'apptariff'}>
                        {language.application.routes.tariff}
                    </ApplicationNavigationItem>
                </Link>
                <Link to='/app/profile'>
                    <ApplicationNavigationItem active={pathname.replaceAll('/','') === 'appprofile'}>
                        {language.application.routes.profile}
                    </ApplicationNavigationItem>
                </Link>
                <Link to='/app/team'>
                    <ApplicationNavigationItem active={pathname.replaceAll('/','') === 'appteam'}>
                        {language.application.routes.team}
                    </ApplicationNavigationItem>
                </Link>
                <Link to='/app/academy'>
                    <ApplicationNavigationItem locked active={pathname.replaceAll('/','') === 'appacademy'}>
                        <LockSVG/>
                        {language.application.routes.academy}
                    </ApplicationNavigationItem>
                </Link>
            </ApplicationNavigationContainer>
        </ApplicationHeaderContainer>
    )
}


export default ApplicationHeader