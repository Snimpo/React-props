import React from "react";
import "./App.css";

function Cards(props){

    //after adding the props parameter to the function we can then call the propieties using props.(tne name of the propiety we are trying to tap into)

    return (
        <>
        <h2 className="testing">{props.name}</h2>
        <img width="400px" height= "400px"src={props.img}></img>
        <p>{props.tel}</p>
        <p>{props.email}</p>
        </>

    )




}

export default Cards;