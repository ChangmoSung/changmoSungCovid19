import React from 'react';
import { Link } from 'react-router-dom';

const HandHygiene = () => {
    return ( 
        <div className='aboutCovid wrapper'>
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

                <li>If you use bar soap, keep it in a self-draining holder that can be cleaned thoroughly before a new bar is added</li>

                <li>Use individual damp cloths to wash each child's hands when a sink with warm running water is unavailble</li>

                <li>Use fresh running water to rinse your hands rather than using a standing basin of water</li>

                <li>Use individual hand towels and avoid sharing towels</li>
                
                <li>Change cleaning cloths daily and launder them using detergent. Germs thrive on moist surfaces</li>
            </ul>

            <Link to='/changmoSungCovid19/info/aboutCovid19' className='routerLink'>go back</Link>
        </div>
        );
}
 
export default HandHygiene;