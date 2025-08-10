document.addEventListener('DOMContentLoaded', () => {

    /* =============== */
    /* COPOS DE NIEVE */
    /* =============== */
    const snowContainer = document.querySelector('.snowflakes-container') || document.createElement("div");
    snowContainer.classList.add("snowflakes-container");
    if (!document.body.contains(snowContainer)) document.body.appendChild(snowContainer);

    snowContainer.innerHTML = ''; // Limpiar si ya hay copos

    const numSnowflakes = 70;
    for (let i = 0; i < numSnowflakes; i++) {
        const snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");

        // Tamaño aleatorio entre 4 y 10 px
        const size = Math.random() * 6 + 4;
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;

        // Posición horizontal aleatoria
        snowflake.style.left = `${Math.random() * 100}vw`;

        // Duración aleatoria de la animación (caída y deriva)
        const fallDuration = Math.random() * 5 + 5;
        const driftDuration = Math.random() * 4 + 3;
        snowflake.style.animationDuration = `${fallDuration}s, ${driftDuration}s`;

        // Retraso aleatorio para no caer todos al mismo tiempo
        snowflake.style.animationDelay = `${Math.random() * 10}s, ${Math.random() * 5}s`;

        snowContainer.appendChild(snowflake);
    }

    /* =============== */
    /* EFECTO VAPOR EN BOTONES */
    /* =============== */
    const linkButtons = document.querySelectorAll('.link-button');

    linkButtons.forEach(button => {
        let vaporInterval = null;

        button.addEventListener('mouseenter', () => {
            // Si ya hay un intervalo en marcha, no creamos otro
            if (vaporInterval) return;

            let count = 0;
            vaporInterval = setInterval(() => {
                const vapor = document.createElement('div');
                vapor.classList.add('vapor');

                const rect = button.getBoundingClientRect();
                // Posiciona vapor encima y centrado respecto al botón
                vapor.style.left = `${rect.left + rect.width / 2 - 30 + window.scrollX}px`;
                vapor.style.top = `${rect.top - 20 + window.scrollY}px`;

                document.body.appendChild(vapor);

                // Elimina el vapor luego de 1.5 segundos (duración animación)
                setTimeout(() => vapor.remove(), 1500);

                count++;
                if (count >= 4) {
                    clearInterval(vaporInterval);
                    vaporInterval = null; // Reiniciamos la variable
                }
            }, 300);
        });

        // Limpiamos el intervalo si el mouse sale del botón antes de que termine
        button.addEventListener('mouseleave', () => {
            if (vaporInterval) {
                clearInterval(vaporInterval);
                vaporInterval = null;
            }
        });
    });

});
