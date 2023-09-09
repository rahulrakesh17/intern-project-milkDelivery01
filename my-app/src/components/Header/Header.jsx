import React from 'react'
import "./Header.css"
import { FaLocationPin ,FaBars, FaRegEnvelope , FaPhone} from "react-icons/fa6"
import {BiShoppingBag , BiSolidShoppingBags} from "react-icons/bi"
import { useContext} from 'react';
import {Link} from "react-router-dom"
import { contextApi } from '../../context/Context';


function Header() {
    
    const useContextApi = useContext(contextApi);
    return (
        <>
            <div className='top-bar'>
                <div className="row top-bar-container vertical-center" style={{width:"100%"}}>
                    <div className='col-3 '>
                        <div className='location'>
                            <Link to="/">
                                <div className='icon-style'>
                                    <div style={{paddingBottom:"20px"}}><FaLocationPin /></div>
                                    <p style={{paddingTop:"3px"}}>Locate Stores</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='col-6 '>
                        <Link to="/">
                            <span>FLASH SALE THIS WEEK - OFF 5% ITEMS</span>
                            <span>Check it now</span>
                        </Link>
                        
                    </div>
                    <div className='col-3 '>
                        <div className="row contact">
                            
                                <div className="col-6">
                                    <div>
                                        <Link to="/">
                                            <div className='icon-style mail' >
                                                <div><FaRegEnvelope /></div>
                                                <p>gramathupal@gmail.com</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            <div className="col-6">
                                <div>
                                    <Link to="/">
                                        <div className='icon-style phone' >
                                            <div><FaPhone /></div>
                                            <p>9876543210</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div id={useContextApi.SideNav?"mySidenav-active":"mySidenav"} className="sidenav">
                    <Link to="/" className="closebtn" onClick={useContextApi.handleSideNav}>&times;</Link>
                    <Link to="/">HOME</Link>
                    <Link to="/">PRODUCTS</Link>
                    <Link to="/">BOOK TRAIL MILK</Link>
                    <Link to="/">GOSHALA</Link>
                    <Link to="/">ABOUT</Link>
                    <Link to="/">PRESS & MEDIA</Link>
                </div>

            <div className='navbar-container'>
                
                    <div className="container-fluid">
                        <div className='row' style={{width:"100%"}}>
                            <div className="col-1">
                                <Link to="/" className="navbar-brand" href="#">
                                    <img src="pngwing.png" alt="Logo" width="100"  className="d-inline-block align-text-top"/>
                                </Link>
                            </div>
                            <div className='col-10 navbar-hide'>
                                <div className="navbar-center">
                                    <div className="navbar-center-1 ">
                                        <Link className="nav-link" to="/">HOME</Link>
                                        <Link className="nav-link" to="/">PRODUCTS</Link>
                                        <Link className="nav-link" to="/">BOOK TRAIL MILK</Link>
                                        <Link className="nav-link" to="/">GOSHALA</Link>
                                        <Link className="nav-link" to="/">ABOUT</Link>
                                        <Link className="nav-link" to="/">PRESS & MEDIA</Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='col-9 dummy'></div>
                            <div className="col-1 shopping-cart">
                                <div className=''>
                                    <BiShoppingBag  size={30} color='white'/>
                                </div>
                            </div>
                            <div className='col-1 toggle-bar'>
                                <div onClick={useContextApi.handleSideNav}>
                                    <FaBars size={30} color="white"/>
                                </div>
                            </div>

                        </div>
                    </div>

            </div>
        </>
    )
}

export default Header