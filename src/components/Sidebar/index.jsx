import  Button  from '@mui/material/Button'
import React, { useState } from 'react'
import { FaAngleRight, FaUserCircle, FaProductHunt } from 'react-icons/fa';
import { MdDashboard , MdLock} from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { Link } from 'react-router-dom';


const Sidebar = () => {

    const [activeTab, setActiveTab] = useState(0);
    const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);

    const isOpenSubmenu=(index) => {
        setActiveTab(index);
        setIsToggleSubmenu(!isToggleSubmenu)
    }

    return (
        <>
            <div className='sidebar'>
                <ul>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 0 && isToggleSubmenu === true ? 'active' : ''}`} onClick={()=>isOpenSubmenu(0)}>
                                <span className='icon'><MdDashboard/></span>
                                    Dashboard
                                <span className='arrow'><FaAngleRight/></span>    
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Button className={`w-100 ${activeTab === 1 && isToggleSubmenu === true ? 'active' : ''}`} onClick={()=>isOpenSubmenu(1)}>
                            <span className='icon'><FaUserCircle/></span>
                                Users
                            <span className='arrow'><FaAngleRight/></span>    
                        </Button>
                        <div className={`submenuWrapper ${activeTab===1 && isToggleSubmenu===true ? 'colapse' : 'colapsed'}`}>
                            <ul className='submenu'>
                                <li><Link to="/">User List</Link></li>
                                <li><Link to="/">User Profile</Link></li>
                                <li><Link to="/">My Account</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Button className={`w-100 ${activeTab === 2 && isToggleSubmenu === true ? 'active' : ''}`} onClick={()=>isOpenSubmenu(2)}>
                            <span className='icon'><FaProductHunt/></span>
                                Products
                            <span className='arrow'><FaAngleRight/></span>    
                        </Button>
                        <div className={`submenuWrapper ${activeTab === 2 && isToggleSubmenu === true ? 'colapse' : 'colapsed'}`}>
                            <ul className='submenu'>
                                <li><Link to="/">Product List</Link></li>
                                <li><Link to="/">Product View</Link></li>
                                <li><Link to="/">Product Upload</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 3 && isToggleSubmenu === true ? 'active' : ''}`} onClick={()=>isOpenSubmenu(3)}>
                                <span className='icon'><FaCartArrowDown/></span>
                                    Orders
                                <span className='arrow'><FaAngleRight/></span>    
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 4 && isToggleSubmenu === true ? 'active' : ''}`} onClick={()=>isOpenSubmenu(4)}>
                                <span className='icon'><IoMdMail/></span>
                                    Messages
                                <span className='arrow'><FaAngleRight/></span>    
                            </Button>
                        </Link>                        
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 5 && isToggleSubmenu === true ? 'active' : ''}`} onClick={()=>isOpenSubmenu(5)}>
                                <span className='icon'><IoNotifications/></span>
                                    Notifications
                                <span className='arrow'><FaAngleRight/></span>    
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 6 && isToggleSubmenu === true ? 'active' : ''}`} onClick={()=>isOpenSubmenu(6)}>
                                <span className='icon'><IoMdSettings/></span>
                                    Settings
                                <span className='arrow'><FaAngleRight/></span>    
                            </Button>
                        </Link>
                    </li>
                    
                </ul>

                <div className='logoutWrapper'>
                    <div className='logoutBox'>
                        <Button variant='contained'><MdLock/> Logout</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
