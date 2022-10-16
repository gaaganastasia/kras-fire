import "./Swiper.css";
import React from "react";

import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';

function Swiper(props) {
  
  const CarouselUI = ({ position, handleClick, children }) => (
    <>
      <div className="product__arrow product__arrow_left" onClick={handleClick} data-position={position - 1}></div>
      <div className="product__arrow product__arrow_right" onClick={handleClick} data-position={position + 1}></div>
      <div className="swiper__container">
          {children}
      </div>
    </>
  );
  const Carousel = makeCarousel(CarouselUI);

  return (
    <>
      {props.product.videoLink || props.product.photo ? 
        <Carousel>
          {
            props.product.mainImageLink ?
            <Slide right>
              <img alt="Фото товара" src={props.product.mainImageLink} className="swiper__img"></img>
            </Slide>
            :
            {}
          }
          {
            props.product.image && props.product.image.length !== 0 ?
            props.product.image.map((photo, i) => {
              return (
                <Slide key={i} right>
                  <img alt="Фото товара" src={photo.url} className="swiper__img"></img>
                </Slide>
              );
            })
            :
            {}
          }
          {
            props.product.videoLink ?
            <Slide right>
              <a target="_blank" href={props.product.videoLink} className="swiper__video-link"></a>
            </Slide>
            :
            {}
          }
        </Carousel>
        :
        <img alt="Фото товара" src={props.product.mainImageLink} className="swiper__container"></img>
      }
    </>
  );
}

export default Swiper;
