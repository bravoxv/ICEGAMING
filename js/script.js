<script>
const snowflakesContainer = document.getElementById("snowflakes-container");

function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");

    // Valores aleatorios
    const size = Math.random() * 5 + 2; // entre 2px y 7px
    const startX = Math.random() * window.innerWidth;
    const duration = Math.random() * 5 + 5; // 5 a 10 segundos
    const opacity = Math.random() * 0.5 + 0.3;

    // Aplicar estilos
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.left = `${startX}px`;
    snowflake.style.opacity = opacity;
    snowflake.style.animationDuration = `${duration}s`;

    snowflakesContainer.appendChild(snowflake);

    // Remover después de caer
    setTimeout(() => {
        snowflake.remove();
    }, duration * 1000);
}

// Generar copos cada 200ms
setInterval(createSnowflake, 200);
</script>
