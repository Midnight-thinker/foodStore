import React, { useState } from 'react'
import cabbagesalad from "../images/cabbagesalad.jpg"
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

function Addfood(props) {
    const [cart,setCart]=useState(1);

    function handleClick() {
        props.onDelete(props.id);
      }

      function handleIncrement(id){
        if(cart<9){
            setCart( prevFood=> prevFood+1);
        }
      }

      function handleDecrement(id){
        if(cart>1){
            setCart( prevFood=> prevFood-1);
        }
      }
    return (
        <div>
          
          <div className='btns2'>
          <img className='imgg' src={cabbagesalad}></img>
          <p className='title'>{props.name} <span>{props.gram}</span></p>
          <button className='amount'> <RemoveIcon onClick={()=>{handleDecrement(props.id)}} className='icon2' fontSize="small" /> {cart} <AddIcon onClick={()=>{handleIncrement(props.id)}} className='icon1' fontSize="small" /> </button>
          <div className='btns'>
          <p className='pp'>$</p>
          <p className='pp2 '> {props.price}</p></div>
          <CloseIcon className='close' fontSize='small' onClick={handleClick} />
          </div>
        
        </div>
    )
}

export default Addfood 
