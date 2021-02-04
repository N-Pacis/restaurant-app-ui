import React from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import "./MealExhibition.css"

function MealExhibiton(props) {
    return (
        <div className={`meal-exhibition ${props.styling}`}>
            <div className="meal-image">
                <img src={props.image} alt={props.title}/>
            </div>
            <h1>{props.title}</h1>
            <p className="description">{props.description}</p>
            <h2>{props.price}</h2>
            {props.iconFavorite}
            {console.log(props.iconFavorite)}
        </div>
    )
}

export default MealExhibiton
