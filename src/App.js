import React from "react";
import Header from "./Header";
import NasaPhoto from "./NasaPhoto";
import Sidebar from './Sidebar'
import PhotoInfo from './PhotoInfo';
import Footer from './Footer'
import "./App.css";

function App() {
  
  return (
    
      <div className="App">
      <Header />
        <NasaPhoto />
        <PhotoInfo />
        <div>
          <Sidebar />
        </div>
        <Footer />
      </div>
    
  );
}

export default App;
