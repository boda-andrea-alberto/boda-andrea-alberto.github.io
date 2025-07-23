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