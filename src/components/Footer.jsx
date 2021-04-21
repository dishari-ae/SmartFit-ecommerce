import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Category</h2>
            <Link to='/men'>Men</Link>
            <Link to='/women'>Women</Link>
            <Link to='/kids'>Kids</Link>
          </div>

        </div>
        <div className='footer-link-wrapper'>
          
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            
            <a href="https://www.instagram.com/disharidas._/?hl=en">Instagram</a>
            <a href="https://www.facebook.com/dishari.das.773">Facebook</a>
            <a href="https://www.youtube.com/channel/UCMH1xwpjm6FRm8__Zd4C2Og">YouTube</a>
            <a href="https://github.com/dishari-ae">Github</a>
            <a href="https://www.linkedin.com/in/dishari-das-4889411a4/">LinkedIn</a>
            
          </div>
          <section className='footer-link-wrapper'>
          <div class='footer-link-items'>
          <h2>Newsletter</h2>
          <div className='input-areas'>
          <form>
          
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
          </div>
        
      </section>
        </div>
      </div>
      <hr></hr>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              SmartFit
            </Link>
          </div>
          <small class='website-rights'>Copyright © 2021|Built with <i class="fa fa-heart red-color " ></i> by Dishari</small>
          <div class='social-icons'>
          <a href="https://www.facebook.com/dishari.das.773" class='social-icon-link facebook'>
            
              <i class='fab fa-facebook-f' />
            </a>

            <a href="https://www.instagram.com/disharidas._/?hl=en" class='social-icon-link instagram'>
            
            <i class='fab fa-instagram' />
            
            </a>

            <a href="https://www.youtube.com/channel/UCMH1xwpjm6FRm8__Zd4C2Og" class='social-icon-link youtube'>
            
            <i class='fab fa-youtube' />
            
            </a>

            <a href="https://github.com/dishari-ae" class='social-icon-link github'>
            
            <i class='fab fa-github' />
            
            </a>
            
            <a href="https://www.linkedin.com/in/dishari-das-4889411a4/" class='social-icon-link linkedin'>
            
            <i class='fab fa-linkedin' />
            
            </a>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;