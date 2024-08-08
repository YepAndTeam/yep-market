let cart = [];

const products = [
    { id: 1, name: "Product 1", price: 10, image: "product1.jpg" },
    { id: 2, name: "Product 2", price: 15, image: "product2.jpg" },
    { id: 3, name: "Product 3", price: 20, image: "product3.jpg" },
    { id: 4, name: "Product 4", price: 25, image: "product4.jpg" }
    // Добавь больше товаров по мере необходимости
];

function renderProducts() {
    const container = document.querySelector('.container');
    
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
        `;
        container.appendChild(productDiv);
    });
}

function addToCart(productName, price) {
    cart.push({ productName, price });
    alert(`${productName} has been added to the cart.`);
    console.log(cart);
}

// Вызовем функцию для отображения товаров при загрузке страницы
renderProducts();
