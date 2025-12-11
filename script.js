// Elementos del DOM
const companyCards = document.querySelectorAll('.company-card');

// Inicializar el modal de Bootstrap
const constructionModalElement = document.getElementById('constructionModal');
const constructionModal = new bootstrap.Modal(constructionModalElement);

// Event listener para cada tarjeta de empresa
companyCards.forEach(card => {
    card.addEventListener('click', function() {
        const status = this.getAttribute('data-status');
        const url = this.getAttribute('data-url');
        
        if (status === 'construction') {
            // Mostrar modal de construcción usando Bootstrap
            constructionModal.show();
        } else if (url) {
            // Navegar a la URL
            window.location.href = url;
        }
    });
    
    // Efecto visual de click
    card.addEventListener('mousedown', function() {
        this.style.transform = 'translateY(-4px) scale(0.98)';
    });
    
    card.addEventListener('mouseup', function() {
        this.style.transform = '';
    });
    
    // Prevenir comportamiento por defecto
    card.addEventListener('dragstart', function(e) {
        e.preventDefault();
    });
});