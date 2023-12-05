import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import styled from "styled-components";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import LocationMarker from "./LocationMarker";

const StyledMapContainer = styled(MapContainer)`
  height: 30vh;
  width: calc(100%+30px);
  margin: 0 -15px;
  z-index: 0;
`;

const redIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
const greyIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [17, 27],
  iconAnchor: [8, 27],
  popupAnchor: [1, -22],
  shadowSize: [27, 27],
});

export default function Map({ stores, currentStore, addressSearch, isEdit }) {
  return (
    <StyledMapContainer
      center={[51.51365366910267, 7.469919177246061]}
      zoom={12}
      scrollWheelZoom
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {stores.map((store) => (
        <Marker
          key={store._id}
          position={
            addressSearch &&
            addressSearch.address &&
            store._id === currentStore._id
              ? [addressSearch.lat, addressSearch.long]
              : [store.lat, store.long]
          }
          icon={store._id === currentStore._id ? redIcon : greyIcon}
          title={store.name}
        >
          <h2>{store.name}</h2>
          <Popup>
            <h2>{store.name}</h2>
            <p>{store.note}</p>
          </Popup>
        </Marker>
      ))}

      <LocationMarker />
    </StyledMapContainer>
  );
}