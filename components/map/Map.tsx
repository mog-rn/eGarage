import { useEffect, useRef, useState } from "react";

export interface IMap {
    mapType: google.maps.MapTypeId,
    mapTypeControl?: boolean;
}

type GoogleLatLng = google.maps.LatLng;
type GoogleMap = google.maps.Map;

const Map: React.FC<IMap> = ({mapType, mapTypeControl}) => {
  
  const ref = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<GoogleMap>()

  const startMap = (): void => {
    if (!map) {
      defaultMapStart()
    }
  }

  const defaultMapStart = (): void => {
    const defaultAddress = new google.maps.LatLng(59.9138204, 10.7522454);
    initMap(5, defaultAddress);
  }

  const initMap = (zoomLevel:number, address: GoogleLatLng): void => {
    if (ref.current) {
      setMap(
        new google.maps.Map(ref.current, {
          zoom: zoomLevel,
          center: address,
          mapTypeControl: mapTypeControl,
          streetViewControl: false,
          // zoomControl: zoomControl,
          mapTypeId: mapType
        })
      )
    }
  }
  useEffect(startMap, [map])
  return (
    <div className="flex justify-center">
      <div ref={ref} className='h-96 w-96'></div>
    </div>
  );
};

export default Map;
