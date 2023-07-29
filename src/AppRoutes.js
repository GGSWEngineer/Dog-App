import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';



function AppRoutes(props) {
  return (
    <Routes>
      <Route path="/" element={<h1>Home Page</h1>} />
      <Route path="/dogs" element={<DogList dogs={props.dogs} />} />
      <Route path="/dogs/:name" element={<DogDetails dogs={props.dogs} />} />
      <Route path="*" element={<h1>Page Not Found</h1>}/>
    </Routes>
  );
}

export default AppRoutes;
