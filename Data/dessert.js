let desserts = [
  { 
    image: "cb-apple-image",
    published: "20 October 2024",
    name: "Cracker Barrel Apple Dumplings",
    description: "This recipe offers tender, cinnamon-spiced apples wrapped in flaky pastry, backed to golden perfection and drizzled with a sweet, buttery sauce.",
    author: "Chris Shields",
    keywords: [
      "cracker barrel",
      "apple dumplings",
      "apple",
      "dumplings"
    ]
  },
  { 
    image: "sb-bars-image",
    published: "20 October 2024",
    name: "Starbucks Cranberry Bliss Bars",
    description: "This recipe combines a moist, buttery blondie with sweet cranberries, a hint of orange zest, and a luscious frosting, mirroring the favorite holiday treat.",
    author: "Erika Busz",
    keywords: [
      "starbucks",
      "starbucks",
      "cranberry bliss bars",
      "cranberry",
      "bliss",
      "bars"
    ]
  },
  { 
    image: "cf-original-image",
    published: "20 October 2024",
    name: "Cheesecake Factory OG Cheesecake",
    description: "This recipe serves up a creamy, velvety cheesecake with a classic graham cracker crust, embodying the rich, indulgent flavor of the famous dessert.",
    author: "Lauren Pahmeier",
    keywords: [
      "cheesecake factory",
      "cheesecake",
      "factory",
      "original",
      "og"
    ]
  },
  { 
    image: "bundt-chocolate-image",
    published: "20 October 2024",
    name: "Nothing Bundt Chocolate Cake",
    description: "This recipe brings the decadence of a rich, moist chocolate cake topped with luscious cream cheese frosting, perfecting the beloved bakery treat.",
    author: "Kelsey Dimberg",
    keywords: [
      "cracker barrel",
      "apple dumplings",
      "apple",
      "dumplings"
    ]
  },
  { 
    image: "og-tiramisu-image",
    published: "20 October 2024",
    name: "Olive Garden Tiramisu",
    description: "This recipe recreates the luscious, coffee-soaked layers of mascarpone and delicate ladyfingers, dusted with cocoa for a taste of Italian indulgence.",
    author: "Linda Finn",
    keywords: [
      "olive garden",
      "tiramisu",
      "coffee",
      "mascarpone",
      "ladyfingers"
    ]
  },
  { 
    image: "cream-pies-image",
    published: "20 October 2024",
    name: "Oatmeal Cream Pies",
    description: "This recipe offers soft, chery oatmeal cookes sandwiched with a rich, creamy filling, capturing the nostalgic delight of the classic treat.",
    author: "Crystal Schlueter",
    keywords: [
      "oatmeal",
      "cream pies",
      "oatmeal cream pies",
      "oatmeal cookies",
      "cream",
      "pies"
    ]
  },
  { 
    image: "maple-blondie-image",
    published: "20 October 2024",
    name: "Applebee's Maple Butter Blondie",
    description: "A warm, buttery blondies infused with rich maple flavor, topped with a scoop of vanilla ice cream and drizzled with warm maple butter sauce.",
    author: "Ollie Parker",
    keywords: [
      "applebee's",
      "applebees",
      "maple butter blondie",
      "maple",
      "butter",
      "blondie"
    ]
  },
  { 
    image: "lemon-pie-image",
    published: "20 October 2024",
    name: "Bakers Square Lemon Supreme Pie",
    description: "This recipe combines a zesty lemon filling with a creamy layer atop a buttery crust, delivering a refreshing, citrusy delight just like the original.",
    author: "Glenna Tooman",
    keywords: [
      "bakers square",
      "lemon supreme pie",
      "lemon",
      "supreme",
      "pie"
    ]
  },
]

/* Render Desserts html for the page */

let dessertsHTML = '';

function renderDesserts(filteredDesserts) {
  dessertsHTML = '';
  filteredDesserts.forEach((dessert) => {
    dessertsHTML += `
      <div class="content-container " onclick="window.location='#'">
        <div class="card card-hover">
          <div class="${dessert.image}"></div>
          <div class="text-container">
            <p class="publish-text-preset">${dessert.published}</p>
            <p class="preview-title-text-preset title card-hover">${dessert.name}</p>
            <p class="text-preset-4">${dessert.description}</p>
          </div>
          <div class="author-container">
            <p class="publish-text-preset">Recipe by:</p>
            <p class="author-text-preset">${dessert.author}</p>
          </div>  
        </div>
      </div>
    `;
  });
  document.querySelector('.js-preview-container').innerHTML = dessertsHTML;
}

/* Filter Desserts based on search input */
document.addEventListener('DOMContentLoaded', () => {
  renderDesserts(desserts);

  const searchBar = document.querySelector('.js-search-bar');
  const searchButton = document.querySelector('.js-search-button');

  const performSearch = () => {
    const query = searchBar.value.toLowerCase();
    const filteredDesserts = desserts.filter(dessert =>
      dessert.keywords.some(keyword => keyword.toLowerCase().includes(query))
    );
    renderDesserts(filteredDesserts);
  };

  searchButton.addEventListener('click', performSearch);
  searchBar.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      performSearch();
    }
  });
});