import axios from "axios";
import { FcPrevious } from "react-icons/fc";
import * as React from 'react';
import Box from '@mui/material/Box';
import { BiExit } from "react-icons/bi";
import Stack from '@mui/material/Stack';
import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { FcCheckmark } from "react-icons/fc";
import Skeleton from '@mui/material/Skeleton';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { NavLink, useParams } from "react-router-dom"
import { BsTruck } from "react-icons/bs";
import { LiaBalanceScaleLeftSolid } from "react-icons/lia";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { GetPopularProducts, SelectBasket, SelectError, SelectLiked, SelectScale } from '../../../Redux/Main';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillCartCheckFill } from "react-icons/bs";
import { RiShoppingCartLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
const ViewProduct = () => {
    const { basket, liked , scale, Error} = useSelector(state => state.main)
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [isloading, setLoading] = useState(false);
    const [count, setCount] = useState(1)
    const dispatch = useDispatch()
    useEffect(()=>{
    async function FetchData(){
       try {
        setLoading(true)
        const data = await axios.get(`http://localhost:3001/PopularProducts/${ id }`)
        setProduct(data.data)
        setLoading(false)
    } catch (error) {
        dispatch(SelectError(error.message))
       }
    }
    FetchData()
    },[])
    function handleCountPlus(){
        setCount(count   + 1)
    }
    function handleCountMin(){
        setCount(count > 0 ? count - 1 : count)
    }
    const handleAddLiked = (item) => {
        dispatch(SelectLiked(item))
    }
    const handleAddBasket = (item) => {
        dispatch(SelectBasket(item))
    }
    const handleAddScale= (item) => {
        dispatch(SelectScale(item))
    }
    const Loading = () =>{
    return (
    <div className="products-skeleton">
        <Stack spacing={1}>
        <Skeleton variant="rectangular" width={220} height={40} />
        <Skeleton variant="rectangular" width={220} height={20} />
        <Skeleton variant="rounded" width={220} height={170} />
        </Stack> 
        <Stack spacing={1}>
        <Skeleton variant="rectangular" width={220} height={40} />
        <Skeleton variant="rectangular" width={220} height={20} />
        <Skeleton variant="rounded" width={220} height={170} />
        </Stack> 
        <Stack spacing={1}>
        <Skeleton variant="rectangular" width={220} height={40} />
        <Skeleton variant="rectangular" width={220} height={20} />
        <Skeleton variant="rounded" width={220} height={170} />
        </Stack> 
        <Stack spacing={1}>
        <Skeleton variant="rectangular" width={220} height={40} />
        <Skeleton variant="rectangular" width={220} height={20} />
        <Skeleton variant="rounded" width={220} height={170} />
        </Stack> 
        <Stack spacing={1}>
        <Skeleton variant="rectangular" width={220} height={40} />
        <Skeleton variant="rectangular" width={220} height={20} />
        <Skeleton variant="rounded" width={220} height={170} />
        </Stack> 
        <br /><br />
    </div>
    )
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 470,
        bgcolor: 'background.paper',
        border: 'none',
        boxShadow: 24,
        p: 4,
    };
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // console.log(product);
    const ShowProduct = () => {
        return (
            <>
            <br />
            <div className="product">
                <div className="product-1">
                    <div className="product-1-img"><img src={product.img} alt="" /></div>
                    <div>
                        <div className="product-1-icon">
                        <div onClick={()=>handleAddLiked(product)}>
                        {
                            liked.filter((i) => i.id === product.id).length > 0 ? (<button className='liked-btn-view' disabled>Sevimlilarga <br /> qo'shildi</button>) : (<button  className="product-links-view"> Sevimlilarga <br /> qo'shish</button>)
                        }
                            </div>
                        <div onClick={()=>handleAddBasket(product)}>
                        {
                            basket.filter((i) => i.id === product.id).length > 0 ? (<button disabled className='liked-btn-view'>Savatga <br /> qo'shildi</button>) : (<button  className="product-links-view">Savatga <br /> qo'shish</button>)
                        }
                        </div>
                        <div onClick={() => handleAddScale(product)}>
                            {
                            scale.filter((i) => i.id === product.id).length > 0 ? (<button disabled className='liked-btn-view'>Taqqoslashga <br /> qo'shildi</button>) : (<button  className="product-links-view">Taqqoslash</button>)

                            }
                            </div>
                        </div>
                        <div className="product-1-title">{product.title}</div>
                        <div className="product-1-under-title">
                          <div><h2 className="product-1-h3">ID: {product.id}</h2><h2 className="product-1-h2">Buyurtma orqali</h2></div>
                          <div>tg,watsup,link</div>
                        </div>
                        <div className="product-1-body">
                        <h4>Termausadochniy tunel ichki mahsulot sig'imi o'lchami: 45x35.</h4>   
                        <h4>Uskunaning texnik ko’rsatgichlari: </h4> 
                        <div className="product-static">
                            <div>{product.harakteristika1}</div> <div>{product.harakteristikatype1}</div>
                            <div className="product-static">
                            <div>{product.harakteristika2}</div> <div>{product.harakteristikatype2}</div>
                            </div>
                            <div className="product-static">
                            <div>{product.harakteristika3}</div> <div>{product.harakteristikatype3}</div>
                            </div>
                            <div className="product-static">
                            <div>{product.harakteristika4}</div> <div>{product.harakteristikatype4}</div>
                            </div>
                        </div>  
                        <div className="book-div">
                            <div className="book-price-1">
                           <div> <div className="price">
                            <h5>{product.cip}</h5>
                            <h6 className="prices">${product.price}</h6>
                            </div>
                            <div className="price-uzb">
                            124 5666 000 so'm
                            </div></div>
                            <div className="book-btns">
                                <button className="book-btn-1">Buyurtma berish</button>
                                <button className="book-btn-2">Pdf yuklab olish</button>
                            </div>
                            </div>
                            <div className="book-desc">
                                <div className="book-desc1">
                                    <span>icon</span> <span>Konvertatsiya xizmatlari uchun <br /> 1%</span>
                                </div>
                                <div className="book-desc1">
                                    <span>icon</span> <span>Bank xizmatlari uchun <br /> 0,5%</span>
                                </div>
                                <div className="book-desc2">
                                    <span>icon</span> <span>12% QQS (dollarda hisoblanmaydi)</span>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
            </div>
        </>
        )
    }
    return (
        <div className="container">
            <div className="row">
                {isloading ? <Loading/> : <ShowProduct/>}
            </div>
        </div>
    )
}
export default ViewProduct