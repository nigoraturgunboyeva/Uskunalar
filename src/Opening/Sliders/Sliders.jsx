import React from 'react';
import Slider from "react-slick";
import img1 from "./circled2.png"
import img2 from "./main_icon.png"
import img3 from "./images1.png"
import { NavLink } from 'react-router-dom';
export default function Sliders() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
  return (
 <div className="slider-cont">
    <div className="slider-container">
     <NavLink to={'mahsulotlar'}>
     <Slider {...settings}>
        <div className='slider-blog'>
       <div className='slidercover'>
       <div><img src={img2} alt="" /></div>
        <div><p>Elektromobil</p></div>
       </div>
        </div>
        <div className='slider-blog'>
        <div className='slidercover'>
       <div><img src={img2} alt="" /></div>
        <div><p>Oziq-ovqat sanoati</p></div>
       </div>
        </div>
        <div className='slider-blog'>
        <div className='slidercover'>
       <div><img src={img2} alt="" /></div>
        <div><p>Non va non
        mahsulotlarini ishlab
        chiqarish</p></div>
       </div>
        </div>
        <div className='slider-blog'>
        <div className='slidercover'>
       <div><img src={img2} alt="" /></div>
        <div><p>Qurilish sanoati</p></div>
       </div>
        </div>
        <div className='slider-blog'>
        <div className='slidercover'>
       <div><img src={img2} alt="" /></div>
        <div><p>Yog`ochni qayta ishlash
        va mebel ishlab chiqarish
        uskunalari</p></div>
       </div>
        </div>
        <div className='slider-blog'>
        <div className='slidercover'>
       <div><img src={img2} alt="" /></div>
        <div><p>Charm sanoati va teri-
        rezina poyabzal ishlab
        chiqarish</p></div>
       </div>
        </div>
      </Slider> <br />
      <Slider {...settings}>
        <div className='slider-blog'>
        <div className='slidercover'>
       <div><img src={img2} alt="" /></div>
        <div><p>Avtomobillarga xizmat
            ko'rsatish jihozlari</p></div>
       </div>
        </div>
        <div className='slider-blog'>
        <div className='slidercover'>
       <div><img src={img2} alt="" /></div>
        <div><p>Avtomobillarga xizmat
            ko'rsatish jihozlari</p></div>
       </div>
        </div>
        <div className='slider-blog'>
        <div className='slidercover'>
       <div><img src={img2} alt="" /></div>
        <div><p>Avtomobillarga xizmat
            ko'rsatish jihozlari</p></div>
       </div>
        </div>
        <div className='slider-blog'>
        <div className='slidercover'>
       <div><img src={img2} alt="" /></div>
        <div><p>Xomashyo</p></div>
       </div>
        </div>
        <div className='slider-blog'>
        <div className='slidercover'>
       <div><img src={img2} alt="" /></div>
        <div><p>Lift sanoati</p></div>
       </div>
        </div>
        <div className='slider-blog'>
        <div className='slidercover'>
       <div><img src={img2} alt="" /></div>
        <div><p>Sport anjomlari</p></div>
       </div>
        </div>
      </Slider> <br />
      <Slider {...settings}>
        <div className='slider-blog'>
        <div className='slidercover'>
       <div><img src={img2} alt="" /></div>
        <div><p>Zargarlik uskunalari</p></div>
       </div>
        </div>
        <div className='slider-blog'>
        <div className='slidercover'>
       <div><img src={img2} alt="" /></div>
        <div><p>Sanoat isitish qozonlari</p></div>
       </div>
        </div>
        <div className='slider-blog'>
        <div className='slidercover'>
       <div><img src={img2} alt="" /></div>
        <div><p>Chiqindilarni qayta ishlash sanoati</p></div>
       </div>
        </div>
        <div className='slider-blog'>
        <div className='slidercover'>
       <div><img src={img2} alt="" /></div>
        <div><p>Neftni qayta ishlash sanoati</p></div>
       </div>
        </div>
        <div className='slider-blog'>
        <div className='slidercover'>
       <div><img src={img2} alt="" /></div>
        <div><p>Burg`ulash uskunalari</p></div>
       </div>
        </div>
        <div className='slider-blog'>
        <div className='slidercover'>
       <div><img src={img2} alt="" /></div>
        <div><p>Elektromobil</p></div>
       </div>
        </div>
      </Slider>
     </NavLink>
    </div>

 </div>
  )
}
