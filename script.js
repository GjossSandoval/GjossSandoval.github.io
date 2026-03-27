// --- 1. DETECCIÓN DE SECCIÓN PARA EL MENÚ ---
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// --- 2. GENERADOR DE PARTÍCULAS DE CÓDIGO (FONDO HERO) ---
function generarParticulas() {
    const contenedor = document.getElementById('particles');
    if (!contenedor) return;
    
    // Símbolos típicos de programación
    const simbolos = ['{', '}', '[', ']', '<', '>', '/', '=', '+', ';', '#', '()'];
    const cantidadParticulas = 25; // Número de elementos flotando
    
    for (let i = 0; i < cantidadParticulas; i++) {
        const particula = document.createElement('div');
        particula.className = 'particle';
        
        // Seleccionar símbolo al azar
        particula.textContent = simbolos[Math.floor(Math.random() * simbolos.length)];
        
        // Posicionamiento horizontal aleatorio (0% a 100%)
        particula.style.left = Math.random() * 100 + '%';
        
        // Retraso y duración de animación aleatoria para que no caigan todas juntas
        particula.style.animationDelay = Math.random() * 15 + 's';
        particula.style.animationDuration = (10 + Math.random() * 10) + 's';
        
        contenedor.appendChild(particula);
    }
}

// Ejecutar cuando cargue la página
document.addEventListener('DOMContentLoaded', () => {
    generarParticulas();
});