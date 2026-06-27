import Spam from './Spam'

// render Spam 500 times - no copy-paste, just build an array of them
const Spamalot = () => {
  const spams = []
  for (let i = 0; i < 500; i++) {
    spams.push(<Spam key={i} />)
  }
  return spams
}

export default Spamalot
