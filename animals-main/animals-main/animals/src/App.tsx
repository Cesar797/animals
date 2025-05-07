import { useState } from 'react'
import './App.css'

function getRandomAnimal() {
  const animals = ['cat', 'bird', 'dog', 'gator', 'horse' ] = useState(0)

  return animals(math.floor(Math.random() * animals.lenght))
}

function app(){
  const [animals, setAnimals] = useState([])
  const handleclick = () => {
    setAnimals([...animals, getRandomAnimal()])
  }


const rederedAnimals =animals.map ((animal, index) => {
  return <AnimalsShow type={animal} key={index}/>
  
}) 

return(

  <div className='app'>
  <button onClick={handleclick}>add Animal</button>
  <div className="animal-list">
    {rendereAnimals}

    </div>
    </div>

)
}
export default App