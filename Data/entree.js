let entrees = [
  {
    image: "og-shrimp-alf-image",
    published: "24 January 2025",
    name: "Olive Garden Shrimp Alfredo",
    description: "This recipe features fettuccine pasta topped with a creamy Alfredo sauce and sautéed shrimp mimicking the popular dish from Olive Garden.",
    author: "no-author",
    keywords: [
      "olive garden",
      "shrimp alfredo",
      "fettuccine",
      "pasta",
      "alfredo sauce",
      "shrimp",
      "seafood"
    ]
  },
  {
    image: 'ccf-spicy-cashew-chicken-image',
    published: '24 January 2025',
    name: 'Spicy Cashew Chicken',
    description: 'This recipe features a Cheesecake Factory mock of tender chicken, crunchy cashews, and a spicy sauce that is sure to please your taste buds.',
    author: 'no-author',
    keywords: [
      'cheesecake factory',
      'spicy cashew chicken',
      'cashew chicken',
      'chicken',
      'cashews',
      'spicy',
      'entree'
    ]
  },
  {
    image: 'panda-express-orange-chicken-image',
    published: '24 January 2025',
    name: 'Panda Express Orange Chicken',
    description: 'This recipe features crispy chicken coated in a sweet and tangy orange sauce, mimicking the popular dish from Panda Express.',
    author: 'no-author',
    keywords: [
      'panda express',
      'orange chicken',
      'chicken',
      'orange sauce',
      'entree'
    ]
  },
  {
    image: 'panera-broccoli-cheddar-soup-image',
    published: '24 January 2025',
    name: 'Panera Broccoli Cheddar Soup',
    description: 'This recipe features a creamy soup loaded with broccoli florets and shredded cheddar cheese, mimicking the popular dish from Panera Bread.',
    author: 'no-author',
    keywords: [
      'panera bread',
      'broccoli cheddar soup',
      'broccoli',
      'cheddar cheese',
      'soup'
    ]
  },
  {
    image: 'texas-roadhouse-steak-image',
    published: '24 January 2025',
    name: 'Texas Roadhouse Steak',
    description: 'This recipe features a juicy steak seasoned with a blend of spices and grilled to perfection, mimicking the popular dish from Texas Roadhouse.',
    author: 'no-author',
    keywords: [
      'texas roadhouse',
      'steak',
      'beef',
      'grilled',
      'entree'
    ]
  },
  {
    image: 'chipotle-barbacoa-image',
    published: '24 January 2025',
    name: 'Chipotle Barbacoa',
    description: 'This recipe features tender beef slow-cooked in a blend of spices, creating a flavorful and juicy meat perfect for tacos, burritos, and more.',
    author: 'no-author',
    keywords: [
      'chipotle',
      'barbacoa',
      'beef',
      'tacos',
      'burritos',
      'entree'
    ]
  },
  {
    image: 'mcd-filet-o-fish-image',
    published: '24 January 2025',
    name: 'McDonald\'s Filet-O-Fish',
    description: 'This recipe features a crispy fish filet topped with tartar sauce and American cheese, mimicking the popular sandwich from McDonald\'s.',
    author: 'no-author',
    keywords: [
      'mcdonalds',
      'filet-o-fish',
      'fish',
      'sandwich',
      'fast food'
    ]
  },
  {
    image: 'red-lobster-lobster-tail-image',
    published: '24 January 2025',
    name: 'Broiled Lobster Tail',
    description: 'This recipe features a succulent lobster tail broiled to perfection, mimicking the popular dish from Red Lobster.',
    author: 'no-author',
    keywords: [
      'red lobster',
      'lobster tail',
      'lobster',
      'seafood',
      'entree'
    ]
  }
];

let entreesHTML = '';

function renderEntrees(filteredEntrees){
  entreesHTML = '';
  filteredEntrees.forEach((entree) => {
    entreesHTML += `
      <div class="content-container" onclick="window.location='#'">
        <div class="card card-hover">
          <div class="${entree.image}"></div>
          <div class="text-container">
            <p class="publish-text-preset">${entree.published}</p>
            <p class="preview-title-text-preset title card-hover">${entree.name}</p>
            <p class="text-preset-4">${entree.description}</p>
          </div>
          <div class="author-container">
            <p class="publish-text-preset">Recipe by:</p>
            <p class="author-text-preset">${entree.author}</p>
          </div>  
        </div>
      </div>
    `;
  });
  document.querySelector('.js-preview-container').innerHTML = entreesHTML;
};

document.addEventListener('DOMContentLoaded', () => {
  renderEntrees(entrees);

  const searchBar = document.querySelector('.js-search-bar');
  const searchButton = document.querySelector('.js-search-button');

  const performSearch = () => {
    const query = searchBar.value.toLowerCase();
    const filteredEntrees = entrees.filter(entree => 
      entree.keywords.some(keyword => keyword.toLowerCase().includes(query))
    );
    renderEntrees(filteredEntrees);
  };

  searchButton.addEventListener('click', performSearch);
  searchBar.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      performSearch();
    }
  });
});