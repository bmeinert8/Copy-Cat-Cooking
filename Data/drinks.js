const drinks = [
  {
    image: "hp-butterbeer-image",
    published: "22 January 2025",
    name: "Harry Potter Butterbeer",
    description: "This recipe captures the magic of the wizarding world with a frothy, sweet drink that combines the flavors of butterscotch and cream soda.",
    author: "no-author",
    keywords: [
      "harry potter",
      "butterbeer",
      "butter",
      "beer",
      "butterscotch",
      "cream soda",
      "drink",
    ]
  },
  {
    image: "sb-pink-drink-image",
    published: "22 January 2025",
    name: "Starbucks Pink Drink",
    description: "This refreshing beverage combines the flavors of sweet strawberry acai with creamy milk of choice, creating a vibrant and delicious treat.",
    author: "no-author",
    keywords: [
      "starbucks",
      "pink drink",
      "strawberry",
      "acai",
      "drink",
      "beverage",
      "refreshing"
    ]
  },
  {
    image: "sb-smores-frapp-image",
    published: "22 January 2025",
    name: "Starbucks S'mores Frappuccino",
    description: "This recipe blends rich coffee with chocolate and marshmallow flavors, topped with whipped cream and graham cracker for a sweet treat.",
    author: "no-author",
    keywords: [
      "starbucks",
      "smores frappuccino",
      "smores",
      "frappuccino",
      "coffee",
      "chocolate",
      "marshmallow"
    ]
  },
  {
    image: "rr-lemonade-image",
    published: "22 January 2025",
    name: "Red Robin Freckled Lemonade",
    description: "This recipe combines the tartness of lemonade with the sweetness of strawberries, creating a refreshing summer drink.",
    author: "no-author",
    keywords: [
      "red robin",
      "freckled lemonade",
      "lemonade",
      "strawberries",
      "summer",
      "drink",
      "beverage"
    ]
  },
  {
    image: "frosted-lemonade-image",
    published: "22 January 2025",
    name: "Chick-fil-A Frosted Lemonade",
    description: "This recipe blends creamy vanilla ice cream with tangy lemonade, creating a sweet and refreshing beverage.",
    author: "no-author",
    keywords: [
      "chick-fil-a",
      "frosted lemonade",
      "lemonade",
      "vanilla ice cream",
      "ice cream",
      "beverage",
      "drink"
    ]
  },
  {
    image: "sk-hulk-image",
    published: "22 January 2025",
    name: "Smoothie King The Hulk",
    description: " Boost your energy and build muscle with Smoothie King's Hulk™ smoothie! Packed with bananas, protein powder.",
    author: "no-author",
    keywords: [
      "smoothie king",
      "hulk",
      "smoothie",
      "banana",
      "protein powder",
      "energy",
      "muscle",
      "recovery"
    ]
  }
]

let drinksHTML = "";

drinks.forEach((drink) => {
  drinksHTML += `
    <div class="content-container " onclick="window.location='./cinnabon.html'">
      <div class="card card-hover">
        <div class="${drink.image}"></div>
        <div class="text-container">
          <p class="publish-text-preset">${drink.published}</p>
          <p class="preview-title-text-preset title card-hover">${drink.name}</p>
          <p class="text-preset-4">${drink.description}</p>
        </div>
        <div class="author-container">
          <p class="publish-text-preset">Recipe by:</p>
          <p class="author-text-preset">${drink.author}</p>
        </div>  
      </div>
    </div>
  `;
});

console.log(drinksHTML);

document.querySelector('.js-preview-container').innerHTML = drinksHTML;