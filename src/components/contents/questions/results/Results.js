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