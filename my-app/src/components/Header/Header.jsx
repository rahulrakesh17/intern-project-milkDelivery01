import React from 'react'
import "./Header.css"
import { FaLocationPin } from "react-icons/fa6"

function Header() {
    return (
        <>
            <div className='top-bar'>
                <div className="row top-bar-container vertical-center" style={{width:"100%"}}>
                    <div className='col-xl-3 '>
                        <div>
                            <a href="#" >
                                <div style={{ display: "flex", flexWrap: "nowrap", gap: "5px",paddingTop:"10px"}}>
                                    <div><FaLocationPin /></div>
                                    <p>Locate Stores</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className='col-xl-6 '>
                        <a href="#">
                            <span>FLASH SALE THIS WEEK - OFF 5% ITEMS</span>
                            <a>Check it now</a>
                        </a>
                        
                    </div>
                    <div className='col-xl-3 '>g9g8oirthoihoitehroiu</div>
                </div>
            </div>
        </>
    )
}

export default Header