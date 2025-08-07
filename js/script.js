document.addEventListener('DOMContentLoaded', () => {
    const snowflakesContainer = document.querySelector(".snowflakes-container");

    const createSnowflake = () => {
        const snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");

        const size = Math.random() * 5 + 2;
        const startX = Math.random() * 100;
        const duration = Math.random() * 10 + 5;
        const driftDuration = Math.random() * 5 + 5;
        const delay = Math.random() * 5;
        const opacity = Math.random() * 0.5 + 0.5;

        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.left = `${startX}vw`;
        snowflake.style.opacity = opacity;
        
        // Asignamos las animaciones de forma individual para mayor compatibilidad
        snowflake.style.animationName = 'fall, drift';
        snowflake.style.animationDuration = `${duration}s, ${driftDuration}s`;
        snowflake.style.animationTimingFunction = 'linear, ease-in-out';
        snowflake.style.animationDelay = `${delay}s, ${delay}s`;
        snowflake.style.animationFillMode = 'forwards';
        snowflake.style.animationIterationCount = 'infinite, infinite';
        snowflake.style.animationDirection = 'normal, alternate';

        snowflakesContainer.appendChild(snowflake);

        // Eliminamos el copo de nieve al terminar la animación de "caída"
        setTimeout(() => {
            snowflake.remove();
        }, (duration + delay) * 1000);
    };

    // Generar un copo de nieve cada 200ms
    setInterval(createSnowflake, 200);
});
