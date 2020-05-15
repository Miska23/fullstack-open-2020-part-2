import React from 'react';

const Course = ({ courses }) => {
    return (
      courses.map(course => 
        <div key={course.id}>
        <Header course={course}/>
        <Content course={course} key={course.id}/>
        <Total course={course}/>
        </div>
      )
    )
  }
  
const Header = ({ course }) => {
    return (
      <h4>{course.name}</h4>
    )
  }
  
const Content = ({ course }) => {
    return (
      course.parts.map(part => <Part key={part.id} part={part}/>)
    )
  } 
  
const Part = (props) => {  
    return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    )
  }
  
const Total = ({ course }) => {
    const sum = course.parts.reduce((a, c) => a + c.exercises, 0);
    return(
      <p> <b>Number of exercises {sum} </b> </p>
    ) 
  }   

export default Course