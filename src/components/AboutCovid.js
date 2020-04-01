import React, { Component } from 'react';

class AboutCovid extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() { 
        return ( 
            <div className='aboutCovid'>
                <h2>What is COVID-19?</h2>

                <p>Coronaviruses are a large family of viruses found mostly in animals. In humans, they can cause diseases ranging from the common cold to more severe diseases such as Severe Acute Respiratory Syndrome (SARS) and Middle East Respiratory Syndrome (MERS). The disease caused by the new coronavirus has been named COVID-19.</p>

                <p>While many of the characteristics of COVID-19 are still unknown, mild to severe illness has been reported for confirmed cases.</p>

                <p>Anyone concerned that they may have been exposed to, or are experiencing symptoms of the novel coronavirus, should contact their primary care provider, local public health office, or call 8-1-1.</p>

                <h2>How it spreads</h2>

                <p>Coronavirus is transmitted via larger liquid droplets when a person coughs or sneezes. The virus can enter through these droplets through the eyes, nose or throat if you are in close contact. The virus is not known to be airborne (e.g. transmitted through the particles floating in the air) and it is not something that comes in through the skin.</p>

                <p>It can be spread by touch if a person has used their hands to cover their mouth or nose when they cough. That's why we recommend you cough or sneeze into your arm and wash your hands regularly.</p>
            </div>
         );
    }
}
 
export default AboutCovid;