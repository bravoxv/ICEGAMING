document.addEventListener('DOMContentLoaded', () => {
    const snowflakesContainer = document.querySelector(".snowflakes-container");

    const createSnowflake = () => {
        const snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");

        const size = Math.random() * 5 + 2; // Tamaño entre 2px y 7px
        const startX = Math.random() * 100; // Posición de inicio horizontal aleatoria
        const duration = Math.random() * 10 + 5; // Duración de la caída entre 5s y 15s
        const driftDuration = Math.random() * 5 + 5; // Duración de la oscilación horizontal
        const delay = Math.random() * 5; // Retraso de la animación
        const opacity = Math.random() * 0.5 + 0.5; // Opacidad entre 0.5 y 1.0

        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.left = `${startX}vw`;
        snowflake.style.opacity = opacity;
        
        // Asignamos las animaciones al copo de nieve
        snowflake.style.animation = `
            fall ${duration}s linear ${delay}s forwards,
            drift ${driftDuration}s ease-in-out ${delay}s infinite alternate
        `;

        snowflakesContainer.appendChild(snowflake);

        // Eliminamos el copo de nieve al terminar la animación de "caída" para no sobrecargar el DOM
        snowflake.addEventListener('animationend', () => {
            snowflake.remove();
        });
    };

    // Generar un copo de nieve cada 200ms
    setInterval(createSnowflake, 200);
});
