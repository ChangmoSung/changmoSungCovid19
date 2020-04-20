import React from 'react';
import Status from './contents/Status';

const Header = props => {
    return ( 
        <header>
            <h1>SAVE THE ONE YOU LOVE</h1>

            <Status 
                currentDate={props.currentDate}
                currentStatus={props.currentStatus}
            />
        </header>
    );
}
 
export default Header;