import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GetPopularProducts, SelectBasket, SelectError, SelectLiked, SelectScale } from '../Redux/Main';
import { useDispatch, useSelector } from 'react-redux';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { BsTruck } from 'react-icons/bs';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { RiShoppingCartLine } from 'react-icons/ri';
import { LiaBalanceScaleLeftSolid } from 'react-icons/lia';

function Mahslulotlar() {
    const { SelectAllData, liked, basket, PopularProducts, scale } = useSelector(state => state.main);
    const dispatch = useDispatch()
    const [cards, setCards] = useState([])
    const [cardType, setCardType] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(16);
    const [cardsFilter, setCardsFilter] = useState(cards)
    const [categories, setCategories] = useState(true)

    const handleAddLiked = (item) => {
        dispatch(SelectLiked(item))
    }
    const handleAddBasket = (item) => {
        dispatch(SelectBasket(item))
    }
    const handleAddScale = (item) => {
        dispatch(SelectScale(item))
    }

    useEffect(() => {
        async function HandlePopularProducts() {
            try {
                const data = await axios.get("http://localhost:3001/Products");
                dispatch(GetPopularProducts(data.data));
                setCards(data.data);
                setCardsFilter(data.data)
            } catch (error) {
                dispatch(SelectError(error));
            }
        }
        HandlePopularProducts();
    }, [dispatch]);
    const filterCards = (cat) => {
        const updatedList = cards.filter((x) => x.cat === cat);
        setCardsFilter(updatedList)
    }
    function cardsType() {
        setCardType(!cardType)
    }
    const indexOfLastProduct = currentPage * perPage;
    const indexOfFirstProduct = indexOfLastProduct - perPage;

    function handleClick(functionType) {
        if (functionType === "prev" && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        } else if (functionType === "next" && currentPage <= pageNumbers.length) {
            setCurrentPage(currentPage + 1);
        }
    }

    const pageProducts = cardsFilter.slice(indexOfFirstProduct, indexOfLastProduct);
    const pageNumbers = [];
    for (let i = 1; i < Math.ceil(cards.length / perPage); i++) {
        pageNumbers.push(i);
    }
    
    function categoryFunc(){
        setCategories(!categories)
    }

    return (
        <div className='mahsulotlar'>
            <div className="mahsulotlar_top">
                <h1><NavLink to="/">Bosh sahifa</NavLink></h1> <span>/</span> <h1><NavLink to="/mahsulotlar">Katalog</NavLink></h1>
            </div>
            <div className="mahsulotlar_bottom">
                <div onClick={categoryFunc} className="mb_left_openclose"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png" alt="" /></div>
                {
                    categories === true && (
                        <div className="mb_left">
                            <div className='x-uchun'>
                                <div className="mb_left_input">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="text-base" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg>
                                    <input type="text" placeholder='59 Kategoriyalar' />
                                </div>
                                <img onClick={categoryFunc} src="https://cdn1.iconfinder.com/data/icons/basic-ui-rounded/512/ui-02-512.png" alt="" />
                            </div>
                            <ul className='mbl_filters'>
                                <li><div onClick={() => setCardsFilter(cards)} className="li_div"><img src="https://api.uskunalar.uz/media/category_image/memak.svg" alt="" /><p>Memak</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("ommabop")} className="li_div"><img src="https://api.uskunalar.uz/media/category_image/ecar.svg" alt="" /><p>Elektromobil</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("narx")} className="li_div"><img src="https://api.uskunalar.uz/media/category_image/foodindustry.svg" alt="" /><p>Oziq-ovqat sanoati</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("ommabop")} className="li_div"><img src="https://api.uskunalar.uz/media/category_image/bread2.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("narx")} className="li_div"><img src="https://api.uskunalar.uz/media/category_image/cons-yellow.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("ommabop")} className="li_div"><img src="https://api.uskunalar.uz/media/category_image/furniture.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("narx")} className="li_div"><img class="w-7 h-7 mr-2" src="https://api.uskunalar.uz/media/category_image/specialmachines_yeBBX4h.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("ommabop")} className="li_div"><img class="w-7 h-7 mr-2" src="https://api.uskunalar.uz/media/category_image/packing.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("narx")} className="li_div"><img class="w-7 h-7 mr-2" src="https://api.uskunalar.uz/media/category_image/packing.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("ommabop")} className="li_div"><img class="w-7 h-7 mr-2" src="https://api.uskunalar.uz/media/category_image/milk.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("narx")} className="li_div"><img class="w-7 h-7 mr-2" src="https://api.uskunalar.uz/media/category_image/candy.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("ommabop")} className="li_div"><img class="w-7 h-7 mr-2" src="https://api.uskunalar.uz/media/category_image/candy.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("narx")} className="li_div"><img class="w-7 h-7 mr-2" src="https://api.uskunalar.uz/media/category_image/windmill.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("ommabop")} className="li_div"><img class="w-7 h-7 mr-2" src="https://api.uskunalar.uz/media/category_image/meat.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("narx")} className="li_div"><img class="w-7 h-7 mr-2" src="https://api.uskunalar.uz/media/category_image/drinks.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("ommabop")} className="li_div"><img class="w-7 h-7 mr-2" src="https://api.uskunalar.uz/media/category_image/pressmachine.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("narx")} className="li_div"><img class="w-7 h-7 mr-2" src="https://api.uskunalar.uz/media/category_image/metal_icon_ZQO6KdN.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("ommabop")} className="li_div"><img class="w-7 h-7 mr-2" src="https://api.uskunalar.uz/media/category_image/main_icon.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("narx")} className="li_div"><img class="w-7 h-7 mr-2" src="https://api.uskunalar.uz/media/category_image/main_icon.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("ommabop")} className="li_div"><img class="w-7 h-7 mr-2" src="https://api.uskunalar.uz/media/category_image/main_icon.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("narx")} className="li_div"><img class="w-7 h-7 mr-2" src="https://api.uskunalar.uz/media/category_image/main_icon.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("ommabop")} className="li_div"><img class="w-7 h-7 mr-2" src="https://api.uskunalar.uz/media/category_image/main_icon.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("narx")} className="li_div"><img class="w-7 h-7 mr-2" src="https://api.uskunalar.uz/media/category_image/main_icon.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("ommabop")} className="li_div"><img class="w-7 h-7 mr-2" src="https://api.uskunalar.uz/media/category_image/main_icon.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("narx")} className="li_div"><img class="w-7 h-7 mr-2" src="https://api.uskunalar.uz/media/category_image/main_icon.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("ommabop")} className="li_div"><img class="w-7 h-7 mr-2" src="https://api.uskunalar.uz/media/category_image/main_icon.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("narx")} className="li_div"><img class="w-7 h-7 mr-2" src="https://api.uskunalar.uz/media/category_image/main_icon.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("ommabop")} className="li_div"><img class="w-7 h-7 mr-2" src="https://api.uskunalar.uz/media/category_image/main_icon.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("narx")} className="li_div"><img class="w-7 h-7 mr-2" src="https://api.uskunalar.uz/media/category_image/main_icon.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("ommabop")} className="li_div"><img class="w-7 h-7 mr-2" src="https://api.uskunalar.uz/media/category_image/main_icon.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("narx")} className="li_div"><img class="w-7 h-7 mr-2" src="https://api.uskunalar.uz/media/category_image/main_icon.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("ommabop")} className="li_div"><img class="w-7 h-7 mr-2" src="https://api.uskunalar.uz/media/category_image/main_icon.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("narx")} className="li_div"><img class="w-7 h-7 mr-2" src="https://api.uskunalar.uz/media/category_image/main_icon.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("ommabop")} className="li_div"><img class="w-7 h-7 mr-2" src="https://api.uskunalar.uz/media/category_image/main_icon.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("narx")} className="li_div"><img class="w-7 h-7 mr-2" src="https://api.uskunalar.uz/media/category_image/main_icon.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("ommabop")} className="li_div"><img class="w-7 h-7 mr-2" src="https://api.uskunalar.uz/media/category_image/main_icon.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("narx")} className="li_div"><img class="w-7 h-7 mr-2" src="https://api.uskunalar.uz/media/category_image/main_icon.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("ommabop")} className="li_div"><img class="w-7 h-7 mr-2" src="https://api.uskunalar.uz/media/category_image/main_icon.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("narx")} className="li_div"><img class="w-7 h-7 mr-2" src="https://api.uskunalar.uz/media/category_image/main_icon.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("ommabop")} className="li_div"><img class="w-7 h-7 mr-2" src="https://api.uskunalar.uz/media/category_image/main_icon.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("narx")} className="li_div"><img class="w-7 h-7 mr-2" src="https://api.uskunalar.uz/media/category_image/main_icon.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("ommabop")} className="li_div"><img class="w-7 h-7 mr-2" src="https://api.uskunalar.uz/media/category_image/main_icon.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("narx")} className="li_div"><img class="w-7 h-7 mr-2" src="https://api.uskunalar.uz/media/category_image/main_icon.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("ommabop")} className="li_div"><img class="w-7 h-7 mr-2" src="https://api.uskunalar.uz/media/category_image/main_icon.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("narx")} className="li_div"><img class="w-7 h-7 mr-2" src="https://api.uskunalar.uz/media/category_image/main_icon.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("ommabop")} className="li_div"><img class="w-7 h-7 mr-2" src="https://api.uskunalar.uz/media/category_image/main_icon.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("narx")} className="li_div"><img class="w-7 h-7 mr-2" src="https://api.uskunalar.uz/media/category_image/main_icon.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("ommabop")} className="li_div"><img class="w-7 h-7 mr-2" src="https://api.uskunalar.uz/media/category_image/main_icon.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("narx")} className="li_div"><img class="w-7 h-7 mr-2" src="https://api.uskunalar.uz/media/category_image/main_icon.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("ommabop")} className="li_div"><img class="w-7 h-7 mr-2" src="https://api.uskunalar.uz/media/category_image/main_icon.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("narx")} className="li_div"><img class="w-7 h-7 mr-2" src="https://api.uskunalar.uz/media/category_image/main_icon.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("ommabop")} className="li_div"><img class="w-7 h-7 mr-2" src="https://api.uskunalar.uz/media/category_image/main_icon.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("narx")} className="li_div"><img class="w-7 h-7 mr-2" src="https://api.uskunalar.uz/media/category_image/main_icon.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("ommabop")} className="li_div"><img class="w-7 h-7 mr-2" src="https://api.uskunalar.uz/media/category_image/main_icon.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("narx")} className="li_div"><img class="w-7 h-7 mr-2" src="https://api.uskunalar.uz/media/category_image/main_icon.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("ommabop")} className="li_div"><img class="w-7 h-7 mr-2" src="https://api.uskunalar.uz/media/category_image/main_icon.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("narx")} className="li_div"><img class="w-7 h-7 mr-2" src="https://api.uskunalar.uz/media/category_image/main_icon.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("ommabop")} className="li_div"><img class="w-7 h-7 mr-2" src="https://api.uskunalar.uz/media/category_image/main_icon.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                                <li><div onClick={() => filterCards("narx")} className="li_div"><img class="w-7 h-7 mr-2" src="https://api.uskunalar.uz/media/category_image/main_icon.svg" alt="" /><p>Kategoriya</p></div> <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" /></li>
                            </ul>
                        </div>
                    )
                }
                <div className="mb_right">
                    <div className="mb_right_top">
                        <div className='mbrt_title'>
                            <h1>Mahsulotlar</h1>
                            <h3><div className="div1"></div><div className="div2"></div></h3>
                        </div>
                        <div className="mb_length">
                            <p>{cards.length}</p>
                        </div>
                    </div>
                    <div className="mb_right_center">
                        <div className="mbr_center_filters">
                            <button onClick={() => setCardsFilter(cards)} className="mbrc_filter">
                                Yangi
                            </button>
                            <button onClick={() => filterCards("narx")} className="mbrc_filter">
                                Narx bo'yicha
                            </button>
                            <button onClick={() => filterCards("ommabop")} className="mbrc_filter">
                                Ommabopligi bo'yicha
                            </button>
                        </div>
                        <div className="mbrc_cards_type">
                            <button onClick={cardsType}><svg
                                stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" class="text-3xl text-light-black" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48Z"></path></svg></button>
                            <button onClick={cardsType}><svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 17 17" class="text-2xl text-light-black" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g></g><path d="M15 5h-9v-1h9v1zM6 6v1h11v-1h-11zM0 8h5v-5h-5v5zM15 11h-9v1h9v-1zM6 14h11v-1h-11v1zM0 15h5v-5h-5v5z"></path></svg></button>
                        </div>
                    </div>
                    <div className="mb_right_bottom">
                        {pageProducts?.map((itm, ind) => (
                            <div key={ind}>
                                {cardType === false ?
                                    <div className="one-product" key={itm.id}>
                                        <figure>
                                            <div className="product-header">
                                                <div className="delivery">
                                                    <div className="deliver-truck"> <div><BsTruck /></div>Buyurtma orqali</div>
                                                    <div>ID: {itm.id}</div>
                                                </div>
                                                <div className="product-desc">{itm.title}
                                                </div>
                                            </div>
                                            <img src={itm.img} alt="Mountains" />
                                            <figcaption>
                                                <div className="desc">
                                                    <div>
                                                        <div onClick={() => handleAddLiked(itm)}>
                                                            {
                                                                liked.filter((i) => i.id === itm.id).length > 0 ? (<button className='liked-btn' disabled>< FaHeart /></button>) : (<button className="product-links"> < FaRegHeart /></button>)
                                                            }
                                                        </div>
                                                        <div onClick={() => handleAddBasket(itm)}>
                                                            {
                                                                basket.filter((i) => i.id === itm.id).length > 0 ? (<button disabled className='addbasketbtn1'>< RiShoppingCartLine /></button>) : (<button className="product-links"> <RiShoppingCartLine /></button>)
                                                            }
                                                        </div>
                                                        <div onClick={() => handleAddScale(itm)}>
                                                            {
                                                                scale.filter((i) => i.id === itm.id).length > 0 ? (<button disabled className='addbasketbtn2'><LiaBalanceScaleLeftSolid /></button>) : (<button className="product-links"><LiaBalanceScaleLeftSolid /></button>)
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="product-title"><div className="product-desc desc2">{itm.title}<div className="div3"></div>
                                                    </div></div>
                                                    <div className="product-static">
                                                        <div>Model:</div> <div className='volt'>{itm.model}</div>
                                                    </div>
                                                    <div className="product-static">
                                                        <div>Ishlash tezligi:</div> <div className='volt'>{itm.ishlashTezligi}</div>
                                                    </div>
                                                    <div className="product-static">
                                                        <div>Quvvati:</div> <div className='volt'>{itm.quvvati}</div>
                                                    </div>
                                                    <div className="product-static">
                                                        <div>Vazni:</div> <div className='volt'>{itm.vazni}</div>
                                                    </div>
                                                    <div className="price">
                                                        <h6>${itm.price}</h6>
                                                    </div>
                                                    <div className="price-uzb">
                                                        {itm.priceUz} so'm
                                                    </div>
                                                    <div className="product-btn">
                                                        <NavLink to={`/view/${itm.id}`}>
                                                            <div>Batafsil</div><div className='narrow-btn'> <HiOutlineArrowNarrowRight /></div>
                                                        </NavLink>
                                                    </div>
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    :

                                    <div className='cardType'>
                                        <div className="ct_right_yellow"></div>
                                        <div className="ct_img">
                                            <img src={itm.img} alt="" />
                                        </div>
                                        <div className="ct_center">
                                            <h1 className='ctc_h1'>{itm.title}</h1>
                                            <div className="ct_center_yellow"></div>
                                            <div className="ct_center_buyurtma">
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="las la-truck text-base" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg>
                                                <p>Buyurtma orqali</p>
                                            </div>
                                            <div className="ct_center_type">
                                                <div className="ctc_type_text">
                                                    <p>Model:</p>
                                                    <p>{itm.model}</p>
                                                </div>
                                                <div className="ctct_line"></div>
                                            </div>
                                            <div className="ct_center_type">
                                                <div className="ctc_type_text">
                                                    <p>Ishlash tezligi</p>
                                                    <p>{itm.ishlashTezligi}</p>
                                                </div>
                                                <div className="ctct_line"></div>
                                            </div>
                                            <div className="ct_center_type">
                                                <div className="ctc_type_text">
                                                    <p>Quvvati:</p>
                                                    <p>{itm.quvvati}</p>
                                                </div>
                                                <div className="ctct_line"></div>
                                            </div>
                                            <div className="ct_center_type">
                                                <div className="ctc_type_text">
                                                    <p>Vazni:</p>
                                                    <p>{itm.vazni}</p>
                                                </div>
                                                <div className="ctct_line"></div>
                                            </div>
                                        </div>
                                        <div className="ct_end">
                                            <div className="ct_end_top">
                                                <p>ID: {itm.id}</p>
                                                <div className="ct_end_top_funcs">
                                                    <div onClick={() => handleAddLiked(itm)}>
                                                        {
                                                            liked.filter((i) => i.id === itm.id).length > 0 ? (<button className='liked-btn' disabled>< FaHeart /></button>) : (<button className="product-links"> < FaRegHeart /></button>)
                                                        }
                                                    </div>
                                                    <div onClick={() => handleAddBasket(itm)}>
                                                        {
                                                            basket.filter((i) => i.id === itm.id).length > 0 ? (<button disabled className='addbasketbtn1'>< RiShoppingCartLine /></button>) : (<button className="product-links"> <RiShoppingCartLine /></button>)
                                                        }
                                                    </div>
                                                    <div onClick={() => handleAddScale(itm)}>
                                                        {
                                                            scale.filter((i) => i.id === itm.id).length > 0 ? (<button disabled className='addbasketbtn2'><LiaBalanceScaleLeftSolid /></button>) : (<button className="product-links"><LiaBalanceScaleLeftSolid /></button>)
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ct_end_bottom">
                                                <div className="ctend_bot_price">
                                                    <div className='cbp'>
                                                        <div className="mahsulotlar_cip">
                                                            CIP
                                                        </div>
                                                        <h1>${itm.price}</h1>
                                                    </div>
                                                    <p>{itm.priceUz} so'm</p>
                                                </div>
                                                <NavLink to={`/view/${itm.id}`}>
                                                    <div>Batafsil</div><div className='mahsulotlar_btn'> <HiOutlineArrowNarrowRight /></div>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>

                                }
                            </div>
                        ))}
                    </div>
                    <div className="mahsulotlar_pagination">
                        <div onClick={() => handleClick("prev")} className="m_p_btn">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path></svg>
                        </div>
                        {pageNumbers.map((number, index) => (
                            <div
                                onClick={() => setCurrentPage(number)}
                                key={index}
                                className="m_p_btn"
                            >
                                {number}
                            </div>
                        ))}
                        <div onClick={() => handleClick("next")} className="m_p_btn">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mahslulotlar