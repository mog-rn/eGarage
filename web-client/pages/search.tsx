import { Status, Wrapper } from '@googlemaps/react-wrapper';
import React from 'react'
import MapsComponent from '../components/maps/index'

const Search = () => {
  
  const render = (status: Status) => {
    return (<h1>{status}</h1>)
  }

  return (
    <Wrapper apiKey="AIzaSyCdgF7s5lHdKV3ogJHPko3KR51YqhUHnnE" render={render}>
        <MapsComponent />
    </Wrapper>
  )
}

export default Search