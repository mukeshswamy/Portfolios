import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navigation/Navbar";
import Hero from "./component/Hero/Hero";
import Aboutme from "./component/Aboutme/Aboutme";
import Services from "./component/Services/Services";

function App() {
  return (
   <BrowserRouter>
   <main>
     <Route to="/" exact>
       <Navbar/>
       <Hero/>
       <Aboutme/>
       <Services/>
     </Route>
   </main>
   </BrowserRouter>
  );
}

export default App;
