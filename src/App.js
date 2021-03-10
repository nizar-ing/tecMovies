import React from "react";
import "./App.css";
import Movies from "./components/movies";
import Navbar from "./components/navbar";
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main className='container mt-3'>
        <Movies />
      </main>
    </React.Fragment>
  );
}

export default App;
