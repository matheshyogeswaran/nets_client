// import React, { useState } from "react";

// const Stars = (props) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };
//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };
//   const numTimes = props.stars;
//   const items = [];

//   for (let i = 0; i < numTimes; i++) {
//     items.push(
//       <svg
//         id="g"
//         key={i}
//         xmlns="http://www.w3.org/2000/svg"
//         width="20"
//         height="20"
//         fill={props.color}
//         className="bi bi-star-fill mx-2 "
//         viewBox="0 0 16 16"
//       >
//         <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
//       </svg>
//     );
//   }

//   return <ul>{items}</ul>;
// };

// export default Stars;

import React, { useState } from "react";

const Stars = (props) => {
  const [id, setId] = useState(0);
  const numTimes = props.stars;
  const items = [];

  for (let i = 1; i < numTimes + 1; i++) {
    items.push(
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill={props.type === 0 ? "#FFCE22" : i <= id ? "#FFCE22" : "#D9D9D9"}
        className="bi bi-star-fill mx-2 "
        viewBox="0 0 16 16"
        name={props.type === 0 ? null : props.name}
        value={props.type === 0 ? null : i}
        onClick={
          props.type === 0
            ? null
            : () => {
                setId(i);
                props.handleInputChange(props.name, i);
              }
        }
      >
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
      </svg>
    );
  }

  return <ul>{items}</ul>;
};

export default Stars;
