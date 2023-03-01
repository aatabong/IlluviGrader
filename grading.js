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

// Get all filter buttons
const filterButtons = document.querySelectorAll('.filter-button');

// Get the selected filters div
const selectedFilters = document.querySelector('.selected-filters');

// Get the card grid section
const cardGrid = document.querySelector('.card-grid');

// Get the search input
const searchInput = document.querySelector('.filter-section-search input');

// Initialize filter variables
let affinityFilters = [];
let classFilters = [];
let tierFilter = null;
let searchFilter = '';

// Function to handle filter button click
function handleFilterButtonClick(event) {
  const button = event.target;
  const buttonImage = button.querySelector('img');

  // Determine which filter section the button belongs to
  if (button.parentElement.classList.contains('filter-section-affinity')) {
    // Affinity filter button clicked
    if (affinityFilters.length < 2) {
      // Add button image to selected filters
      selectedFilters.appendChild(buttonImage.cloneNode());

      // Add affinity filter
      affinityFilters.push(button.dataset.filter);

      // Filter cards
      filterCards();
    }
  } else if (button.parentElement.classList.contains('filter-section-class')) {
    // Class filter button clicked
    if (classFilters.length < 2) {
      // Add button image to selected filters
      selectedFilters.appendChild(buttonImage.cloneNode());

      // Add class filter
      classFilters.push(button.dataset.filter);

      // Filter cards
      filterCards();
    }
  } else if (button.parentElement.classList.contains('filter-section-tier')) {
    // Tier filter button clicked
    if (tierFilter !== button.dataset.filter) {
      // Add button image to selected filters
      selectedFilters.appendChild(buttonImage.cloneNode());

      // Set tier filter
      tierFilter = button.dataset.filter;

      // Filter cards
      filterCards();
    }
  }
}

// Function to handle search input change
function handleSearchInputChange() {
  searchFilter = searchInput.value.trim().toLowerCase();

  // Filter cards
  filterCards();
}

// Function to filter cards based on current filters
function filterCards() {
  const cards = cardGrid.querySelectorAll('.card');
  cards.forEach(card => {
    // Check if card matches all active filters
    const affinityMatches = !affinityFilters.length || affinityFilters.includes(card.dataset.affinity);
    const classMatches = !classFilters.length || classFilters.includes(card.dataset.class);
    const tierMatches = !tierFilter || card.dataset.tier === tierFilter;
    const searchMatches = !searchFilter || card.dataset.illuvial.toLowerCase().includes(searchFilter);

    if (affinityMatches && classMatches && tierMatches && searchMatches) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Add click event listener to filter buttons
filterButtons.forEach(button => {
  button.addEventListener('click', handleFilterButtonClick);
});

// Add input event listener to search input
searchInput.addEventListener('input', handleSearchInputChange);
