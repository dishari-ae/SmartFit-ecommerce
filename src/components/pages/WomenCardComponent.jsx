import React from 'react';
import { Link } from 'react-router-dom';

function WomenCardComponent(props) {
  return (
    <>
      <li className='women_cards_item'>
        <Link className='women_cards_item_link' to={props.wpath}>
          <figure className='women_cards_item_pic-wrap' data-category={props.label}>
            <img
              className='women_cards_item_img'
              alt='Women Product Image'
              src={props.wsrc}
            />
          </figure>
          <div className='women_cards_item_info'>
            <h5 className='women_cards_item_text'>{props.wtext}</h5>
            <span className='women_cards_item_text3'>{props.wprice}</span>
          </div>
        </Link>
      </li>
    </>
  );
}

export default WomenCardComponent;