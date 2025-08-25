// main.js
document.addEventListener('DOMContentLoaded', function() {
    // Product Data
    const products = [
        { id: 1, image: 'img/1.jpeg', title: 'Cocho Grande' },
        { id: 2, image: 'img/2.jpeg', title: 'Cocho Médio' },
        { id: 3, image: 'img/3.jpeg', title: 'Cocho Pequeno' },
        { id: 4, image: 'img/4.jpeg', title: 'Cocho Premium' },
        { id: 5, image: 'img/5.jpeg', title: 'Cocho Econômico' },
        { id: 6, image: 'img/6.jpeg', title: 'Cocho Resistente' },
        { id: 7, image: 'img/7.jpeg', title: 'Cocho Antiderrapante' },
        { id: 8, image: 'img/8.jpeg', title: 'Cocho Isolante' },
        { id: 9, image: 'img/9.jpeg', title: 'Cocho Versátil' }
    ];

    // Load Products
    loadProducts();

    function loadProducts() {
        const productGrid = document.getElementById('productGrid');
        productGrid.innerHTML = '';

        products.forEach(product => {
            const productCard = `
                <div class="col">
                    <div class="card h-100 border-0 shadow-sm">
                        <img src="${product.image}" class="card-img-top" alt="${product.title}">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${product.title}</h5>
                            <p class="card-text text-muted">Produto de alta qualidade para sua pecuária.</p>
                            <div class="mt-auto">
                                <a href="tel:+55999932824" class="btn btn-primary w-100">
                                    <i class="fas fa-phone me-2"></i> (99) 99932-824
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            productGrid.insertAdjacentHTML('beforeend', productCard);
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
});