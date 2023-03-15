import React  from "react";
import Slider from "./Slider";
import Category from "./Category";
import Header from "../Header";
import Footer from "../Footer";

const Home = ()=>{
    return (
        <>
        <Header/>
            <Slider/>
            <Category/>
            <Footer/>
        </>
    )
}


export default Home