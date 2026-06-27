// the welcome screen - uses the user name + the hottest item, both from App
const Landing = ({ user, hottest }) => {
  return (
    <div>
      <h3>Welcome, {user}</h3>
      <p>Our hottest item right now is the {hottest.item}!</p>
    </div>
  )
}

export default Landing
