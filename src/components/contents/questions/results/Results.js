import React from 'react';
import Call911 from './Call911';
import ConsultFamilyDoctor from './ConsultFamilyDoctor'
import SelfIsolate from './SelfIsolate';
import NoNeedToBeTested from './NoNeedToBeTested';
import ResultIsSelfIsolate from './ResultIsSelfIsolate';

const Results = props => {
    return ( 
        <div>
            {props.call911
            ?
                <Call911 tryAgain={props.tryAgain} />
            : null}


            {props.consultFamilyDoctor
            ?
                <ConsultFamilyDoctor tryAgain={props.tryAgain} />
            : null}


            {props.selfIsolate
            ?
                <SelfIsolate selfIsolateConfirmed={props.selfIsolateConfirmed} />
            : null}


            {props.questionNumber === 6
            && props.resultIsSelfIsolate
            ?
                <ResultIsSelfIsolate tryAgain={props.tryAgain} />
            : null}


            {props.questionNumber === 6
            && !props.resultIsSelfIsolate
            ?
                <NoNeedToBeTested tryAgain={props.tryAgain} />
            : null}
        </div>
    );
}
 
export default Results;