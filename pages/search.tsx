import { Wrapper, Status } from '@googlemaps/react-wrapper';
import React, { useEffect, useState } from 'react';
import Map from '../components/map/Map';
import Marker from '../components/map/marker/Marker';
import SidebarLayout from '../components/layouts/sidebar/SidebarLayout';
import { NextPageWithLayout } from './page';

const render = (status: Status) => {
  return <h1>{status}</h1>;
};

const Search: NextPageWithLayout = () => {
  const [clicks, setClicks] = useState<google.maps.LatLng[]>([]);
  const [zoom, setZoom] = useState(3); // Initial zoom level
  const [center, setCenter] = useState<google.maps.LatLngLiteral>({
    lat: -34.397,
    lng: 150.644,
  });

  const onClick = (e: google.maps.MapMouseEvent) => {
    setClicks([...clicks, e.latLng!]);
  };

  const onIdle = (m: google.maps.Map) => {
    console.log('onIdle');
    setZoom(m.getZoom()!);
    setCenter(m.getCenter()!.toJSON());
  };

  return (
    <div className="max-h-screen max-w-screen bg-white h-screen flex">
      <div className="w-[36rem]">Search results</div>
      <Wrapper apiKey="AIzaSyBy3p7-C-8TZ7t26xFQ55YTQ99jQPWlXgI" render={render}>
        <Map
          center={center}
          zoom={zoom}
          style={{ flexGrow: '1', height: '100%' }}
        >
          {clicks.map((latLng, i) => (
            <Marker key={i} position={latLng} />
          ))}
        </Map>
      </Wrapper>
    </div>
  );
};

export default Search;

Search.getLayout = (page) => {
  return <SidebarLayout>{page}</SidebarLayout>;
};
