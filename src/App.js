import "./App.css";
import React from "react";
import hazel from "./imgs/hazel.jpg";
import whiskey from "./imgs/whiskey.jpg";
import tubby from "./imgs/tubby.jpg";
import Navbar from "./Navbar";
import AppRoutes from "./AppRoutes";

// Define the dogs array outside the component function
const dogs = [
  {
    name: "Whiskey",
    age: 5,
    src: whiskey,
    facts: [
      "Whiskey loves eating popcorn.",
      "Whiskey is a terrible guard dog.",
      "Whiskey wants to cuddle with you!",
    ],
  },
  {
    name: "Hazel",
    age: 3,
    src: hazel,
    facts: [
      "Hazel has soooo much energy!",
      "Hazel is highly intelligent.",
      "Hazel loves people more than dogs.",
    ],
  },
  {
    name: "Tubby",
    age: 4,
    src: tubby,
    facts: [
      "Tubby is not the brightest dog",
      "Tubby does not like walks or exercise.",
      "Tubby loves eating food.",
    ],
  },
];

function App(props) {
  return (
    <div className="App">
      <Navbar dogs={props.dogs} />
      <div className="container">
        <AppRoutes dogs={props.dogs} />
      </div>
    </div>
  );
}

App.defaultProps = {
  dogs: dogs,
};

// Set the dogs array as the default props for the App component

export default App;
