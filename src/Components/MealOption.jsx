import React from 'react'
import "./MealOption.css"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MealExhibiton from './MealExhibiton';

function MealOption() {
    return (
        <div className="meal-option">
            <ul>
                <li><FiberManualRecordIcon />Burgers</li>
                <li>Chicken</li>
                <li>Noodles</li>
            </ul>
            <div className="meal-exhibition-div">
                <MealExhibiton
                    title="Cheese Burger"
                    description="The Best Cheese Burgers"
                    image="https://www.foodrepublic.com/wp-content/uploads/2012/03/033_FR11785.jpg"
                    price="$3.25"
                    styling = ""
                    iconFavorite={<FavoriteBorderIcon />}
                />
                <MealExhibiton
                    title="Beef Burger"
                    description="The Best Beef Burgers"
                    image="https://i2.wp.com/www.eatthis.com/wp-content/uploads/media/images/ext/520765216/classic-beef-burger.jpg?w=1024&ssl=1"
                    price="$4.00"
                    styling="exhibitionTwo"
                    iconFavorite={<FavoriteIcon className="liked"/>}
                />
                <MealExhibiton
                    title="Black Bean Burger"
                    description="The Best Black Bean Burgers"
                    image="https://tastesbetterfromscratch.com/wp-content/uploads/2016/03/Black-Bean-Burger-8-500x375.jpg"
                    price="$3.19"
                    styling = ""
                    iconFavorite={<FavoriteIcon className="liked"/>}
                />
                <MealExhibiton
                    title="Wild Salmon Burger"
                    description="The Best Wild Salmon Burgers"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi7-94uIkBThq2M2k4Kcz86BPuNRS9lm8Bqw&usqp=CAU"
                    price="$2.80"
                    styling = ""
                    iconFavorite={<FavoriteBorderIcon />}
                />
            </div>
            <div className="forward-icon">
                - <ArrowForwardIcon/>
            </div>
        </div>
    )
}

export default MealOption
