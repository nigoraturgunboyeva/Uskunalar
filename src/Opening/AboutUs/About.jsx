import React from 'react';
import img from "./garage.webp";
import { TfiBookmarkAlt } from "react-icons/tfi";
import { FaUsers } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { LiaUserTieSolid } from "react-icons/lia";
import { TbShoppingBagCheck } from "react-icons/tb";
export default function About() {
  return (
    <div className='aboutus-cont'>
        <div className="aboutus">
        <div><img src={img} alt="" /></div>
        <div className='aboutus-desc'>
            <h1>Uskunalar.uz — Xalqaro uskunalar savdo markazi</h1>
            <p>
                Bizning Kompaniyamiz butun Markaziy Osiyoda ishlab chiqarish sohasida birinchilardan bo'lib zamonaviy
                texnika-texnologiyalar bilan ko'plab tadbirkorlik subyektlarini asos solinishida katta xizmat ko'rsatib
                kelmoqda. Bizning asosiy maqsadimiz tadbirkorlik sohasini rivojlantirish va keng, qulay imkoniyatlar
                yaratish. Uzkunalar.uz ni siz uchun yaratdik!
            </p>
            <div className='aboutus-blog'>
                <div className="blog-one">
                    <div className='blog-us-icon'><TfiBookmarkAlt /></div>
                    <div className='blog-us-quantity'>300+</div>
                    <div className='blog-us-title'>Mahsulotlar sotuvi</div>
                </div>
                <div className="blog-one">
                    <div className='blog-us-icon'><FaUsers /></div>
                    <div className='blog-us-quantity'>229+</div>
                    <div className='blog-us-title'>Doimiy mijozlar</div>
                </div>
                <div className="blog-one">
                    <div className='blog-us-icon'><FaRegCalendarAlt /></div>
                    <div className='blog-us-quantity'>140+</div>
                    <div className='blog-us-title'>Yirik loyihalar</div>
                </div>
                <div className="blog-one">
                    <div className='blog-us-icon'><LiaUserTieSolid /></div>
                    <div className='blog-us-quantity'>50+</div>
                    <div className='blog-us-title'>Professional xodimlar</div>
                </div>
                <div className="blog-one">
                    <div className='blog-us-icon'><TbShoppingBagCheck /></div>
                    <div className='blog-us-quantity'>18+</div>
                    <div className='blog-us-title'>Yillik tajribas</div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
