import React from "react";
import Header from "./Header";
import Content from "./Content";

const Course = ({ course }) => {
  const totalExercises = course.parts.reduce((sum, part) => {
    console.log('what is happening', sum, part)
    return sum + part.exercises; 
  }, 0);

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <strong>Total exercises: {totalExercises}</strong>
    </div>
  );
};

export default Course;
