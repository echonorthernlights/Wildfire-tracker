import Map from "./components/Map";
import {useState, useEffect} from 'react';
import Spinner from "./components/Spinner";

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [eventData, setEventData] = useState([])

  
useEffect(() => {
  const fetchEventData = async () => {
    const data = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events')
    const { events } = await data.json()
  
  setEventData(events);
  setIsLoading(false)
  }
  fetchEventData()
  
  // return () => {
  //   cleanup
  // }
}, [])



  return (
    <div>
      {isLoading?<Spinner/>:<Map eventData={eventData}/>}
      
    </div>
  );
}

export default App;
