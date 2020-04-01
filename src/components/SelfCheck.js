import React, { Component } from 'react';

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
                    yes: this.call911,
                    no: this.showNextQuestion,
                },
                {
                    question: 'Are you experiencing any of the following:',
                    example1: 'Mild to moderate shortness of breath',
                    example2: 'Inability to lie down because of difficulty breathing',
                    example3: 'Chronic health conditions that you are having difficulty managing because of difficulty breathing',
                    yes: this.consultFamilyDoctor,
                    no: this.showNextQuestion,
                },
                {
                    question: 'Are you experiencing any of the following:',
                    example1: 'Fever',
                    example2: 'Cough',
                    example3: 'Sneezing',
                    example4: 'Sore throat',
                    yes: this.selfIsolate,
                    no: this.showNextQuestion,
                },
                {
                    question: 'Have you travelled abroad within the last 14 days?',
                    yes: this.resultIsSelfIsolate,
                    no: this.showNextQuestion,
                },
                {
                    question: 'Did you provide care or have close contact with a person with COVID-19 (probable or confirmed) while they were ill (cough, fever, sneezing, or sore throat)?',
                    yes: this.resultIsSelfIsolate,
                    no: this.showNextQuestion,
                },
                {
                    question: 'Did you have close contact with a person who travelled outside of Canada in the last 14 days who has become ill (cough, fever, sneezing, or sore throat)?',
                    yes: this.resultIsSelfIsolate,
                    no: this.showNextQuestion,
                }
            ],
            call911: false,
            consultFamilyDoctor: false,
            selfIsolate: false,
            travelledAbroad: false,
            resultIsSelfIsolate: false,
        }
    }


    startAssessment = () => {
        this.setState({
            assessmentStarted: true,
        })
    }


    showNextQuestion = (e) => {
        this.setState({
            questionNumber: this.state.questionNumber + 1,
        })
    }

    call911 = (e) => {
        this.setState({
            call911: true,
        })
    }


    consultFamilyDoctor = (e) => {
        this.setState({
            consultFamilyDoctor: true,
        })
    }


    selfIsolate = (e) => {
        this.setState({
            selfIsolate: true,
            resultIsSelfIsolate: true,
        })
    }

    selfIsolateConfirmed = (e) => {
        this.setState({
            selfIsolate: false,
            questionNumber: this.state.questionNumber + 1,
        })
    }


    resultIsSelfIsolate = (e) => {
        this.setState({
            resultIsSelfIsolate: true,
            questionNumber: this.state.questionNumber + 1,
        })
    }


    render() { 
        return ( 
            <div className='selfCheck'>
                {!this.state.assessmentStarted 
                ? 
                <div className='selfAssessmentDescription'>
                    <h2>COVID-19 Self-Check</h2>

                    <p>This self-assessment tool, developed with the BC Ministry of Health, will help determine whether you may need further assessment or testing for COVID-19. You can complete this assessment for yourself, or on behalf of someone else. If you have respiratory symptoms and a serious ongoing condition, or are in the third trimester of pregnancy, please follow the advice of your specialist.</p>

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

                    <p>Anyone who has symptoms - including a fever, cough, sneezing, or sore throat - should self-isolate for 10 days. Continue to complete this assessment to determine if you may need care.</p>

                    <button onClick={this.startAssessment}>Self-Check</button>
                </div>
                :null}


                {this.state.assessmentStarted && this.state.questionNumber < 6 && !this.state.call911 && !this.state.consultFamilyDoctor && !this.state.selfIsolate 
                ? 
                <div className='questions'>
                    <h3>{this.state.questions[this.state.questionNumber].question}</h3>

                    <ul>
                        {this.state.questions[this.state.questionNumber].example1 ? <li>{this.state.questions[this.state.questionNumber].example1}</li> : null}

                        {this.state.questions[this.state.questionNumber].example2 ? <li>{this.state.questions[this.state.questionNumber].example2}</li> : null}

                        {this.state.questions[this.state.questionNumber].example3 ? <li>{this.state.questions[this.state.questionNumber].example3}</li> : null}

                        {this.state.questions[this.state.questionNumber].example4 ? <li>{this.state.questions[this.state.questionNumber].example4}</li> : null}

                        {this.state.questions[this.state.questionNumber].example5 ? <li>{this.state.questions[this.state.questionNumber].example5}</li> : null}
                    </ul>

                    <div className='buttonContainer'>
                        <button onClick={this.state.questions[this.state.questionNumber].yes}>yes</button>

                        <button onClick={this.state.questions[this.state.questionNumber].no}>no</button>
                    </div>
                </div>
                : null}


                {this.state.call911
                ?
                <div className='call911'>
                    <h3>Our recommendation</h3>

                    <h4>Please call 9-1-1 or go directly to your nearest emergency department.</h4>

                    <p>These symptoms require immediate attention. You should call 9-1-1 immediately, or go directly to your nearest emergency department.</p>
                </div>
                : null}


                {this.state.consultFamilyDoctor
                ? 
                    <div className='consultFamilyDoctor'>
                        <h3>Our recommendation</h3>

                        <h4>Please consult your family doctor. If you are unable to reach your regular health care provider, call 8-1-1 to speak with HealthLink BC.</h4>

                        <p>A nurse at HealthLink BC can speak with you about your symptoms and provide health advice.</p>
                    </div>
                : null}


                {this.state.selfIsolate
                ?
                    <div className='selfIsolate'>
                        <h3>Please stay at home.</h3>

                        <p>As a precaution, the Ministry of Health is asking anyone with symptoms (fever, coughm sneezing, or sore throat) to stay home for 10 days.</p>

                        <p>If your symptoms worsen, call your family physician. If you are unable to reach your regular health care provider, call 8-1-1 to speak with HealthLink BC.</p>

                        <h4>Your self-assessment is not complete.</h4>
                        <p>Finish the remaining questions to obtain complete recommendations on what steps you should take.</p>

                        <button onClick={this.selfIsolateConfirmed} data-question='2' data-currentquestion='.question3'>Continue</button>
                    </div>
                : null}


                {this.state.questionNumber === 6 && this.state.resultIsSelfIsolate 
                ? 
                    <div className='resultIsSelfIsolate'>
                        <h3>Our recommendation</h3>

                        <h4>Please self-isolate for 14 days. You do not need testing for COVID-19.</h4>

                        <p>Since you don't have symptoms, you do not need testing for COVID-19 at this time. However, there's a chance you could get sick. You should self-monitor for any symptoms (fever, cough, sneezing, sore throat, or difficulty breathing). If you begin to develop these, you should take this self-assessment again.</p>
                        
                        <p>If you are a health care worker, follow the advice of your employer. If you need more information, go to <a>BCCDC's COVID-19 website</a></p>

                        <p>If you are experiencing symptoms other than COVID-19, contact your family physician. If you are unable to reach your regular health care provider, call 8-1-1 to speak with HealthLink BC, or visit the <a>HealthLinkBC's Symptom Checker</a></p>
                    </div>
                : null}

                {this.state.questionNumber === 6 && !this.state.resultIsSelfIsolate
                ? 
                    <div className='noNeedToBeTested'>
                        <h3>Our recommendation</h3>

                        <h4>Since you don't have any COVID-19 symptoms, you don't need to be tested for COVID-19.</h4>

                        <p>Please self-monitor, wash your hands frequently, and practice physical distancing.If you develop any symptoms (fever, cough, sneezing, sore throat, or difficulty breathing), or become aware of any potential exposures to cases of COVID-19, take this self-assessment again.</p>

                        <p>If you are experiencing symptoms other than COVID-19, contact your family physician. If you are unable to reach your regular health care provider, call 8-1-1 to speak with HealthLink BC, or visit the <a>healthLinkBC's Symptom Checker</a></p>

                    </div>
                : null}
            </div>
         );
    }
}
 
export default SelfCheck;