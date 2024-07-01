import { useState } from 'react'

const Title = ({text}) => <h1>{text}</h1>

const Button =({handleClick,text}) => (
  <button onClick={handleClick} >
    {text}
  </button>
)


const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)
  const [average, setAverage] = useState(0)

  const handleClickGood = () => {
    setAll(allClicks+1)
    setGood(good+1)
    setAverage()
  }
  const handleClickNeutral = () => {
    setAll(allClicks+1)
    setNeutral(neutral+1)
  }
  const handleClickBad = () => {
    setAll(allClicks+1)
    setBad(bad+1)
  }
  const calcAvergage = () => {
    setAverage((good-bad)/allClicks)
  }

  

  return (
    <div>
      <Title text={'Give Feedback'}></Title>
      <Button handleClick={handleClickGood} text={'Good'}/>
      <Button handleClick={handleClickNeutral} text={'Neutral'}/>
      <Button handleClick={handleClickBad} text={'Bad'}/>
      <Title text={'Stadistics'}></Title>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All {allClicks}</p>
      <p>Average {average}</p>
    </div>
  )
}

export default App