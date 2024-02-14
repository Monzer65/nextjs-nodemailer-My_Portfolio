import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";

const OpenStreetMap = () => {
  return (
    <>
      <MapContainer
        style={{
          minHeight: "200px",
          maxHeight: "400px",
          width: "100%",
          maxWidth: "448px",
          borderRadius: "5px",
          marginInline: "auto",
        }}
        center={[35.3144, 46.9923]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={[35.3144, 46.9923]}>
          <Popup>Tech...</Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default OpenStreetMap;
