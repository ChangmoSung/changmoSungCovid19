import React from 'react';

const Call911 = props => {
    return (
        <div className='call911'>
            <h3>Our recommendation</h3>

            <h4>Please call 9-1-1 or go directly to your nearest emergency department.</h4>

            <p>These symptoms require immediate attention. You should call 9-1-1 immediately, or go directly to your nearest emergency department.</p>

            <button onClick={props.startAgain}>try again</button>
        </div>
    );
}

export default Call911;