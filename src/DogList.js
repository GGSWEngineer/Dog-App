import React from "react";
import "./DogList.css";
import { Link } from "react-router-dom";

function DogList(props) {
  // You can use the "props" argument to access data passed to the component
  return (
    <div className="DogList">
      <h1 className="display-1 text-center mt-3 mb-5">Dog List</h1>

      <div className="row">
        {props.dogs.map((dog) => (
          <div key={dog.name} className="Dog col-lg-4 text-center">
            <img src={dog.src} alt={dog.name} />
            <h3 className="mt-3">
              <Link className="underline"to={`/dogs/${dog.name}`}>{dog.name}</Link>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DogList;
