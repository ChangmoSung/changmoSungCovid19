import React from 'react';

const ConsultFamilyDoctor = props => {
    return (
        <div className='consultFamilyDoctor'>
            <h3>Our recommendation</h3>

            <h4>Please consult your family doctor. If you are unable to reach your regular health care provider, call 8-1-1 to speak to a Registered Nurse 24 hours a day.</h4>

            <p>A nurse at 811 HealthLine can speak with you about your symptoms and provide health advice.</p>

            <button onClick={props.startAgain}>try again</button>
        </div>
    );
}

export default ConsultFamilyDoctor;