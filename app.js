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
    btn: 'Advise About domestice Abuse',
    arrow: './pictures/arrow.png',
    link: 'https://www.birminghamsolihull.icb.nhs.uk/health-information/safeguarding#domesticabuse',
  },
  {
    id: 3,
    image: './pictures/image-1.png',
    title: 'Drugs and Alcohol',
    description: 'If you are worried about your drug and alcohol use, or someone else’s, visit Change Grow Live. Change Grow Live also has a Prevent app.',
    btn: 'Change Grow Live',
    arrow: './pictures/arrow.png',
    link: 'https://www.changegrowlive.org/drug-and-alcohol-service-birmingham',
  },
  {
    id: 4,
    image: './pictures/image-3.png',
    title: 'Local Pharmacy',
    description: 'Your local pharmacist is an expert in medicine. They can offer clinical advice and help you with a range of minor health concerns, including sore throats, tummy trouble, and aches and pains.',
    btn: 'Find out more here',
    arrow: './pictures/arrow.png',
    link: 'https://www.changegrowlive.org/drug-and-alcohol-service-birmingham',
  },
  {
    id: 5,
    image: './pictures/image-1.png',
    title: 'Mental Health',
    description: 'A range of new, easily accessible mental health support is now available for patients in Birmingham and Solihull. This support is available to local people of all ages as well as keyworkers. Mental health support is available 24/7 via our helpline. Call 0121 262 3555 or 0800 915 9292 and you can speak to someone any time of day or night. If you’re reluctant to speak on the phone, we also offer a live chat option, which is available at Birmingham Mind between 10am to 9pm every day.',
    btn: 'Birmingham Mind',
    arrow: './pictures/arrow.png',
    link: 'https://birminghammind.org/',
  },
  {
    id: 6,
    image: './pictures/image-3.png',
    title: 'Self-Care',
    description: 'You can look after many minor illnesses and injuries with over-the-counter medicines and supplies from your pharmacist or supermarket. Check that you have basics at home, such as paracetamol and antihistamine, plus a first-aid kit.',
    btn: 'Learn More Here',
    arrow: './pictures/arrow.png',
    link: 'https://www.nhs.uk/nhs-services/prescriptions-and-pharmacies/pharmacies/how-your-pharmacy-can-help/',
  },
  {
    id: 7,
    image: './pictures/image-1.png',
    title: 'Sexual Health',
    description: 'Some of umbrella clinics, including Whittall Street, are open for pre-booked telephone appointments only. They are not seeing walk-in patients at this time so do not turn up in-person without an appointment. If you have symptoms of an STI, need emergency or routine contraception, or have any sexual health concerns and need to speak to somebody, please call 0121 237 5700 (Monday to Thursday: 9am–6:30pm / Friday: 9am–4:30pm / Saturday: 10am–4pm).',
    btn: 'More info on Umbrella website',
    arrow: './pictures/arrow.png',
    link: 'https://umbrellahealth.co.uk/',
  },
];

const allSixCards = document.getElementById('all-cards');

function display() {
  let displayCard = '';
  for (let i = 0; i < cardData.length; i += 1) {
    displayCard += `<div class="card my-3" id="content-cards">
                        <img src=${cardData[i].image} class="card-img-top mt-3" alt="...">
                        <h2 class="card-title h1">${cardData[i].title}</h2>
                        <div class="card-body">
                        <p id="card-text">${cardData[i].description}</p>
                        <a href="${cardData[i].link}" class="btn" id="card-button">
                            ${cardData[i].btn}
                            <img src=${cardData[i].arrow} class="card-img-top" alt="arrow" id="arrow-icon">
                            </a>                
                        </div>
                    </div>
    `;
  }
  allSixCards.innerHTML = displayCard;
}

display();
