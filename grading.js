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



