const entrees = [
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
]

let entreesHTML = '';

entrees.forEach((entree) => {
  entreesHTML += `
    <div class="content-container " onclick="window.location='./cinnabon.html'">
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

console.log(entreesHTML);

document.querySelector('.js-preview-container')
  .innerHTML = entreesHTML;