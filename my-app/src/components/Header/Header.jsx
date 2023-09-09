import React from 'react'
import "./Header.css"

import { FaLocationPin ,FaBars, FaRegEnvelope , FaPhone} from "react-icons/fa6"
import {BiShoppingBag , BiSolidShoppingBags} from "react-icons/bi"
import { useContext } from 'react';
import { contextApi } from '../../context/Context';

function Header() {
    
    const useContextApi = useContext(contextApi);
    return (
        <>
            <div className='top-bar'>
                <div className="row top-bar-container vertical-center" style={{width:"100%"}}>
                    <div className='col-3 '>
                        <div className='location'>
                            <a href="#" >
                                <div className='icon-style'>
                                    <div style={{paddingBottom:"20px"}}><FaLocationPin /></div>
                                    <p style={{paddingTop:"3px"}}>Locate Stores</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className='col-6 '>
                        <a href="#">
                            <span>FLASH SALE THIS WEEK - OFF 5% ITEMS</span>
                            <a>Check it now</a>
                        </a>
                        
                    </div>
                    <div className='col-3 '>
                        <div className="row contact">
                            
                                <div className="col-6">
                                    <div>
                                        <a href="">
                                            <div className='icon-style mail' >
                                                <div><FaRegEnvelope /></div>
                                                <p>gramathupal@gmail.com</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            <div className="col-6">
                                <div>
                                    <a href="">
                                        <div className='icon-style phone' >
                                            <div><FaPhone /></div>
                                            <p>9876543210</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div id={useContextApi.SideNav?"mySidenav-active":"mySidenav"} className="sidenav">
                    <a href="javascript:void(0)" className="closebtn" onClick={useContextApi.handleSideNav}>&times;</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Clients</a>
                    <a href="#">Contact</a>
                </div>

            <div className='navbar-container'>
                
                    <div class="container-fluid contain-navbar">
                        <div className='row' style={{width:"100%"}}>
                            <div className="col-1">
                                <a class="navbar-brand" href="#">
                                    <img src="pngwing.png" alt="Logo" width="100"  class="d-inline-block align-text-top"/>
                                </a>
                            </div>
                            <div className='col-10 navbar-hide'>
                                <div class="navbar-center">
                                    <div class="navbar-center-1 ">
                                        <a class="nav-link" href="#">HOME</a>
                                        <a class="nav-link" href="#">PRODUCTS</a>
                                        <a class="nav-link" href="#">BOOK TRAIL MILK</a>
                                        <a class="nav-link" href="#">GOSHALA</a>
                                        <a class="nav-link" href="#">ABOUT</a>
                                        <a class="nav-link" href="#">PRESS & MEDIA</a>
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