import React, {useRef, useContext, useEffect, useState } from "react";
import "./Carousel.css"
import {windowWidth} from "../../..";
import Carouselimg from "./Carouselimg";
const Carousel=(props)=>{
    const ww=useContext(windowWidth)
    
    const [slide,setSlide]=useState(0)
    useEffect(()=>{
        setTimeout(()=>{
            slide===5 ? setSlide(0):setSlide(slide+1)   
            
        },5000);
        
    },[slide])
    if(props.data){
        
        return(
            <div className="carouselouter" style={ww ? {height:"60%",width:"100%"}:{width:"100%",aspectRatio:"2/1.2"}}>
            <div className="carousel" >
                    {<Carouselimg isMovie={props.isMovie} show={props.data[slide]} ww={ww} slide={slide}/>}
            </div>
            </div>
        )
    }
    
}

export default Carousel