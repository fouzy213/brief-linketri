import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (

   <div className="page_container">
 <Navbar/>
<Outlet/>
</div>
  )
}

export default App
