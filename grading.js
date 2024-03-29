function addCardToDeckPreview() {
  const selectedCardsDiv = document.querySelector('.selected-cards');
  const card = event.target.closest('.card');
  cardCount = selectedCardsDiv.childElementCount;
    // check if there are already 30 cards selected
    if (cardCount >= 30) {
      alert('30 cards is the maximum amount per deck ');
      return;
    }
  // Create a new card div to add to the selected cards div
  const selectedCardDiv = document.createElement('div');
  selectedCardDiv.classList.add('selected-card');
  selectedCardDiv.dataset.src = card.dataset.src;
  selectedCardDiv.dataset.illuvial = card.dataset.illuvial;
  selectedCardDiv.dataset.affinity = card.dataset.affinity;
  selectedCardDiv.dataset.tier = card.dataset.tier;
  selectedCardDiv.dataset.class = card.dataset.class;
  // Add the card image to the selected card div
  const selectedCardImage = document.createElement('img');
  selectedCardImage.src = card.dataset.src;
  selectedCardDiv.appendChild(selectedCardImage);
  
  // Add the selected card div to the selected cards div
  selectedCardsDiv.appendChild(selectedCardDiv);
  // Remove the card from the selected cards div when clicked on
  selectedCardDiv.addEventListener('click', () => {
    selectedCardDiv.remove();
  });
}



const affinityChart = {
  Fire: {
    strong: { Verdant: 4, Spore: 3, Wildfire: 2, Nature: 2, Tempest: 2, Air: 1, Shock: 1, Toxic: 1 },
    weak: { Granite: -4, Mud: -3, Earth: -2, Magma: -2, Tsunami: -2, Dust: -1, Water: -1, Steam: -1 },
  },
  Nature: {
    strong: { Tempest: 4, Frost: 3, Spore: 2, Air: 2, Tsunami: 2, Dust: 1, Water: 1, Toxic: 1 },
    weak: { Inferno: -4, Magma: -3, Wildfire: -2, Fire: -2, Granite: -2, Bloom: -1, Earth: -1, Steam: -1 },
  },
  Air: {
    strong: { Tsunami: 4, Mud: 3, Frost: 2, Water: 2, Granite: 2, Steam: 1, Earth: 1, Dust: 1 },
    weak: { Verdant: -4, Wildfire: -3, Inferno: -2, Nature: -2, Spore: -2, Shock: -1, Fire: -1, Bloom: -1 },
  },
  Water: {
    strong: { Granite: 4, Magma: 3, Inferno: 2, Earth: 2, Mud: 2, Bloom: 1, Fire: 1, Steam: 1 },
    weak: { Tempest: -4, Spore: -3, Verdant: -2, Air: -2, Frost: -2, Toxic: -1, Nature: -1, Shock: -1 },
  },
  Earth: {
    strong: { Inferno: 4, Wildfire: 3, Verdant: 2, Fire: 2, Magma: 2, Shock: 1, Nature: 1, Bloom: 1 },
    weak: { Tsunami: -4, Frost: -3, Water: -2, Mud: -2, Tempest: -2, Dust: -1, Air: -1, Toxic: -1 },
  },
  Verdant: {
    strong: { Tempest: 8, Frost: 6, Spore: 4, Tsunami: 4, Air: 4, Toxic: 2, Dust: 2, Water: 2},
    weak: { Inferno: -8, Magma: -6, Granite: -4, Wildfire: -4, Fire: -4, Steam: -2, Bloom: -2, Earth: -2 },
  },
  Spore: {
    strong: { Tsunami: 6, Frost: 5, Tempest: 4, Mud: 3, Water: 3, Dust: 2, Air: 2, Toxic: 1},
    weak: { Inferno: -6, Wildfire: -5, Verdant: -4, Magma: -3, Fire: -3, Nature: -2, Bloom: -2, Shock: -1},
  },
  Wildfire: {
    strong: { Tempest: 6, Spore: 5, Verdant: 4, Frost: 3, Air: 3, Toxic: 2, Nature: 2, Shock: 1},
    weak: { Granite: -6, Magma: -5, Inferno: -4, Earth: -3, Mud: -3, Steam: -2, Fire: -2, Bloom: -1},
  },
  Tempest: {
    strong: { Tsunami: 8, Mud: 6, Frost: 4, Granite: 4, Water: 4, Steam: 2, Dust: 2, Earth: 2},
    weak: { Verdant: -8, Wildfire: -6, Spore: -4, Inferno: -4, Nature: -4, Fire: -2, Bloom: -2, Shock: -2 },
  },
  Shock: {
    strong: { Frost: 2, Tempest: 2, Tsunami: 2, Spore: 1, Toxic: 1, Air: 1, Water: 1,},
    weak: { Magma: -2, Granite: -2, Inferno: -2, Wildfire: -1, Bloom: -1, Fire: -1, Earth: -1,},
  },
  Toxic: {
    strong: { Mud: 2, Granite: 2, Tsunami: 2, Frost: 1, Dust: 1, Earth: 1, Water: 1,},
    weak: { Wildfire: -2, Verdant: -2, Inferno: -2, Spore: -1, Shock: -1, Fire: -1, Nature: -1,},
  },
  Mud: {
    strong: { Inferno: 6, Magma: 5, Granite: 4, Wildfire: 3, Fire: 3, Bloom: 2, Earth: 2, Steam: 1},
    weak: { Tempest: -6, Frost: -5, Tsunami: -4, Spore: -3, Air: -3, Toxic: -2, Water: -2, Dust: -1},
  },
  Magma: {
    strong: { Verdant: 6, Wildfire: 5, Inferno: 4, Nature: 3, Spore: 3, Shock: 2, Fire: 2, Bloom: 1},
    weak: { Tsunami: -6, Mud: -5, Granite: -4, Frost: -3, Water: -3, Dust: -2, Earth: -2, Steam: -1},
  },
  Tsunami: {
    strong: { Granite: 8, Magma: 6, Earth: 4, Mud: 4, Inferno: 4, Steam: 2, Bloom: 2, Fire: 2},
    weak: { Tempest: -8, Spore: -6, Frost: -4, Verdant: -4, Air: -4, Toxic: -2, Shock: -2, Nature: -2 },
  },
  Dust: {
    strong: { Magma: 2, Granite: 2, Inferno: 2, Mud: 1, Steam: 1, Earth: 1, Fire: 1,},
    weak: { Spore: -2, Tempest: -2, Verdant: -2, Frost: -1, Toxic: -1, Air: -1, Nature: -1,},
  },
  Steam: {
    strong: { Wildfire: 2, Inferno: 2, Verdant: 2, Magma: 1, Bloom: 1, Fire: 1, Nature: 1,},
    weak: { Frost: -2, Tempest: -2, Tsunami: -2, Mud: -1, Dust: -1, Air: -1, Water: -1,},
  },
  Frost: {
    strong: { Granite: 6, Mud: 5, Tsunami: 4, Earth: 3, Magma: 3, Steam: 2, Water: 2, Dust: 1},
    weak: { Verdant: -6, Spore: -5, Tempest: -4, Wildfire: -3, Nature: -3, Shock: -2, Air: -2, Toxic: -1},
  },
  Inferno: {
    strong: { Verdant: 8, Spore: 6, Wildfire: 4, Tempest: 4, Nature: 4, Air: 2, Shock: 2, Toxic: 2},
    weak: { Granite: -8, Mud: -6, Magma: -4, Tsunami: -4, Earth: -4, Steam: -2, Dust: -2, Water: -2 },
  },
  Bloom: {
    strong: { Verdant: 2, Tempest: 2, Spore: 2, Nature: 1, Air: 1, Shock: 1, Wildfire: 1,},
    weak: { Mud: -2, Granite: -2, Tsunami: -2, Magma: -1, Steam: -1, Earth: -1, Water: -1,},
  },
  Granite: {
    strong: { Inferno: 8, Wildfire: 6, Fire: 4, Verdant: 4, Magma: 4, Bloom: 2, Shock: 2, Nature: 2},
    weak: { Tsunami: -8, Frost: -6, Mud: -4, Tempest: -4, Water: -4, Toxic: -2, Dust: -2, Air: -2 },
  },
};




