
import './App.css'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Welcome from './pages/Welcome'
import Denied from './pages/Denied'



function App() {


  return (
   <>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/welcome" element={<Welcome/>}/>
      <Route exact path="/denied" element={<Denied/>}/>
    </Routes>
   </>
  )
}

export default App
