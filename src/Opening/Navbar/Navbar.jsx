import "./Navbar.css"
import React, { useState } from 'react'
import logo from "./image.webp";
import { AiOutlineBars } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { RiTranslate2 } from "react-icons/ri";
import { BsCart } from "react-icons/bs";
import { PiScalesFill } from "react-icons/pi";
import { IoHeartOutline } from "react-icons/io5";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { IoCloseCircleOutline } from "react-icons/io5";
import SearchPanel from "./SearchPanel";
import { useDispatch } from "react-redux";
import { searchItem } from "../../Redux/Main";
export default function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }
    const handleCloseNavbar = () => {
        setShowNavbar(false)
    }
    const dispatch = useDispatch()

    return (
        <div className="navbar">
            <div className="navbar-black">
                <div className="navbar-black-top">
                    <div className="menu-icon" onClick={() => handleShowNavbar()}><AiOutlineBars /> </div>
                    <div className="menu-logo"><NavLink to={'/'}><img src={logo} alt="" /></NavLink></div>
                    <div className={`nav-elements ${showNavbar && 'active'}`}>
                        <div className="navbar-res-header">
                            <NavLink to={'/'}><img src={logo} alt="" /></NavLink>
                            <span onClick={() => handleCloseNavbar()}><IoCloseCircleOutline /> </span>
                        </div>
                        <ul >
                            <li><NavLink to="/mahsulotlar" className={"a"}>Mahsulotlar</NavLink></li>
                            <li><NavLink className={"a"}>Liniyalar</NavLink></li>
                            <li><NavLink className={"a"}>Biznes loyihalar</NavLink></li>
                            <li><NavLink className={"a"} to={"/konpaniyaHaqida"}>Kompaniya haqida</NavLink></li>
                            <li><NavLink className={"a"}>Bizning videolar</NavLink></li>
                            <li><NavLink className={"a"}>Bizning maqolalar</NavLink></li>
                            <li><NavLink className={"a"}>Bizning ishlar</NavLink></li>
                        </ul>
                    </div>
                    {/* <div className="navbar-select">
                        <div className="navbar-translator"><RiTranslate2 /></div>
                        <div>
                            <select name="" id="">
                                <option value="uz">UZ</option>
                                <option value="ru">RU</option>
                                <option value="en">EN</option>
                            </select>
                        </div>
                    </div> */}
                </div>
                <div className="navbar-black-below">
                    <div><NavLink to={'/'}><img className='logo' src={logo} alt="" /></NavLink></div>
                    <div>
                        <div className='input-div'>
                            <div><input onInput={(e) => dispatch(searchItem(e.target.value)) && e.target.value.trim().length > 0 ? setOpenSearch(true) : setOpenSearch(false)} type="text" id="search" placeholder='Mahsulotlarni izlash' /></div>
                            <label htmlFor="search" className='search-icon'><BsSearch /></label>
                        </div>
                        {
                            openSearch ? <SearchPanel /> : ""
                        }
                    </div>
                    <div className='navbar-number'>
                        <div className='headphone-icon'><TfiHeadphoneAlt /></div>
                        <div>
                            <h3 className='navbar-number-1'>+998 (71) 250-77-77</h3>
                            <h3 className='navbar-number-2'>Du - Yak: 9:00 - 18:00</h3>
                        </div>
                    </div>
                    <div className='stick'><span></span></div>
                    <div className='baskets-cover'>
                        <div className='navbar-baskets'>
                            <NavLink to={'liked'}>
                                <div><IoHeartOutline /></div>
                                <h5>Sevimlilar</h5>
                            </NavLink>
                        </div>
                        <div className='navbar-baskets'>
                            <NavLink to={'scale'}>
                                <div><PiScalesFill /></div>
                                <h5>Taqqoslash</h5>
                            </NavLink>
                        </div>
                        <div className='navbar-baskets'>
                            <NavLink to={'basket'}>
                                <div><BsCart /></div>
                                <h5>Savat</h5>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navbar-yellow">
                <div className="navbar-yellow-1">
                        <NavLink to={'mahsulotlar'} >
                    <div className="catalog">
                        <div>Katalog</div>
                        <div>
                            <div className="toggle-span"></div>
                            <div className="toggle-span"></div>
                            <div className="toggle-span"></div>
                        </div>
                    </div>
                        </NavLink>
                    <div className="navbar-yellow-nav">
                        <ul>
                            <li><NavLink to={'mahsulotlar'} className={"b"}>MEMAK</NavLink></li>
                            <li><NavLink to={'mahsulotlar'} className={"b"}>Elektromobil</NavLink></li>
                            <li><NavLink to={'mahsulotlar'} className={"b"}>Oziq-ovqat sanoati</NavLink></li>
                            <li><NavLink to={'mahsulotlar'} className={"b"}>Non va non mahsulotlarini ishlab chi…</NavLink></li>
                            <li><NavLink to={'mahsulotlar'} className={"b"}>Qurilish sanoati</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}
