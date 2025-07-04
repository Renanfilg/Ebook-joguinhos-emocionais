// Função para alternar FAQ
function toggleFaq(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector('i');
    
    // Fechar todas as outras FAQs
    document.querySelectorAll('.faq-answer').forEach(item => {
        if (item !== answer) {
            item.classList.remove('active');
        }
    });
    
    document.querySelectorAll('.faq-question i').forEach(item => {
        if (item !== icon) {
            item.style.transform = 'rotate(0deg)';
        }
    });
    
    // Alternar a FAQ atual
    answer.classList.toggle('active');
    
    if (answer.classList.contains('active')) {
        icon.style.transform = 'rotate(180deg)';
    } else {
        icon.style.transform = 'rotate(0deg)';
    }
}

// Função para comprar (você deve substituir pelo seu link de pagamento)
function comprar() {
    // Substitua esta URL pelo seu link de pagamento real
    const linkPagamento = 'https://seu-link-de-pagamento.com';
    
    // Você pode usar um dos métodos abaixo:
    
    // Opção 1: Abrir em nova aba
    window.open(linkPagamento, '_blank');
    
    // Opção 2: Redirecionar na mesma página
    // window.location.href = linkPagamento;
    
    // Opção 3: Para teste, mostrar um alerta
    alert('Aqui você deve inserir seu link de pagamento real!\n\nSubstitua a URL na função comprar() no arquivo script.js');
}

// Animações ao rolar a página
function animateOnScroll() {
    const elements = document.querySelectorAll('.benefit-card, .testimonial-card, .faq-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Inicializar animações
document.addEventListener('DOMContentLoaded', function() {
    // Configurar elementos para animação
    const elements = document.querySelectorAll('.benefit-card, .testimonial-card, .faq-item');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Executar animação inicial
    animateOnScroll();
    
    // Executar animação ao rolar
    window.addEventListener('scroll', animateOnScroll);
});

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Contador regressivo (opcional - você pode ativar se quiser)
function startCountdown() {
    // Definir data final (24 horas a partir de agora)
    const endDate = new Date();
    endDate.setHours(endDate.getHours() + 24);
    
    function updateCountdown() {
        const now = new Date();
        const timeLeft = endDate - now;
        
        if (timeLeft > 0) {
            const hours = Math.floor(timeLeft / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            
            const timerElement = document.querySelector('.urgency-timer span');
            if (timerElement) {
                timerElement.textContent = `Oferta expira em: ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            }
        }
    }
    
    // Atualizar a cada segundo
    setInterval(updateCountdown, 1000);
    updateCountdown();
}

// Descomente a linha abaixo se quiser ativar o contador regressivo
// startCountdown();

