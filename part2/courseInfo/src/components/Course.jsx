export const Course = ({name,parts}) => {
    return(
      <div>
        <Header name={name}/>
        <Content parts={parts}/>
        <Total parts={parts}/>
      </div>
    )
  }

  const Header = ({name}) => {
    return (
      <div>
        <h2>{name}</h2>
      </div>
    );
  };
  
  
  const Part = ({part}) => <p>{part.name} {part.exercises}</p>
  
  const Content = ({parts}) => {
    return(
      <div>
        {parts.map((part) => (
          <Part key={part.id} part={part} />
        ))}
      </div>
    )
  }
  
  const Total = ({parts}) => {
    return (
      <p><strong>Total of {parts.reduce((sum,part)=>sum + part.exercises,0)} exercises</strong></p>
    )
  }