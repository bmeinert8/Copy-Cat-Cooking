 let others = [
  {
    image: 'canes-sauce-image',
    published: '26 January 2025',
    name: 'Raising Cane\'s Sauce',
    description: 'This recipe features a tangy and creamy sauce perfect for dipping chicken fingers, fries, and more, mimicking the popular sauce from Raising Cane\'s.',
    author: 'no-author',
    keywords: [
      'raising cane\'s',
      'canes sauce',
      'sauce',
      'dipping sauce',
      'chicken fingers',
      'fries'
    ]
  },
  {
    image: 'chick-fil-a-sauce-image',
    published: '26 January 2025',
    name: 'Chick-fil-A Sauce',
    description: 'This recipe features a sweet and tangy sauce perfect for dipping chicken nuggets or fries, topping sandwiches, and more.',
    author: 'no-author',
    keywords: [
      'chick-fil-a',
      'chick-fil-a sauce',
      'sauce',
      'dipping sauce',
      'chicken nuggets',
      'sandwiches'
    ]
  },
  {
    image: 'chipotle-gaucamole-image',
    published: '26 January 2025',
    name: 'Chipotle Guacamole',
    description: 'This recipe features a creamy and flavorful guacamole perfect for dipping chips, topping tacos, and more, mimicking the choice from Chipotle.',
    author: 'no-author',
    keywords: [
      'chipotle',
      'guacamole',
      'avocado',
      'dip',
      'chips',
      'tacos'
    ]
  },
  {
    image: 'chipotle-rice-image',
    published: '26 January 2025',
    name: 'Chipotle Cilantro Lime Rice',
    description: 'This recipe features fluffy and flavorful rice seasoned with cilantro and lime, perfect for burrito bowls, tacos, and more.',
    author: 'no-author',
    keywords: [
      'chipotle',
      'cilantro lime rice',
      'rice',
      'cilantro',
      'lime',
      'burrito bowls',
      'tacos'
    ]
  },
  {
    image: 'wendys-chili-image',
    published: '26 January 2025',
    name: 'Wendy\'s Chili',
    description: 'This recipe features a hearty and flavorful chili loaded with ground beef, beans, and spices, mimicking the popular chili from Wendy\'s.',
    author: 'no-author',
    keywords: [
      'wendy\'s',
      'chili',
      'beef',
      'beans',
      'spices'
    ]
  },
  {
    image: 'kfc-coleslaw-image',
    published: '26 January 2025',
    name: 'KFC Coleslaw',
    description: 'This recipe features a creamy and tangy coleslaw loaded with shredded cabbage and carrots, mimicking the popular side dish from KFC.',
    author: 'no-author',
    keywords: [
      'kfc',
      'coleslaw',
      'cabbage',
      'carrots',
      'side dish'
    ]
  },
  {
    image: 'olive-garden-alfredo-sacue-image',
    published: '26 January 2025',
    name: 'Olive Garden Alfredo Sauce',
    description: 'This recipe features a rich and creamy sauce perfect for coating pasta, mimicking the popular sauce from Olive Garden.',
    author: 'no-author',
    keywords: [
      'olive garden',
      'alfredo sauce',
      'sauce',
      'pasta'
    ]
  },
  {
    image: 'famous-daves-bbq-sauce-image',
    published: '26 January 2025',
    name: 'Famous Dave\'s BBQ Sauce',
    description: 'This recipe features a sweet and tangy BBQ sauce perfect for grilling, dipping, and more, mimicking the popular sauce from Famous Dave\'s.',
    author: 'no-author',
    keywords: [
      'famous dave\'s',
      'bbq sauce',
      'sauce',
      'grilling',
      'dipping'
    ]
  },
 ];

/* Render Others html for the page */
let othersHTML = '';

function renderOthers(filteredOthers) {
  othersHTML = '';
  filteredOthers.forEach((other) => {
    othersHTML += `
        <div class="content-container" onclick="window.location='#'">
        <div class="card card-hover">
          <div class="${other.image}"></div>
          <div class="text-container">
            <p class="publish-text-preset">${other.published}</p>
            <p class="preview-title-text-preset title card-hover">${other.name}</p>
            <p class="text-preset-4">${other.description}</p>
          </div>
          <div class="author-container">
            <p class="publish-text-preset">Recipe by:</p>
            <p class="author-text-preset">${other.author}</p>
          </div>  
        </div>
      </div>
    `;
  });
  document.querySelector('.js-preview-container').innerHTML = othersHTML;
};

document.addEventListener('DOMContentLoaded', () => {
  renderOthers(others);

  const searchBar = document.querySelector('.js-search-bar');
  const searchButton = document.querySelector('.js-search-button');
  const resetButton = document.querySelector('.js-reset-search');

  const performSearch = () => {
    const query = searchBar.value.toLowerCase();
    const filteredOthers = others.filter(other => 
      other.keywords.some(keyword => keyword.toLowerCase().includes(query))
    );
    renderOthers(filteredOthers);
  };

  searchButton.addEventListener('click', performSearch);
  searchBar.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      performSearch();
    }
  });

  resetButton.addEventListener('click', () => {
    searchBar.value = '';
    renderOthers(others);
  });
});