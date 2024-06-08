import React from 'react'
import DashboardBox from './components/dashboardBox'
import { FaUserCircle } from 'react-icons/fa';
import { FaCartArrowDown, FaBagShopping, FaMoneyBillTrendUp  } from "react-icons/fa6";

const Dashboard = () => {
    return (
        <>
            <div className='right-content w-100'>
                <div className='row dashboardBoxWrapperRow'>
                    <div className='col-md-8'>
                        <div className='dashboardBoxWrapper d-flex'>
                            <DashboardBox color={["#23a95c", "#47d281"]} icon={<FaUserCircle/>} />
                            <DashboardBox color={["#c114e3", "#e65bfb"]} icon={<FaCartArrowDown/>}/>
                            <DashboardBox color={["#2d79e6", "#5aa9f3"]} icon={<FaBagShopping/>}/>
                            <DashboardBox color={["#e29810", "#f2c827"]} icon={<FaMoneyBillTrendUp/>}/>
                        </div>
                    </div>

                    <div className='col-md-4 pl-0'>
                        <div className='box'>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
