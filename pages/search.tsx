import { Wrapper, Status } from '@googlemaps/react-wrapper';
import React, { useEffect, useState } from 'react';
import Map from '../components/map/Map';
import { loadMapApi } from '../utils/GoogleMapsUtils';
import Marker from "../components/map/marker/Marker"

const render = (status: Status) => {
  return <h1>{status}</h1>;
};

const Search = () => {
  const [clicks, setClicks] = useState<google.maps.LatLng>();
  const [zoom, setZoom] = useState(3);
  const [center, setCenter] = useState<google.maps.LatLngLiteral>({
    lat: 0,
    lng: 0,
  })

  const onClick = (e: google.maps.MapMouseEvent) => {
    setClicks([...clicks, e.latLng!]);
  }

  const onIdle = (m: google.maps.Map) => {
   console.log("onIdle");   
    setZoom(m.getZoom()!);
    setCenter(m.getCenter()!.toJSON());
  }

  return (
    <div className='max-h-screen max-w-screen bg-white h-screen'>
      <Wrapper apiKey='AIzaSyABVibMdkQQ5PcB0UEJJ3sPKpzxNlnyodk' render={render}>
        <Map center={center} zoom={zoom}>
          {/* <Marker position={position} /> */}
        </Map>
        </Wrapper>
    </div>
  );
};

export default Search;
