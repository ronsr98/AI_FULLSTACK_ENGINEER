import './App.css'
import Exercise1 from './components/Exercise1'
import Exercise2 from './components/Exercise2'

export default function App() {
  return (
    <div className="app">
      <h1>Data Flow</h1>

      <h2>Exercise 1 - Image gallery</h2>
      <Exercise1 />

      <h2>Exercises 2-7 - Conversations</h2>
      <Exercise2 />
    </div>
  )
}
