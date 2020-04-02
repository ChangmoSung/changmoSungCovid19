import React, { Component } from 'react';

class AboutCovid extends Component {
    constructor() {
        super();
        this.state = {
            showSelfCare: false,
            showHandHygiene: false,
        }
    }


    toggleSelfCare = () => {
        this.setState({
            showSelfCare: !this.state.showSelfCare
        })
    }


    toggleHandHygiene = () => {
        this.setState({
            showHandHygiene: !this.state.showHandHygiene,
        })
    }
    
    
    render() { 
        return ( 
            <div className='aboutCovid'>
                {!this.state.showSelfCare && !this.state.showHandHygiene
                ? <div>
                    <h2>What is COVID-19?</h2>

                    <p>Coronaviruses are a large family of viruses found mostly in animals. In humans, they can cause diseases ranging from the common cold to more severe diseases such as Severe Acute Respiratory Syndrome (SARS) and Middle East Respiratory Syndrome (MERS). The disease caused by the new coronavirus has been named COVID-19.</p>

                    <p>While many of the characteristics of COVID-19 are still unknown, mild to severe illness has been reported for confirmed cases.</p>

                    <p>Anyone concerned that they may have been exposed to, or are experiencing symptoms of the novel coronavirus, should contact their primary care provider, local public health office, or call 8-1-1.</p>

                    <h3>How it spreads</h3>

                    <p>Coronavirus is transmitted via larger liquid droplets when a person coughs or sneezes. The virus can enter through these droplets through the eyes, nose or throat if you are in close contact. The virus is not known to be airborne (e.g. transmitted through the particles floating in the air) and it is not something that comes in through the skin.</p>

                    <p>It can be spread by touch if a person has used their hands to cover their mouth or nose when they cough. That's why we recommend you cough or sneeze into your arm and wash your hands regularly.</p>

                    <button onClick={this.toggleSelfCare}>show self care</button>

                    <button onClick={this.toggleHandHygiene}>hand hygiene</button>
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
                                <a href='https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19.html' rel='noopener noreferrer' target='_blank'>Health Canada</a>
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

                        <p>You know your body and your body's signs of stress. If you are having trouble managing your mental health, contact your healthcare provider and encourage those you love to do the same.</p>

                        <button onClick={this.toggleSelfCare}>Go back</button>
                    </div>
                : null}

                {this.state.showHandHygiene 
                ?
                    <div className='handHygiene'>
                        <h2>Hand hygiene</h2>

                        <h3>Handwashing and infection prevention</h3>

                        <p>Even if your hands appear to be clean, they may carry germs. </p>

                        <p>Hands pick up micro-organisms (germs) in a number of ways. When people who are sick sneeze or cough, the germs that are making them sick are expelled into the air in tiny droplets. If these droplets get onto your hands, and then you touch your mouth, eyes or nose without washing away the germs, you can pick up the infection.</p>

                        <p>You can also get sick if you don't wash your hands before and after preparing food, after handling raw meat, and after using the toilet.</p>

                        <p>Washing your hands not only prevents you from getting sick, it reduces the risk of infecting others. If you don't wash your hands properly before coming into contact with others, you can infect them with the germs on your hands. Other people can also get sick from the germs that unwashed hands leave on shared objects such as doorknobs, keyboards and other equipment in the home or workplace.</p>

                        <h3>When to wash your hands</h3>

                        <ul>
                            <li>Before and after eating or feeding someone else</li>
                            <li>Before preparing food</li>
                            <li>After handling raw meat</li>
                            <li>After using the washroom or helping someone use the washroom</li>
                            <li>Before and after changing diapers</li>
                            <li>After sneezing, coughing or using a tissue</li>
                            <li>After helping someone with a runny nose</li>
                            <li>Before and after caring for someone who is sick</li>
                            <li>Before performing first aid or applying a bandaid</li>
                            <li>After handling pets or other animals</li>
                            <li>After handling animal waste</li>
                            <li>After handling shared objects</li>
                            <li>After playing with toys shared with other children</li>
                            <li>After playing outside or in the sandbox</li>
                            <li>After cleaning or handling garbage</li>
                            <li>Before inserting and removing contact lenses</li>
                            <li>Before flossing your teeth</li>
                            <li>Before breastfeeding</li>
                        </ul>

                        <h3>Proper methods of handwashing</h3>

                        <p>Although hand washing might seem like a simple task, you should follow these steps to thoroughly rid your hands of germs.</p>
                        
                        <h4>What kind of soap to use</h4>

                        <ul>
                            <li>Use plain soap that does not contain antibacterial agents</li>
                            <li>Plain soap will remove the dirt and grease that attract bad bacteria. Plain soap will not kill the good bacteria that live on the gands</li>
                            <li>Using antibacterial products unnecessarily increases the concentration of antibiotics in the water supply and in the environment and may contribute to antibiotic resistance.</li>
                        </ul>

                        <h4>Steps when using soap</h4>

                        <ul>
                            <li>Remove any hand or arm jewellery you may be wearing</li>
                            <li>Wet your hands with warm water</li>
                            <li>Apply plain soap to your hands and rub together for 20 seconds (the length of time it takes to sing Twinkle Twinkle Little Star or Happy Birthday)</li>
                            <li>Wash the front and back of your hands, as well as between your fingers and under your nails</li>
                            <li>Rinse your hands well for 10 seconds under warm running water, using a rubbing motion</li>
                            <li>Wipe and dry your hands gently with a paper towel or a clean towel. Drying them vigorously can damage the skin</li>
                            <li>Turn off the tap using the paper towel so that you do not re-contaminate your hands. When using a public bathroom, use the same paper towel to open the door when you leave</li>
                            <li>If skin dryness is a problem, use a moisturizing lotion</li>
                        </ul>

                        <h4>Steps when using alcohol-based hand rubs</h4>

                        <ul>
                            <li>These products need to be at least 60% alcohol to be effective, so check the label</li>
                            <li>Alcohol-based hand rubs do not cause antibiotic resistance</li>
                            <li>Alcohol-based hand rubs kill many bacteria and viruses, but are not effective against some of the germs that cause diarrhea</li>
                            <li>Alcohol-based hand rubs don't work if your hands are greasy or visibly dirty. These products don't clean your hands and are not a substitute for handwashing. If your hands are visibly soiled, it is best to use soap and water</li>
                            <li>If it's not possible to wash with soap and water, use towelettes to remove the soil, then use an alcohol-based hand rub</li>
                            <li>Make sure your hands are dry, as wet hands will dilute the alcohol-based hand product</li>
                            <li>Use enough of the product to cover all the surfaces of your hands and fingers</li>
                            <li>Rub your hands together until the product has evaporated</li>
                            <li>If dry skin is a problem, use a moisturizing lotion</li>
                            <li>Alcohol-based hand rubs are safe for children if used with supervision. Alcohol-based hand rubs are poisonous if ingested. Children should not put their hands in their mouths until the alcohol evaporates (about 15 seconds)</li>
                            <li>Wall dispensers and containers of alcohol-based hand rubs should be placed so they cannot be reached by small children</li>
                            <li>Alcohol-based hand rubs are flammable and should not be stored near a source of heat</li>
                        </ul>

                        <h4>Minimizing your risks</h4>

                        <p>Here are further steps you can take to protect yourself and your family</p>

                        <ul>
                            <li>When you cough or sneeze, use a tissue or raise your arm up to your face and aim for your sleeve. Do not sneeze into your hand. Throw away tissues as soon as you use them</li>
                            <li>Keep the surface areas in your home and office free of germs by cleaning them. Doorknobs, light switches, telephones, and keyboards are especially important to keep clean</li>
                            <li>If you have children, teach them good hygiene and how to wash their hands properly. Young children should be supervised while washing their hands</li>
                            <li>If you use bar soap, kepp it in a self-draining holder that can be cleaned thoroughly before a new bar is added</li>
                            <li>Use individual damp cloths to wash each child's hands when a sink with warm running water is unavailble</li>
                            <li>Use fresh running water to rinse your hands rather than using a standing basin of water</li>
                            <li>Use individual hand towels and avoid sharing towels</li>
                            <li>Change cleaning cloths daily and launder them using detergent. Germs thrive on moist surfaces</li>
                        </ul>

                        <button onClick={this.toggleHandHygiene}>go back</button>
                    </div>
                : null}
            </div>
         );
    }
}
 
export default AboutCovid;