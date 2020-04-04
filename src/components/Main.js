import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';
import AboutCovid from './contents/AboutCovid';
import SelfCare from './contents/covidCareInfo/SelfCare';
import HandHygiene from './contents/covidCareInfo/HandHygiene';
import Statistic from './contents/Statistic';
import Article from './contents/Article';
import SelfCheck from './contents/SelfCheck';
import Questions from './contents/questions/Questions';

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


            <Switch>
                <Route path='/changmoSungCovid19/info/selfcheck/questions'>
                    <Questions />
                </Route>

                <Route path='/changmoSungCovid19/info/selfcheck'>
                    <SelfCheck />
                </Route>
            </Switch>


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