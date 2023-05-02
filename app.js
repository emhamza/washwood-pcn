const cardData = [
  {
    id: 1,
    image: './pictures/image-1.png',
    title: 'Bereavement Support',
    description: 'Throughout the Coronavirus pandemic, we have faced a tragic loss of life, often under very difficult circumstances. Bereaved people may have to deal with increased trauma, and may be cut off from some of their usual support network.<br/>Those who are already struggling with bereavement, or whose relatives or friends die through other causes, will also be affected.',
    btn: 'Bereavement Support',
    arrow: './pictures/arrow.png',
    link: '#',
  },
  {
    id: 2,
    image: './pictures/image-3.png',
    title: 'Domestic Abuse',
    description: 'Domestic abuse is an incident or pattern of incidents of controlling, coercive, threatening, degrading and violent behaviour, including sexual violence. A range of resources and support is available for domestic abuse survivors, which can be found here',
    btn: 'Domestice Abuse',
    link: 'https://www.birminghamsolihull.icb.nhs.uk/health-information/safeguarding#domesticabuse',
  },
  {
    id: 3,
    image: './pictures/image-1.png',
    title: 'Drugs and Alcohol',
    description: 'If you are worried about your drug and alcohol use, or someone else’s, visit Change Grow Live. Change Grow Live also has a Prevent app.',
    btn: 'Change Grow Live',
    link: 'https://www.changegrowlive.org/drug-and-alcohol-service-birmingham',
  },
  {
    id: 4,
    image: './pictures/image-3.png',
    title: 'Local Pharmacy',
    description: 'Your local pharmacist is an expert in medicine. They can offer clinical advice and help you with a range of minor health concerns, including sore throats, tummy trouble, and aches and pains.',
    btn: 'Find out more here',
    link: 'https://www.changegrowlive.org/drug-and-alcohol-service-birmingham',
  },
  {
    id: 5,
    image: './pictures/image-1.png',
    title: 'Mental Health',
    description: 'A range of new, easily accessible mental health support is now available for patients in Birmingham and Solihull. This support is available to local people of all ages as well as keyworkers. Mental health support is available 24/7 via our helpline. Call 0121 262 3555 or 0800 915 9292 and you can speak to someone any time of day or night. If you’re reluctant to speak on the phone, we also offer a live chat option, which is available at Birmingham Mind between 10am to 9pm every day.',
    btn: 'Birmingham Mind',
    link: 'https://birminghammind.org/',
  },
  {
    id: 6,
    image: './pictures/image-3.png',
    title: 'Self-Care',
    description: 'You can look after many minor illnesses and injuries with over-the-counter medicines and supplies from your pharmacist or supermarket. Check that you have basics at home, such as paracetamol and antihistamine, plus a first-aid kit.',
    btn: 'Learn More Here',
    link: 'https://www.nhs.uk/nhs-services/prescriptions-and-pharmacies/pharmacies/how-your-pharmacy-can-help/',
  },
  {
    id: 7,
    image: './pictures/image-1.png',
    title: 'Sexual Health',
    description: 'Some of umbrella clinics, including Whittall Street, are open for pre-booked telephone appointments only. They are not seeing walk-in patients at this time so do not turn up in-person without an appointment. If you have symptoms of an STI, need emergency or routine contraception, or have any sexual health concerns and need to speak to somebody, please call 0121 237 5700 (Monday to Thursday: 9am–6:30pm / Friday: 9am–4:30pm / Saturday: 10am–4pm).',
    btn: 'Umbrella website',
    link: 'https://umbrellahealth.co.uk/',
  },
];

const allSixCards = document.getElementById('all-cards');

function display() {
  let displayCard = '';
  for (let i = 0; i < cardData.length; i += 1) {
    displayCard += `<div class="card my-3" id="content-cards">
                        <img src=${cardData[i].image} class="card-img mt-3" alt="...">
                        <h2 class="card-title h2">${cardData[i].title}</h2>
                        <div class="card-body">
                        <p id="card-text">${cardData[i].description}</p>
                        <a href="${cardData[i].link}" class="btn" id="card-button">
                            ${cardData[i].btn}
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-square mx-2" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                            </svg>
                            </a>                
                        </div>
                    </div>
    `;
  }
  allSixCards.innerHTML = displayCard;
}

display();
