import {Switch, Route, useRouteMatch} from 'react-router-dom'
import Academy from '../../components/Application/Academy/academy';
import ApplicationHeader from '../../components/Application/ApplicationHeader/application-header';
import Profile from '../../components/Application/Profile/profile';
import Tariff from '../../components/Application/Tariff/tariff';
import Team from '../../components/Application/Team/team';
import Wallet from '../../components/Application/Wallet/wallet';
import { ApplicationContainer, ApplicationWrapper } from './application.styles'



const Application = () => {
    let { path, url } = useRouteMatch();


    console.log(path, url)


    return (
        <ApplicationWrapper>
            <ApplicationContainer>
                <ApplicationHeader/>
                <Switch>
                    <Route exact path={`${path}`}>
                        <Wallet/>
                    </Route>
                    <Route exact path={`${path}/tariff`}>
                        <Tariff/>
                    </Route>
                    <Route exact path={`${path}/profile`}>
                        <Profile/>
                    </Route>
                    <Route exact path={`${path}/team`}>
                        <Team/>
                    </Route>
                    <Route exact path={`${path}/academy`}>
                        <Academy/>
                    </Route>
                </Switch>
            </ApplicationContainer>
        </ApplicationWrapper>

    )
}




export default Application