import React from 'react';

const NoNeedToBeTested = props => {
    return ( 
        <div className='noNeedToBeTested'>
            <h3>Our recommendation</h3>

            <h4>Since you don't have any COVID-19 symptoms, you don't need to be tested for COVID-19.</h4>

            <p>Please self-monitor, wash your hands frequently, and practice physical distancing.If you develop any symptoms (fever, cough, sneezing, sore throat, or difficulty breathing), or become aware of any potential exposures to cases of COVID-19, take this self-assessment again.</p>

            <p>If you are experiencing symptoms other than COVID-19, contact your family physician.</p>

            <button onClick={props.startAgain}>try again</button>
        </div>
    );
}
 
export default NoNeedToBeTested;