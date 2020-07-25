import React from 'react';
import Status from './contents/Status';

const Header = ({ currentDate, currentStatus }) => {
    return ( 
        <header>
            <h1>SAVE THE ONE YOU LOVE</h1>

            <Status 
                currentDate={currentDate}
                currentStatus={currentStatus}
            />
        </header>
    );
}
 
export default Header;