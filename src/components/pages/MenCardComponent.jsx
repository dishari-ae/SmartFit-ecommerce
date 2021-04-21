import React from 'react';
import { Link } from 'react-router-dom';

function MenCardComponent(props) {
  return (
    <>
      <li className='men_cards_item'>
        <Link className='men_cards_item_link' to={props.mpath}>
          <figure className='men_cards_item_pic-wrap' data-category={props.label}>
            <img
              className='men_cards_item_img'
              alt='Men Product Image'
              src={props.msrc}
            />
          </figure>
          <div className='men_cards_item_info'>
            <h5 className='men_cards_item_text'>{props.mtext}</h5>
            <p className='men_cards_item_text2'>{props.msubtitle}</p>
            <span className='men_cards_item_text3'>{props.mprice}</span>
          </div>
        </Link>
      </li>
    </>
  );
}

export default MenCardComponent;