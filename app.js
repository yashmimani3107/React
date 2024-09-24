//nested components
/**
 *
 * <div id =parent>
 * <div id:"child">
 * <h1> "i am h1 tag</h1>
 * </div>
 *
 * </div>
 *
 *
 *
 */
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "I am h1 tag"), React.createElement("h2", {}, "I am h2 tag")]
  )
);

// const heading = React.createElement(
//   "h1",
//   {
//     id: "heading",
//     xyz: "abc",
//   },
//   "Hello World From React"
// );

console.log(parent); // javascript object or react element

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
