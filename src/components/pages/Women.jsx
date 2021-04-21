import React from 'react';
import '../../App.css';
import './Women.css';
import WomenCardComponent from './WomenCardComponent';

function Women() {
  return (
    <div className='women'>
      <h1>Women</h1>
        <div className='women_cards_container'>
          <div className='women_cards_wrapper'>
            <ul className='women_cards_items'>
            <div className='wcol'>
                <WomenCardComponent
                  wsrc='images/img-4.jpeg'
                  wtext='White Dress'        
                  wprice='Rs. 4030'
                  wpath='/newarrivals'
                />
              </div>
              <div className='wcol'>
                <WomenCardComponent
                  wsrc='images/img-58.jpeg'
                  wtext='Grey T-Shirt'                  
                  wprice='Rs. 599'
                  wpath='/newarrivals'
                />
              </div>
              <div className='wcol'>
                <WomenCardComponent
                  wsrc='images/img-7.jpeg'
                  wtext='Pink Jacket'                 
                  wprice='Rs. 4590'
                  wpath='/newarrivals'
                />
              </div>
              <div className='wcol'>
                <WomenCardComponent
                  wsrc='images/img-10.jpeg'
                  wtext='Black Polka Dot Dress'                 
                  wprice='Rs. 2590'
                  wpath='/newarrivals'
                />
              </div>
              <div className='wcol'>
                <WomenCardComponent
                  wsrc='images/img-59.jpeg'
                  wtext='Blue Kurti'                 
                  wprice='Rs. 999'
                  wpath='/newarrivals'
                />
              </div>
            </ul>
            <ul className='women_cards_items'>
            <div className='wcol'>
                <WomenCardComponent
                  wsrc='images/img-60.jpeg'
                  wtext='Brown Sweater'        
                  wprice='Rs. 1299'
                  wpath='/newarrivals'
                />
              </div>
              <div className='wcol'>
                <WomenCardComponent
                  wsrc='images/img-12.jpeg'
                  wtext='Wool Blend Coat'                 
                  wprice='Rs. 3899'
                  wpath='/newarrivals'
                />
              </div>
              <div className='wcol'>
                <WomenCardComponent
                  wsrc='images/img-61.jpeg'
                  wtext='Multicolor Top'                  
                  wprice='Rs. 649'
                  wpath='/newarrivals'
                />
              </div>
              <div className='wcol'>
                <WomenCardComponent
                  wsrc='images/img-62.jpeg'
                  wtext='Orange Jumpsuit'                 
                  wprice='Rs. 749'
                  wpath='/newarrivals'
                />
              </div>
              <div className='wcol'>
                <WomenCardComponent
                  wsrc='images/img-63.jpeg'
                  wtext='Brown Pants'                 
                  wprice='Rs. 1299'
                  wpath='/newarrivals'
                />
              </div>
            </ul>

            <ul className='women_cards_items'>
            <div className='wcol'>
                <WomenCardComponent
                  wsrc='images/img-64.jpeg'
                  wtext='Green Dress'       
                  wprice='Rs. 999'
                  wpath='/newarrivals'
                />
              </div>
              <div className='wcol'>
                <WomenCardComponent
                  wsrc='images/img-65.jpeg'
                  wtext='Red Dress'                 
                  wprice='Rs. 1099'
                  wpath='/newarrivals'
                />
              </div>
              <div className='wcol'>
                <WomenCardComponent
                  wsrc='images/img-66.jpeg'
                  wtext='White Sweatshirt'             
                  wprice='Rs. 599'
                  wpath='/newarrivals'
                />
              </div>
              <div className='wcol'>
                <WomenCardComponent
                  wsrc='images/img-67.jpeg'
                  wtext='Cotton Dress'                
                  wprice='Rs. 1299'
                  wpath='/newarrivals'
                />
              </div>
              <div className='wcol'>
                <WomenCardComponent
                  wsrc='images/img-68.jpeg'
                  wtext='Grey Jacket'                 
                  wprice='Rs. 799'
                  wpath='/newarrivals'
                />
              </div>
              
            </ul>

            <ul className='women_cards_items'>
            <div className='wcol'>
                <WomenCardComponent
                  wsrc='images/img-69.jpeg'
                  wtext='Black Top'
                  wprice='Rs. 799'
                  wpath='/newarrivals'
                />
              </div>
              <div className='wcol'>
                <WomenCardComponent
                  wsrc='images/img-80.jpeg'
                  wtext='White Top'
                  wprice='Rs. 549'
                  wpath='/newarrivals'
                />
              </div>
              <div className='wcol'>
                <WomenCardComponent
                  wsrc='images/img-71.jpeg'
                  wtext='Blue Jacket'
                  wprice='Rs. 699'
                  wpath='/newarrivals'
                />
              </div>
              <div className='wcol'>
                <WomenCardComponent
                  wsrc='images/img-79.jpeg'
                  wtext='Green Dress'
                  wprice='Rs. 999'
                  wpath='/newarrivals'
                />
              </div>
              <div className='wcol'>
                <WomenCardComponent
                  wsrc='images/img-73.jpeg'
                  wtext='Green Sweatshirt'
                  wprice='Rs. 699'
                  wpath='/newarrivals'
                />
              </div>
            </ul>

            <ul className='women_cards_items'>
            <div className='wcol'>
                <WomenCardComponent
                  wsrc='images/img-74.jpeg'
                  wtext='Grey Pants'
                  wprice='Rs. 499'
                  wpath='/newarrivals'
                />
              </div>
              <div className='wcol'>
                <WomenCardComponent
                  wsrc='images/img-75.jpeg'
                  wtext='Red Dress'
                  wprice='Rs. 899'
                  wpath='/newarrivals'
                />
              </div>
              <div className='wcol'>
                <WomenCardComponent
                  wsrc='images/img-76.jpeg'
                  wtext='Pink Cotton Dress'
                  wprice='Rs. 1899'
                  wpath='/newarrivals'
                />
              </div>
              <div className='wcol'>
                <WomenCardComponent
                  wsrc='images/img-77.jpeg'
                  wtext='Printed Yellow Jacket'
                  wprice='Rs. 1599'
                  wpath='/newarrivals'
                />
              </div>
              <div className='wcol'>
                <WomenCardComponent
                  wsrc='images/img-78.jpeg'
                  wtext='Camouflage Jacket'
                  wprice='Rs. 1099'
                  wpath='/newarrivals'
                />
              </div>
            </ul>
           
          </div>
        </div>
    </div>
  );
}

export default Women;