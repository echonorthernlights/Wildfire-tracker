import {useState} from 'react';
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'


const Map = ({eventData, zoom , center}) => {
    const [locationInfo, setLocationInfo] = useState(null)
    const markers = eventData.map((singleEvent) => {
      
       if(singleEvent.categories[0].id === 8){
           console.log(singleEvent)
        return <LocationMarker 
        onClick={() => {setLocationInfo({id:singleEvent.id, title:singleEvent.title})}}
        lat={singleEvent.geometries[0].coordinates[1]} lng={singleEvent.geometries[0].coordinates[0]}    
        />

       }

       return null;
    })
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{key : process.env.REACT_APP_MAPS_KEY}}
                defaultZoom = { zoom } defaultCenter={ center } 
            >
            {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo}/>}
        </div>
    )

}

Map.defaultProps = {
    center : {
        lat:42.32565,
        lng:-122.8756
    },
    zoom : 6
}

export default Map
