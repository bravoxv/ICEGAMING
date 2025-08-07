document.addEventListener('DOMContentLoaded', () => {
    // 1. Crea el elemento del cursor de vapor
    const vaporCursor = document.createElement('div');
    vaporCursor.classList.add('vapor-cursor');
    document.body.appendChild(vaporCursor);

    // 2. Selecciona todos los botones
    const linkButtons = document.querySelectorAll('.link-button');

    // 3. Añade los eventos a cada botón
    linkButtons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            // Actualiza la posición del vapor para que siga al ratón
            const x = e.clientX;
            const y = e.clientY;
            vaporCursor.style.left = `${x}px`;
            vaporCursor.style.top = `${y}px`;
            vaporCursor.style.opacity = '1';
        });

        button.addEventListener('mouseleave', () => {
            // Oculta el vapor cuando el ratón sale del botón
            vaporCursor.style.opacity = '0';
        });
    });
});
