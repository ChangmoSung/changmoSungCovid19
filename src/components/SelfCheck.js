import React, { Component } from 'react';

class SelfCheck extends Component {
    constructor() {
        super();

        this.state = {
            assessmentStarted: false,
            questions: [
                {
                    question: 'Are you experiencing any of the following:',
                    example1: 'Severe difficulty breathing (e.g. struggling to breathe or speaking in single words',
                    example2: 'Severe chest pain',
                    example3: 'Having a very hard time waking up',
                    example4: 'Feeling confused',
                    example5: 'Losing consciousness',
                    no: this.showNextQuestion,
                },
                {
                    question: 'Are you experiencing any of the following:',
                    example1: 'Mild to moderate shortness of breath',
                    example2: 'Inability to lie down because of difficulty breathing',
                    example3: 'Chronic health conditions that you are having difficulty managing because of difficulty breathing',
                    no: this.showNextQuestion,
                },
                {
                    question: 'Are you experiencing any of the following:',
                    example1: 'Fever',
                    example2: 'Cough',
                    example3: 'Sneezing',
                    example4: 'Sore throat',
                    no: this.showNextQuestion,
                },
                {
                    question: 'Have you travelled abroad within the last 14 days?',
                    no: this.showNextQuestion,
                },
                {
                    question: 'Did you provide care or have close contact with a person with COVID-19 (probable or confirmed) while they were ill (cough, fever, sneezing, or sore throat)?',
                    no: this.showNextQuestion,
                },
                {
                    question: 'Did you have close contact with a person who travelled outside of Canada in the last 14 days who has become ill (cough, fever, sneezing, or sore throat)?',
                    no: this.showNextQuestion,
                }
            ]
        }
    }

    startAssessment = () => {
        this.setState({
            assessmentStarted: true,
        })
    }

    showNextQuestion = (e) => {
        const yes = e.target;

        const question = document.querySelector(`${yes.dataset.currentquestion}`)

        if (question) {
            question.style.display = 'block';

        }
    }

    render() { 
        return ( 
            <div className='selfCheck'>
                {!this.state.assessmentStarted 
                ? 
                <div>
                    <h2 className='selfcheckTitle'>COVID-19 Self-Check</h2>

                    <p>This self-assessment tool, developed with the BC Ministry of Health, will help determine whether you may need further assessment or testing for COVID-19. You can complete this assessment for yourself, or on behalf of someone else</p>

                    <p>If you have respiratory symptoms and a serious ongoing condition, or are in the third trimester of pregnancy, please follow the advice of your specialist.</p>

                    <h3>Most people do not need to be tested for COVID-19 because it will not change your care.</h3>

                    <h4>People who do not need to be tested for COVID-19 includes:</h4>

                    <ul>
                        <li>People without symptoms</li>
                        <li>People who have mild respiratory symptoms that can be managed at home</li>
                        <li>Returning travellers</li>
                    </ul>

                    <h3>Who should be tested for COVID-19?</h3>

                    <h4>People with respiratory symptoms who may require testing for COVID-19 include people who are:</h4>

                    <ul>
                        <li>Hospitalized, or likely to be hospitalized</li>
                        <li>Health Care Workers</li>
                        <li>Residents of long-term care facilities</li>
                        <li>Part of an investigation of a cluster or outbreak</li>
                    </ul>

                    <h3>Anyone who has symptoms - including a fever, cough, sneezing, or sore throat - should self-isolate for 10 days. Continue to complete this assessment to determine if you may need care.</h3>

                    <button onClick={this.startAssessment}>Self-Check</button>
                </div>
                :null}


                {this.state.assessmentStarted 
                ? 
                this.state.questions.map((question, i) => {
                    return (
                        <div key={i} className={`question${i}`}>
                            <h3>{question.question}</h3>

                            <ul>
                                {question.example1 ? <li>{question.example1}</li> : null}

                                {question.example2 ? <li>{question.example2}</li> : null}

                                {question.example3 ? <li>{question.example3}</li> : null}

                                {question.example4 ? <li>{question.example4}</li> : null}

                                {question.example5 ? <li>{question.example5}</li> : null}
                            </ul>

                            <div>
                                <button>yes</button>
                                
                                <button data-currentquestion={`.question${i + 1}`} onClick={question.no}>no</button>
                            </div>
                        </div>
                    )
                })
                : null}
            </div>
         );
    }
}
 
export default SelfCheck;