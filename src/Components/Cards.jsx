import React,{useState, useEffect} from 'react'
import StarIcon from '@material-ui/icons/Star';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddCircleIcon from '@material-ui/icons/AddCircle';

function Cards(props) {

    const [food, setfood] = useState({
       name:" ",
       price:" "
    });
    
    useEffect(
        () => {
    // 
    setfood(prevfood => {
      return {
        name : props.name,
        gram : props.gram,
        price : props.price
      };
    });
    
},[food]);
    
    function submitfood() {
    props.onAdd(food);
    setfood({
        name:" ",
        price:" "
    });
    }
    
    return (
        <div class={`card ${props.bg}`} style={{width: "14rem", height: "14rem"}}>
            <div className='btns'>
            <button class="rating" type='disable'><StarIcon className='star' fontSize='small' /><span> {props.rate}</span> </button> 
            <button className='fav' type='disable'><FavoriteIcon fontSize='medium' /></button>
            </div>
            <img src={props.img} class="card-img-top" alt="..." />
            <div class="card-body">
                <p class="card-text"  value={food.name} name="name"  >{props.name}   <button class={`gram ${props.col}`} type='disable'>{props.gram}</button> </p>
                <div className='btns'>
                <div className='btns'>
                <h6>$</h6>
                <h6 class="card-title" name="price" value={food.price}> {props.price}</h6>
                </div>
                <AddCircleIcon className='add' fontSize='medium' onClick={() => {submitfood();}} />
                </div>
            </div>
        </div>
    )
}

export default Cards
