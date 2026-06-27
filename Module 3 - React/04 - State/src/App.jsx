import { useState } from 'react'
import './App.css'
import Hudini from './components/Hudini'
import Landing from './components/Landing'
import Home from './components/Home'

export default function App() {
  // App's state (the data from the exercise)
  const [user] = useState("Robyn")
  const [store] = useState([
    { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
    { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
    { item: "Surround Sound Pelican", price: 3099, discount: 0.05, hottest: true },
  ])
  const [shouldDiscount, setShouldDiscount] = useState(false)
  const [currentPage, setCurrentPage] = useState("Landing")

  const hottest = store.find((p) => p.hottest)

  return (
    <div className="app">
      <h2>Exercise 1</h2>
      <Hudini />

      <h2>Exercises 2-4</h2>
      <div className="controls">
        {/* Exercise 3 - switch between the pages */}
        <button onClick={() => setCurrentPage("Landing")}>Landing</button>
        <button onClick={() => setCurrentPage("Home")}>Home</button>
        {/* Exercise 4 - toggle the discount */}
        <button onClick={() => setShouldDiscount(!shouldDiscount)}>
          {shouldDiscount ? "Remove discount" : "Apply discount"}
        </button>
      </div>

      {currentPage === "Landing"
        ? <Landing user={user} hottest={hottest} />
        : <Home store={store} shouldDiscount={shouldDiscount} />}
    </div>
  )
}
