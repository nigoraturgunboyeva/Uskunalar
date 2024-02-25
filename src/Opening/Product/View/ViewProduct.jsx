import axios from "axios";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from "react";
import Skeleton from '@mui/material/Skeleton';
import { useParams } from "react-router-dom"
import { SelectBasket, SelectError, SelectLiked, SelectScale } from '../../../Redux/Main';
import { useDispatch, useSelector } from 'react-redux';
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { BiLinkAlt } from "react-icons/bi";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CiDollar } from "react-icons/ci";
import { BsBank2 } from "react-icons/bs";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import Modal from '@mui/material/Modal';
import { TbTruckDelivery } from "react-icons/tb";
import TextField from '@mui/material/TextField';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
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
    function CustomTabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }

    CustomTabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
      };

    function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const stylemodal = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: 'none',
        boxShadow: 24,
        p: 4,
      };
      
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);

    const ShowProduct = () => {
        return (
            <div className="view-cont product-view">
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
                          <div><FaTelegram /><FaWhatsapp /><BiLinkAlt /></div>
                        </div>
                        <div className="product-1-body">
                        <h4>Termausadochniy tunel ichki mahsulot sig'imi o'lchami: 45x35.</h4>   
                        <h4>Uskunaning texnik ko’rsatgichlari: </h4> 
                        <div className="product-static">
                            <div>{product.harakteristika1}</div> <div>{product.harakteristikatype1}</div>
                            </div> 
                            <div className="product-static">
                            <div>{product.harakteristika2}</div> <div>{product.harakteristikatype2}</div>
                            </div>
                            <div className="product-static">
                            <div>{product.harakteristika3}</div> <div>{product.harakteristikatype3}</div>
                            </div>
                            <div className="product-static">
                            <div>{product.harakteristika4}</div> <div>{product.harakteristikatype4}</div>
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
                                <button className="book-btn-1" onClick={handleOpen}>Buyurtma berish</button>
                                <button className="book-btn-2">Pdf yuklab olish</button>
                            </div>
                            </div>
                            <div className="book-desc">
                                <div className="book-desc1">
                                    <span><CiDollar /></span> <span>Konvertatsiya xizmatlari uchun <br /> 1%</span>
                                </div>
                                <div className="book-desc1">
                                    <span><BsBank2 /></span> <span>Bank xizmatlari uchun <br /> 0,5%</span>
                                </div>
                                <div className="book-desc2">
                                    <span><LiaFileInvoiceDollarSolid /></span> <span>12% QQS (dollarda hisoblanmaydi)</span>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
            </div>
            <div>
            <Box className="tab-cont">
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Xususiyatlari" {...a11yProps(0)} />
                <Tab label="Tavsifi" {...a11yProps(1)} />
                <Tab label="Video" {...a11yProps(2)} />
                <Tab label="Yetkazib berish shartlari" {...a11yProps(3)} />
                <Tab label="Kafolat shartlari" {...a11yProps(4)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
            <div className="product-static white-strike">
            <div>{product.harakteristika1}</div> <div>{product.harakteristikatype1}</div>
            </div> 
            <div className="product-static gry-strike">
            <div>{product.harakteristika2}</div> <div>{product.harakteristikatype2}</div>
            </div>
            <div className="product-static white-strike">
            <div>{product.harakteristika3}</div> <div>{product.harakteristikatype3}</div>
            </div>
            <div className="product-static gry-strike">
            <div>{product.harakteristika4}</div> <div>{product.harakteristikatype4}</div>
            </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                {product.title}.
                <h4>Uskunaning texnik ko’rsatgichlari:</h4>
                <br />
                <div className="product-static-2">
            <div>{product.harakteristika1}</div> <div>{product.harakteristikatype1}</div>
            </div> 
            <div className="product-static-2">
            <div>{product.harakteristika2}</div> <div>{product.harakteristikatype2}</div>
            </div>
            <div className="product-static-2 ">
            <div>{product.harakteristika3}</div> <div>{product.harakteristikatype3}</div>
            </div>
            <div className="product-static-2">
            <div>{product.harakteristika4}</div> <div>{product.harakteristikatype4}</div>
            </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                Video mavjud emas.
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                Tez kunda
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
                Tez kunda
            </CustomTabPanel>
            </Box>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={stylemodal}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    <div className="modal-div">
                        <h1>Buyurtma qilinayotgan mahsulot:</h1>
                        <div className="modal-div-2">
                            <div><img src={product.img} alt="" /></div>
                            <div>
                                <h2>{product.title}</h2>
                                <h3> <TbTruckDelivery /> Buyurtma orqali</h3>
                                <h4>{product.price}$</h4>
                            </div>
                        </div>
                    </div>
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <div className="modal-div-3">
                        <h3>Buyurtma qabul qiluvchi:</h3>
                        <br />
                        <div>
                            <form action="">
                            <TextField name='name' type='text' required fullWidth label="Familiya"  /> <br /> <br />
                         <TextField name='name' type='text' required fullWidth label="Ism"  /> <br /> <br />
                         <TextField name='name' type='number' required fullWidth label="Telefon raqam"  /> <br /> <br />
                         <button className="modal-send-btn">Arizani yuborish </button>
                       
                            </form>
                        </div>
                        <h6>* Formani yuborganingizdan so'ng, operatorlarimiz siz bilan bog'lanishadi.</h6>
                    </div>
                </Typography>
                </Box>
            </Modal>
                </div>
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