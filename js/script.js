document.addEventListener('DOMContentLoaded', () => {
    
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
