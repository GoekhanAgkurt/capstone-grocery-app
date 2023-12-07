import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import styled from "styled-components";
import * as L from "leaflet";
import Icon from "@/components/Icons";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import Link from "next/link";
import CurrentMarker from "@/components/Map/CurrentMarker";

const StyledMapAndIconContainer = styled.div`
  position: relative;
`;
const StyledLoadingIcon = styled(Icon)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;
const StyledMapContainer = styled(MapContainer)`
  height: 30vh;
  width: calc(100%+30px);
  margin: 0 -15px;
  z-index: 0;
`;

const StyledLink = styled(Link)`
  h2 {
    color: var(--primaryDarkColor);
    &:hover {
      cursor: pointer;
      color: var(--accentColor);
    }
  }
  text-decoration: none;
`;
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

export default function Map({
  stores,
  currentStore = {},
  currentCoordinates,
  isLoading,
}) {
  console.log("current Coordinates : ", currentCoordinates);
  const isCreateStore = Object.keys(currentStore).length === 0;
  return (
    <StyledMapAndIconContainer>
      {isLoading && (
        <StyledLoadingIcon variant="upload" size="40" color="red" />
      )}
      <StyledMapContainer
        center={[51.51365366910267, 7.469919177246061]}
        zoom={12}
        scrollWheelZoom
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <StyledLoadingIcon variant="upload" size="40" color="red" />
        {isCreateStore && (
          <CurrentMarker
            key="currentMarker"
            position={
              currentCoordinates && currentCoordinates.length !== 0
                ? [currentCoordinates[0].lat, currentCoordinates[0].lon]
                : ["", ""]
            }
            isLoading={isLoading}
            isCreateStore={isCreateStore}
          />
        )}
        {stores.map((store) =>
          store._id === currentStore._id ? (
            <CurrentMarker
              key="currentMarker"
              store={store}
              position={
                currentCoordinates && currentCoordinates.length !== 0
                  ? [currentCoordinates[0].lat, currentCoordinates[0].lon]
                  : ["", ""]
              }
              isLoading={isLoading}
            />
          ) : (
            <Marker
              key={store._id}
              position={[store.lat, store.lon]}
              icon={greyIcon}
              title={store.name}
            >
              <Popup>
                <StyledLink href={`/stores/${store._id}`}>
                  <h2>{store.name}</h2>
                </StyledLink>
                <p>{store.note}</p>
              </Popup>
            </Marker>
          )
        )}
      </StyledMapContainer>
    </StyledMapAndIconContainer>
  );
}
