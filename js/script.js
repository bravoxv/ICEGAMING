const snowflake = document.createElement("div");
snowflake.classList.add("snowflake");

const inner = document.createElement("div");
inner.classList.add("snowflake-inner");

// Configurar estilo del copo exterior (posición, tamaño, caída)
const size = Math.random() * 5 + 2;
const startX = Math.random() * 100;
const duration = Math.random() * 10 + 5;
const delay = Math.random() * 5;
const driftDuration = Math.random() * 5 + 5;
const opacity = Math.random() * 0.5 + 0.5;

snowflake.style.width = `${size}px`;
snowflake.style.height = `${size}px`;
snowflake.style.left = `${startX}vw`;
snowflake.style.top = `-10px`;
snowflake.style.opacity = opacity;
snowflake.style.animation = `fall ${duration}s linear ${delay}s forwards`;

inner.style.width = "100%";
inner.style.height = "100%";
inner.style.animation = `drift ${driftDuration}s ease-in-out ${delay}s infinite alternate`;

// Anidar y agregar al DOM
snowflake.appendChild(inner);
snowflakesContainer.appendChild(snowflake);
