import React from 'react';
import { Link } from 'react-router-dom';

function CardComponent(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Product Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            <span className='cards__item__text3'>{props.price}</span>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardComponent;