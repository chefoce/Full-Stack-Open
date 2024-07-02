import { useState } from 'react'


const Button = ({handleClick,text}) => (
    <button onClick={handleClick}>{text}</button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const arr = Array(8).fill(0)
  const [selected, setSelected] = useState({
    anecdote: 0,
    points: arr
  })
  
  const handleClick = () => {
    const random = Math.floor(Math.random()*anecdotes.length)
    setSelected({
      ...selected,
      anecdote: random
    })
  }

  const handleClickVote = () => {    
    console.log(selected.points[selected.anecdote])
    console.log(selected.points)
    setSelected({
      ...selected,
      points: selected.points[selected.anecdote]=selected.points[selected.anecdote]+1
    })
    console.log(selected.points)
  }

  return (
    <div>
      <p>{anecdotes[selected.anecdote]}</p>
      <p>has {arr[selected.anecdote]} votes</p>
      <Button handleClick={handleClickVote} text={'Vote'}></Button>
      <Button handleClick={handleClick} text={'Next anecdote'}></Button>
    </div>
  )
}

export default App