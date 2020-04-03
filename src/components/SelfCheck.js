import React, { Component } from 'react';
import Call911 from './questionResults/Call911';
import ConsultFamilyDoctor from './questionResults/ConsultFamilyDoctor'
import SelfIsolate from './questionResults/SelfIsolate';
import NoNeedToBeTested from './questionResults/NoNeedToBeTested';
import ResultIsSelfIsolate from './questionResults/ResultIsSelfIsolate';

class SelfCheck extends Component {
    constructor() {
        super();

        this.state = {
            assessmentStarted: false,
            questionNumber: 0,
            questions: [
                {
                    question: 'Are you experiencing any of the following:',
                    example1: 'Severe difficulty breathing (e.g. struggling to breathe or speaking in single words',
                    example2: 'Severe chest pain',
                    example3: 'Having a very hard time waking up',
                    example4: 'Feeling confused',
                    example5: 'Losing consciousness',
                    function: this.call911,
                },
                {
                    question: 'Are you experiencing any of the following:',
                    example1: 'Mild to moderate shortness of breath',
                    example2: 'Inability to lie down because of difficulty breathing',
                    example3: 'Chronic health conditions that you are having difficulty managing because of difficulty breathing',
                    function: this.consultFamilyDoctor,
                },
                {
                    question: 'Are you experiencing any of the following:',
                    example1: 'Fever',
                    example2: 'Cough',
                    example3: 'Sneezing',
                    example4: 'Sore throat',
                    function: this.selfIsolate,
                },
                {
                    question: 'Did you provide care or have close contact with a person with COVID-19 (probable or confirmed) while they were ill (cough, fever, sneezing, or sore throat)?',
                    paragraph: 'A close contact is defined as a person who:',
                    example1: 'provided care for the individual, including healthcare workers, family members or other caregivers, or who had other similar close physical contact without consistent and appropriate use of personal protective equipment ',
                    example2: 'who lived with or otherwise had close prolonged contact (within 2 meters) with the person while they were infectious',
                    example3: 'had direct contact with infectious bodily fluids of the person (e.g. was coughed or sneezed on) while not wearing recommended personal protective equipment',
                    function: this.resultIsSelfIsolate,
                },
                {
                    question: 'Have you travelled abroad within the last 14 days?',
                    paragraph: 'Travel includes passing through an airport.',
                    function: this.resultIsSelfIsolate,
                },
                {
                    question: 'Did you have close contact with a person who travelled outside of Canada in the last 14 days who has become ill (cough, fever, sneezing, or sore throat)?',
                    function: this.resultIsSelfIsolate,
                },
            ],
            call911: false,
            consultFamilyDoctor: false,
            selfIsolate: false,
            resultIsSelfIsolate: false,
        }
    }


    startAssessment = () => {
        this.setState({
            assessmentStarted: true,
        })
    }


    tryAgain = () => {
        this.setState({
            questionNumber: 0,
            call911: false,
            consultFamilyDoctor: false,
        })
    }


    returnToPreviousQuestion = () => {
        if(this.state.questionNumber > 0) {
            this.setState({
                questionNumber: this.state.questionNumber - 1,
            })
        }
    }


    call911 = answer => {
        this.setState({
            call911: answer,
            questionNumber: this.state.questionNumber + 1,
        })
    }


    consultFamilyDoctor = answer => {
        this.setState({
            consultFamilyDoctor: answer,
            questionNumber: this.state.questionNumber + 1,

        })
    }


    selfIsolate = answer => {
        this.setState({
            selfIsolate: answer,
            resultIsSelfIsolate: answer,
            questionNumber: parseInt(`${answer ? this.state.questionNumber : this.state.questionNumber + 1}`),
        })
    }


    selfIsolateConfirmed = () => {
        this.setState({
            selfIsolate: false,
            questionNumber: this.state.questionNumber + 1,
        })
    }


    resultIsSelfIsolate = answer => {
        if(this.state.resultIsSelfIsolate) {
            this.setState({
                questionNumber: this.state.questionNumber + 1,
            })
        } else {
            this.setState({
                resultIsSelfIsolate: answer,
                questionNumber: this.state.questionNumber + 1,
            })
        }
    }