function gradeDeck() {
  const selectedCards = document.querySelector('.selected-cards');
  const cards = selectedCards.querySelectorAll('.selected-card');
  const deckStrengths = document.querySelector('#deck-strengths');
  const deckWeaknesses = document.querySelector('#deck-weaknesses');
  const deckSuggestions = document.querySelector('#deck-suggestions');
  


  let deckScores = {};

  cards.forEach((card) => {
    const affinity = card.getAttribute('data-affinity').charAt(0).toUpperCase() + card.getAttribute('data-affinity').slice(1);
    console.log('Affinity:', affinity);
    
    for (const [target, score] of Object.entries(affinityChart[affinity].strong)) {
      if (!deckScores[target]) deckScores[target] = 0;
      deckScores[target] += score;
    }

    for (const [target, score] of Object.entries(affinityChart[affinity].weak)) {
      if (!deckScores[target]) deckScores[target] = 0;
      deckScores[target] += score;
    }
  });

  deckStrengths.innerHTML = '';
  deckWeaknesses.innerHTML = '';

  const strengthList = [];
  const weaknessList = [];

  for (const [affinity, score] of Object.entries(deckScores)) {
    if (score > 0) {
      strengthList.push({ affinity, score });
    } else if (score < 0) {
      weaknessList.push({ affinity, score });
    }
  }

  strengthList.sort((a, b) => b.score - a.score);
  weaknessList.sort((a, b) => a.score - b.score);

  strengthList.forEach(({ affinity, score }) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${affinity} Illuvials: ${score}`;
    deckStrengths.appendChild(listItem);
  });

  weaknessList.forEach(({ affinity, score }) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${affinity} Illuvials: ${score}`;
    deckWeaknesses.appendChild(listItem);
  });
  
  deckSuggestions.innerHTML = '';

  const suggestions = {};

  // Find the strongest counter affinities for each weakness
  for (const [weakAffinity, weakScore] of Object.entries(deckScores)) {
    if (weakScore >= 0) continue;

    for (const [affinity, chart] of Object.entries(affinityChart)) {
      for (const [strongAffinity, strongScore] of Object.entries(chart.strong)) {
        if (strongAffinity === weakAffinity) {
          if (!suggestions[affinity]) suggestions[affinity] = 0;
          suggestions[affinity] += Math.abs(weakScore) * strongScore;
        }
      }
    }
  }

  // Display suggested affinities to counter the deck's weaknesses
  const suggestionList = [];

  for (const [suggestedAffinity, suggestionScore] of Object.entries(suggestions)) {
    suggestionList.push({ suggestedAffinity, suggestionScore });
  }

  suggestionList.sort((a, b) => b.suggestionScore - a.suggestionScore);

  suggestionList.forEach(({ suggestedAffinity, suggestionScore }) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${suggestedAffinity} Illuvials: ${suggestionScore}`;
    deckSuggestions.appendChild(listItem);
  });


}


document.querySelector('#submit-deck').addEventListener('click', gradeDeck, );
