document.addEventListener('DOMContentLoaded', function() {
    cargarObras();
});

function cargarObras() {
    const obras = JSON.parse(localStorage.getItem('obras')) || [];
    const lista = document.getElementById('lista-obras');
    
    if (obras.length === 0) {
        lista.innerHTML = '<p class="no-data">No hay obras registradas.</p>';
        return;
    }
    
    lista.innerHTML = obras.map(obra => `
        <div class="obra-item">
            <h3>${obra.nombre}</h3>
            <p><strong>Ubicación:</strong> ${obra.ubicacion}</p>
            <p><strong>Tipo:</strong> ${obra.tipo}</p>
            <p><strong>Fecha Inicio:</strong> ${obra.fecha}</p>
            <p><strong>Presupuesto:</strong> $${parseFloat(obra.presupuesto).toLocaleString()}</p>
            <p><strong>Descripción:</strong> ${obra.descripcion || 'N/A'}</p>
        </div>
    `).join('');
}
