import React from 'react'
import {useState} from 'react'
import './topContainer.css'
import { FaRegCalendar } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { PiNoteFill } from "react-icons/pi";
function TopHeader(){
    const user = useState("Akashy")
    const TodayIsDate = useState(14)
    const ThisMonth = useState("February")
    return(
        <div className='top-main-header-card-container'>
            <div className='top-header-card-container'>
            <div>

            <h1 className='heading-top-card-contianer'>Good Afternoon , {user}</h1>
            <p className='prg-top-card-cotianer'>Your are subscribed to Retail plan.</p>
            </div>
            <div className='date-calneder-contaienr'>
                <div className='calendar-icon-and-text'>
                <FaRegCalendar className='icon-top-card-calender'/>
                <span className="date-text">Today, {TodayIsDate} {ThisMonth} </span>
                <FaRegClock className='icon-top-card-calender'/>
                <span  className="time-text">07:35 AM</span>
                </div>
                <IoMdNotificationsOutline className='icon-top-card-calender'/>
            </div>
            </div>
            <div className='saved-libary-main-card-contaienr' >
                <div className='saved-libary-card-contaienr'>
                    <PiNoteFill className='save-library-icon' />
                    <h4 className='saved-libary-heading-prg'>My saved libary 1</h4>
                    <p className='saved-libary-heading-prg'>dd-mm-yyyy</p>
                </div>
                <div className='saved-libary-card-contaienr'>
                    <PiNoteFill className='save-library-icon' />
                    <h4 className='saved-libary-heading-prg'>My saved libary 2</h4>
                    <p className='saved-libary-heading-prg'>dd-mm-yyyy</p>
                </div>
                <div className='saved-libary-card-contaienr'>
                    <PiNoteFill className='save-library-icon' />
                    <h4 className='saved-libary-heading-prg'>My saved libary 3</h4>
                    <p className='saved-libary-heading-prg'>dd-mm-yyyy</p>
                </div>
                <div className='saved-libary-card-contaienr'>
                    <PiNoteFill className='save-library-icon' />
                    <h4 className='saved-libary-heading-prg'>My saved libary 4</h4>
                    <p className='saved-libary-heading-prg'>dd-mm-yyyy</p>
                </div>
                <div className='saved-libary-card-contaienr'>
                    <PiNoteFill className='save-library-icon' />
                    <h4 className='saved-libary-heading-prg'>My saved libary 5</h4>
                    <p className='saved-libary-heading-prg'>dd-mm-yyyy</p>
                </div>
            </div>
        </div>
    )
}

export default TopHeader;