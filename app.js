const cardData = [
  {
    id: 1,
    image: './pictures/card-pic-1.png',
    title: 'Mental health support',
    description: 'A collaboration of nine GP practices serving approximately 55000 patients in Washwood Heath area of Birmingham.',
    btn: 'Mental Health support',
    arrow: './pictures/arrow.png',
  },
  {
    id: 2,
    image: './pictures/card-pic-1.png',
    title: 'Childrens Health Matters',
    description: 'A collaboration of two GP practices serving approximately 20,600 patients, from the Maldon area.',
    btn: 'Advise about children health',
    arrow: './pictures/arrow.png',
  },
  {
    id: 3,
    image: './pictures/card-pic-1.png',
    title: 'Know your numbers',
    description: 'A collaboration of two GP practices serving approximately 20,600 patients, from the Maldon area.',
    btn: 'High blood pressure (hypertension)',
    arrow: './pictures/arrow.png',
  },
  {
    id: 4,
    image: './pictures/card-pic-1.png',
    title: 'Sample card',
    description: 'A collaboration of two GP practices serving approximately 20,600 patients, from the Maldon area.',
    btn: 'Access the guide',
    arrow: './pictures/arrow.png',
  },
  {
    id: 5,
    image: './pictures/card-pic-1.png',
    title: 'Mental health support',
    description: 'A collaboration of two GP practices serving approximately 20,600 patients, from the Maldon area.',
    btn: 'Access the guide',
    arrow: './pictures/arrow.png',
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
                        <a href="#" class="btn" id="card-button">
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
