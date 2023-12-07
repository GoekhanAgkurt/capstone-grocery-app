import { useEffect } from "react";
import { Marker, Popup } from "react-leaflet";
import { useMapEvents } from "react-leaflet/hooks";

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

export default function CurrentMarker({
  position,
  isLoading,
  store = {},
  isCreateStore,
}) {
  const map = useMapEvents({
    locationfound: () => {
      map.flyTo(position, map.getZoom(12));
    },
  });

  useEffect(() => {
    if (!isLoading && position[0] !== "") map.locate();
  }, [position, isLoading, map]);

  return (
    position && (
      <Marker position={position} icon={redIcon}>
        {!isCreateStore && (
          <Popup>
            <h2>{store.name}</h2>
            <p>{store.note}</p>
          </Popup>
        )}
      </Marker>
    )
  );
}
