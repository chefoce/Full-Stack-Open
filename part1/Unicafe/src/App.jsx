import { useState } from "react";

const Title = ({ text }) => <h1>{text}</h1>

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const StadisticsLine = ({text,value}) => (
 <tr>
    <td>{text}</td>
    <td>{value}</td>
 </tr>
)

const Stadistics = (props) => {
  if(props.allClicks === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <StadisticsLine text="Good" value={props.good}></StadisticsLine>
          <StadisticsLine text="Neutral" value={props.neutral}></StadisticsLine>
          <StadisticsLine text="Bad" value={props.bad}></StadisticsLine>
          <StadisticsLine text="All" value={props.allClicks}></StadisticsLine>
          <StadisticsLine text="Average" value={props.average}></StadisticsLine>
          <StadisticsLine text="Positive" value={props.positive+" %"}></StadisticsLine>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const [rating, setRating] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    allClicks: 0,
  });

  const handleClickGood = () => {
    setRating({
      ...rating,
      good: rating.good + 1,
      allClicks: rating.allClicks + 1,
    });
  };
  const handleClickNeutral = () => {
    setRating({
      ...rating,
      neutral: rating.neutral + 1,
      allClicks: rating.allClicks + 1,
    });
  };
  const handleClickBad = () => {
    setRating({
      ...rating,
      bad: rating.bad + 1,
      allClicks: rating.allClicks + 1,
    });
  };

  const isCero = rating.allClicks === 0 ? true : false;
  const average = isCero ? 0 : (rating.good - rating.bad) / rating.allClicks;
  const positive = isCero ? 0 : (rating.good / rating.allClicks)*100;
 
  return (
    <div>
      <Title text={"Give Feedback"}></Title>
      <Button handleClick={handleClickGood} text={"Good"} />
      <Button handleClick={handleClickNeutral} text={"Neutral"} />
      <Button handleClick={handleClickBad} text={"Bad"} />
      <Title text={"Stadistics"}></Title>
      <Stadistics 
                  allClicks={rating.allClicks}
                  good={rating.good} 
                  neutral={rating.neutral}
                  bad={rating.bad}
                  average={average}
                  positive={positive}>
      </Stadistics>
    </div>
  );
};

export default App;
