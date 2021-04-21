import React from 'react';
import '../../App.css';
import './Men.css';
import MenCardComponent from './MenCardComponent';

function Men() {
  return (
    <div className='men'>
      <h1>Men</h1>
        <div className='men_cards_container'>
          <div className='men_cards_wrapper'>
            <ul className='men_cards_items'>
            <div className='mcol'>
                <MenCardComponent
                  msrc='images/img-17.jpeg'
                  mtext='Grey Shirt and Pant'        
                  mprice='Rs. 1499'
                  mpath='/newarrivals'
                />
              </div>
              <div className='mcol'>
                <MenCardComponent
                  msrc='images/img-13.jpeg'
                  mtext='Printed Blazer'                  
                  mprice='Rs. 2499'
                  mpath='/newarrivals'
                />
              </div>
              <div className='mcol'>
                <MenCardComponent
                  msrc='images/img-19.jpeg'
                  mtext='White Shirt'                 
                  mprice='Rs. 1499'
                  mpath='/newarrivals'
                />
              </div>
              <div className='mcol'>
                <MenCardComponent
                  msrc='images/img-20.jpeg'
                  mtext='Black Jacket'                 
                  mprice='Rs. 1099'
                  mpath='/newarrivals'
                />
              </div>
              <div className='mcol'>
                <MenCardComponent
                  msrc='images/img-21.jpeg'
                  mtext='Yellow Shirt'                 
                  mprice='Rs. 999'
                  mpath='/newarrivals'
                />
              </div>
            </ul>
            <ul className='men_cards_items'>
            <div className='mcol'>
                <MenCardComponent
                  msrc='images/img-26.jpeg'
                  mtext='White Suit'        
                  mprice='Rs. 6499'
                  mpath='/newarrivals'
                />
              </div>
              <div className='mcol'>
                <MenCardComponent
                  msrc='images/img-11.jpeg'
                  mtext='Slim Fit Suit'                 
                  mprice='Rs. 3990'
                  mpath='/newarrivals'
                />
              </div>
              <div className='mcol'>
                <MenCardComponent
                  msrc='images/img-27.jpeg'
                  mtext='Shirt and Sweatshirt'                  
                  mprice='Rs. 2999'
                  mpath='/newarrivals'
                />
              </div>
              <div className='mcol'>
                <MenCardComponent
                  msrc='images/img-22.jpeg'
                  mtext='Purple Shirt'                 
                  mprice='Rs. 999'
                  mpath='/newarrivals'
                />
              </div>
              <div className='mcol'>
                <MenCardComponent
                  msrc='images/img-23.jpeg'
                  mtext='Black Hoodie'                 
                  mprice='Rs. 1299'
                  mpath='/newarrivals'
                />
              </div>
            </ul>

            <ul className='men_cards_items'>
            <div className='mcol'>
                <MenCardComponent
                  msrc='images/img-25.jpeg'
                  mtext='Printed White Shirt'       
                  mprice='Rs. 1299'
                  mpath='/newarrivals'
                />
              </div>
              <div className='mcol'>
                <MenCardComponent
                  msrc='images/img-30.jpeg'
                  mtext='Red Sweatshirt'                 
                  mprice='Rs. 999'
                  mpath='/newarrivals'
                />
              </div>
              <div className='mcol'>
                <MenCardComponent
                  msrc='images/img-29.jpeg'
                  mtext='White Sweatshirt'             
                  mprice='Rs. 1499'
                  mpath='/newarrivals'
                />
              </div>
              <div className='mcol'>
                <MenCardComponent
                  msrc='images/img-6.jpeg'
                  mtext='Maroon Shirt'                
                  mprice='Rs. 1299'
                  mpath='/newarrivals'
                />
              </div>
              <div className='mcol'>
                <MenCardComponent
                  msrc='images/img-28.jpeg'
                  mtext='Grey Jeans'                 
                  mprice='Rs. 999'
                  mpath='/newarrivals'
                />
              </div>
              
            </ul>

            <ul className='men_cards_items'>
            <div className='mcol'>
                <MenCardComponent
                  msrc='images/img-24.jpg'
                  mtext='Printed Blue Jacket'
                  mprice='Rs. 799'
                  mpath='/newarrivals'
                />
              </div>
              <div className='mcol'>
                <MenCardComponent
                  msrc='images/img-31.jpeg'
                  mtext='Slim Fit Suit'
                  mprice='Rs. 7499'
                  mpath='/newarrivals'
                />
              </div>
              <div className='mcol'>
                <MenCardComponent
                  msrc='images/img-32.jpeg'
                  mtext='Black T-Shirt'
                  mprice='Rs. 699'
                  mpath='/newarrivals'
                />
              </div>
              <div className='mcol'>
                <MenCardComponent
                  msrc='images/img-33.jpeg'
                  mtext='Black Shorts'
                  mprice='Rs. 699'
                  mpath='/newarrivals'
                />
              </div>
              <div className='mcol'>
                <MenCardComponent
                  msrc='images/img-34.jpeg'
                  mtext='Yellow Shirt'
                  mprice='Rs. 899'
                  mpath='/newarrivals'
                />
              </div>
            </ul>

            <ul className='men_cards_items'>
            <div className='mcol'>
                <MenCardComponent
                  msrc='images/img-35.jpeg'
                  mtext='Olive Green Jacket'
                  mprice='Rs. 1499'
                  mpath='/newarrivals'
                />
              </div>
              <div className='mcol'>
                <MenCardComponent
                  msrc='images/img-36.jpeg'
                  mtext='Blue Sweater'
                  mprice='Rs. 1599'
                  mpath='/newarrivals'
                />
              </div>
              <div className='mcol'>
                <MenCardComponent
                  msrc='images/img-37.jpeg'
                  mtext='Brown Shirt'
                  mprice='Rs. 799'
                  mpath='/newarrivals'
                />
              </div>
              <div className='mcol'>
                <MenCardComponent
                  msrc='images/img-38.jpeg'
                  mtext='Floral Shirt'
                  mprice='Rs. 899'
                  mpath='/newarrivals'
                />
              </div>
              <div className='mcol'>
                <MenCardComponent
                  msrc='images/img-39.jpeg'
                  mtext='Red Joggers'
                  mprice='Rs. 799'
                  mpath='/newarrivals'
                />
              </div>
            </ul>
           
          </div>
        </div>
    </div>
  );
}

export default Men;