import React from 'react';
import Call911 from './Call911';
import ConsultFamilyDoctor from './ConsultFamilyDoctor'
import SelfIsolate from './SelfIsolate';
import NoNeedToBeTested from './NoNeedToBeTested';
import ResultIsSelfIsolate from './ResultIsSelfIsolate';


// Based on the result, the proper result pops up
const Results = props => {
    return (
        <div>
            {props.call911
            ?
                <Call911 startAgain={props.startAgain} />
            : null}


            {props.consultFamilyDoctor
            ?
                <ConsultFamilyDoctor startAgain={props.startAgain} />
            : null}


            {props.selfIsolate
            ?
                <SelfIsolate selfIsolateConfirmed={props.selfIsolateConfirmed} />
            : null}


            {props.questionNumber === 6
            && props.resultIsSelfIsolate
            ?
                <ResultIsSelfIsolate startAgain={props.startAgain} />
            : null}


            {props.questionNumber === 6
            && !props.resultIsSelfIsolate
            ?
                <NoNeedToBeTested startAgain={props.startAgain} />
            : null}
        </div>
    );
}

export default Results;