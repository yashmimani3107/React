import React from "react";
import ReactDOM from "react-dom/client";

// React Element
// recat.craeteelement -> react lement -> js object -> rendered
const heading = React.createElement(
  "h1",
  {id:"heading"},
  "Namaste Javascript"
);
console.log(heading);

// JSX -> craeting javascript syntax(HTML like syntax)
// JSX -> babel transpiles it-> react.createElement -> js object -> HTml object rendered
//if it is component then start with capital letter
const JsxHeading = () => (
  <h1 id="heading1">Namaste Reacting using JSX</h1>
);
// console.log(jsxHeading);

// React Component
// Class based component -> old way
// functional component -> new 

// React Functional Component

const HeadingComponent = () => (
  <div id="container"> 
     <JsxHeading />
     <h1>Namaste Javascript from react Functional Component</h1>
     </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/> );