    render() { 
        return ( 
            <div className='selfCheck'>
                {!this.state.assessmentStarted 
                ? 
                <div className='selfAssessmentDescription'>
                    <h2>COVID-19 Self-Check</h2>

                    <p>This self-assessment tool, developed with 811 HealthLine, will help determine whether you may need further assessment or testing for COVID-19. You can complete this assessment for yourself, or on behalf of someone else. If you have respiratory symptoms and a serious ongoing condition, or are in the third trimester of pregnancy, please follow the advice of your specialist.</p>

                    <h3>Most people do not need to be tested for COVID-19 because it will not change your care.</h3>

                    <p>People who do not need to be tested for COVID-19 includes:</p>

                    <ul>
                        <li>People without symptoms</li>

                        <li>People who have mild respiratory symptoms that can be managed at home</li>

                        <li>Returning travellers</li>
                    </ul>

                    <h3>Who should be tested for COVID-19?</h3>

                    <p>People with respiratory symptoms who may require testing for COVID-19 include people who are:</p>

                    <ul>
                        <li>Hospitalized, or likely to be hospitalized</li>

                        <li>Health Care Workers</li>

                        <li>Residents of long-term care facilities</li>

                        <li>Part of an investigation of a cluster or outbreak</li>
                    </ul>

                    <p>Anyone who has symptoms - including a fever, cough, sneezing, or sore throat - should self-isolate for 14 days. Continue to complete this assessment to determine if you may need care.</p>

                    <button onClick={this.startAssessment}>Self-Check</button>
                </div>
                :null}


                {this.state.assessmentStarted 
                && this.state.questionNumber < 6 
                && !this.state.call911 
                && !this.state.consultFamilyDoctor 
                && !this.state.selfIsolate 
                ? 
                <div className='questions'>
                    <div className='questionContainer'>
                        <h3>{this.state.questions[this.state.questionNumber].question}</h3>

                        {this.state.questions[this.state.questionNumber].paragraph ? <p>{this.state.questions[this.state.questionNumber].paragraph}</p> :null}

                        <ul>
                            {this.state.questions[this.state.questionNumber].example1 ? <li>{this.state.questions[this.state.questionNumber].example1}</li> : null}

                            {this.state.questions[this.state.questionNumber].example2 ? <li>{this.state.questions[this.state.questionNumber].example2}</li> : null}

                            {this.state.questions[this.state.questionNumber].example3 ? <li>{this.state.questions[this.state.questionNumber].example3}</li> : null}

                            {this.state.questions[this.state.questionNumber].example4 ? <li>{this.state.questions[this.state.questionNumber].example4}</li> : null}

                            {this.state.questions[this.state.questionNumber].example5 ? <li>{this.state.questions[this.state.questionNumber].example5}</li> : null}
                        </ul>

                        <div className='buttonContainer'>
                            <button onClick={() => this.state.questions[this.state.questionNumber].function(true)}>yes</button>

                            <button onClick={() => this.state.questions[this.state.questionNumber].function(false)}>no</button>
                        </div>

                        <button className='return' onClick={this.returnToPreviousQuestion}><span>Return to previous question</span></button>
                    </div>
                </div>
                : null}


                {this.state.call911
                ?
                    <Call911 tryAgain={this.tryAgain} />
                : null}


                {this.state.consultFamilyDoctor
                ? 
                    <ConsultFamilyDoctor tryAgain={this.tryAgain}/>
                : null}


                {this.state.selfIsolate
                ?
                    <SelfIsolate selfIsolateConfirmed={this.selfIsolateConfirmed}/>
                : null}


                {this.state.questionNumber === 6 
                && this.state.resultIsSelfIsolate 
                ? 
                    <ResultIsSelfIsolate tryAgain={this.tryAgain} />
                : null}


                {this.state.questionNumber === 6 
                && !this.state.resultIsSelfIsolate
                ? 
                    <NoNeedToBeTested tryAgain={this.tryAgain} />
                : null}
            </div>
         );
    }
}
 
export default SelfCheck;