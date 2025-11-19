// main.js - Versão Aprimorada Emarabr

document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Dados dos Produtos
    // Adicionei uma descrição específica para cada item para ficar mais profissional
    const products = [
        { id: 1, image: 'img/1.jpeg', title: 'Cocho SERVEBEM', desc: 'Maior capacidade para grandes rebanhos.' },
        { id: 2, image: 'img/2.jpeg', title: 'Cocho SERVEBEM', desc: 'Ideal para confinamentos de médio porte.' },
        { id: 3, image: 'img/3.jpeg', title: 'Cocho SERVEBEM', desc: 'Perfeito para suplementação estratégica.' },
        { id: 4, image: 'img/4.jpeg', title: 'Cocho SERVEBEM', desc: 'Acabamento reforçado e maior durabilidade.' },
        { id: 5, image: 'img/5.jpeg', title: 'Cocho SERVEBEM', desc: 'Custo-benefício para quem está começando.' },
        { id: 6, image: 'img/6.jpeg', title: 'Cocho SERVEBEM', desc: 'Suporta pisoteio e clima severo.' },
        { id: 7, image: 'img/7.jpeg', title: 'Cocho SERVEBEM', desc: 'Segurança e estabilidade no pasto.' },
        { id: 8, image: 'img/8.jpeg', title: 'Cocho SERVEBEM', desc: 'Mantém a temperatura ideal do alimento.' },
        { id: 9, image: 'img/9.jpeg', title: 'Cocho SERVEBEM', desc: 'Fácil transporte e mudança de local.' }
    ];

    // Carregar produtos na tela
    loadProducts();

    function loadProducts() {
        const productGrid = document.getElementById('productGrid');
        
        // Se não encontrar a div de produtos, para a execução para não dar erro
        if (!productGrid) return;

        // Limpa o conteúdo atual (ex: loaders ou exemplos estáticos)
        productGrid.innerHTML = '';

        products.forEach(product => {
            // Cria a mensagem personalizada para o WhatsApp
            const whatsappMessage = `Olá, vi o *${product.title}* no site e gostaria de um orçamento.`;
            const whatsappLink = `https://wa.me/5599932824?text=${encodeURIComponent(whatsappMessage)}`;

            // HTML do Card atualizado com o novo Design (Verde)
            const productCard = `
                <div class="col">
                    <div class="card h-100 border-0 shadow-sm card-product">
                        <div style="height: 250px; overflow: hidden;">
                            <img src="${product.image}" 
                                 class="card-img-top h-100 w-100" 
                                 style="object-fit: cover;"
                                 alt="${product.title}"
                                 onerror="this.src='https://via.placeholder.com/400x300?text=Emarabr+SERVEBEM'"> 
                        </div>
                        <div class="card-body d-flex flex-column text-center">
                            <h5 class="card-title fw-bold text-dark">${product.title}</h5>
                            <p class="card-text text-muted small">${product.desc}</p>
                            <div class="mt-auto pt-3">
                                <a href="${whatsappLink}" target="_blank" class="btn btn-outline-success w-100 fw-bold">
                                    <i class="fab fa-whatsapp me-2"></i> Cotar Preço
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            productGrid.insertAdjacentHTML('beforeend', productCard);
        });
    }

    // 2. Rolagem Suave com compensação do Menu Fixo
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Altura do menu fixo (aproximadamente 70px)
                const headerOffset = 80; 
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
                
                // Fecha o menu mobile automaticamente ao clicar (UX melhorada)
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {toggle: true});
                    bsCollapse.hide();
                }
            }
        });
    });

    // 3. Inicializar Tooltips do Bootstrap (se houver)
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});