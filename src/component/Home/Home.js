import React  from "react";
import Slider from "./Slider";
import Category from "./Category";
import About from "./About";
import Header from "../Header";
import Footer from "../Footer";

const Home = ()=>{
    return (
        <>
        <Header/>
            <Slider/>
            <Category/>
            <About/>
            <Footer/>
        </>
    )
}


export default Home