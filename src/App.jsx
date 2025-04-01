import './App.css'
import Home from './assets/components/Home/Home'
import Nav from './assets/components/Nav/Nav'
import Rooms from './assets/components/Rooms/Rooms'
import Amenities from './assets/components/Amenities/Amenities'
import Services from './assets/components/Servicios/Services'
import Location from './assets/components/Ubicacion/Location'
import Contact from './assets/components/Contact/Contact'
import Reviews from './assets/components/Reviews/Reviews'
import Blog from './assets/components/Blog/Blog'

function App() {

  return (
    <>
    <Nav/>
    <Home/>
    <Rooms/>
    <Amenities/>
    <Services/>
    <Location/>
    <Contact/>
    <Reviews/>
    <Blog/>
    </>
  )
}

export default App
