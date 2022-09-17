import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SERVICES } from "./config/api";
import { axiosApiInstance } from "./config/axios";

export const Home = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = () => {
    axiosApiInstance
      .get(SERVICES)
      .then((res) => {
        setServices(res.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div>
        <div className="relative text-center w-full z-0">
          <img src={`./housewife.png`} className="w-full" alt="logo" />
          <div className="absolute top-[40%] left-[50%]">
            <div className="flex justify-center items-center flex-col w-full z-10 absolute top-0 left-0">
              <div className="text-[#121212] text-[48px] w-max">
                คำบรรยายต่างๆ นานา
              </div>
              <div className="text-[#121212] text-[16px] w-[384px] mt-[27px]">
                เรามีบริการที่ครบครันครอบคลุม พร้อมที่จะช่วยเหลือคุณใน
                ทุกๆด้านอย่างที่คุณต้องการ
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-col px-[10vw]">
          <div className="text-[48px] mt-[24px]">งานบริการ</div>
          <div className="flex justify-center p-2 mt-[24px]">
          <div id="services" className="grid grid-cols-3 gap-4 ">
            {services.map((item) => (
              <div
                key={item._id}
                className="shadow-2xl rounded-lg overflow-hidden cursor-pointer"
                onClick={() => navigate(`/service-detail/${item._id}`)}
              >
                <div className="w-full h-[200px] bg-black-1000 overflow-hidden">
                  <img
                    src={item.picture}
                    alt="service item"
                    className="object-none object-center h-full w-full"
                  />
                </div>
                <div className="grid grid-cols-2 p-2">
                  <span>
                    <p className="text-start text-[16px]">{item.name}</p>
                  </span>
                  <span className="flex justify-end items-center">
                    <span className="text-[#ffc600] text-[16px]">
                      เริ่มต้น &nbsp;
                    </span>
                    <span className="text-[#007aff] text-[24px]">
                      ฿ {item.price}
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </>
  );
};
