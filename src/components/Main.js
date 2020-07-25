import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';
import AboutCovid from './contents/AboutCovid';
import SelfCare from './contents/covidCareInfo/SelfCare';
import HandHygiene from './contents/covidCareInfo/HandHygiene';
import Statistics from './contents/Statistics';
import Articles from './contents/Articles';
import SelfCheck from './contents/SelfCheck';
import Questions from './contents/questions/Questions';

const Main = ({ currentDate, currentStatus, currentStatistics }) => {
    return (
        <main>
            <Switch>
                <Route path='/info/aboutCovid19/selfCare'>
                    <SelfCare />
                </Route>

                <Route path='/info/aboutCovid19/handHygiene'>
                    <HandHygiene />
                </Route>

                <Route path='/info/aboutCovid19'>
                    <AboutCovid />
                </Route>
            </Switch>


            <Switch>
                <Route path='/info/selfcheck/questions'>
                    <Questions />
                </Route>

                <Route path='/info/selfcheck'>
                    <SelfCheck />
                </Route>
            </Switch>


            <Route path='/info/statistic'>
                <Statistics
                    currentDate={currentDate}
                    currentStatus={currentStatus}
                    currentStatistics={currentStatistics}
                />
            </Route>


            <Route path='/info/article'>
                <Articles />
            </Route>
        </main>
    );
}

export default Main;