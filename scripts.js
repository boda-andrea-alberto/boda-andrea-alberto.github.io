function mostrarInvitados() {
  const select = document.getElementById("acompanantes");
  const container = document.getElementById("invitadosExtra");
  const texto = document.getElementById("invitadosTexto");
  const cantidad = parseInt(select.value) || 1;

  if (cantidad > 1) {
    texto.style.display = "block";
  } else {
    texto.style.display = "none";
  }

  container.innerHTML = ""; // Limpia inputs anteriores

  for (let i = 2; i <= cantidad; i++) {
    const label = document.createElement("label");
    label.textContent = `Nombre del invitado ${i}:`;

    const input = document.createElement("input");
    input.type = "text";
    input.name = `invitado_${i}`;
    input.placeholder = "Nombre y apellidos";

    label.appendChild(input);
    container.appendChild(label);
  }
}

function toggleFaq(button) {
    const item = button.parentElement;
    item.classList.toggle("open");
  }

document.addEventListener("DOMContentLoaded", () => {
  const abrir = document.getElementById("abrirModal");
  const cerrar = document.getElementById("cerrarModal");
  const modal = document.getElementById("modalRegalo");

  abrir.addEventListener("click", () => {
    modal.classList.remove("oculto");
  });

  cerrar.addEventListener("click", () => {
    modal.classList.add("oculto");
  });

  // Cierra el modal si clicas fuera del contenido
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("oculto");
    }
  });
});

  const countdown = () => {
    const endDate = new Date("2025-10-18T00:00:00").getTime();
    const now = new Date().getTime();
    const diff = endDate - now;

    if (diff <= 0) {
      document.getElementById("countdown").innerHTML = "¡Ya llegó el día!";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").textContent = days.toString().padStart(2, "0");
    document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
  };

  countdown(); // run once on load
  setInterval(countdown, 1000);