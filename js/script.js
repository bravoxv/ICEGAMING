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


    /* =============== */
    /* EFECTO VAPOR EN BOTONES */
    /* =============== */
    const linkButtons = document.querySelectorAll('.link-button');

    linkButtons.forEach(button => {
        let vaporInterval = null;

        button.addEventListener('mouseenter', () => {
            if (vaporInterval) return;

            let count = 0;
            vaporInterval = setInterval(() => {
                const vapor = document.createElement('div');
                vapor.classList.add('vapor');

                const rect = button.getBoundingClientRect();
                vapor.style.left = `${rect.left + rect.width / 2 - 30 + window.scrollX}px`;
                vapor.style.top = `${rect.top - 20 + window.scrollY}px`;

                document.body.appendChild(vapor);

                setTimeout(() => vapor.remove(), 1500);

                count++;
                if (count >= 4) {
                    clearInterval(vaporInterval);
                    vaporInterval = null;
                }
            }, 300);
        });

        button.addEventListener('mouseleave', () => {
            if (vaporInterval) {
                clearInterval(vaporInterval);
                vaporInterval = null;
            }
        });
    });
});
