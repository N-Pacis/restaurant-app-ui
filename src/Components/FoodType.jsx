import React from 'react'
import "./FoodType.css"

function FoodType(props) {
    return (
        <div className="food-type">
            <div className="main-dish">
                <h1>{props.title}</h1>
                <h2>{props.subTitle}</h2>
                <p>{props.description}</p>
                <img src="undraw_Hamburger_8ge6.svg" alt={props.subTitle}/>
            </div>
        </div>  
    )
}

export default FoodType
