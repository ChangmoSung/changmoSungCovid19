import React, { Component } from 'react';
import Results from './results/Results';

class Questions extends Component {
    constructor() {
        super();

        this.state = {
            questionNumber: 0,
            call911: false,
            consultFamilyDoctor: false,
            selfIsolate: false,
            resultIsSelfIsolate: false,
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
        }
    }


    tryAgain = () => {
        this.setState({
            questionNumber: 0,
            call911: false,
            consultFamilyDoctor: false,
            resultIsSelfIsolate: false,
        })
    }


    returnToPreviousQuestion = () => {
        if (this.state.questionNumber > 0) {
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
        this.setState({
            questionNumber: this.state.questionNumber + 1,
        })

        if (!this.state.resultIsSelfIsolate) {
            this.setState({
                resultIsSelfIsolate: answer,
            })
        } 
    }


    render() { 
        return ( 
            <div className='questions'>
                {!this.state.call911
                && !this.state.consultFamilyDoctor
                && !this.state.selfIsolate
                && this.state.questionNumber < 6
                ?
                < div className='questionContainer'>
                    <h3>{this.state.questions[this.state.questionNumber].question}</h3>

                    {this.state.questions[this.state.questionNumber].paragraph 
                    ? 
                        <p>{this.state.questions[this.state.questionNumber].paragraph}</p> 
                    : null}

                    <ul>
                        {this.state.questions[this.state.questionNumber].example1 
                        ? 
                            <li>{this.state.questions[this.state.questionNumber].example1}</li> 
                        : null}

                        {this.state.questions[this.state.questionNumber].example2 
                        ? 
                            <li>{this.state.questions[this.state.questionNumber].example2}</li> 
                        : null}

                        {this.state.questions[this.state.questionNumber].example3 
                        ? 
                            <li>{this.state.questions[this.state.questionNumber].example3}</li> 
                        : null}

                        {this.state.questions[this.state.questionNumber].example4 
                        ? 
                            <li>{this.state.questions[this.state.questionNumber].example4}</li> 
                        : null}

                        {this.state.questions[this.state.questionNumber].example5 
                        ? 
                            <li>{this.state.questions[this.state.questionNumber].example5}</li> 
                        : null}
                    </ul>

                    <div className='buttonContainer'>
                        <div>
                            <button onClick={() => this.state.questions[this.state.questionNumber].function(true)}>yes</button>

                            <button onClick={() => this.state.questions[this.state.questionNumber].function(false)}>no</button>
                        </div>

                            <button className='goBack' onClick={this.tryAgain}>
                                <span>go back</span>
                            </button>
                    </div>

                    
                </div>
                : 
                <Results
                    questionNumber={this.state.questionNumber}
                    tryAgain={this.tryAgain}
                    call911={this.state.call911}
                    consultFamilyDoctor={this.state.consultFamilyDoctor}
                    selfIsolate={this.state.selfIsolate}
                    selfIsolateConfirmed={this.selfIsolateConfirmed}
                    resultIsSelfIsolate={this.state.resultIsSelfIsolate}
                />
                }
                
                
            </div>
        );
    }
}
 
export default Questions;