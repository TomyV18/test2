// Toggle del menú principal en móviles
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
menuToggle.addEventListener('click', () => {
  menu.classList.toggle('show');
});

// Función (si la necesitas) para el botón (ya no se recarga la página)
function toggleMenu(e) {
  e.preventDefault(); // Evita el comportamiento por defecto del botón
  document.getElementById("menu").classList.toggle("show");
}

// Toggle de los dropdowns en móviles (cuando el ancho de ventana es ≤768px)
document.addEventListener('DOMContentLoaded', () => {
  const dropdownToggles = document.querySelectorAll('.dropdown > .dropdown-toggle');
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        e.preventDefault(); // Evita que se siga el enlace
        e.stopPropagation(); // Evita que el clic se propague al documento y cierre el dropdown inmediatamente
        const currentDropdown = this.nextElementSibling;
        // Cerrar cualquier otro dropdown que esté abierto
        document.querySelectorAll('.dropdown .dropdown-content').forEach(content => {
          if (content !== currentDropdown) {
            content.classList.remove('show-dropdown');
          }
        });
        // Alterna el dropdown actual
        currentDropdown.classList.toggle('show-dropdown');
      }
    });
  });
});

// Cerrar cualquier dropdown si se hace clic fuera de ellos
document.addEventListener('click', function(e) {
  if (window.innerWidth <= 768) {
    // Si el clic NO ocurrió dentro de un elemento con clase "dropdown"
    if (!e.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown .dropdown-content').forEach(content => {
        content.classList.remove('show-dropdown');
      });
    }
  }
});