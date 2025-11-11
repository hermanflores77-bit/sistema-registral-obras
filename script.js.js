// Manejo del formulario de registro
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.obra-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener datos del formulario
            const formData = {
                nombre: document.getElementById('nombre').value,
                ubicacion: document.getElementById('ubicacion').value,
                tipo: document.getElementById('tipo').value,
                fecha: document.getElementById('fecha').value,
                presupuesto: document.getElementById('presupuesto').value,
                descripcion: document.getElementById('descripcion').value
            };
            
            // Guardar en localStorage (simulación de base de datos)
            guardarObra(formData);
            
            // Mostrar mensaje de éxito
            alert('¡Obra registrada exitosamente!');
            form.reset();
            
            // Redirigir a consultas
            setTimeout(() => {
                window.location.href = 'consultas.html';
            }, 1000);
        });
    }
});

function guardarObra(obra) {
    let obras = JSON.parse(localStorage.getItem('obras')) || [];
    obra.id = Date.now(); // ID único
    obras.push(obra);
    localStorage.setItem('obras', JSON.stringify(obras));
}
