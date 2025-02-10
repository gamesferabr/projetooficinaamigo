document.addEventListener("DOMContentLoaded", function () {
    const products = [
        { name: "Product 1", price: 100 },
        { name: "Product 2", price: 200 },
        { name: "Product 3", price: 300 },
        { name: "Product 4", price: 400 },
        { name: "Product 5", price: 500 },
        { name: "Product 6", price: 600 }
    ];

    const carousel = document.querySelector(".produtos-grid");

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("produto-card");
        productDiv.innerHTML = `
            <img src="/static/image/produto1.webp" alt="Product image">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button class="add-to-cart">
                <i class="fas fa-cart-plus"></i>
            </button>
        `;
        carousel.appendChild(productDiv);
    });

    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("add-to-cart")) {
            alert("Produto adicionado ao carrinho!");
        }
    });

    // Configuração do carrossel
    let currentIndex = 0;
    const productWidth = document.querySelector(".produto-card").offsetWidth + 10; // Inclui margens
    const totalProducts = document.querySelectorAll(".produto-card").length;
    const visibleProducts = 3; // Apenas 3 produtos visíveis

    function updateCarousel() {
        const moveX = -currentIndex * productWidth;
        carousel.style.transform = `translateX(${moveX}px)`;
    }

    document.querySelector(".seta-direita").addEventListener("click", function () {
        if (currentIndex < totalProducts - visibleProducts) {
            currentIndex++;
            updateCarousel();
        }
    });

    document.querySelector(".seta-esquerda").addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
});
