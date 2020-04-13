import React, { Component } from 'react';
import Results from './results/Results';
import questionList from './questionList';

class Questions extends Component {
    constructor() {
        super();

        this.state = {
            questionNumber: 0,
            call911: false,
            consultFamilyDoctor: false,
            selfIsolate: false,
            resultIsSelfIsolate: false,
        }
    }


    // Every question has an attribute for result. Based on that result, this function determines the next step for users
    result = e => {
        const result = e.target.dataset.result;

        // Every time users move on to the next question, this question number goes up by 1 and this is what determines what question users should be seeing
        this.setState({ questionNumber: this.state.questionNumber + 1 })

        if(result === 'call911') {
            this.setState({
                call911: true,
            })
        } else if(result === 'consultFamilyDoctor') {
            this.setState({
                consultFamilyDoctor: true,
            })
        } else if(result === 'selfIsolate') {
            this.setState({
                selfIsolate: true,
                resultIsSelfIsolate: true,
            })
        } else if(result === 'resultIsSelfIsolate') {
            this.setState({
                resultIsSelfIsolate: true,
            })
        }
    }


    // There is a warning about self isolation. Users have to confirm this warning to continue the self-check. This warning pops up when the prop called selfIsolate is true and goes away when the prop is false.
    selfIsolateConfirmed = () => {
        this.setState({
            selfIsolate: false,
        })
    }


    // If users would like to start over, the question number becomes 0 to go back to the first question and all results get false
    startAgain = () => {
        this.setState({
            questionNumber: 0,
            call911: false,
            consultFamilyDoctor: false,
            resultIsSelfIsolate: false,
        })
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
                        <h3>{questionList[this.state.questionNumber].question}</h3>

                        {questionList[this.state.questionNumber].paragraph
                        ?
                            <p>{questionList[this.state.questionNumber].paragraph}</p>
                        : null}

                        <ul>
                            {questionList[this.state.questionNumber].example1
                            ?
                                <li>{questionList[this.state.questionNumber].example1}</li>
                            : null}

                            {questionList[this.state.questionNumber].example2
                            ?
                                <li>{questionList[this.state.questionNumber].example2}</li>
                            : null}

                            {questionList[this.state.questionNumber].example3
                            ?
                                <li>{questionList[this.state.questionNumber].example3}</li>
                            : null}

                            {questionList[this.state.questionNumber].example4
                            ?
                                <li>{questionList[this.state.questionNumber].example4}</li>
                            : null}

                            {questionList[this.state.questionNumber].example5
                            ?
                                <li>{questionList[this.state.questionNumber].example5}</li>
                            : null}
                        </ul>

                        <div className='buttonContainer'>
                            <div>
                                <button data-result={questionList[this.state.questionNumber].result} onClick={this.result}>yes</button>

                                <button data-result='no' onClick={this.result}>no</button>
                            </div>

                            {this.state.questionNumber > 0
                            ?
                                <button className='startAgain' onClick={this.startAgain}>start again</button>
                            : null}
                        </div>
                    </div>
                    :
                    <Results
                        questionNumber={this.state.questionNumber}
                        startAgain={this.startAgain}
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