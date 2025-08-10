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

            const fallDuration = Math.random() * 5 + 5;
            const driftDuration = Math.random() * 4 + 3;
            snowflake.style.animationDuration = `${fallDuration}s, ${driftDuration}s`;
            snowflake.style.animationDelay = `${Math.random() * 10}s, ${Math.random() * 5}s`;

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

    /* =============== */
    /* LÓGICA COMENTARIOS Y DONACIONES */
    /* =============== */
    function setUtterancesTheme(themeName) {
        const utterancesContainer = document.querySelector('.utterances-container');
        if (utterancesContainer) {
            utterancesContainer.innerHTML = '';
            const script = document.createElement('script');
            script.src = 'https://utteranc.es/client.js';
            script.setAttribute('repo', 'bravoxv/mi-pagina');
            script.setAttribute('issue-term', 'pathname');
            script.setAttribute('crossorigin', 'anonymous');
            script.setAttribute('async', 'true');
            script.setAttribute('theme', themeName);
            utterancesContainer.appendChild(script);
        }
    }

    setUtterancesTheme('github-dark');

    const commentButton = document.getElementById('comment-button');
    const commentsSection = document.getElementById('comments-section');
    if (commentButton && commentsSection) {
        commentButton.addEventListener('click', () => {
            commentsSection.classList.toggle('show');
        });
    }

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
