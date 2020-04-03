import React from 'react';

const ResultIsSelfIsolate = props => {
    return ( 
        <div className='resultIsSelfIsolate'>
            <h3>Our recommendation</h3>

            <h4>Please self-isolate for 14 days. You do not need testing for COVID-19.</h4>

            <p>There are many common viruses other than COVID-19 that can cause your symptoms. Based on your responses you do not need to be tested for COVID-19 at this time. You should stay at home and not go to work or school until 24 hours after your symptoms have resolved, without the use of fever-reducing medication and avoid close contact with people in your home as well as people with chronic conditions, compromised immune systems and older adults.</p>

            <p>If your symptoms become worse, call 811. 811 is currently experiencing heavy call volumes. You may be asked to leave a message. We’ll get back to you as ask quickly as possible.</p>

            <button onClick={props.tryAgain}>try again</button>
        </div>
     );
}
 
export default ResultIsSelfIsolate;