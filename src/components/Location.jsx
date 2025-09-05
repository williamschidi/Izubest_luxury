import Section from "./Section";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function Location() {
  return (
    <Section>
      <div
        id="location"
        className="w-full flex flex-col md:flex-row items-stretch justify-center "
      >
        <div className="w-full md:w-[30%] px-3 sm:px-10 py-10 space-y-2 bg-gray-100 text-center md:text-left">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
            We are open
          </p>
          <h2 className="[text-shadow:2px_2px_4px_rgba(0,0,0,0.3)] text-lg md:text-xl font-semibold mt-2 mb-6 bg-gradient-to-tr from-yellow-400 to-yellow-800 bg-clip-text text-transparent">
            Visit us at No 33 Rehabilitation Road Emene
            Enugu
          </h2>
        </div>

        <div className="w-full h-[25rem]">
          <MapContainer
            center={[6.4808, 7.57778]} // Lagos coordinates
            zoom={13}
            scrollWheelZoom={true}
            className="h-full w-full"
          >
            {/* Map tiles (OpenStreetMap here) */}
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Marker */}
            <Marker position={[6.4808, 7.57778]}>
              <Popup>
                {/* <p style={{ fontSize: ".5rem" }}> */}
                Izubest Luxury LTD.
                {/* </p> */}
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </Section>
  );
}

export default Location;
