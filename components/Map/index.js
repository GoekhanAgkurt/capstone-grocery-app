import Link from "next/link";

import styled from "styled-components";

import useLocalStorageState from "use-local-storage-state";
import useSWR from "swr";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Lottie from "lottie-react";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

import LoadingAnimation from "@/public/lottiefiles/LoadingAnimation.json";

import CurrentMarker from "@/components/Map/CurrentMarker";

import UserLocationMarker from "@/components/Map/UserLocationMarker";
import LottieFile from "../LottieFile";

const StyledMapAndIconContainer = styled.div`
  position: relative;
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

const StyledLottie = styled(Lottie)`
  width: 30%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
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
  currentStore = {},
  currentCoordinates,
  isLoading,
}) {
  const [userPosition, setUserPosition] = useLocalStorageState("userPosition", {
    lat: "",
    lng: "",
  });
  const {
    data: stores,
    isLoading: isLoadingStores,
    error: errorStores,
  } = useSWR("/api/stores");

  function handleSetUserPosition(coordinates) {
    setUserPosition(coordinates);
  }

  const isCreateStore = Object.keys(currentStore).length === 0;
  if (isLoadingStores)
    return (
      <LottieFile variant="loadingProductsAndStores">
        Loading Stores...
      </LottieFile>
    );
  if (errorStores)
    return <LottieFile variant="error">Error loading stores</LottieFile>;
  return (
    <StyledMapAndIconContainer>
      {isLoading && (
        <StyledLottie loop={true} animationData={LoadingAnimation} />
      )}
      <StyledMapContainer
        center={userPosition ? [userPosition.lat, userPosition.lng] : ["", ""]}
        zoom={12}
        scrollWheelZoom
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <UserLocationMarker
          onSetUserPosition={handleSetUserPosition}
          userPosition={userPosition}
        />
        {isCreateStore && (
          <>
            <CurrentMarker
              key="currentMarker"
              position={
                currentCoordinates && currentCoordinates.length
                  ? [currentCoordinates[0].lat, currentCoordinates[0].lon]
                  : ["", ""]
              }
              isLoading={isLoading}
              isCreateStore={isCreateStore}
            />
          </>
        )}
        {stores.map((store) =>
          store._id === currentStore._id ? (
            <CurrentMarker
              key="currentMarker"
              store={store}
              position={
                currentCoordinates && currentCoordinates.length
                  ? [currentCoordinates[0].lat, currentCoordinates[0].lon]
                  : ["", ""]
              }
              isLoading={isLoading}
            />
          ) : (
            <Marker
              key={store._id}
              position={[store.lat || "", store.lon || ""]}
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
