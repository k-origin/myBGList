import Nav from "./components/Nav.jsx"
import GameList from "./components/GameList.jsx"
import Home from "./components/Home.jsx"

import { Routes, Route } from "react-router-dom"

import "./styles/reset.scss"
import "./styles/layout.scss"

function App() {
  return (
    <div className="container">

      <nav>
        <Nav />
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/GameList" element={<GameList />} />
        </Routes>
      </main>

    </div>
  )
}

export default App