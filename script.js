// Configurar el tiempo del contador en minutos (ej: 120 minutos = 2 horas)
let timeInMinutes = 120;
let timeInSeconds = timeInMinutes * 60;

const countdownElement = document.getElementById('countdown');

function updateCountdown() {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    // Formatear con ceros a la izquierda si es necesario
    const formattedTime = 
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    countdownElement.textContent = formattedTime;

    if (timeInSeconds > 0) {
        timeInSeconds--;
    } else {
        // Reiniciar el contador cuando llega a cero (simulando urgencia constante)
        timeInSeconds = timeInMinutes * 60;
    }
}

// Actualizar el contador cada segundo
setInterval(updateCountdown, 1000);

// Inicializar la primera vez
updateCountdown();
