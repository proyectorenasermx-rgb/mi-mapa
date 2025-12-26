// 📍 Datos de ubicaciones
const lugares = [
  {
    nombre: "Oficina Central",
    lat: 40.4168,
    lng: -3.7038,
    info: "Horario: 9am - 6pm<br>Tel: 555-1234"
  },
  {
    nombre: "Sucursal Norte",
    lat: 40.4531,
    lng: -3.6883,
    info: "Horario: 8am - 4pm<br>Tel: 555-5678"
  },
  {
    nombre: "Sucursal Sur",
    lat: 40.3820,
    lng: -3.7074,
    info: "Horario: 10am - 7pm<br>Tel: 555-9999"
  }
];

// 🗺 Inicializa el mapa Leaflet
const map = L.map('map').setView([40.4168, -3.7038], 12);

// 🌍 Capa de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// 📋 Construye la lista de lugares
const lista = document.getElementById("lista");

// Por cada lugar, crea marcador y elemento de lista
lugares.forEach((lugar) => {
  const marker = L.marker([lugar.lat, lugar.lng])
    .addTo(map)
    .bindPopup(`<b>${lugar.nombre}</b><br>${lugar.info}`);

  const li = document.createElement("li");
  li.textContent = lugar.nombre;

  li.addEventListener("click", () => {
    map.setView([lugar.lat, lugar.lng], 15);
    marker.openPopup();
  });

  lista.appendChild(li);
});
