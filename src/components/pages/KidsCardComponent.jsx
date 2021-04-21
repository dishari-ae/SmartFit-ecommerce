import React from 'react';
import { Link } from 'react-router-dom';

function KidsCardComponent(props) {
  return (
    <>
      <li className='kids_cards_item'>
        <Link className='kids_cards_item_link' to={props.kpath}>
          <figure className='kids_cards_item_pic-wrap' data-category={props.label}>
            <img
              className='kids_cards_item_img'
              alt='Kids Product Image'
              src={props.ksrc}
            />
          </figure>
          <div className='kids_cards_item_info'>
            <h5 className='kids_cards_item_text'>{props.ktext}</h5>
            <p className='kids_cards_item_text2'>{props.ksubtitle}</p>
            <span className='kids_cards_item_text3'>{props.kprice}</span>
          </div>
        </Link>
      </li>
    </>
  );
}

export default KidsCardComponent;