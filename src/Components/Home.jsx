import React from 'react'
import Cards from './Cards'
import cabbagesalad from "../images/cabbagesalad.jpg"
import FilterListIcon from '@material-ui/icons/FilterList';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import Addfood from "./Addfood";

function Home() {
  return (
    <>
    <button type="button" class="btn btn-outline-secondary btn-sm"><FilterListIcon className='filter' fontSize='small' /> Filter</button>
    
    <p className='p'><span>Sorted by:</span> Recommended <span> <KeyboardArrowDownIcon className='down' /></span></p>
    <div className="cardss row md-3 lg-6">
      <Cards className=" row md-3 lg-6" col="col1" rate="4.2" gram="250g" bg="c1" img={cabbagesalad} text="Cabage Salad" price="$4.99"/>
      <Cards className=" row md-3 lg-6" col="col2" rate="4.7" gram="350g" bg="c2" img={cabbagesalad} text="Cabage Salad" price="$4.99"/>
      <Cards className=" row md-3 lg-6" col="col3" rate="4.9" gram="200g" bg="c3" img={cabbagesalad} text="Cabage Salad" price="$4.99"/>
      <Cards className=" row md-3 lg-6" col="col4" rate="3.9" gram="400g" bg="c4" img={cabbagesalad} text="Cabage Salad" price="$4.99"/>
      <Cards className=" row md-3 lg-6" col="col5" rate="5.0" gram="300g" bg="c5" img={cabbagesalad} text="Cabage Salad" price="$4.99"/>
      <Cards className=" row md-3 lg-6" col="col6" rate="4.2" gram="250g" bg="c6" img={cabbagesalad} text="Cabage Salad" price="$4.99"/>
      <Cards className=" row md-3 lg-6" col="col7" rate="4.6" gram="300g" bg="c7" img={cabbagesalad} text="Cabage Salad" price="$4.99"/>
      <Cards className=" row md-3 lg-6" col="col8" rate="4.1" gram="400g" bg="c8" img={cabbagesalad} text="Cabage Salad" price="$4.99"/>
    </div>
    <div>
    <h5 className='order'>My Order</h5>
    <p className='edit'>Edit</p>
    <p className='time'><WatchLaterIcon className='timeicon' /> 14:30</p>
    <div className="addfood">
      <Addfood />
    </div>
    </div>
    </>
  )
}

export default Home
 