import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./MapCountry.css";
// import 'leaflet/dist/leaflet.css';

function MapCountry(props) {
  const countries = props.countries;
  return (
    <>
      <MapContainer
        center={[28.033318, -15.493386]}
        zoom={2}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {countries.map((s) => {
          return (
            <Marker position={[s.latitude, s.longitude]}>
              <Popup>
                {s.title} <br /> {s.description}
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </>
  );
}
export default MapCountry;
