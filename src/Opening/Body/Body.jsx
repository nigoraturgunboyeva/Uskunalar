import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Opening.css";
import img1 from "./image (1).webp";
import img2 from "./image2.webp";
import img3 from "./image3.webp";
import img4 from "./image4.webp";
import { TfiBookmarkAlt } from "react-icons/tfi";
import { TbTruckDelivery } from "react-icons/tb";
import { GrUserSettings } from "react-icons/gr";
import { HiMiniReceiptPercent } from "react-icons/hi2";
export default function Body() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className="slider-container openingslider">
    <Slider {...settings}>
      <div>
      <img src={img1} alt="" />
      </div>
      <div>
      <img src={img2} alt="" />
      </div>
      <div>
      <img src={img3} alt="" />
      </div>
      <div>
      <img src={img4} alt="" />
      </div>
    </Slider>
    <div className="slider-desc">
        <h1>Uskunalar.uz - Xalqaro uskunalar savdo markaziga xush kelibsiz!</h1>
        <h2></h2>
        <p>O'rta Osiyodagi eng yirik va yetakchi uskunalar savdo markazi.</p>
    </div>
    <div className="blogs">
        <div className="blog">
            <div className='blog-img'><TbTruckDelivery /></div>
            <div>
                <h3>Tezkor yetkazib berish</h3>
                <h4>Toshkent shahri bo'ylab bepul yetkazib berish xizmati.</h4>
            </div>
        </div>
        <div className="blog">
            <div className='blog-img'><GrUserSettings /></div>
            <div>
                <h3>Tezkor yetkazib berish</h3>
                <h4>Toshkent shahri bo'ylab bepul yetkazib berish xizmati.</h4>
            </div>
        </div>
        <div className="blog">
            <div className='blog-img'><TfiBookmarkAlt /></div>
            <div>
                <h3>Tezkor yetkazib berish</h3>
                <h4>Toshkent shahri bo'ylab bepul yetkazib berish xizmati.</h4>
            </div>
        </div>
        <div className="blog">
            <div className='blog-img'><HiMiniReceiptPercent /></div>
            <div>
                <h3>Tezkor yetkazib berish</h3>
                <h4>Toshkent shahri bo'ylab bepul yetkazib berish xizmati.</h4>
            </div>
        </div>
    </div>
  </div>
  )
}
