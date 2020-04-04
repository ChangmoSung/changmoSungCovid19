import React from 'react';

const SelfIsolate = props => {
    return (
        <div className='selfIsolate'>
            <h3>Please stay at home.</h3>

            <p>As a precaution, the Ministry of Health is asking anyone with symptoms (fever, coughm sneezing, or sore throat) to stay home for 10 days.</p>

            <p>If your symptoms worsen, call your family physician.</p>

            <h4>Your self-assessment is not complete.</h4>

            <p>Finish the remaining questions to obtain complete recommendations on what steps you should take.</p>

            <button onClick={props.selfIsolateConfirmed}>continue</button>
        </div>
    );
}

export default SelfIsolate;