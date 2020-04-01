import React, { Component } from 'react';

class AboutCovid extends Component {
    constructor() {
        super();
        this.state = {
            showSelfCare: false,
        }
    }

    toggleSelfCare = () => {
        this.setState({
            showSelfCare: !this.state.showSelfCare
        })
    }
    
    render() { 
        return ( 
            <div className='aboutCovid'>
                {!this.state.showSelfCare 
                ? <div>
                    <h2>What is COVID-19?</h2>

                    <p>Coronaviruses are a large family of viruses found mostly in animals. In humans, they can cause diseases ranging from the common cold to more severe diseases such as Severe Acute Respiratory Syndrome (SARS) and Middle East Respiratory Syndrome (MERS). The disease caused by the new coronavirus has been named COVID-19.</p>

                    <p>While many of the characteristics of COVID-19 are still unknown, mild to severe illness has been reported for confirmed cases.</p>

                    <p>Anyone concerned that they may have been exposed to, or are experiencing symptoms of the novel coronavirus, should contact their primary care provider, local public health office, or call 8-1-1.</p>

                    <h3>How it spreads</h3>

                    <p>Coronavirus is transmitted via larger liquid droplets when a person coughs or sneezes. The virus can enter through these droplets through the eyes, nose or throat if you are in close contact. The virus is not known to be airborne (e.g. transmitted through the particles floating in the air) and it is not something that comes in through the skin.</p>

                    <p>It can be spread by touch if a person has used their hands to cover their mouth or nose when they cough. That's why we recommend you cough or sneeze into your arm and wash your hands regularly.</p>

                    <button onClick={this.toggleSelfCare}>show self care</button>
                </div>
                : null}


                {this.state.showSelfCare 
                ?  
                    <div className='selfCare'>
                        <h2>Managing COVID-19 Stress, Anxiety, and Depression</h2>

                        <p>News and information about the spread of COVID-19 around the world is coming at us quickly. It can be hard to keep up and if you are keeping up on the latest, it can be even harder to remain calm given all that is going on. Stress, anxiety, and depression are not unusual for people of all ages. But there are things we can do as individuals and collec tively to deal with stress and support one another during these challenging times.</p>

                        <h3>Know the facts</h3>

                        <p>Using reliable sources of information will ensure that what you do learn is fact, not fear-based.</p>

                        <ul>
                            <li>
                                <a href='https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19.html' target='_blank'>Health Canada</a>
                            </li>

                            <li>
                                <a href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019' target='_blank'>World Health Organization</a>
                            </li>
                        </ul>

                        <h3>Reach out</h3>

                        <p>Social distancing is important and will help control the spread of the virus. At the same time, it can also create even greater feelings of isolation, loneliness, and sometimes depression. Use this time to connect in other ways... Call those who are alone, connect with friends online, and support those who really need it.</p>

                        <h3>Have calm conversations</h3>

                        <p>Maintaining a sense of calm, especially when <a href='http://www.bccdc.ca/Health-Info-Site/Documents/COVID19%20QA%20for%20kids%20Feb%202020.pdf' target='_blank'>talking to children</a> will go a long way toward easing their fears and uncertainty. Provide age-appropriate, factual information and give them the opportunity to ask questions and share how they are feeling.</p>

                        <h3>Practice self-care</h3>

                        <p>Build self-care into your day, even (and especially) as activities change and routines are disrupted. All the things you do to take care of yourself will help manage your stress. And by taking good care of yourself, you'll be better prepared to take care of others. Some self-care ideas:</p>

                        <ul>
                            <li>Meditate</li>
                            <li>Play a board game</li>
                            <li>Practice deep breathing</li>
                            <li>Take a bath</li>
                            <li>Read about something other than the virus</li>
                            <li>Cuddle your pet</li>
                            <li>Start a digital detox (leave your phone alone for a while)</li>
                            <li>Exercise</li>
                        </ul>

                        <h3>Seek help</h3>

                        <p>You know your body and your body's signs of stress. If you are having trouble managing your mental health, contact your healthcare provider and encourage those you love to do the same.</p>

                        <button onClick={this.toggleSelfCare}>Go back</button>
                    </div>
                : null}
            </div>
         );
    }
}
 
export default AboutCovid;