import { Status, Wrapper } from '@googlemaps/react-wrapper';
import React from 'react'
// import MapsComponent from '../components/maps/index'
// import Marker from '../components/maps/Marker';
import SideBar from "../components/reusables/SideBar";
import SearchBar from "../components/reusables/Search";

const Search = () => {
  
  // const render = (status: Status) => {
  //   return (<h1>{status}</h1>)
  // }

  return (
    <div className='h-screen bg-[#F6FBF2] flex'>
      <SideBar />

      <div className='p-10 flex-grow'>
        <h1 className='font-bold items-center justify-center pb-10 text-3xl flex text-center'>Locate a Garage</h1>
        <SearchBar />
      </div>
    </div>
    // <Wrapper apiKey="AIzaSyCdgF7s5lHdKV3ogJHPko3KR51YqhUHnnE" render={render}>
    //     <MapsComponent center={center} zoom={zoom}>
    //       <Marker position={position} />
    //     </MapsComponent>
    // </Wrapper>
  )
}

export default Search