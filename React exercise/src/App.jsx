

function App() {
  const course = 'Full Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const part4 = 'Backend'
  const exercises4 = 18

  return(
    <div>
     <Header course = {course} />
    <Content 
        part1 = {part1} exercises1 = {exercises1}
        part2 = {part2} exercises2 = {exercises2}
        part3 = {part3} exercises3 = {exercises3}
        part4 = {part4} exercises4 = {exercises4}
    />
    <Total 
        exercises1 = {exercises1} 
        exercises2 = {exercises2} 
        exercises3 = {exercises3} 
        exercises4 = {exercises4}
    />
    </div>
  )
}

const Header = (props) =>{
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}
const Content = (props) =>{
  console.log(props)
  return(
    <div>
      <Part part = {props.part1} exercise = {props.exercises1}/>
      <Part part = {props.part2} exercise = {props.exercises2}/>
      <Part part = {props.part3} exercise = {props.exercises3}/>
      <Part part = {props.part4} exercise = {props.exercises4}/>
    </div>
  )
}
const Total = (props) =>{
  return(
    <div>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3+ props.exercises4}</p> 
    </div>
  )
}
const Part = (props) =>{
  return(
    <div>
   
      <p>{props.part} {props.exercise}</p>
    </div>
  )
}

export default App
