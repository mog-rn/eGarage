import React, { useEffect } from 'react';
import Map from '../components/map/Map';
import { loadMapApi } from '../utils/GoogleMapsUtils';

const Search = () => {
  const [scriptLoaded, setScriptLoaded] = React.useState(false);

  useEffect(() => {
    const googleMapScript = loadMapApi();
    googleMapScript.addEventListener('load', () => {
      setScriptLoaded(true);
    });
  }, [])

  return (
    <div className='max-h-screen max-w-screen bg-white h-screen'>
      {scriptLoaded &&  (<Map 
      mapType={google.maps.MapTypeId.ROADMAP}
      mapTypeControl={true} />)}
    </div>
  );
};

export default Search;
