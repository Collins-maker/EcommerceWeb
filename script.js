// API URL
const apiURL = 'https://fakestoreapi.com/';

// Function to fetch and display all products
function showAllProducts() {
  fetch(apiURL + 'products')
    .then(response => response.json())
    .then(products => {
      const content = document.getElementById('content');
      content.innerHTML = '<h2>All Products</h2>';

      products.forEach(product => {
        const productElement = createProductElement(product);
        content.appendChild(productElement);
      });
    })
    .catch(error => console.log(error));
}

// Function to fetch and display products from a specific category
function showProductsByCategory(category) {
  fetch(apiURL + 'products/category/' + category)
    .then(response => response.json())
    .then(products => {
      const content = document.getElementById('content');
      content.innerHTML = `<h2>${capitalizeFirstLetter(category)}</h2>`;

      products.forEach(product => {
        const productElement = createProductElement(product);
        content.appendChild(productElement);
      });
    })
    .catch(error => console.log(error));
}

// Function to display a single product page
function showProduct(productId) {
  fetch(apiURL + 'products/' + productId)
    .then(response => response.json())
    .then(product => {
      const content = document.getElementById('content');
      content.innerHTML = '';

      const productElement = createProductElement(product);
      content.appendChild(productElement);
    })
    .catch(error => console.log(error));
}

// Function to create a product element
function createProductElement(product) {
  const productElement = document.createElement('div');
  productElement.className = 'product';
  productElement.innerHTML = `
    <img src="${product.image}" alt="${product.title}">
    <h3>${product.title}</h3>
    <p>${product.price}$</p>
    <button onclick="addToCart(${product.id})">Add to Cart</button>
  `;

  return productElement;
}

// Function to add a product to the cart
function addToCart(productId) {
  const cartCountElement = document.getElementById('cart-count');
  let cartCount = parseInt(cartCountElement.textContent);
  cartCountElement.textContent = ++cartCount;

  // Store the product ID in localStorage or perform other cart operations
  // based on your implementation requirements
}

// Function to show the cart
function showCart() {
  // Fetch the cart items from localStorage or perform other cart operations
  // based on your implementation requirements
  // Display the cart items on the page
}

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Initially, show all products
showAllProducts();
