import React from 'react';

const Course = ({ courses }) => {
    return (
      courses.map(course => 
        /* //! ilman divin keytä tulee error, koska div on arrayn root element*/
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
    console.log("from component Part, showing", props);
    return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    )
  }
  
   const Total = ({ course }) => {
    console.log("from component Total, showing 'props.course'", course);
    //! arg. a = accumulator eli siihen "kerätään" arvot
    //! arg. c = currentValue eli kierroksen nykyinen arvo (tässä: course.part)
    //! "a + c.exercises" on joka kierroksen return value ja samalla koko funktion return value (lopussa)
    //! 0 on initialValue eli a:n arvo ekalla kierroksella, ilman sitä arrayn indeksi 0 skipataan
    const sum = course.parts.reduce((a, c) => console.log(c.exercises) || a + c.exercises, 0);
    return(
      <p> <b>Number of exercises {sum} </b> </p>
    ) 
  }   

export default Course