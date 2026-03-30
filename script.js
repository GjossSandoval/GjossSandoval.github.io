// --- GENERADOR DE PARTÍCULAS (LLUVIA DE CÓDIGO) ---
function generarParticulas() {
    const contenedor = document.getElementById('particles');
    if (!contenedor) return;
    
    const simbolos = ['{', '}', '[', ']', '<', '>', '/', '=', '+', ';', '#', '()'];
    
    for (let i = 0; i < 20; i++) {
        const particula = document.createElement('div');
        particula.className = 'particle';
        particula.textContent = simbolos[Math.floor(Math.random() * simbolos.length)];
        particula.style.left = Math.random() * 100 + '%';
        particula.style.animationDelay = Math.random() * 15 + 's';
        particula.style.animationDuration = (10 + Math.random() * 10) + 's';
        contenedor.appendChild(particula);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    generarParticulas();
});
