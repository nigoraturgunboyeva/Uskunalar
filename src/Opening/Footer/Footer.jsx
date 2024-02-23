import React from 'react';
import { RiFacebookBoxLine } from "react-icons/ri";
import { RiYoutubeLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";
import { LiaTelegram } from "react-icons/lia";
import imglogo from "../Navbar/image.webp";
import { LuPhone } from "react-icons/lu";
import { NavLink } from 'react-router-dom';
import { BsCart } from "react-icons/bs";
import { PiScalesFill } from "react-icons/pi";
import { TiHomeOutline } from "react-icons/ti";
import { IoHeartOutline } from "react-icons/io5";
export default function Footer() {
  return (
    <div className='footer'>
        <div className="footer-yellow">
           <div className="footer-yellow-cover">
           <div>
                <h1>Yangiliklarni kuzating!</h1>
                <h2>Uskunalar.uz tomonidan taqdim etiladigan turli xil yangiliklar
                va tijoriy takliflardan o'z vaqtida xabardor bo'lib turish uchun
                elektron pochtangiz bilan a'zo bo'ling.</h2>
            </div>
            <div className='footer-input'>
                <input type="email" name="" id="" placeholder='Email Address'/>
                <button>Yuborish</button>
            </div>
            <div>
                <h3>Bizni ijtimoiy tarmoqlada kuzating:</h3>
                <div className="social-links">
                    <div><RiFacebookBoxLine /></div>
                    <div><RiYoutubeLine /></div>
                    <div><IoLogoInstagram /></div>
                    <div><LiaTelegram /></div>
                </div>
            </div>
           </div>
        </div>
        <div className="footer-black">
            <div className="footer-black-cover">
                <div className='footer-div1'>
                    <div><img src={imglogo} alt="" /></div>
                    <div><p>Uskunalar.uz ning mahsulotlar katalogi 2024-yildagi jahonning eng innovatsion texnika-texnologiyalari bo'yicha  ma'lumotlar bilan doimiy ravishda boyitib borilmoqda. Biz bilan vaqtingiz va naqdingizni tejang! </p></div>
                    <div className='footer-link'>
                        <ul>
                            <li><NavLink>Kompaniya haqida</NavLink></li>
                            <li><NavLink>Bizning videolar</NavLink></li>
                            <li><NavLink>Bizning maqolalar</NavLink></li>
                            <li><NavLink>Bizning ishlar</NavLink></li>
                        </ul>
                    </div>
                    <div><h3>Biz bilan aloqa</h3></div>
                    <div>Toshkent shahri, Sirg'ali tumani, Katta olmos 1-tor ko'chasi 9a uy.</div>
                    <div className='footer-phone'><div><LuPhone /></div><div>+998 (71) 250-77-77</div></div>
                    <div className='footer-phone'><div><LuPhone /></div><div>+998 (97) 211-77-77</div></div>
                    <div className='footer-phone'><div><LuPhone /></div><div>+998 (97) 512-77-77</div></div>
                </div>
                <div>
                    <ul>
                        <li>Katalog</li>
                        <li><NavLink>MEMAK</NavLink></li>
                        <li><NavLink>Elektromobil</NavLink></li>
                        <li><NavLink>Oziq-ovqat sanoati</NavLink></li>
                        <li><NavLink>Non va non mahsulotlarini ishlab chiqarish</NavLink></li>
                        <li><NavLink>Qurilish sanoati</NavLink></li>
                        <li><NavLink>Yog`ochni qayta ishlash va mebel ishlab chiqarish uskunalari</NavLink></li>
                        <li><NavLink>Maxsus texnikalar</NavLink></li>
                        <li><NavLink>Qadoqlash uskunalari</NavLink></li>
                        <li><NavLink>Qog'ozni qayta ishlash sanoati</NavLink></li>
                        <li><NavLink>Sut mahsulotlarini qayta ishlash sanoati</NavLink></li>
                    </ul>
                </div>
                <div className='footer-ul'>
                    <ul>
                        <li><NavLink>Un tegirmonlari</NavLink></li>
                        <li><NavLink>Kolbasa va go`sht mahsulotlarini ishlab chiqarish</NavLink></li>
                        <li><NavLink>Gazli va gazsiz ichimliklar sanoati</NavLink></li>
                        <li><NavLink>Gidravlik presslar</NavLink></li>
                        <li><NavLink>Metalni qayta ishlash sanoati</NavLink></li>
                        <li><NavLink>Polietilen mahsulotlar ishlab chiqarish sanoati</NavLink></li>
                        <li><NavLink>Lazer uskunalari</NavLink></li>
                        <li><NavLink>Qishloq xo`jaligi uskunalari</NavLink></li>
                        <li><NavLink>Payvandlash uskunalari</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
        <hr />
        <div className="footer-last">
            <p>Copyright © 2005 - 2024 Uskunalar.uz Group LLC. All rights reserved</p>
        </div>
        <div className="navbar-footer">
        <div className='navbar-footer-cover'>
            <div className='navbar-footer-baskets'>
                    <NavLink to={'/'}>
                    <div><TiHomeOutline /></div>
                    <h5>Asosiy</h5>
                    </NavLink>
                </div>
                <div className='navbar-footer-baskets'>
                   <NavLink>
                   <div><BsCart /></div>
                    <h5>Mahsulotlar</h5>
                   </NavLink>
                </div>
            <div className='navbar-footer-baskets'>
                    <NavLink>
                    <div><IoHeartOutline /></div>
                    <h5>Sevimlilar</h5>
                    </NavLink>
                </div>
                <div className='navbar-footer-baskets'>
                   <NavLink>
                   <div><PiScalesFill /></div>
                    <h5>Taqqoslash</h5>
                   </NavLink>
                </div>
                <div className='navbar-footer-baskets'>
                    <NavLink>
                    <div><BsCart /></div>
                    <h5>Savat</h5>
                    </NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}
