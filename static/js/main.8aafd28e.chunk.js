(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{31:function(e,t,a){e.exports=a(60)},36:function(e,t,a){},54:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(28),r=a.n(o),s=(a(36),a(6)),i=a(7),u=a(8),c=a(9),h=a(2),m=a(11),d=a(13),p=a.n(d),f=(a(54),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).toggleNav=function(){e.setState({navOpened:!e.state.navOpened}),document.querySelector("nav").classList.toggle("showNav"),document.querySelector(".navTrigger").classList.toggle("hideNavTrigger")},e.state={navOpened:!1},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("nav",{className:"nav"},l.a.createElement("button",{className:"navTrigger",onClick:this.toggleNav},l.a.createElement("span",null,"X")),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(h.b,{to:"/changmoSungCovid19/",onClick:this.toggleNav},l.a.createElement("span",{tabIndex:"0"},"HOME"))),l.a.createElement("li",null,l.a.createElement(h.b,{to:"/changmoSungCovid19/info/aboutCovid19",onClick:this.toggleNav},l.a.createElement("span",{tabIndex:"0"},"COVID-19"))),l.a.createElement("li",null,l.a.createElement(h.b,{to:"/changmoSungCovid19/info/selfcheck",onClick:this.toggleNav},l.a.createElement("span",{tabIndex:"0"},"SELF-CHECK"))),l.a.createElement("li",null,l.a.createElement(h.b,{to:"/changmoSungCovid19/info/statistic",onClick:this.toggleNav},l.a.createElement("span",{tabIndex:"0"},"STATISTIC"))),l.a.createElement("li",null,l.a.createElement(h.b,{to:"/changmoSungCovid19/info/news",onClick:this.toggleNav},l.a.createElement("span",{tabIndex:"0"},"NEWS")))))}}]),a}(n.Component)),g=function(e){var t=function(e){return"number"===typeof e?e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):0};return l.a.createElement("header",null,l.a.createElement("h1",null,"SAVE THE ONE YOU LOVE"),l.a.createElement("h2",{className:"date"},"As of ",e.currentDate),l.a.createElement("ul",{className:"currentStatusList"},l.a.createElement("li",null,"Total cases: ",t(e.currentStatus.cases)),l.a.createElement("li",null,"Total active: ",t(e.currentStatus.active)),l.a.createElement("li",null,"Total recovered: ",t(e.currentStatus.recovered)),l.a.createElement("li",null,"Total deaths: ",t(e.currentStatus.deaths))))},y=function(){return l.a.createElement("div",{className:"aboutCovid"},l.a.createElement("div",null,l.a.createElement("h2",null,"What is COVID-19?"),l.a.createElement("p",null,"Coronaviruses are a large family of viruses found mostly in animals. In humans, they can cause diseases ranging from the common cold to more severe diseases such as Severe Acute Respiratory Syndrome (SARS) and Middle East Respiratory Syndrome (MERS). The disease caused by the new coronavirus has been named COVID-19."),l.a.createElement("p",null,"While many of the characteristics of COVID-19 are still unknown, mild to severe illness has been reported for confirmed cases."),l.a.createElement("p",null,"Anyone concerned that they may have been exposed to, or are experiencing symptoms of the novel coronavirus, should contact their primary care provider, local public health office, or call 8-1-1."),l.a.createElement("h3",null,"How it spreads"),l.a.createElement("p",null,"Coronavirus is transmitted via larger liquid droplets when a person coughs or sneezes. The virus can enter through these droplets through the eyes, nose or throat if you are in close contact. The virus is not known to be airborne (e.g. transmitted through the particles floating in the air) and it is not something that comes in through the skin."),l.a.createElement("p",null,"It can be spread by touch if a person has used their hands to cover their mouth or nose when they cough. That's why we recommend you cough or sneeze into your arm and wash your hands regularly."),l.a.createElement("div",{className:"linkContainer"},l.a.createElement(h.b,{to:"/changmoSungCovid19/info/aboutCovid19/selfCare"},l.a.createElement("span",null,"show self care")),l.a.createElement(h.b,{to:"/changmoSungCovid19/info/aboutCovid19/handHygiene"},l.a.createElement("span",null,"hand hygiene")))))},E=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).addCommas=function(e){return"".concat("number"===typeof e?e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):0)},e.searchCountry=function(t){t.preventDefault();var a=e.searchInput.current.value,n=e.state.worldStatus.filter((function(e){return e.country.toLowerCase().includes(a.toLowerCase())}));0===n.length&&alert("There is no matching country"),e.setState({searchedCountry:n}),e.searchInput.current.value=""},e.state={worldStatus:[],searchedCountry:[]},e.searchInput=l.a.createRef(),e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;p()({url:"https://corona.lmao.ninja/countries?sort=country",method:"GET"}).then((function(t){var a=t.data.sort((function(e,t){return e.cases>t.cases?-1:1}));e.setState({worldStatus:a})}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"statistic"},l.a.createElement("h2",{className:"date"},"As of ",this.props.currentDate),l.a.createElement("ul",{className:"currentStatusList"},l.a.createElement("li",null,"Affected countries: ",this.addCommas(this.state.worldStatus.length)),l.a.createElement("li",null,"Total cases: ",this.addCommas(this.props.currentStatus.cases)),l.a.createElement("li",null,"Total active: ",this.addCommas(this.props.currentStatus.active)),l.a.createElement("li",null,"Total recovered: ",this.addCommas(this.props.currentStatus.recovered)),l.a.createElement("li",null,"Total deaths: ",this.addCommas(this.props.currentStatus.deaths))),l.a.createElement("div",{className:"searchFormContainer"},l.a.createElement("form",{onSubmit:this.searchCountry},l.a.createElement("input",{ref:this.searchInput,id:"country",type:"text",required:!0}),l.a.createElement("button",null,"SEARCH"))),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Country"),l.a.createElement("th",null,"Cases"),l.a.createElement("th",null,"Active"),l.a.createElement("th",null,"Recovered"),l.a.createElement("th",null,"Deaths"),l.a.createElement("th",null,"Death toll"))),l.a.createElement("tbody",null,this.state.searchedCountry.map((function(t,a){return l.a.createElement("tr",{key:a},l.a.createElement("td",{className:"searchedCountry"},"* ",e.addCommas(t.country)),l.a.createElement("td",{className:"totalCases"},l.a.createElement("span",null,e.addCommas(t.cases)),t.todayCases>0?l.a.createElement("span",null,l.a.createElement("span",{className:"arrow"}),e.addCommas(t.todayCases)):null),l.a.createElement("td",null,e.addCommas(t.active)),l.a.createElement("td",null,e.addCommas(t.recovered)),l.a.createElement("td",{className:"totalDeaths"},l.a.createElement("span",null,e.addCommas(t.deaths)),t.todayDeaths>0?l.a.createElement("span",null,l.a.createElement("span",{className:"arrow"}),e.addCommas(t.todayDeaths)):null),l.a.createElement("td",null,(100/(t.cases/t.deaths)).toFixed(2),"%"))})),this.state.worldStatus.map((function(t,a){return l.a.createElement("tr",{key:a},l.a.createElement("td",null,t.country),l.a.createElement("td",{className:"totalCases"},l.a.createElement("span",null,e.addCommas(t.cases)),t.todayCases>0?l.a.createElement("span",null,l.a.createElement("span",{className:"arrow"}),l.a.createElement("span",null,e.addCommas(t.todayCases))):null),l.a.createElement("td",null,e.addCommas(t.active)),l.a.createElement("td",null,e.addCommas(t.recovered)),l.a.createElement("td",{className:"totalDeaths"},l.a.createElement("span",null,e.addCommas(t.deaths)),t.todayDeaths>0?l.a.createElement("span",null,l.a.createElement("span",{className:"arrow"}),l.a.createElement("span",null,e.addCommas(t.todayDeaths))):null),l.a.createElement("td",null,(100/(t.cases/t.deaths)).toFixed(2),"%"))})))))}}]),a}(n.Component),b=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={news:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;p()({url:"https://newsapi.org/v2/top-headlines",method:"GET",params:{language:"en",q:"COVID",from:"2020-03-16",sortBy:"publishedAt",apiKey:"0741cdf2415e4f44a92f80f69c904834",pageSize:"50",page:"1"}}).then((function(t){e.setState({news:t.data.articles})}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"news"},l.a.createElement("ul",{className:"newsList"},this.state.news.map((function(e,t){return l.a.createElement("li",{key:t},l.a.createElement("h3",null,e.title),l.a.createElement("p",null,"By ",!e.author||e.author.includes("http")?"anonymous author":e.author),l.a.createElement("p",null,"Published on ",e.publishedAt.slice(0,10)),l.a.createElement("div",{className:"newsArticle"},e.urlToImage?l.a.createElement("img",{src:e.urlToImage,alt:"article"}):l.a.createElement("p",null,"There is no image for this article")),l.a.createElement("p",{className:"newsDescription"},e.description),l.a.createElement("a",{href:e.url},l.a.createElement("span",{tabIndex:"0"},"Link to the article")))}))))}}]),a}(n.Component),v=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).startAssessment=function(){e.setState({assessmentStarted:!0})},e.tryAgain=function(){e.setState({questionNumber:0,call911:!1,consultFamilyDoctor:!1})},e.returnToPreviousQuestion=function(){e.state.questionNumber>0&&e.setState({questionNumber:e.state.questionNumber-1})},e.call911=function(t){e.setState({call911:t,questionNumber:e.state.questionNumber+1})},e.consultFamilyDoctor=function(t){e.setState({consultFamilyDoctor:t,questionNumber:e.state.questionNumber+1})},e.selfIsolate=function(t){e.setState({selfIsolate:t,resultIsSelfIsolate:t,questionNumber:parseInt("".concat(t?e.state.questionNumber:e.state.questionNumber+1))})},e.selfIsolateConfirmed=function(){e.setState({selfIsolate:!1,questionNumber:e.state.questionNumber+1})},e.resultIsSelfIsolate=function(t){e.state.resultIsSelfIsolate?e.setState({questionNumber:e.state.questionNumber+1}):e.setState({resultIsSelfIsolate:t,questionNumber:e.state.questionNumber+1})},e.state={assessmentStarted:!1,questionNumber:0,questions:[{question:"Are you experiencing any of the following:",example1:"Severe difficulty breathing (e.g. struggling to breathe or speaking in single words",example2:"Severe chest pain",example3:"Having a very hard time waking up",example4:"Feeling confused",example5:"Losing consciousness",function:e.call911},{question:"Are you experiencing any of the following:",example1:"Mild to moderate shortness of breath",example2:"Inability to lie down because of difficulty breathing",example3:"Chronic health conditions that you are having difficulty managing because of difficulty breathing",function:e.consultFamilyDoctor},{question:"Are you experiencing any of the following:",example1:"Fever",example2:"Cough",example3:"Sneezing",example4:"Sore throat",function:e.selfIsolate},{question:"Did you provide care or have close contact with a person with COVID-19 (probable or confirmed) while they were ill (cough, fever, sneezing, or sore throat)?",paragraph:"A close contact is defined as a person who:",example1:"provided care for the individual, including healthcare workers, family members or other caregivers, or who had other similar close physical contact without consistent and appropriate use of personal protective equipment ",example2:"who lived with or otherwise had close prolonged contact (within 2 meters) with the person while they were infectious",example3:"had direct contact with infectious bodily fluids of the person (e.g. was coughed or sneezed on) while not wearing recommended personal protective equipment",function:e.resultIsSelfIsolate},{question:"Have you travelled abroad within the last 14 days?",paragraph:"Travel includes passing through an airport.",function:e.resultIsSelfIsolate},{question:"Did you have close contact with a person who travelled outside of Canada in the last 14 days who has become ill (cough, fever, sneezing, or sore throat)?",function:e.resultIsSelfIsolate}],call911:!1,consultFamilyDoctor:!1,selfIsolate:!1,travelledAbroad:!1,resultIsSelfIsolate:!1},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"selfCheck"},this.state.assessmentStarted?null:l.a.createElement("div",{className:"selfAssessmentDescription"},l.a.createElement("h2",null,"COVID-19 Self-Check"),l.a.createElement("p",null,"This self-assessment tool, developed with 811 HealthLine, will help determine whether you may need further assessment or testing for COVID-19. You can complete this assessment for yourself, or on behalf of someone else. If you have respiratory symptoms and a serious ongoing condition, or are in the third trimester of pregnancy, please follow the advice of your specialist."),l.a.createElement("h3",null,"Most people do not need to be tested for COVID-19 because it will not change your care."),l.a.createElement("p",null,"People who do not need to be tested for COVID-19 includes:"),l.a.createElement("ul",null,l.a.createElement("li",null,"People without symptoms"),l.a.createElement("li",null,"People who have mild respiratory symptoms that can be managed at home"),l.a.createElement("li",null,"Returning travellers")),l.a.createElement("h3",null,"Who should be tested for COVID-19?"),l.a.createElement("p",null,"People with respiratory symptoms who may require testing for COVID-19 include people who are:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Hospitalized, or likely to be hospitalized"),l.a.createElement("li",null,"Health Care Workers"),l.a.createElement("li",null,"Residents of long-term care facilities"),l.a.createElement("li",null,"Part of an investigation of a cluster or outbreak")),l.a.createElement("p",null,"Anyone who has symptoms - including a fever, cough, sneezing, or sore throat - should self-isolate for 14 days. Continue to complete this assessment to determine if you may need care."),l.a.createElement("button",{onClick:this.startAssessment},"Self-Check")),this.state.assessmentStarted&&this.state.questionNumber<6&&!this.state.call911&&!this.state.consultFamilyDoctor&&!this.state.selfIsolate?l.a.createElement("div",{className:"questions"},l.a.createElement("div",{className:"questionContainer"},l.a.createElement("h3",null,this.state.questions[this.state.questionNumber].question),this.state.questions[this.state.questionNumber].paragraph?l.a.createElement("p",null,this.state.questions[this.state.questionNumber].paragraph):null,l.a.createElement("ul",null,this.state.questions[this.state.questionNumber].example1?l.a.createElement("li",null,this.state.questions[this.state.questionNumber].example1):null,this.state.questions[this.state.questionNumber].example2?l.a.createElement("li",null,this.state.questions[this.state.questionNumber].example2):null,this.state.questions[this.state.questionNumber].example3?l.a.createElement("li",null,this.state.questions[this.state.questionNumber].example3):null,this.state.questions[this.state.questionNumber].example4?l.a.createElement("li",null,this.state.questions[this.state.questionNumber].example4):null,this.state.questions[this.state.questionNumber].example5?l.a.createElement("li",null,this.state.questions[this.state.questionNumber].example5):null),l.a.createElement("div",{className:"buttonContainer"},l.a.createElement("button",{onClick:function(){return e.state.questions[e.state.questionNumber].function(!0)}},"yes"),l.a.createElement("button",{onClick:function(){return e.state.questions[e.state.questionNumber].function(!1)}},"no")),l.a.createElement("button",{className:"return",onClick:this.returnToPreviousQuestion},l.a.createElement("span",null,"Return to previous question")))):null,this.state.call911?l.a.createElement("div",{className:"call911"},l.a.createElement("h3",null,"Our recommendation"),l.a.createElement("h4",null,"Please call 9-1-1 or go directly to your nearest emergency department."),l.a.createElement("p",null,"These symptoms require immediate attention. You should call 9-1-1 immediately, or go directly to your nearest emergency department."),l.a.createElement("button",{onClick:this.tryAgain},"try again")):null,this.state.consultFamilyDoctor?l.a.createElement("div",{className:"consultFamilyDoctor"},l.a.createElement("h3",null,"Our recommendation"),l.a.createElement("h4",null,"Please consult your family doctor. If you are unable to reach your regular health care provider, call 8-1-1 to speak to a Registered Nurse 24 hours a day."),l.a.createElement("p",null,"A nurse at 811 HealthLine can speak with you about your symptoms and provide health advice."),l.a.createElement("button",{onClick:this.tryAgain},"try again")):null,this.state.selfIsolate?l.a.createElement("div",{className:"selfIsolate"},l.a.createElement("h3",null,"Please stay at home."),l.a.createElement("p",null,"As a precaution, the Ministry of Health is asking anyone with symptoms (fever, coughm sneezing, or sore throat) to stay home for 10 days."),l.a.createElement("p",null,"If your symptoms worsen, call your family physician."),l.a.createElement("h4",null,"Your self-assessment is not complete."),l.a.createElement("p",null,"Finish the remaining questions to obtain complete recommendations on what steps you should take."),l.a.createElement("button",{onClick:this.selfIsolateConfirmed},"continue")):null,6===this.state.questionNumber&&this.state.resultIsSelfIsolate?l.a.createElement("div",{className:"resultIsSelfIsolate"},l.a.createElement("h3",null,"Our recommendation"),l.a.createElement("h4",null,"Please self-isolate for 14 days. You do not need testing for COVID-19."),l.a.createElement("p",null,"There are many common viruses other than COVID-19 that can cause your symptoms. Based on your responses you do not need to be tested for COVID-19 at this time. You should stay at home and not go to work or school until 24 hours after your symptoms have resolved, without the use of fever-reducing medication and avoid close contact with people in your home as well as people with chronic conditions, compromised immune systems and older adults."),l.a.createElement("p",null,"If your symptoms become worse, call 811. 811 is currently experiencing heavy call volumes. You may be asked to leave a message. We\u2019ll get back to you as ask quickly as possible."),l.a.createElement("button",{onClick:this.tryAgain},"try again")):null,6!==this.state.questionNumber||this.state.resultIsSelfIsolate?null:l.a.createElement("div",{className:"noNeedToBeTested"},l.a.createElement("h3",null,"Our recommendation"),l.a.createElement("h4",null,"Since you don't have any COVID-19 symptoms, you don't need to be tested for COVID-19."),l.a.createElement("p",null,"Please self-monitor, wash your hands frequently, and practice physical distancing.If you develop any symptoms (fever, cough, sneezing, sore throat, or difficulty breathing), or become aware of any potential exposures to cases of COVID-19, take this self-assessment again."),l.a.createElement("p",null,"If you are experiencing symptoms other than COVID-19, contact your family physician."),l.a.createElement("button",{onClick:this.tryAgain},"try again")))}}]),a}(n.Component),w=function(){return l.a.createElement("div",{className:"aboutCovid"},l.a.createElement("h2",null,"Managing COVID-19 Stress, Anxiety, and Depression"),l.a.createElement("p",null,"News and information about the spread of COVID-19 around the world is coming at us quickly. It can be hard to keep up and if you are keeping up on the latest, it can be even harder to remain calm given all that is going on. Stress, anxiety, and depression are not unusual for people of all ages. But there are things we can do as individuals and collec tively to deal with stress and support one another during these challenging times."),l.a.createElement("h3",null,"Know the facts"),l.a.createElement("p",null,"Using reliable sources of information will ensure that what you do learn is fact, not fear-based."),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19.html",rel:"noopener noreferrer",target:"_blank"},"Health Canada")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.who.int/emergencies/diseases/novel-coronavirus-2019",rel:"noopener noreferrer",target:"_blank"},"World Health Organization"))),l.a.createElement("h3",null,"Reach out"),l.a.createElement("p",null,"Social distancing is important and will help control the spread of the virus. At the same time, it can also create even greater feelings of isolation, loneliness, and sometimes depression. Use this time to connect in other ways... Call those who are alone, connect with friends online, and support those who really need it."),l.a.createElement("h3",null,"Have calm conversations"),l.a.createElement("p",null,"Maintaining a sense of calm, especially when ",l.a.createElement("a",{href:"http://www.bccdc.ca/Health-Info-Site/Documents/COVID19%20QA%20for%20kids%20Feb%202020.pdf",rel:"noopener noreferrer",target:"_blank"},"talking to children")," will go a long way toward easing their fears and uncertainty. Provide age-appropriate, factual information and give them the opportunity to ask questions and share how they are feeling."),l.a.createElement("h3",null,"Practice self-care"),l.a.createElement("p",null,"Build self-care into your day, even (and especially) as activities change and routines are disrupted. All the things you do to take care of yourself will help manage your stress. And by taking good care of yourself, you'll be better prepared to take care of others. Some self-care ideas:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Meditate"),l.a.createElement("li",null,"Play a board game"),l.a.createElement("li",null,"Practice deep breathing"),l.a.createElement("li",null,"Take a bath"),l.a.createElement("li",null,"Read about something other than the virus"),l.a.createElement("li",null,"Cuddle your pet"),l.a.createElement("li",null,"Start a digital detox (leave your phone alone for a while)"),l.a.createElement("li",null,"Exercise")),l.a.createElement("h3",null,"Seek help"),l.a.createElement("p",null,"You know your body and your body's signs of stress. If you are having trouble managing your mental health, contact your healthcare provider or call 8-1-1."),l.a.createElement(h.b,{to:"/changmoSungCovid19/info/aboutCovid19",className:"routerLink"},"go back"))},C=function(){return l.a.createElement("div",{className:"aboutCovid"},l.a.createElement("h2",null,"Hand hygiene"),l.a.createElement("h3",null,"Handwashing and infection prevention"),l.a.createElement("p",null,"Even if your hands appear to be clean, they may carry germs. "),l.a.createElement("p",null,"Hands pick up micro-organisms (germs) in a number of ways. When people who are sick sneeze or cough, the germs that are making them sick are expelled into the air in tiny droplets. If these droplets get onto your hands, and then you touch your mouth, eyes or nose without washing away the germs, you can pick up the infection."),l.a.createElement("p",null,"You can also get sick if you don't wash your hands before and after preparing food, after handling raw meat, and after using the toilet."),l.a.createElement("p",null,"Washing your hands not only prevents you from getting sick, it reduces the risk of infecting others. If you don't wash your hands properly before coming into contact with others, you can infect them with the germs on your hands. Other people can also get sick from the germs that unwashed hands leave on shared objects such as doorknobs, keyboards and other equipment in the home or workplace."),l.a.createElement("h3",null,"When to wash your hands"),l.a.createElement("ul",null,l.a.createElement("li",null,"Before and after eating or feeding someone else"),l.a.createElement("li",null,"Before preparing food"),l.a.createElement("li",null,"After handling raw meat"),l.a.createElement("li",null,"After using the washroom or helping someone use the washroom"),l.a.createElement("li",null,"Before and after changing diapers"),l.a.createElement("li",null,"After sneezing, coughing or using a tissue"),l.a.createElement("li",null,"After helping someone with a runny nose"),l.a.createElement("li",null,"Before and after caring for someone who is sick"),l.a.createElement("li",null,"Before performing first aid or applying a bandaid"),l.a.createElement("li",null,"After handling pets or other animals"),l.a.createElement("li",null,"After handling animal waste"),l.a.createElement("li",null,"After handling shared objects"),l.a.createElement("li",null,"After playing with toys shared with other children"),l.a.createElement("li",null,"After playing outside or in the sandbox"),l.a.createElement("li",null,"After cleaning or handling garbage"),l.a.createElement("li",null,"Before inserting and removing contact lenses"),l.a.createElement("li",null,"Before flossing your teeth"),l.a.createElement("li",null,"Before breastfeeding")),l.a.createElement("h3",null,"Proper methods of handwashing"),l.a.createElement("p",null,"Although hand washing might seem like a simple task, you should follow these steps to thoroughly rid your hands of germs."),l.a.createElement("h4",null,"What kind of soap to use"),l.a.createElement("ul",null,l.a.createElement("li",null,"Use plain soap that does not contain antibacterial agents"),l.a.createElement("li",null,"Plain soap will remove the dirt and grease that attract bad bacteria. Plain soap will not kill the good bacteria that live on the gands"),l.a.createElement("li",null,"Using antibacterial products unnecessarily increases the concentration of antibiotics in the water supply and in the environment and may contribute to antibiotic resistance.")),l.a.createElement("h4",null,"Steps when using soap"),l.a.createElement("ul",null,l.a.createElement("li",null,"Remove any hand or arm jewellery you may be wearing"),l.a.createElement("li",null,"Wet your hands with warm water"),l.a.createElement("li",null,"Apply plain soap to your hands and rub together for 20 seconds (the length of time it takes to sing Twinkle Twinkle Little Star or Happy Birthday)"),l.a.createElement("li",null,"Wash the front and back of your hands, as well as between your fingers and under your nails"),l.a.createElement("li",null,"Rinse your hands well for 10 seconds under warm running water, using a rubbing motion"),l.a.createElement("li",null,"Wipe and dry your hands gently with a paper towel or a clean towel. Drying them vigorously can damage the skin"),l.a.createElement("li",null,"Turn off the tap using the paper towel so that you do not re-contaminate your hands. When using a public bathroom, use the same paper towel to open the door when you leave"),l.a.createElement("li",null,"If skin dryness is a problem, use a moisturizing lotion")),l.a.createElement("h4",null,"Steps when using alcohol-based hand rubs"),l.a.createElement("ul",null,l.a.createElement("li",null,"These products need to be at least 60% alcohol to be effective, so check the label"),l.a.createElement("li",null,"Alcohol-based hand rubs do not cause antibiotic resistance"),l.a.createElement("li",null,"Alcohol-based hand rubs kill many bacteria and viruses, but are not effective against some of the germs that cause diarrhea"),l.a.createElement("li",null,"Alcohol-based hand rubs don't work if your hands are greasy or visibly dirty. These products don't clean your hands and are not a substitute for handwashing. If your hands are visibly soiled, it is best to use soap and water"),l.a.createElement("li",null,"If it's not possible to wash with soap and water, use towelettes to remove the soil, then use an alcohol-based hand rub"),l.a.createElement("li",null,"Make sure your hands are dry, as wet hands will dilute the alcohol-based hand product"),l.a.createElement("li",null,"Use enough of the product to cover all the surfaces of your hands and fingers"),l.a.createElement("li",null,"Rub your hands together until the product has evaporated"),l.a.createElement("li",null,"If dry skin is a problem, use a moisturizing lotion"),l.a.createElement("li",null,"Alcohol-based hand rubs are safe for children if used with supervision. Alcohol-based hand rubs are poisonous if ingested. Children should not put their hands in their mouths until the alcohol evaporates (about 15 seconds)"),l.a.createElement("li",null,"Wall dispensers and containers of alcohol-based hand rubs should be placed so they cannot be reached by small children"),l.a.createElement("li",null,"Alcohol-based hand rubs are flammable and should not be stored near a source of heat")),l.a.createElement("h4",null,"Minimizing your risks"),l.a.createElement("p",null,"Here are further steps you can take to protect yourself and your family"),l.a.createElement("ul",null,l.a.createElement("li",null,"When you cough or sneeze, use a tissue or raise your arm up to your face and aim for your sleeve. Do not sneeze into your hand. Throw away tissues as soon as you use them"),l.a.createElement("li",null,"Keep the surface areas in your home and office free of germs by cleaning them. Doorknobs, light switches, telephones, and keyboards are especially important to keep clean"),l.a.createElement("li",null,"If you have children, teach them good hygiene and how to wash their hands properly. Young children should be supervised while washing their hands"),l.a.createElement("li",null,"If you use bar soap, kepp it in a self-draining holder that can be cleaned thoroughly before a new bar is added"),l.a.createElement("li",null,"Use individual damp cloths to wash each child's hands when a sink with warm running water is unavailble"),l.a.createElement("li",null,"Use fresh running water to rinse your hands rather than using a standing basin of water"),l.a.createElement("li",null,"Use individual hand towels and avoid sharing towels"),l.a.createElement("li",null,"Change cleaning cloths daily and launder them using detergent. Germs thrive on moist surfaces")),l.a.createElement(h.b,{to:"/changmoSungCovid19/info/aboutCovid19",className:"routerLink"},"go back"))},k=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={currentDate:"",currentStatus:{}},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=new Date,a=t.getFullYear(),n=t.getMonth(),l=t.getDate(),o="".concat(a,"-").concat(n>9?"".concat(n+1):"0".concat(n+1),"-").concat(l>9?"".concat(l):"0".concat(l));p()({url:"https://corona.lmao.ninja/all",method:"GET"}).then((function(t){e.setState({currentDate:o,currentStatus:t.data})}))}},{key:"render",value:function(){return l.a.createElement(h.a,null,l.a.createElement(f,null),l.a.createElement(m.a,{path:"/changmoSungCovid19/",exact:!0},l.a.createElement(g,{currentDate:this.state.currentDate,currentStatus:this.state.currentStatus})),l.a.createElement(m.a,{path:"/changmoSungCovid19/info/"},l.a.createElement("main",null,l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/changmoSungCovid19/info/aboutCovid19/selfCare"},l.a.createElement(w,null)),l.a.createElement(m.a,{path:"/changmoSungCovid19/info/aboutCovid19/handHygiene"},l.a.createElement(C,null)),l.a.createElement(m.a,{path:"/changmoSungCovid19/info/aboutCovid19"},l.a.createElement(y,null))),l.a.createElement(m.a,{path:"/changmoSungCovid19/info/statistic"},l.a.createElement(E,{currentDate:this.state.currentDate,currentStatus:this.state.currentStatus})),l.a.createElement(m.a,{path:"/changmoSungCovid19/info/news"},l.a.createElement(b,null)),l.a.createElement(m.a,{path:"/changmoSungCovid19/info/selfcheck"},l.a.createElement(v,null)))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.8aafd28e.chunk.js.map