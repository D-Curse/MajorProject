import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Landing'
import Dashboard from './pages/Dashboard'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="bg-gradient-to-b from-[#3F1F58] to-[#1C2F5D]">
        <Navbar/>
        <div className="App">
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Dashboard' element={<Dashboard/>}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;