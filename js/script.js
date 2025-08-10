document.addEventListener('DOMContentLoaded', () => {

    /* =============== */
    /* EFECTO DE NIEVE */
    /* =============== */
    const createSnowflakes = (container, count) => {
        // Limpiar el contenedor si ya tiene copos
        container.innerHTML = '';
        for (let i = 0; i < count; i++) {
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

            container.appendChild(snowflake);
        }
    };

    const snowBack = document.getElementById('snowBack');
    const snowFront = document.getElementById('snowFront');
    
    // Crear la nieve detrás (menos copos)
    createSnowflakes(snowBack, 40);
    // Crear la nieve delante (más copos)
    createSnowflakes(snowFront, 30);


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

    /* =============== */
    /* LÓGICA COMENTARIOS Y DONACIONES */
    /* =============== */
    function setUtterancesTheme(themeName) {
        const utterancesContainer = document.querySelector('.utterances-container');
        if (utterancesContainer) {
            utterancesContainer.innerHTML = '';
            const script = document.createElement('script');
            script.src = 'https://utteranc.es/client.js';
            script.setAttribute('repo', 'bravoxv/mi-pagina'); // Asegúrate de que este sea tu repositorio de GitHub
            script.setAttribute('issue-term', 'pathname');
            script.setAttribute('crossorigin', 'anonymous');
            script.setAttribute('async', 'true');
            script.setAttribute('theme', themeName);
            utterancesContainer.appendChild(script);
        }
    }

    // El tema por defecto es oscuro
    setUtterancesTheme('github-dark');

    // Botón comentarios
    const commentButton = document.getElementById('comment-button');
    const commentsSection = document.getElementById('comments-section');
    if (commentButton && commentsSection) {
        commentButton.addEventListener('click', () => {
            commentsSection.classList.toggle('show');
        });
    }

    // Menú donaciones
    const donateButton = document.getElementById('donate-button');
    const donateOptions = document.getElementById('donate-options');
    const astropayCvu = document.getElementById('astropay-cvu');
    const copyCvuButton = document.querySelector('.copy-cvu-button');
    const astropayCopyMessage = document.getElementById('astropay-copy-message');

    if (donateButton && donateOptions) {
        donateButton.addEventListener('click', (event) => {
            donateOptions.classList.toggle('show');
            event.stopPropagation();
        });
        document.addEventListener('click', (event) => {
            if (!donateButton.contains(event.target) && !donateOptions.contains(event.target)) {
                donateOptions.classList.remove('show');
            }
        });
    }

    if (copyCvuButton) {
        copyCvuButton.addEventListener('click', () => {
            // Usamos document.execCommand para mayor compatibilidad
            try {
                const cvuText = astropayCvu.textContent;
                const tempInput = document.createElement('textarea');
                tempInput.value = cvuText;
                document.body.appendChild(tempInput);
                tempInput.select();
                document.execCommand('copy');
                document.body.removeChild(tempInput);
                
                astropayCopyMessage.textContent = '¡Copiado!';
                astropayCopyMessage.style.color = '#28a745';
                setTimeout(() => astropayCopyMessage.textContent = '', 2000);
            } catch (err) {
                astropayCopyMessage.textContent = 'Error al copiar.';
                astropayCopyMessage.style.color = '#dc3545';
                setTimeout(() => astropayCopyMessage.textContent = '', 2000);
            }
        });
    }
});
