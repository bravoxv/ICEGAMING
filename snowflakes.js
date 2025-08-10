document.addEventListener('DOMContentLoaded', () => {
    
    /* =============== */
    /* EFECTO DE NIEVE */
    /* =============== */
    const createSnowflakes = (container, count) => {
        container.innerHTML = '';
        for (let i = 0; i < count; i++) {
            const snowflake = document.createElement("div");
            snowflake.classList.add("snowflake");

            const size = Math.random() * 6 + 4;
            snowflake.style.width = `${size}px`;
            snowflake.style.height = `${size}px`;
            snowflake.style.left = `${Math.random() * 100}vw`;

            // La duración de la animación de caída es más corta para un efecto de caída más rápido
            const fallDuration = Math.random() * 3 + 2; 
            const driftDuration = Math.random() * 4 + 3;
            snowflake.style.animationDuration = `${fallDuration}s, ${driftDuration}s`;
            snowflake.style.animationDelay = `${Math.random() * 5}s, ${Math.random() * 5}s`;

            container.appendChild(snowflake);
        }
    };

    const snowBack = document.getElementById('snowBack');
    const snowFront = document.getElementById('snowFront');
    
    createSnowflakes(snowBack, 40);
    createSnowflakes(snowFront, 30);
});
