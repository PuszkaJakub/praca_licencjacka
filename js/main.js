map = L.map('map').setView([51.24455299, 22.5417932], 13);

// Add tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution:
		'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Add a marker
L.marker([51.24455299, 22.5417932])
	.addTo(map)
	.bindPopup('Pomnik Marie Curie Skłodowskiej')
	.openPopup();

let userPosition;

navigator.geolocation.getCurrentPosition(position => {

    L.marker([position.coords.latitude, position.coords.longitude])
	.addTo(map)
	.bindPopup('Użytkownik')
	.openPopup();

});
