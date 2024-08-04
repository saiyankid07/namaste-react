/**
 *<div id = "parent">
       <div id = "child">
       <h1>I'm an h1 tag</h1>
       
       </div>
 
 
 </div>
 *
 */
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'am an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
]);

// create h1 element in React
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!"
// );
console.log(parent);
// {} this object is the place where you will give arrtibutes to your elements
// create root in div with root id
const root = ReactDOM.createRoot(document.getElementById("root"));
// render heading in root
root.render(parent);
