import './App.css'
import Company from './Company'

export default function App() {
  const companies = [
    { name: "Tesla", revenue: 140 },
    { name: "Microsoft", revenue: 300 },
    { name: "Google", revenue: 600 },
  ]

  return (
    <div className="app">
      {/* map each company object into a Company tag, passing the data down as props */}
      {companies.map((c) => (
        <Company key={c.name} name={c.name} revenue={c.revenue} />
      ))}
    </div>
  )
}
