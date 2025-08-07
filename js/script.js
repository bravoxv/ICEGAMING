const snowflakesContainer = document.getElementById("snowflakes-container");

function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");

    const size = Math.random() * 5 + 2;
    const startX = Math.random() * window.innerWidth;
    const duration = Math.random() * 5 + 5;
    const delay = Math.random() * 5;
    const opacity = Math.random() * 0.5 + 0.3;

    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.left = `${startX}px`;
    snowflake.style.opacity = opacity;

    // Movimiento vertical + oscilación horizontal tipo viento
    snowflake.style.animation = `
        falling ${duration}s linear ${delay}s forwards,
        drift ${duration}s ease-in-out ${delay}s infinite alternate
    `;

    snowflakesContainer.appendChild(snowflake);

    setTimeout(() => snowflake.remove(), (duration + delay) * 1000);
}

setInterval(createSnowflake, 200);
