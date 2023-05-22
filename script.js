// API URL
const apiURL = 'https://fakestoreapi.com/';

// Function to fetch and display all products
function showAllProducts() {
  fetch(apiURL + 'products')
    .then(response => response.json())
    .then(products => {
      const content = document.getElementById('content');
      content.innerHTML = '<h2>All Products</h2>';
      const productGrid = document.createElement('div');
      productGrid.className = 'product-grid';
      products.forEach(product => {
        productGrid.innerHTML += getProductHTML(product);
      });
      content.appendChild(productGrid);
    })
    .catch(error => console.error(error));
}

// Function to fetch and display products from a specific category
function showProductsByCategory(category) {
  fetch(apiURL + 'products/category/' + category)
    .then(response => response.json())
    .then(products => {
      const content = document.getElementById('content');
      content.innerHTML = `<h2>${capitalizeFirstLetter(category)}</h2>`;
      const productGrid = document.createElement('div');
      productGrid.className = 'product-grid';
      products.forEach(product => {
        productGrid.innerHTML += getProductHTML(product);
      });
      content.appendChild(productGrid);
    })
    .catch(error => console.error(error));
}

// Function to fetch and display a single product
function showProduct(productId) {
  fetch(apiURL + 'products/' + productId)
    .then(response => response.json())
    .then(product => {
      const content = document.getElementById('content');
      content.innerHTML = '<h2>Product Details</h2>';
      const productHTML = getProductHTML(product);
      content.innerHTML += productHTML;
    })
    .catch(error => console.error(error));
}

// Function to add a product to the cart
function addToCart(productId) {
  // Implement your own logic to handle adding to cart and cart count
  // based on your requirements and storage method (e.g., localStorage)
  // Here, we simply increment the cart count displayed in the navigation
  const cartCount = document.getElementById('cart-count');
  cartCount.textContent = parseInt(cartCount.textContent) + 1;
}

// Function to show the cart
function showCart() {
  // Fetch the cart items from localStorage or perform other cart operations
  // based on your implementation requirements
  // Display the cart items on the page
}

// Function to generate HTML for a product
function getProductHTML(product) {
  return `
    <div class="product">
      <img src="${product.image}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>Price: $${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    </div>
  `;
}

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Initially, show all products
showAllProducts();
