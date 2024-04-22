import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <>
    <div className="bhai">
    <footer class="footer">
  <div class="footer__parralax">
    <div class="footer__parralax-trees"></div>
    <div class="footer__parralax-moto"></div>
    <div class="footer__parralax-secondplan"></div>
    <div class="footer__parralax-premierplan"></div>
    <div class="footer__parralax-voiture"></div>
  </div>
  <div class="container">
    <div class="footer__columns">
      <div class="footer__col">
        <h3 class="footer__col-title">
          <i data-feather="shopping-bag"></i> <span>FLEX BOT</span></h3>
        <nav class="footer__nav">
          <ul class="footer__nav-list">
            <li class="footer__nav-item">
              <a href="" class="footer__nav-link">
                Media pipe
              </a>
            </li>
            <li class="footer__nav-item">
              <a href="" class="footer__nav-link">
                Sass
              </a>
            </li>
            <li class="footer__nav-item">
              <a href="" class="footer__nav-link">
               Computer Vision
              </a>
            </li>
            <li class="footer__nav-item">
              <a href="" class="footer__nav-link">
                Natural Language Processing
              </a>
            </li>
            <li class="footer__nav-item">
              <a href="" class="footer__nav-link">
                LLM
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="footer__col">
        <h3 class="footer__col-title">
          <i data-feather="share-2"></i> <span>TEAM HACKWIZARDS</span></h3>
        <nav class="footer__nav">
          <ul class="footer__nav-list">
            <li class="footer__nav-item">
              <a href="" class="footer__nav-link">
                <i data-feather="youtube"></i><span>Youtube</span>
              </a>
            </li>
            <li class="footer__nav-item">
              <a href="" class="footer__nav-link">
                <i data-feather="facebook"></i><span>Facebook</span>
                
              </a>
            </li>
            <li class="footer__nav-item">
              <a href="" class="footer__nav-link">
                <i data-feather="instagram"></i><span>Instagram</span>
                
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="footer__col">
        <h3 class="footer__col-title">
          <i data-feather="send"></i> <span>Contact</span></h3>
        <nav class="footer__nav">
          <ul class="footer__nav-list">
            <li class="footer__nav-item">
              <a href="mailto:contact.laboiserie@gmail.com" class="footer__nav-link">
                Harshmahajan2345@gmail.com
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
      <div class="footer__copyrights">
        <p style={{color:"yellow"}}>Copyright <a href="https://twitter.com/silvereledev" target="_blank">@2024</a></p>
      </div>
  </div>
</footer>
</div>
    </>
  );
};

export default Footer;
