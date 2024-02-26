import React from 'react'
import "./Navbar.css"
import { BsTruck } from "react-icons/bs";

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
export default function SearchPanel() {
    const navigateF = useNavigate()
    const { searchItems } = useSelector(state => state.main)
    return (
        <div className='searchPanel'>
            <span></span>
            <div className='searchCardOrovchi'>
                {
                    searchItems.map(i => (
                        <div className='searchCards' key={i.id} onClick={() => navigateF(`view/${i.id}`)}>
                            <figure><img src={i.img} alt={i.title.slice(0, 19) + "..."} /></figure>
                            <div className='searchAddition'>
                                <p>{i.title}</p>
                                <div className="deliver-truck"> <div><BsTruck /></div>Buyurtma orqali</div>
                                <div className='searchPrice'>{i.price} $</div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <button>Barcha natijalar</button>
        </div>
    )
}
