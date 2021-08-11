let projects = [
  {
    class: "motor",
    imgALT: "2JZ-GTE Motor",
    title: "2JZ-GTE Motor",
    techStack: "AutoParts",
    description: "Full Rebuilt motor",
  },
  {
    class: "gear",
    imgALT: "2JZ-GTE Manual Gearbox",
    title: "2JZ-GTE Manual Gearbox",
    techStack: "AutoParts",
    description: "Full Rebuilt Gearbox",
  },
  {
    class: "san",
    imgALT: "Hand Sanitizer",
    title: "Hand Sanitizer",
    techStack: "Hygiene",
    description: "Kills 99.9% Of Germs",
  },
  {
    class: "mask",
    imgALT: "Face Mask",
    title: "Face Masks",
    techStack: "Hygiene",
    description: "Triple Filtered Masks",
  },
];

function createCard(card) {
  let createdCard = `<div class="project-card ${card.class}" techStack=${card.techStack} >
    <div class="card-content">
    <h2>${card.title}<h2>
    </div>
  </div>
`;
  return createdCard;
}

function renderCards() {
  let projectContainer = document.querySelector(".project-container");
  for (project of projects) {
    let card = createCard(project);
    projectContainer.innerHTML += card;
  }
}

renderCards();

function filterCards(category) {
  let cards = document.getElementsByClassName("project-card");

  if (category === "All") {
    for (card of cards) {
      card.style.display = "block";
    }
    return;
  }

  for (card of cards) {
    console.log(card);
    card.style.display = "none";
  }

  let selectedCards = document.querySelectorAll(`[techStack='${category}']`);

  for (card of selectedCards) {
    card.style.display = "block";
  }
}
