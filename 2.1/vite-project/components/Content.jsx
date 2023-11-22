import Part from "./Part";

import React from "react";

const Content = ({course}) => {
  return (
    <div>
      <ul>
        {course.parts.map((part, index) => (
          <li key={index}>
            {part.name} - {part.exercises} exercises
          </li>
        ))}
      </ul>
      
      {/* <p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p> */}
    </div>
  );
};

export default Content;
