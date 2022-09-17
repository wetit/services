import React, { useState } from 'react'
import { useEffect } from 'react'
import { ORDERS } from '../../config/api'
import { axiosApiInstance } from '../../config/axios'
import {DateTime} from 'luxon'
import CalendarSVG from '../../assets/calendar.svg';
import ClockSVG from '../../assets/clock-regular.svg'

function OrderList() {
    const [orders,setOrders]  = useState([])
    
    useEffect(()=>{
        fetchOrders()
    },[])


    const fetchOrders = () =>{
        axiosApiInstance.get(ORDERS)
        .then(res=>{
            setOrders(res.data)
        })
        .catch(error=>console.log(error))
    }
    

  return (
     orders &&
    <div className='p-[100px]'>
        <div className='text-[48px]'>
            รายการ
        </div>

        <div className='grid grid-cols-1 gap-3'>
        {
            orders.map(item=>
                <div  className='mt-[24px] p-4 grid grid-cols-2 shadow-lg rounded-lg'>
                    <div>
                        <div className='text-[24px] font-medium'>{item.service.name}</div>
                        <div className='flex gap-4'>
                            <span className='flex'>
                                <img src={CalendarSVG} width={16} height={16} alt='calendar' /> &nbsp; {DateTime.fromISO(item.createdAt).setLocale('en').toFormat('dd MMMM yyyy')}
                            </span>
                            <span className='flex'>
                                <img src={ClockSVG} width={16} height={16} alt='calendar' /> &nbsp; {DateTime.fromISO(item.createdAt).setLocale('en').toFormat('HH:mm')}
                            </span>
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <span className='text-[24px] text-[#FFC600] font-medium'>ราคา</span>&nbsp;
                        <span className='text-[24px] text-[#007AFF] font-medium'>฿ &nbsp;{item.service.price}</span>
                    </div>
                </div>
            )
        }
        </div>
    </div>
  )
}

export default OrderList