// 📍 Datos de ubicaciones
const lugares = [
  {
    nombre: "Pozo 1",
    lat: 19.317364,
    lng: -98.848323,
    info: "hornos zoquiapan"
  },
  {
    nombre: "Pozo 2",
    lat: 19.338547,
    lng: -98.866603,
    info: "Horario: 8am - 4pm<br>Tel: 555-5678"
  },
  {
    nombre: "Pozo 3",
    lat: 19.321736,
    lng: -98.881706,
    info: "Horario: 10am - 7pm<br>Tel: 555-9999"
  }
];

// 🗺 Inicializa el mapa Leaflet
const map = L.map('map').setView([19.31246, -98.88392], 12);

// 🌍 Capa base OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// 📌 Definir icono personalizado
const iconoPozos = L.icon({
  iconUrl: 'iconopozos.png',   // ruta a tu icono
  iconSize: [40, 40],          // tamaño del icono en px
  iconAnchor: [20, 40],        // punto del icono que corresponde a la ubicación
  popupAnchor: [0, -35]        // punto desde donde sale el popup
});

// 📋 Construir lista de lugares
const lista = document.getElementById("lista");

lugares.forEach((lugar) => {
  // Crear un marcador con el icono personalizado
  const marker = L.marker([lugar.lat, lugar.lng], { icon: iconoPozos })
    .addTo(map)
    .bindPopup(`<b>${lugar.nombre}</b><br>${lugar.info}`);

  // Crear elemento de lista
  const li = document.createElement("li");
  li.textContent = lugar.nombre;

  // Evento para centrar el mapa y abrir el popup
  li.addEventListener("click", () => {
    map.setView([lugar.lat, lugar.lng], 15);
    marker.openPopup();
  });

  lista.appendChild(li);
});
