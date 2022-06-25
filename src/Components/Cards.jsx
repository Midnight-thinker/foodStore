import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function Cards(props) {
    return (
        <div class={`card ${props.bg}`} style={{width: "14rem", height: "14rem"}}>
            <div className='btns'>
            <button class="rating" type='disable'><StarIcon className='star' fontSize='small' /><span> {props.rate}</span> </button> 
            <button className='fav' type='disable'><FavoriteBorderIcon fontSize='medium' /></button>
            </div>
            <img src={props.img} class="card-img-top" alt="..." />
            <div class="card-body">
                <p class="card-text">{props.text}   <button class={`gram ${props.col}`} type='disable'>{props.gram}</button> </p>
                <h6 class="card-title">{props.price}</h6>
            </div>
        </div>
    )
}

export default Cards
