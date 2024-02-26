import React, { useEffect } from 'react';
import { BsTruck } from "react-icons/bs";
import { LiaBalanceScaleLeftSolid } from "react-icons/lia";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { GetPopularProducts, SelectBasket, SelectError, SelectLiked, SelectScale } from '../../Redux/Main';
import { useDispatch, useSelector } from 'react-redux';
import { RiShoppingCartLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import axios from 'axios';
import { NavLink } from 'react-router-dom';
export default function Product() {
    const { SelectAllData, liked, basket, PopularProducts, scale } = useSelector(state => state.main);
    const dispatch = useDispatch()
    const handleAddLiked = (item) => {
        dispatch(SelectLiked(item))
    }
    const handleAddBasket = (item) => {
        dispatch(SelectBasket(item))
    }
    const handleAddScale= (item) => {
        dispatch(SelectScale(item))
    }
    useEffect(() => {
        async function HandlePopularProducts(){
          try {
            const data = await axios.get("http://localhost:3001/PopularProducts")
            dispatch(GetPopularProducts(data.data))
          } catch (error) {
            dispatch(SelectError(error))
          }
        }
        HandlePopularProducts()
    },[dispatch])
  return (
    <div className='product'>
        <h1>Ommabop mahsulotlar</h1>
        <h3><div className="div1"></div><div className="div2"></div></h3>
        <div className="products">
           {
            PopularProducts.map((item) => (
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
        </div>
    </div>
  )
}
