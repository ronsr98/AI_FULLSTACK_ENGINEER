import './App.css'
import Clock from './components/Clock'
import Posts from './components/Posts'

export default function App() {
  return (
    <div className="app">
      <h1>useEffect</h1>

      <h2>Exercise 1 - Clock</h2>
      <Clock />

      <h2>Exercises 2-3 - Posts</h2>
      <Posts />
    </div>
  )
}
