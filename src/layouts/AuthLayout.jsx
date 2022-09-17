import React from "react";
import { useNavigate } from "react-router-dom";

const AuthLayout = ({ children }) => {
  const navigate = useNavigate()

  return (
    <div className="authLayout static ">
     <div className="flex space-x-4 absolute right-[10vw] top-[41px] z-10">
          <span className="text-[16px] cursor-pointer text-bold hover:font-bold" onClick={()=>navigate('/')}>
            บริการ
          </span>
          <span className="text-[16px] cursor-pointer hover:font-bold" onClick={()=>navigate('/orders-list')}>
            รายการ
          </span >
        </div>
    {children}
    </div>
    );
};

export default AuthLayout;
