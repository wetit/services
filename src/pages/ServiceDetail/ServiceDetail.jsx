import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SERVICES } from '../../config/api';
import { axiosApiInstance } from '../../config/axios';

function ServiceDetail() {
    const [item,setItem] = useState()
    const { id } = useParams();
    const navigate = useNavigate()

    useEffect(()=>{
        fetchDetail()
    },[])
    

    const fetchDetail = () =>{
        axiosApiInstance.get(`${SERVICES}/${id}`)
        .then(res=>{
            setItem(res.data)
        })
        .catch(error=>console.log(error))
    }

    const bookService = () =>{
        axiosApiInstance.post(`${SERVICES}/${id}/booking`)
        .then(res=>{
           navigate('/orders-list')
        })
        .catch(error=>console.log(error))
    }


  return (
    item &&
    <div className='p-[100px]'>
        <div className='text-[48px]'>
            {item.name}
        </div>
        <div className='text-[32px]'>
            ฿ {item.price}
        </div>
        <div className='mt-[24px]'>
            <p className='whitespace-pre-wrap'>
                {item.description}
            </p>
        </div>
        <div>
            <button className='bg-[#006AFF] text-white p-3 font-bold mt-[24px]' onClick={()=>bookService()}>
                จองบริการ
            </button>
        </div>
    </div>
  )
}

export default ServiceDetail