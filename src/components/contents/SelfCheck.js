import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class SelfCheck extends Component {
    constructor() {
        super();

        this.state = {
            checkStarted: false,
        }
    }


    render() {
        return (
            <div className='selfCheck wrapper'>

                <div className='selfCheckDescription'>
                    <h2>COVID-19 Self-Check</h2>

                    <p>This self-assessment tool, developed with <a href='https://www.811healthline.ca/' rel='noopener noreferrer' target='_blank'>811 HealthLine</a>, will help determine whether you may need further assessment or testing for COVID-19. You can complete this assessment for yourself, or on behalf of someone else. If you have respiratory symptoms and a serious ongoing condition, or are in the third trimester of pregnancy, please follow the advice of your specialist.</p>

                    <h3>Most people do not need to be tested for COVID-19 because it will not change your care.</h3>

                    <p>People who do not need to be tested for COVID-19 includes:</p>

                    <ul>
                        <li>People without symptoms</li>

                        <li>People who have mild respiratory symptoms that can be managed at home</li>

                        <li>Returning travellers</li>
                    </ul>

                    <h3>Who should be tested for COVID-19?</h3>

                    <p>People with respiratory symptoms who may require testing for COVID-19 include people who are:</p>

                    <ul>
                        <li>Hospitalized, or likely to be hospitalized</li>

                        <li>Health Care Workers</li>

                        <li>Residents of long-term care facilities</li>

                        <li>Part of an investigation of a cluster or outbreak</li>
                    </ul>

                    <p>Anyone who has symptoms - including a fever, cough, sneezing, or sore throat - should self-isolate for 14 days. Continue to complete this assessment to determine if you may need care.</p>

                    <Link to='/changmoSungCovid19/info/selfcheck/questions' className='selfCheckStartButton'>self-check</Link>
                </div>
            </div>
        );
    }
}

export default SelfCheck;