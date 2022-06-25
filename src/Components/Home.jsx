import React, { useState } from 'react'
import Cards from './Cards'
import cabbagesalad from "../images/cabbagesalad.jpg"
import FilterListIcon from '@material-ui/icons/FilterList';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import Addfood from "./Addfood";
import { Link } from "react-router-dom";
import Checkout from './Checkout';

function Home() {
  var time=new Date().toLocaleTimeString();
  const [foods, setfoods] = useState([]);
  var total=0.0;
 

  function addFood(newFood) {
    setfoods(prevfoods => {
      return [...prevfoods, newFood];
    });
  }

  function deleteFood(id) {
    setfoods(prevfoods => {
      return prevfoods.filter((foodItem, index) => {
        return index !== id;
      });
    });
  }


  return (
    <>
      <button type="button" class="btn btn-outline-secondary btn-sm"><FilterListIcon className='filter' fontSize='small' /> Filter</button>

      <p className='p'><span>Sorted by:</span> Recommended <span> <KeyboardArrowDownIcon className='down' /></span></p>
      <div className="cardss row md-3 lg-6">
        <Cards onAdd={addFood} className=" row md-3 lg-6" col="col1" rate="4.2" gram="250g" bg="c1" img={cabbagesalad} name="Cabage Salad" price="4.99" />
        <Cards onAdd={addFood} className=" row md-3 lg-6" col="col2" rate="4.7" gram="350g" bg="c2" img={cabbagesalad} name="Noodle Salad" price="5.99" />
        <Cards onAdd={addFood} className=" row md-3 lg-6" col="col3" rate="4.9" gram="200g" bg="c3" img={cabbagesalad} name="Vegetable mix" price="6.99" />
        <Cards onAdd={addFood} className=" row md-3 lg-6" col="col4" rate="3.9" gram="400g" bg="c4" img={cabbagesalad} name="Seafood soup" price="4.75" />
        <Cards onAdd={addFood} className=" row md-3 lg-6" col="col5" rate="5.0" gram="300g" bg="c5" img={cabbagesalad} name="Bean soup" price="5.59" />
        <Cards onAdd={addFood} className=" row md-3 lg-6" col="col6" rate="4.2" gram="250g" bg="c6" img={cabbagesalad} name="Stewed vegetables" price="3.89" />
        <Cards onAdd={addFood} className=" row md-3 lg-6" col="col7" rate="4.6" gram="300g" bg="c7" img={cabbagesalad} name="Chicken soup" price="4.09" />
        <Cards onAdd={addFood} className=" row md-3 lg-6" col="col8" rate="4.1" gram="400g" bg="c8" img={cabbagesalad} name="Roast potatoes" price="5.19" />
      </div>
      <div>
        <h5 className='order'>My Order</h5>
        <p className='edit'>Edit</p>
        <p className='time'><WatchLaterIcon className='timeicon' /> {time}</p>
        <div className="addfood">
        <hr></hr>
          {foods.map((foodItem, index) => {
            total=Math.round(eval(total+parseFloat(foodItem.price))*100)/100;
            return (
              <Addfood
                key={index}
                id={index}
                name={foodItem.name}
                gram={foodItem.gram}
                price={foodItem.price}
                onDelete={deleteFood}
              />
            );
          })}
          <div className='btns2'>
          <p className='total'>Total</p>
          <div className='btns'>
          
          <p className='tp' >{total}</p>
          </div>
        </div>
        <div className='btnss'>
          <Link to="/checkout"><button class="checkout btn btn-primary" type="button">Checkout</button></Link>
        </div>
        </div>
        
      </div>
    </>
  )
}

export default Home
