import React from 'react';
import { BsTruck } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { LiaBalanceScaleLeftSolid } from "react-icons/lia";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useDispatch, useSelector } from 'react-redux';
import { BsFillCartCheckFill } from "react-icons/bs";
import { RiShoppingCartLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import { DeleteAllLiked, DeleteLiked, SelectBasket, SelectScale } from '../../../Redux/Main';
import { NavLink } from 'react-router-dom';
export default function Liked() {
    const { liked , basket, scale} = useSelector(state => state.main);
    const dispatch = useDispatch()
    const handleAddBasket = (item) => {
    dispatch(SelectBasket(item))
    }
    const handleAddScale= (item) => {
    dispatch(SelectScale(item))
    }
    const handleDeleteLiked= (item) => {
    dispatch(DeleteLiked(item))
    }
    const handleDeleteAllLiked= (item) => {
    dispatch(DeleteAllLiked(item))
    }
  return (
    <div className='friends-cover'>
 {
    liked.length > 0 ? (
<>
<div className='top-of-liked'>
    <div> <h1 className='likedh1'>Sevimlilar</h1>
    <h2 className='likedh2'><div className='span1'></div><div className='span2'></div></h2>
    </div>
    <div className='deleteall' onClick={handleDeleteAllLiked}><div className='delete-btn' ><IoTrashOutline /></div><div>Barchasini o'chirish</div></div>
   </div>
    <div className="products">
           {
            liked.map((item) => (
                <div className="one-product" key={item.id}>
                <figure>
                    <div className="product-header">
                        <div className="delivery">
                        <div className="deliver-truck"> <div><BsTruck /></div>Buyurtma orqali</div>
                        <div>ID: {item.id}</div>
                        </div>
                        <div className="product-desc">{item.title}
                        </div>
                    </div>
                <img src={item.img} alt="Mountains"/>
                <figcaption>
                   <div className="desc">
                    <div>
                        <div className='liked-btn' onClick={() => handleDeleteLiked(item)}> <IoTrashOutline/></div>
                        <div onClick={()=>handleAddBasket(item)}>
                        {
                            basket.filter((i) => i.id === item.id).length > 0 ? (<button disabled className='addbasketbtn1'>< RiShoppingCartLine /></button>) : (<button  className="product-links"> <RiShoppingCartLine  /></button>)
                        }
                        </div>
                        <div onClick={() => handleAddScale(item)}>
                        {
                            scale.filter((i) => i.id === item.id).length > 0 ? (<button disabled className='addbasketbtn2'><LiaBalanceScaleLeftSolid /></button>) : (<button  className="product-links"><LiaBalanceScaleLeftSolid /></button>)
                        }
                        </div>
                    </div>
                    <div className="product-title"><div className="product-desc desc2">{item.title}<div className="div3"></div>
                        </div></div>
                    <div className="product-static">
                        <div>{item.harakteristika1}</div> <div className='volt'>{item.harakteristikatype1}</div>
                    </div>
                    <div className="product-static">
                        <div>{item.harakteristika2}</div> <div className='volt'>{item.harakteristikatype2}</div>
                    </div>
                    <div className="product-static">
                        <div>{item.harakteristika3}</div> <div className='volt'>{item.harakteristikatype3}</div>
                    </div>
                    <div className="product-static">
                        <div>{item.harakteristika4}</div> <div className='volt'>{item.harakteristikatype4}</div>
                    </div>        
                    <div className="price">
                        <h5>{item.cip}</h5>
                        <h6>${item.price}</h6>
                    </div>
                    <div className="price-uzb">
                        124 5666 000 so'm
                    </div>
                    <div className="product-btn">
                     <NavLink to={`/view/${item.id}`}>
                     <div>Batafsil</div><div className='narrow-btn'> <HiOutlineArrowNarrowRight /></div>
                     </NavLink>
                    </div>
                   </div>
                </figcaption>
                </figure>
                </div>
            ))
           }
        </div></>
    ) : 
    <div className="product">
       <div className='liked-none'>
        <h1 className='likednoneh1'>Sevimlilar</h1>
        <h2 className='likedh2 likednone'><div className='span1'></div><div className='span2'></div></h2>
     </div>   
     <div className="liked-none-desc">
        <h3>Sevimlilar ro'yxati bo'sh</h3>
        <h4>Keyinroq osongina topish yoki xarid qilish uchun o'zingizga <br /> yoqqan mahsulotlarni shu yerga saqlab qo'yishingiz mumkin</h4>
        <NavLink to={'/'}><button>Bosh sahifaga o'tish</button></NavLink>
     </div>
    </div>
 }
    </div>
  )
}
