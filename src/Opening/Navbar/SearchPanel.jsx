import React from 'react'
import "./Navbar.css"
import { useSelector } from 'react-redux'
export default function SearchPanel() {
    const { searchItems } = useSelector(state => state.main)
    return (
        <div className='searchPanel'>
            <span></span>
            <div>
                {
                    searchItems.map(i => (
                        <div key={i.id}>{i.title}</div>
                    ))
                }
            </div>
            <button>Barcha natijalar</button>
        </div>
    )
}
