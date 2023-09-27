import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';


// map variables
const center = {lat : 48.8545 , lng : 2.245}

const Map = () => {
const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyCJYkaCNy85nq88xGkdSB2dF2QgiOK89yQ',
    libraries: ['places']
})
if(!isLoaded){
    return Error
}
    return (
        <div style={{ position: 'absolute', height: '100%', width: '50%' }}>
          <GoogleMap
            center={center}
            zoom={5}
            mapContainerStyle={{ width: '100%', height: '100%' }}
            options={{
                streetView : false,
                zoomControl : false,
                mapTypeControl: false
            }}
          >
            <Marker  />
          </GoogleMap>
        </div>
      );
    };
 
export default Map;
