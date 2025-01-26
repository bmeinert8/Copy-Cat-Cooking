let appetizers = [
  {
    image: "rr-pickles-image",
    published: "20 October 2024",
    name: "Red Robin Fried Pickles",
    description: "Picture this: crunchy pickle slices, battered in seasoned breading and deep-fried to golden perfection, served with a zesty dipping sauce.",
    author: "Nick Iverson",
    keywords: [
      "red robin",
      "fried pickles",
      "pickles",
      "fried",
      "appetizers",
      "fried appetizers"
    ]
  },
  {
    image: "tr-rolls-image",
    published: "20 October 2024",
    name: "Texas RoadHouse Rolls",
    description: "This recipe delivers soft, fluffy, and golden yeast rolls with a hint of sweetness, paired perfectly with a rich cinnamon honey butter.",
    author: "Taste of Home Test Kitchen",
    keywords: [
      "texas roadhouse",
      "rolls",
      "texas",
      "roadhouse",
      "bread"
    ]
  },
  {
    image: "potato-skins-image",
    published: "20 October 2024",
    name: "TGI Friday's Loaded Potato Skins",
    description: "Golden, crispy potoato skins loaded with melted cheese, bacon, and green onions, served with a side of cool sour cream for the ultimate indulgent bite.",
    author: "Mitzi Sentiff",
    keywords: [
      "tgi friday's",
      "firdays",
      "potato skins",
      "loaded potato skins",
      "appetizers",
      "potatoes",
      "bacon",
      "cheese"
    ]
  },
  {
    image: "zucchini-fritte-image",
    published: "20 October 2024",
    name: "Carabba's Zucchini Fritte",
    description: "Crispy, tender zucchini strips coated in a seasoned batter abd fried to perfection, served with a tangy dipping sauce for a perfect Italian-inspired snack.",
    author: "Jen Pahl",
    keywords: [
      "carabba's",
      "carabbas",
      "zucchini",
      "fritte",
      "zucchini fritte",
      "appetizers",
      "fried",
      "italian"
    ]
  },
  {
    image: "ab-wonton-tacos-image",
    published: "20 October 2024",
    name: "Applebee's Chicken Wonton Taco",
    description: "This recipe brings the zesty flavors of tender chicken, crunchy slaw, and a sweet-spicy sauce wrapped in a crispy wonton shell.",
    author: "Kimberly Wallace",
    keywords: [
      "applebee's",
      "wonton taco",
      "chicken",
      "taco",
      "appetizers",
      "Asian",
      "slaw"
    ]
  },
  {
    image: "crispy-bites-image",
    published: "20 October 2024",
    name: "Chili's Crispy Cheddar Bites",
    description: "This copycat recipe recreates the crunchy, golden cheese bites, perfectly seasoned and fried to a crispy perfection.",
    author: "Katie Rose",
    keywords: [
      "chili's",
      "chilis",
      "cheddar bites",
      "crispy",
      "appetizers",
      "cheese",
      "fried"
    ]
  },
  {
    image: "bw-nachos-image",
    published: "20 October 2024",
    name: "Buffalo Wild Wings Ultimate Nachos",
    description: "This recipe stacks layers of crispy tortilla chips with melty cheese, spicy jalapenos, and savory toppings, creating the ultimate game-day snack experience.",
    author: "Denise Wheeler",
    keywords: [
      "buffalo wild wings",
      "nachos",
      "buffalo",
      "wild wings",
      "appetizers",
      "cheese",
      "jalapenos"
    ]
  },
  {
    image: "ab-dip-image",
    published: "20 October 2024",
    name: "Applebee's Spinach and Artichoke Dip",
    description: "This recipe delivers a creamy, cheesy blend of spinach and artichokes, perfectly seasoned for a deliciously warm, shareable appetizer.",
    author: "Hollie Gabriel",
    keywords: [
      "applebee's",
      "spinach",
      "artichoke",
      "dip",
      "appetizers",
      "cheese",
      "creamy"
    ]
  },
]

let appetizerHTML = "";

function renderAppetizers(filteredAppetizers){
  let appetizerHTML = '';
  filteredAppetizers.forEach((appetizer) => {
    appetizerHTML += `
      <div class="content-container " onclick="window.location='#'">
      <div class="card card-hover">
        <div class="${appetizer.image}"></div>
        <div class="text-container">
          <p class="publish-text-preset">${appetizer.published}</p>
          <p class="preview-title-text-preset title card-hover">${appetizer.name}</p>
          <p class="text-preset-4">${appetizer.description}</p>
        </div>
        <div class="author-container">
          <p class="publish-text-preset">Recipe by:</p>
          <p class="author-text-preset">${appetizer.author}</p>
        </div>  
      </div>
    </div>
    `;
  });
  document.querySelector('.js-preview-container').innerHTML = appetizerHTML;
};

/* Search Functionality */
document.addEventListener('DOMContentLoaded', () => {
  renderAppetizers(appetizers);

  const searchBar = document.querySelector('.js-search-bar');
  const searchButton = document.querySelector('.js-search-button');

  const performSearch = () => {
    const query = searchBar.value.toLowerCase();
    const filteredAppetizers = appetizers.filter(appetizer =>
      appetizer.keywords.some(keyword => keyword.toLowerCase().includes(query))
    );
    renderAppetizers(filteredAppetizers);
  };

  searchButton.addEventListener('click', performSearch);
  searchBar.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      performSearch();
    }
  });
});