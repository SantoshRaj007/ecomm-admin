import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo1.png'
import Button from '@mui/material/Button'
import { MdMenuOpen, MdLogout } from "react-icons/md";
// import { MdOutlineMenu } from "react-icons/md";
import SearchBox from '../SearchBox';
import { IoSunny, IoMailOutline, IoNotificationsOutline } from 'react-icons/io5';
// import { FaRegMoon } from 'react-icons/fa';
import { RiGlobalLine } from "react-icons/ri";
import { IoMdCart } from "react-icons/io";
import { BsShieldFillExclamation } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Divider } from '@mui/material';

const Header = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [isOpenNotificationDrop, setisOpenNotificationDrop] = useState(false);

    const openMyAcc = Boolean(anchorEl);
    const openNotifications = Boolean(isOpenNotificationDrop);

    const handleOpenMyAccDrop = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMyAccDrop = () => {
        setAnchorEl(null);
    };

    
    const handleOpenNotificatiosDrop = () => {
        setisOpenNotificationDrop(true)
    }

    const handleCloseNotificatiosDrop = () => {
        setisOpenNotificationDrop(false)
    }

    return (
        <>
            <header className='d-flex align-items-center'>
                <div className='container-fluid w-100'>
                    <div className='row d-flex align-items-center w-100'>
                        {/* Logo */}
                        <div className='col-sm-2 part1'>
                            <Link to={'/'} className='d-flex align-items-center logo'>
                                <img src={logo} alt='logo'/>
                                <span className='ml-2'>ADMIN</span>
                            </Link>
                        </div>

                        <div className='col-sm-3 d-flex align-items-center part2 pl-4'>
                            <Button className='rounded-circle mr-3'><MdMenuOpen /></Button>
                            <SearchBox />
                        </div>

                        <div className='col-sm-7 d-flex align-items-center justify-content-end part2 pl-4'>
                            <Button className='rounded-circle mr-3'><IoSunny  /></Button>
                            <Button className='rounded-circle mr-3'><RiGlobalLine /></Button>
                            <Button className='rounded-circle mr-3'><IoMdCart /></Button>
                            <Button className='rounded-circle mr-3'><IoMailOutline /></Button>
                            <div className='dropdownWrapper position-relative'>
                                <Button className='rounded-circle mr-3' onClick={handleOpenNotificatiosDrop}><IoNotificationsOutline />
                                    <Menu
                                        anchorEl={isOpenNotificationDrop}
                                        className='notifications dropdown_list'
                                        id="notifications"
                                        open={openNotifications}
                                        onClose={handleCloseNotificatiosDrop}
                                        onClick={handleCloseNotificatiosDrop}
                                        
                                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                    >                         
                                        <div className='head pl-3 pb-0'>
                                            <h4>My Notification (5)</h4>
                                        </div>
                                        <Divider className='mb-1' />
                                        <div className='scroll'>
                                            <MenuItem onClick={handleCloseMyAccDrop}>
                                                <div className='d-flex'>
                                                    <div>
                                                        <div className='userImg'>
                                                            <span className='rounded-circle'>
                                                                <img src='https://mironcoder-hotash.netlify.app/images/avatar/01.webp' alt='img'/>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className='dropdownInfo'>
                                                        <h4><span><b>Mahmudul</b> added to his favorite list <b>Leather belt steve madden</b></span></h4>
                                                        <p className='text-sky'>few seconds ago</p>
                                                    </div>
                                                </div>
                                            </MenuItem>

                                            <MenuItem onClick={handleCloseMyAccDrop}>
                                                <div className='d-flex'>
                                                    <div>
                                                        <div className='userImg'>
                                                            <span className='rounded-circle'>
                                                                <img src='https://mironcoder-hotash.netlify.app/images/avatar/01.webp' alt='img'/>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className='dropdownInfo'>
                                                        <h4><span><b>Mahmudul</b> added to his favorite list <b>Leather belt steve madden</b></span></h4>
                                                        <p className='text-sky'>few seconds ago</p>
                                                    </div>
                                                </div>
                                            </MenuItem>
                                        </div>

                                        <div className='pl-3 pr-3 w-100 pt-2 pb-1'>
                                        <Button className='btn-blue w-100'>View all notifications</Button>
                                        </div>
                                        
                                    </Menu>
                                </Button>
                            </div>

                            <div className='myAccWrapper'>
                                <Button className='myAcc d-flex align-items-center' onClick={handleOpenMyAccDrop}>
                                    <div className='userImg'>
                                        <span className='rounded-circle'>
                                            <img src='https://mironcoder-hotash.netlify.app/images/avatar/01.webp' alt='user-img' />
                                        </span>
                                    </div>
                                    <div className='userInfo'>
                                        <h4>Santosh Singh</h4>
                                        <p className='mb-0'>@santosh007</p>
                                    </div>
                                </Button>
                                <Menu
                                    anchorEl={anchorEl}
                                    id="account-menu"
                                    open={openMyAcc}
                                    onClose={handleCloseMyAccDrop}
                                    onClick={handleCloseMyAccDrop}
                                    
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >                         
                                    
                                    <MenuItem onClick={handleCloseMyAccDrop}>
                                        <ListItemIcon>
                                            <FaUser fontSize="small" />
                                        </ListItemIcon>
                                        MY Account
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseMyAccDrop}>
                                        <ListItemIcon>
                                            <BsShieldFillExclamation fontSize="small" />
                                        </ListItemIcon>
                                        Reset Password
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseMyAccDrop}>
                                        <ListItemIcon>
                                            <MdLogout fontSize="small" />
                                        </ListItemIcon>
                                        Logout
                                    </MenuItem>
                                </Menu>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
