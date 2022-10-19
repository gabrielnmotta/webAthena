
import "./maps.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export function Maps() {

  return (
    <div className="featured">

        <MapContainer
          center={[-17.843621,-50.422762]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[-17.843621,-50.422762]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer> 
    </div>
  );
}
