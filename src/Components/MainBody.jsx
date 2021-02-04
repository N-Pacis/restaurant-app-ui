import React from 'react'
import FoodType from './FoodType'
import MealOption from './MealOption'
import "./MainBody.css"


export default function MainBody() {
    return (
        <div className="main-body">
            <FoodType 
                title="Fresh Healthy"
                subTitle="Delicious Burgers"
                description="We make fresh and healthy foods"
                imageTwo="https://images.unsplash.com/photo-1549892898-79ac97b31fb2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                imageThree="https:S//images.unsplash.com/photo-1549892898-79ac97b31fb2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                image="https://wallpapermemory.com/uploads/276/burger-background-hd-1920x1200-149151.jpg"
            />    
            <MealOption />                                        
        </div>
    )
}
