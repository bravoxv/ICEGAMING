document.addEventListener('DOMContentLoaded', () => {
    const snowflakesContainer = document.querySelector(".snowflakes-container");

    const createSnowflake = () => {
        const snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");

        const size = Math.random() * 5 + 2;
        const startX = Math.random() * 100;
        const duration = Math.random() * 10 + 5;
        const driftDuration = Math.random() * 5 + 5;
        const driftAmount = Math.random() * 100 - 50;
        const delay = Math.random() * 5;
        const opacity = Math.random() * 0.5 + 0.5;

        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.left = `${startX}vw`;
        snowflake.style.opacity = opacity;
        snowflake.style.animation = `
            fall ${duration}s linear ${delay}s forwards,
            drift ${driftDuration}s ease-in-out ${delay}s infinite alternate
        `;

        snowflakesContainer.appendChild(snowflake);

        snowflake.addEventListener('animationend', () => {
            snowflake.remove();
        });
    };

    setInterval(createSnowflake, 200);
});
