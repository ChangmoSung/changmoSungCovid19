import React from 'react';
import { Link } from 'react-router-dom';

const SelfCare = () => {
    return ( 
        <div className='aboutCovid'>
            <h2>Managing COVID-19 Stress, Anxiety, and Depression</h2>

            <p>News and information about the spread of COVID-19 around the world is coming at us quickly. It can be hard to keep up and if you are keeping up on the latest, it can be even harder to remain calm given all that is going on. Stress, anxiety, and depression are not unusual for people of all ages. But there are things we can do as individuals and collec tively to deal with stress and support one another during these challenging times.</p>

            <h3>Know the facts</h3>

            <p>Using reliable sources of information will ensure that what you do learn is fact, not fear-based.</p>

            <ul>
                <li>
                    <a href='https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19.html' rel='noopener noreferrer' target='_blank' >Health Canada</a>
                </li>

                <li>
                    <a href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019' rel='noopener noreferrer' target='_blank'>World Health Organization</a>
                </li>
            </ul>

            <h3>Reach out</h3>

            <p>Social distancing is important and will help control the spread of the virus. At the same time, it can also create even greater feelings of isolation, loneliness, and sometimes depression. Use this time to connect in other ways... Call those who are alone, connect with friends online, and support those who really need it.</p>

            <h3>Have calm conversations</h3>

            <p>Maintaining a sense of calm, especially when <a href='http://www.bccdc.ca/Health-Info-Site/Documents/COVID19%20QA%20for%20kids%20Feb%202020.pdf' rel='noopener noreferrer' target='_blank'>talking to children</a> will go a long way toward easing their fears and uncertainty. Provide age-appropriate, factual information and give them the opportunity to ask questions and share how they are feeling.</p>

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

            <p>You know your body and your body's signs of stress. If you are having trouble managing your mental health, contact your healthcare provider or call <a href='tel:811'>8-1-1</a>.</p>

            <Link to='/changmoSungCovid19/info/aboutCovid19' className='routerLink'>go back</Link>
        </div>
    );
}
 
export default SelfCare;