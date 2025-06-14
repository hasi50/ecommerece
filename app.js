const products = [
  {
    name: "Smart Glasses 2.0",
    desc: "Augmented reality eyewear for work and play.",
    price: "$299",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Eco-Friendly Sneakers",
    desc: "Sustainable, stylish, and ultra-comfy.",
    price: "$119",
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Wireless Earbuds Pro",
    desc: "Crystal-clear sound with AI noise cancellation.",
    price: "$149",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Smart Water Bottle",
    desc: "Tracks hydration and syncs with your phone.",
    price: "$59",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Minimalist Backpack",
    desc: "Modern design, max comfort, eco materials.",
    price: "$89",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  }
];

const grid = document.getElementById('product-grid');
const cartCount = document.getElementById('cart-count');
let cart = 0;

function renderProducts() {
  grid.innerHTML = '';
  products.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <div class="price">${p.price}</div>
      <button onclick="addToCart()">Add to Cart</button>
    `;
    grid.appendChild(card);
  });
}

window.addToCart = function() {
  cart++;
  cartCount.textContent = cart;
};

renderProducts();