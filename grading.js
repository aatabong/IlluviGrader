
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

// Select the filter-bar div and all the filter buttons
const filterBar = document.querySelector('.filter-bar');
const filterButtons = filterBar.querySelectorAll('.filter-button');

// Select the filter-image div
const filterImage = document.querySelector('.filter-image');

// Set up variables to keep track of the number of images from each filter section
let affinityCount = 0;
let classCount = 0;
let tierCount = 0;

// Set up event listeners for each filter button
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Check the ID of the button to determine which filter section it belongs to
    if (button.parentNode.classList.contains('filter-section-affinity')) {
      // Check if the maximum number of images from the affinity filter section has been reached
      if (affinityCount >= 2) {
        return;
      }
      affinityCount++;
      // Add a class to the new image element to indicate it came from the affinity filter section
      const newImage = document.createElement('img');
      newImage.src = button.querySelector('img').src;
      newImage.classList.add('affinity');
      filterImage.appendChild(newImage).setAttribute('id', button.id);
    } else if (button.parentNode.classList.contains('filter-section-class')) {
      // Check if the maximum number of images from the class filter section has been reached
      if (classCount >= 2) {
        return;
      }
      classCount++;
      // Add a class to the new image element to indicate it came from the class filter section
      const newImage = document.createElement('img');
      newImage.src = button.querySelector('img').src;
      newImage.classList.add('class');
      filterImage.appendChild(newImage).setAttribute('id', button.id);
    } else if (button.parentNode.classList.contains('filter-section-tier')) {
      // Check if the maximum number of images from the tier filter section has been reached
      if (tierCount >= 1) {
        return;
      }
      tierCount++;
      // Add a class to the new image element to indicate it came from the tier filter section
      const newImage = document.createElement('img');
      newImage.src = button.querySelector('img').src;
      newImage.classList.add('tier');
      filterImage.appendChild(newImage).setAttribute('id', button.id);
    }
  });
});
