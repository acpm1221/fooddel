import "./App.css"
import HomePage from "./Components/HomePage"
import Quotes from "./Components/Quotes"
import ResturantHomePage from "./Components/ResturantHomePage"
import Contact from "./Components/Contact"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="MainContainer">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Quotes" element={<Quotes />} />
          <Route path="/ResturantHomePage" element={<ResturantHomePage />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
