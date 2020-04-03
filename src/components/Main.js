import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';
import AboutCovid from './AboutCovid';
import SelfCare from './covidCareInfo/SelfCare';
import HandHygiene from './covidCareInfo/HandHygiene';
import Statistic from './Statistic';
import Article from './Article';
import SelfCheck from './SelfCheck';

const Main = props => {
    return ( 
        <main>
            <Switch>
                <Route path='/changmoSungCovid19/info/aboutCovid19/selfCare'>
                    <SelfCare />
                </Route>

                <Route path='/changmoSungCovid19/info/aboutCovid19/handHygiene'>
                    <HandHygiene />
                </Route>

                <Route path='/changmoSungCovid19/info/aboutCovid19'>
                    <AboutCovid />
                </Route>
            </Switch>


            <Route path='/changmoSungCovid19/info/selfcheck'>
                <SelfCheck />
            </Route>


            <Route path='/changmoSungCovid19/info/statistic'>
                <Statistic 
                    currentDate={props.currentDate} 
                    currentStatus={props.currentStatus}
                />
            </Route>


            <Route path='/changmoSungCovid19/info/article'>
                <Article />
            </Route>
        </main>
    );
}
 
export default Main;