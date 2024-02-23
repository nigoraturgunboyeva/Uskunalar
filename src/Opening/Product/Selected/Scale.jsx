import * as React from 'react';
import { Switch } from 'antd';
import { FaHeart } from "react-icons/fa";
import { BsTruck } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { DeleteAllScale, DeleteScale, SelectBasket, SelectLiked, SelectRefresh } from '../../../Redux/Main';
import { useState } from 'react';
export default function Scale() {
    const { liked, basket, scale } = useSelector(state => state.main);
    const [checkedUp, SetChecked] = useState(true)
    const dispatch = useDispatch()
    const handleAddBasket = (item) => {
      dispatch(SelectBasket(item))
      }
    const handleDeleteScale = (item) => {
    dispatch(DeleteScale(item))
    }
    const handleDeleteAllScale = (item) => {
    dispatch(DeleteAllScale(item))
    }
    const handleAddLiked = (item) => {
        dispatch(SelectLiked(item))
    }
    function Refresh(){
        window.location.reload(false);
    }
    const onChange = (checked) => {
    //   console.log(`switch to ${checked}`);
      SetChecked(false)
    };

  return (
    <div className='friends-cover'>
    {
    scale.length > 0 ? (
    <>
    <div className='top-of-liked'>
    <div> <h1 className='likedh1'>Taqqoslash</h1>
    <h2 className='likedh2'><div className='span1'></div><div className='span2'></div></h2>
    </div>
    <div className='deleteall' onClick={handleDeleteAllScale}><div className='delete-btn' ><IoTrashOutline /></div><div>Barchasini o'chirish</div></div>
    </div>
   {
    checkedUp ? 
    ( <div className='switch-btn'>
    Xususiyatlarini ko'rsatish <span><Switch defaultChecked onChange={onChange} /></span>
    </div>
    ) : 
    (
        <div className='switch-btn' onClick={Refresh}>
        Xususiyatlarini ko'rsatish <span><Switch defaultChecked onChange={onChange} /></span>
        </div>
    )
   }
    <div className="products">
           {
            scale.map((item) => (
                <div className={checkedUp ?  "one-checked-product" : "one-product"} key={item.id}>
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
                        <div className='liked-btn' onClick={() => handleDeleteScale(item)}> <IoTrashOutline/></div>
                        <div onClick={()=>handleAddLiked(item)}> 
                        {
                            liked.filter((i) => i.id === item.id).length > 0 ? (<button className='liked-btn' disabled>< FaHeart/></button>) : (<button  className="product-links"> < FaRegHeart/></button>)
                        }
                        </div>
                        <div onClick={()=>handleAddBasket(item)}>
                        {
                            basket.filter((i) => i.id === item.id).length > 0 ? (<button disabled className='addbasketbtn1'>< RiShoppingCartLine /></button>) : (<button  className="product-links"> <RiShoppingCartLine  /></button>)
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
        <h1 className='likednoneh1'>Taqqoslash</h1>
        <h2 className='likedh2 likednone'><div className='span1'></div><div className='span2'></div></h2>
     </div>   
     <div className="liked-none-desc">
        <h3>Taqqoslash ro'yxati bo'sh</h3>
        <h4>Keyinroq osongina topish yoki xarid qilish uchun o'zingizga <br /> yoqqan mahsulotlarni shu yerga saqlab qo'yishingiz mumkin</h4>
        <NavLink to={'/'}><button>Bosh sahifaga o'tish</button></NavLink>
     </div>
    </div>
    }
    </div>
  )
}