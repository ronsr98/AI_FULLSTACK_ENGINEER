import './App.css'

// the data lives outside the return, like the exercise asked
const companies = [
  { name: "Tesla", revenue: 140 },
  { name: "Microsoft", revenue: 300 },
  { name: "Google", revenue: 600 },
]

function App() {
  // Exercise 1 - returns a div for one company
  const showCompany = (name, revenue) => {
    return <div id={name} key={name}>{name} makes {revenue} every year</div>
  }

  // Exercise 2 - pick a class based on the temperature
  const getClassName = (temperature) => {
    if (temperature < 15) return "freezing"
    if (temperature <= 30) return "fair"
    return "hell-scape"
  }

  const temperature = 22 // change this to see the box color change

  return (
    <div className="app">
      <div className="ex-space">
        <h4 className="ex-title">Exercise 1</h4>
        <div className="exercise" id="ex-1">
          {/* map each company through showCompany */}
          {companies.map((c) => showCompany(c.name, c.revenue))}
        </div>
      </div>

      <div className="ex-space">
        <h4 className="ex-title">Exercise 2</h4>
        <div className="exercise" id="ex-2">
          <div id="weatherBox" className={getClassName(temperature)}></div>
        </div>
      </div>
    </div>
  )
}

export default App
