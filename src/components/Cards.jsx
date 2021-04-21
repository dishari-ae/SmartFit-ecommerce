import React from 'react';
import './Cards.css';
import CardComponent from './CardComponent';

function Cards() {
  return (
    <div className='cards'>
      <h1>New Arrivals</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <div className='col'>
                <CardComponent
                  src='images/img-2.jpeg'
                  text='Girls Blue Solid Dress'
                  price='Rs. 1499'
                  label='Kids'
                  path='/newarrivals'
                />
              </div>
              <div className='col'>
                <CardComponent
                  src='images/img-3.jpeg'
                  text='Grey Sweatshirt'
                  price='Rs. 599'
                  label='Kids'
                  path='/newarrivals'
                />
              </div>
              <div className='col'>
                <CardComponent
                  src='images/img-4.jpeg'
                  text='White Dress'
                  price='Rs. 4030'
                  label='Women'
                  path='/newarrivals'
                />
               </div>
              <div className='col'>
                <CardComponent
                  src='images/img-5.jpeg'
                  text='Cotton Sweatshirt'
                  price='Rs. 799'
                  label='Kids'
                  path='/newarrivals'
                />
              </div>
              <div className='col'>
                <CardComponent
                  src='images/img-6.jpeg'
                  text='Maroon Shirt'
                  price='Rs. 1299'
                  label='Men'
                  path='/newarrivals'
                />
              </div>
            </ul>
            <ul className='cards__items'>
              <div className='col'>
                <CardComponent
                  src='images/img-7.jpeg'
                  text='Pink Jacket'
                  price='Rs. 4590'
                  label='Women'
                  path='/newarrivals'
                />
              </div>
              <div className='col'>
                <CardComponent
                  src='images/img-8.jpeg'
                  text='Blue Shirt'
                  price='Rs. 1049'
                  label='Kids'
                  path='/newarrivals'
                />
              </div>
              <div className='col'>
                <CardComponent
                  src='images/img-9.jpeg'
                  text='Red Dress'
                  price='Rs. 1099'
                  label='Kids'
                  path='/newarrivals'
                />
              </div>
              <div className='col'>
                <CardComponent
                  src='images/img-10.jpeg'
                  text='Black Polka Dot Dress'
                  price='Rs. 2590'
                  label='Women'
                  path='/newarrivals'
                />
              </div>
              <div className='col'>
                <CardComponent
                  src='images/img-11.jpeg'
                  text='Slim Fit Suit'
                  price='Rs. 3990'
                  label='Men'
                  path='/newarrivals'
                />
              </div>
            </ul>
            <ul className='cards__items'>
              <div className='col'>
                <CardComponent
                  src='images/img-12.jpeg'
                  text='Wool Blend Coat'
                  price='Rs. 3899'
                  label='Women'
                  path='/newarrivals'
                />
              </div>
              <div className='col'>
                <CardComponent
                  src='images/img-13.jpeg'
                  text='Printed Blazer'
                  price='Rs. 2499'
                  label='Men'
                  path='/newarrivals'
                />
              </div>
              <div className='col'>
                <CardComponent
                  src='images/img-14.jpeg'
                  text='Rainbow Dress'
                  price='Rs. 1999'
                  label='Kids'
                  path='/newarrivals'
                />
              </div>
              <div className='col'>
                <CardComponent
                  src='images/img-15.jpeg'
                  text='Yellow Shirt'
                  price='Rs. 1599'
                  label='Kids'
                  path='/newarrivals'
                />
              </div>
              <div className='col'>
                <CardComponent
                  src='images/img-16.jpeg'
                  text='Blue Sweater'
                  price='Rs. 2299'
                  label='Kids'
                  path='/newarrivals'
                />
              </div>
            </ul>
          </div>
        </div>
      </div>
    );
  }

export default Cards;