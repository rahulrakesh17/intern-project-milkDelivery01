import React from 'react'
import "./Header.css"
import { FaLocationPin , FaRegEnvelope , FaPhone} from "react-icons/fa6"


function Header() {
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


            <div className='navbar-container'>
                <nav class="navbar navbar-expand-lg ">
                    <div class="container-lg">
                        <a class="navbar-brand" href="#">
                            <img src="pngwing.png" alt="Logo" width="100"  class="d-inline-block align-text-top"/>
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                       
                            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div class="navbar-nav navbar-center">
                                    <a class="nav-link" href="#">Features</a>
                                    <a class="nav-link" href="#">Pricing</a>
                                    <a class="nav-link" href="#">Pricing</a>
                                    <a class="nav-link" href="#">Pricing</a>
                                </div>
                            </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Header