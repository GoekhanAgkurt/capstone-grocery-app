import { useEffect, useState } from "react";
import { useMapEvents } from "react-leaflet/hooks";
import { Marker, Popup } from "react-leaflet";

export default function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    locationfound: (e) => {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  // useEffect(() => {
  //   map.locate();
  // }, [map]);

  return (
    position && (
      <Marker position={position} draggable>
        <Popup>You are here</Popup>
      </Marker>
    )
  );
}
