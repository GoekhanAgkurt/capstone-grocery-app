import { useEffect } from "react";
import { useMapEvents } from "react-leaflet/hooks";
import { Marker, Popup } from "react-leaflet";

export default function UserLocationMarker({
  onSetUserPosition,
  userPosition,
}) {
  const map = useMapEvents({
    locationfound: (e) => {
      const foundLocation = e.latlng;
      onSetUserPosition({ lat: foundLocation.lat, lng: foundLocation.lng });
      map.setView([foundLocation.lat, foundLocation.lng]);
    },
  });
  useEffect(() => {
    map.locate();
  }, [map]);

  return (
    userPosition && (
      <Marker position={userPosition}>
        <Popup>You are here</Popup>
      </Marker>
    )
  );
}
