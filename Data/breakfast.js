let breakfast = [
  {
    image: "cinnabon-cr-image",
    published: "20 October 2024",
    name: "Cinnabon Cinnamon Rolls",
    description: "This recipe recreates the iconic, gooey, and delicious sweet rolls, topped with rich creamy frosting and bursting with cinnamon-spiced delight.",
    author: "Marsha Fernandez",
    keywords: [
      "cinnamon rolls",
      "cinnabon",
      "sweet rolls",
      "cinnamon"
    ]
  },
  {
    image: "ihop-pc-image",
    published: "20 October 2024",
    name: "IHOP Buttermilk Pancakes",
    description: "This recipe captures the essence of fluffy, golden-brown pancakes with a touch of sweetness and a perfect buttermilk tang.",
    author: "Holly",
    keywords: [
      "ihop",
      "IHOP",
      "pancakes",
      "pancake",
      "buttermilk",
      "buttermilk pancakes",
    ]
  },
  {
    image: "cb-pancakes-image",
    published: "20 October 2024",
    name: "Sweet Potato Banana Pancakes",
    description: "This recipe blends the natural sweetness of bananas with the hearty goodness of sweet potatoes, creating fluffy, nutrient-packed pancakes.",
    author: "The Healthy Hulk",
    keywords: [
      "sweet potato",
      "pancakes",
      "cracker barrel",
      "cracker barrel pancakes",
      "banana",
    ]
  },
  {
    image: "sb-lemon-loaf-image",
    published: "20 October 2024",
    name: "Starbucks Lemon Loaf",
    description: "This recipe delivers a moist, zesty cake bursting with lemon flavor and topped with a tangy glaze, recreating the beloved café treat.",
    author: "SB",
    keywords: [
      "Starbucks",
      "starbucks",
      "lemon loaf",
      "lemon",
      "cake",
      "lemon cake",
      "loaf"
    ]
  },
  {
    image: "sb-pumpkin-bread-image",
    published: "20 October 2024",
    name: "Starbucks Pumpkin Bread",
    description: "This recipe serves up a moist, warmly spiced loaf with the perfect balance of pumpkin flavor and sweetness, just like the seasonal favorite.",
    author: "stephanie Manley",
    keywords: [
      "Starbucks",
      "starbucks",
      "pumpkin bread",
      "pumpkin loaf",
      "pumpkin",
      "bread",
      "loaf"
    ]
  },
  {
    image: "cb-hashbrown-casserole-image",
    published: "20 October 2024",
    name: "Cracker Barrel Hashbrown Casserole",
    description: "This recipe recreates the comforting, cheesy, and creamy dish with tender shredded potatoes, making it the ultimate indulgent side.",
    author: "Marbalet",
    keywords: [
      "Cracker Barrel",
      "cracker barrel",
      "hashbrown casserole",
      "hashbrown",
      "casserole"
    ]
  },
  {
    image: "be-biscuits-gravy-image",
    published: "20 October 2024",
    name: "Bob Evans Biscuits and Gravy",
    description: "This recipe delivers fluffy, buttery biscuits smothered in rich, creamy sausage gravy, capturing the hearty comfort of the breakfast classic.",
    author: "Arielle Lambert",
    keywords: [
      "Bob Evans",
      "bob evans",
      "bob",
      "evans",
      "biscuits and gravy",
      "biscuits",
      "gravy"
    ]
  },
  {
    image: "fw-bacon-image",
    published: "20 October 2024",
    name: "First Watch Million Dollar Bacon",
    description: "This recipe offers sweet, spicy, and caramelized thick cut bacon that;s baked to crispy perfection, making it a truly indulgent treat.",
    author: "Arielle Lambert",
    keywords: [
      "First Watch",
      "first watch",
      "million dollar bacon",
      "bacon",
      "million dollar",
      "million",
      "dollar"
    ]
  }
]

let breakfastHTML = '';

function renderBreakfast(filteredBreakfast){
  breakfastHTML = '';
  filteredBreakfast.forEach((item) => {
    breakfastHTML += `
      <div class="content-container " onclick="window.location='./cinnabon.html'">
        <div class="card card-hover">
          <div class="${item.image}"></div>
          <div class="text-container">
            <p class="publish-text-preset">${item.published}</p>
            <p class="preview-title-text-preset title card-hover">${item.name}</p>
            <p class="text-preset-4">${item.description}</p>
          </div>
          <div class="author-container">
            <p class="publish-text-preset">Recipe by:</p>
            <p class="author-text-preset">${item.author}</p>
          </div>  
        </div>
      </div>
    `;
  });
  document.querySelector('.js-preview-container').innerHTML = breakfastHTML;
}


/* Filter Breakfast based on search input */
document.addEventListener('DOMContentLoaded', () => {
  renderBreakfast(breakfast);

  const searchBar = document.querySelector('.js-search-bar');
  const searchButton = document.querySelector('.js-search-button');
  const resetButton = document.querySelector('.js-reset-search');

  const performSearch = () => {
    const query = searchBar.value.toLowerCase();
    const filteredBreakfast = breakfast.filter(item =>
      item.keywords.some(keyword => keyword.toLowerCase().includes(query))
    );
    renderBreakfast(filteredBreakfast);
  };

  searchButton.addEventListener('click', performSearch);
  searchBar.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      performSearch();
    }
  });

  resetButton.addEventListener('click', () => {
    searchBar.value = '';
    renderBreakfast(breakfast);
  });
});