import './App.css'
import MapComponent from './MapComponent'
import 'leaflet/dist/leaflet.css';


function App() {

  return (
    <div style={{height: "100vh"}}>
      <h1>地図アプリ</h1>
      <MapComponent />
    </div>
  )
}

export default App
