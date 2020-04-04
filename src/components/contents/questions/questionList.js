const questionList = [
    {
        question: 'Are you experiencing any of the following:',
        example1: 'Severe difficulty breathing (e.g. struggling to breathe or speaking in single words',
        example2: 'Severe chest pain',
        example3: 'Having a very hard time waking up',
        example4: 'Feeling confused',
        example5: 'Losing consciousness',
        result: 'call911',
    },
    {
        question: 'Are you experiencing any of the following:',
        example1: 'Mild to moderate shortness of breath',
        example2: 'Inability to lie down because of difficulty breathing',
        example3: 'Chronic health conditions that you are having difficulty managing because of difficulty breathing',
        result: 'consultFamilyDoctor',
    },
    {
        question: 'Are you experiencing any of the following:',
        example1: 'Fever',
        example2: 'Cough',
        example3: 'Sneezing',
        example4: 'Sore throat',
        result: 'selfIsolate',
    },
    {
        question: 'Did you provide care or have close contact with a person with COVID-19 (probable or confirmed) while they were ill (cough, fever, sneezing, or sore throat)?',
        paragraph: 'A close contact is defined as a person who:',
        example1: 'provided care for the individual, including healthcare workers, family members or other caregivers, or who had other similar close physical contact without consistent and appropriate use of personal protective equipment ',
        example2: 'who lived with or otherwise had close prolonged contact (within 2 meters) with the person while they were infectious',
        example3: 'had direct contact with infectious bodily fluids of the person (e.g. was coughed or sneezed on) while not wearing recommended personal protective equipment',
        result: 'resultIsSelfIsolate',
    },
    {
        question: 'Have you travelled abroad within the last 14 days?',
        paragraph: 'Travel includes passing through an airport.',
        result: 'resultIsSelfIsolate',
    },
    {
        question: 'Did you have close contact with a person who travelled outside of Canada in the last 14 days who has become ill (cough, fever, sneezing, or sore throat)?',
        result: 'resultIsSelfIsolate',
    },
]

export default questionList;