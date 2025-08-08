document.addEventListener('DOMContentLoaded', () => {
    /* ===========================
       1. EFECTO DE VAPOR EN EL CURSOR
    ============================ */
    const vaporCursor = document.createElement('div');
    vaporCursor.classList.add('vapor-cursor');
    document.body.appendChild(vaporCursor);

    const linkButtons = document.querySelectorAll('.link-button');

    linkButtons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            vaporCursor.style.left = `${e.clientX}px`;
            vaporCursor.style.top = `${e.clientY}px`;
            vaporCursor.style.opacity = '1';
        });

        button.addEventListener('mouseleave', () => {
            vaporCursor.style.opacity = '0';
        });
    });

    /* ===========================
       2. COPOS DE NIEVE ALEATORIOS CON VIENTO CAMBIANTE
    ============================ */
    const snowContainer = document.createElement("div");
    snowContainer.classList.add("snowflakes-container");
    document.body.appendChild(snowContainer);

    const numSnowflakes = 50; // cantidad de copos
    for (let i = 0; i < numSnowflakes; i++) {
        const snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");

        // Tamaño aleatorio
        const size = Math.random() * 6 + 4;
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;

        // Posición inicial aleatoria
        snowflake.style.left = `${Math.random() * 100}vw`;

        // Duración aleatoria de caída y deriva
        const fallDuration = Math.random() * 5 + 5;
        const driftDuration = Math.random() * 4 + 3;
        snowflake.style.animationDuration = `${fallDuration}s, ${driftDuration}s`;

        // Retraso aleatorio
        snowflake.style.animationDelay = `${Math.random() * 10}s, ${Math.random() * 5}s`;

        snowContainer.appendChild(snowflake);
    }
});
