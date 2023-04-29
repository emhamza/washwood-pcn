const helpCardData = [
  {
    id: 1,
    title: 'Coronavirus',
    arrow2: './pictures/arrow-2-png',
  },
];

const allHelpCard = document.getElementById('help-section');

export default function displayHelpSection() {
  let displayHelpCard = '';
  for (let i = 0; i < helpCardData.length; i += 1) {
    displayHelpCard += ` <div class="d-grid gap-2">
                            <button id="help-button" class="btn" type="button">${helpCardData[i].title}
                                <img src=${allHelpCard[i].arrow2} class="card-img-top" alt="arrow" id="arrow-2-icon">
                            </button>
                        </div>
    `;
  }
  allHelpCard.innerHTML = displayHelpCard;
}

displayHelpSection();