const snowflakesContainer = document.getElementById("snowflakes-container");

function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");

    const size = Math.random() * 5 + 2; // entre 2 y 7 px
    const startX = Math.random() * window.innerWidth;
    const duration = Math.random() * 5 + 5; // entre 5 y 10 s
    const opacity = Math.random() * 0.5 + 0.3;

    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.left = `${startX}px`;
    snowflake.style.opacity = opacity;
    snowflake.style.animationDuration = `${duration}s`;

    snowflakesContainer.appendChild(snowflake);

    setTimeout(() => snowflake.remove(), duration * 1000);
}

setInterval(createSnowflake, 200);
