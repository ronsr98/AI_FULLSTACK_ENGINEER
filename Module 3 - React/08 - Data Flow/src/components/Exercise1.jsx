import { useState } from 'react'

// Exercise 1 - a tiny image gallery with back/forward buttons
const Exercise1 = () => {
  const [images] = useState([
    'https://hips.hearstapps.com/hmg-prod/images/lychee-fruit-sugar-1530136136.jpg?crop=1xw:1xh;center,top&resize=640:*',
    'https://hips.hearstapps.com/hmg-prod/images/mango-fruit-sugar-1530136260.jpg?crop=1xw:1xh;center,top&resize=640:*',
    'https://hips.hearstapps.com/hmg-prod/images/cherries-sugar-fruit-1530136329.jpg?crop=1xw:1xh;center,top&resize=640:*',
  ])
  const [currentImg, setCurrentImg] = useState(0)

  // keep the index inside the array so we never land on a missing image
  const shiftImageBack = () => setCurrentImg((i) => Math.max(0, i - 1))
  const shiftImageForward = () => setCurrentImg((i) => Math.min(images.length - 1, i + 1))

  return (
    <div className="gallery">
      <button className="back" onClick={shiftImageBack}>◀</button>
      <img src={images[currentImg]} alt="fruit" />
      <button className="forward" onClick={shiftImageForward}>▶</button>
    </div>
  )
}

export default Exercise1
