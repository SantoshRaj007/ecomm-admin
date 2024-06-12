import React, { useState } from 'react'
import  Button  from '@mui/material/Button';
import DashboardBox from './components/dashboardBox'
import { FaUserCircle } from 'react-icons/fa';
import { FaCartArrowDown, FaBagShopping, FaMoneyBillTrendUp  } from "react-icons/fa6";
import { HiDotsVertical, HiTrendingDown } from 'react-icons/hi';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import RestoreIcon from '@mui/icons-material/Restore';
import { Chart } from "react-google-charts";

export const data = [
    ["Year", "Sales", "Expenses"],
    ["2013", 1000, 400],
    ["2014", 1170, 460],
    ["2015", 660, 1120],
    ["2016", 1030, 540],
];

export const options = {
    'backgroundColor': 'transparent',
    'chartArea': {'width':'100%', 'height': '100%'},
};

const Dashboard = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const ITEM_HEIGHT = 48;
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <div className='right-content w-100'>
                <div className='row dashboardBoxWrapperRow'>
                    <div className='col-md-8'>
                        <div className='dashboardBoxWrapper d-flex'>
                            <DashboardBox color={["#23a95c", "#47d281"]} icon={<FaUserCircle/>} grow={true}/>
                            <DashboardBox color={["#c114e3", "#e65bfb"]} icon={<FaCartArrowDown/>}/>
                            <DashboardBox color={["#2d79e6", "#5aa9f3"]} icon={<FaBagShopping/>}/>
                            <DashboardBox color={["#e29810", "#f2c827"]} icon={<FaMoneyBillTrendUp/>}/>
                        </div>
                    </div>

                    <div className='col-md-4 pl-0'>
                        <div className='box graphBox'>
                            <div className='d-flex align-items-center w-100 bottomEle'>
                                <h6 className='text-white mb-0 mt-0'>Total Sales</h6>
                                <div className='ml-auto'>
                                    <Button className='ml-auto toggleIcon' onClick={handleClick}><HiDotsVertical /></Button>

                                    <Menu
                                        className="dropdown_menu"
                                        MenuListProps={{
                                        'aria-labelledby': 'long-button',
                                        }}
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        PaperProps={{
                                        style: {
                                            maxHeight: ITEM_HEIGHT * 4.5,
                                            width: '20ch',
                                        },
                                        }}
                                    >
                                        
                                        <MenuItem onClick={handleClose}>
                                            <RestoreIcon /> Last Day
                                        </MenuItem>

                                        <MenuItem onClick={handleClose}>
                                            <RestoreIcon /> Last Week
                                        </MenuItem>

                                        <MenuItem onClick={handleClose}>
                                            <RestoreIcon /> Last Month
                                        </MenuItem>

                                        <MenuItem onClick={handleClose}>
                                            <RestoreIcon /> Last Year
                                        </MenuItem>
                                    
                                    </Menu>
                                </div>
                            </div>

                            <h3 className='text-white font-weight-bold'>$3,787,681.00</h3>
                            <p>$3,578.90 in last month</p>

                            <Chart
                                chartType="PieChart"
                                data={data}
                                width={"100%"}
                                height={"200px"}
                                options={options}
                            />
                        </div>
                    </div>
                </div>

                <div className='card shadow border-0 p-3 mt-4'>
                    <h3 className='hd'>Best Selling Products</h3>

                    <div className='row'>
                        <div className='col'>
                            <h4>SHOW BY</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
