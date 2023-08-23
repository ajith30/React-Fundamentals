import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement (creates) =>  Object => HTML Element (rendered as)
const heading = React.createElement("h1", {
  id: "heading"
}, "Hello World!");

//console.log(heading); //object 

const root = ReactDOM.createRoot(document.getElementById("root"));


//JSX ==> XML-like / HTML-like syntax 
//JSX (How it works: transpiled before it reaches the JS Engine with the help of Parcel(webpack) and Babel)
//JSX (under the hood creates) => React.createElement (creates)=> Object => HTML Elemen (rendered as)


const jsxHeading = <h1 id="heading">Hello World! by JSX</h1>


//Writing multiline codes in JSX
const jsxHeading2 = (<h1 className="head">
  This is 
  Multiline
  Code
</h1>)

//console.log(jsxHeading); //object
//root.render(jsxHeading2);



//Components
//1. Class based Component
//2. Functional Component


//Functional Component
const Title = () => {
  return <h1>This is Title!</h1>
}


//Component Composition - Putting / Bringing one component to another component is called Component Composition.
const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);




root.render(<HeadingComponent />);