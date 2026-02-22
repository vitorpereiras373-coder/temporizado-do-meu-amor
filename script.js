function updateSystemClock() {
    const start = new Date("February 22, 2026 00:00:00").getTime(); // Início da contagem
    const target = new Date("July 1, 2026 00:00:00").getTime();
    const now = new Date().getTime();

    const total = target - start;
    const elapsed = now - start;
    const remaining = target - now;

    // Cálculo da Barra de Progresso
    const percent = Math.min(Math.max((elapsed / total) * 100, 0), 100);
    const progressBar = document.getElementById("firmware-progress");
    if(progressBar) progressBar.style.width = percent + "%";

    // Cálculo do Tempo
    const d = Math.floor(remaining / (1000 * 60 * 60 * 24));
    const h = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));

    // Update DOM
    document.getElementById("days").innerText = d.toString().padStart(3, '0');
    document.getElementById("hours").innerText = h.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = m.toString().padStart(2, '0');
}

setInterval(updateSystemClock, 1000);
updateSystemClock();
