import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Appsection from "./Appsection";
import Cardsection from "./Cardsection";
import Footer from "./Footer";
const App = () =>{
    return(
        <div>
            <Navbar/>
            <Hero/>
            <Appsection/>
            <Cardsection/>
            <Footer/>
        </div>
    )
}

export default App;