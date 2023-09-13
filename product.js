const products = [
    {
        name: "Product 1",
        price: 49.99,
        rating: 4.5,
        image: "product.jpg"
    },
{
    name: "Product 2",
    price: 39.99,
    rating: 4.0,
    image: "product.jpg"
},
{
    name: "Product 3",
    price: 59.99,
    rating: 4.8,
    image: "product.jpg"
},
{
    name: "Product 4",
    price: 69.99,
    rating: 4.2,
    image: "product.jpg"
},
{
    name: "Product 5",
    price: 69.99,
    rating: 4.2,
    image: "product.jpg"
},
{
    name: "Product 6",
    price: 69.99,
    rating: 4.2,
    image: "product.jpg"
},
{
    name: "Product 7",
    price: 69.99,
    rating: 4.2,
    image: "product.jpg"
},
{
    name: "Product 8",
    price: 69.99,
    rating: 4.2,
    image: "product.jpg"
}
];

// Function to generate product cards
function generateProductCards() {
const grid = document.getElementById("shoppingGrid");

products.forEach((product) => {
    const col = document.createElement("div");
    col.className = "col-md-3 mb-4";

    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = product.image;
    img.className = "card-img-top";
    img.alt = product.name;

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const title = document.createElement("h5");
    title.className = "card-title";
    title.textContent = product.name;

    const price = document.createElement("p");
    price.className = "card-text";
    price.textContent = "Price: $" + product.price.toFixed(2);

    const rating = document.createElement("p");
    rating.className = "card-text";
    rating.textContent = "Rating: " + product.rating + "/5";

    cardBody.appendChild(title);
    cardBody.appendChild(price);
    cardBody.appendChild(rating);

    card.appendChild(img);
    card.appendChild(cardBody);

    col.appendChild(card);
    grid.appendChild(col);
});
}

// Generate product cards when the page loads
generateProductCards();