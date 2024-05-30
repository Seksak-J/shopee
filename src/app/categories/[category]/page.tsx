'use client'
import axios from "axios";
import _ from "lodash";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CategoryDetail({params}: {params: {category:string}}){
    const [categories, setCategories] = useState(null);
    const [loading, setLoading] = useState(true);
    const router =useRouter()

    useEffect(() => {
     getCategories()
    }, [])
    
    const getCategories = async () => {
        try {
          const response = await axios.get(`https://dummyjson.com/products/category/${params.category}`);
          setCategories(response.data.products);
          console.log(response.data.products);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setLoading(false);
        }
      };


    return (
        <div className='overflow-y-scroll h-screen flex flex-col w-screen bg-[#f5f5f5]'>
            <div className="bg-[#ee4d2d] w-full h-[34px]">
            <div className='mx-auto max-w-[1280px] flex justify-between text-white text-sm mt-[8px] '>
            <div className='flex flex-row space-x-[16px] '>
          {_.map([
            'Seller Centre',"เริ่มต้นขายสินค้า","ดาวน์โหลด","ติดตามเราบน"
          ],(item,index) => <div key={index} className='cursor-pointer'>{item}</div> )}
        </div>
        <div className='flex flex-row space-x-[16px]'>
        {_.map([
            'สมัครใหม่',"เข้าสู่ระบบ"
          ],(item,index) => <div key={index} className='cursor-pointer'>{item}</div> )}
        </div>
            </div>
            </div>
            <div className="bg-[#ee4d2d] w-full h-[85px]">
        <div className='mx-auto max-w-[1280px] h-[85px] '>
          <div className="flex flex-row justify-center items-center space-x-[16px]">
            <div className='w-[202px] h-full cursor-pointer' onClick={() => router.push('/')}>
              <img src="/images/logo.png" alt="" className='w-full'  />
            </div>
            <div className='w-full flex-col flex justify-end h-[85px]'>
              <input type="text" className='w-full' />
              <div className='text-white flex flex-row items-center my-[4px] space-x-[8px]'>
                {_.map(['lamzu Thorn', 'Wooting 60HE', 'Labubu'], (item, index) => <div key={index} className='text-xs truncate cursor-pointer'>{item}</div>)}
              </div>
            </div>
            <div className='w-[200px]'></div>
          </div>
        </div>
      </div>

      <div className="mx-auto w-[1280px] ">
       <div className="grid grid-cols-6 gap-[16px] mt-[32px]">
      {_.map(categories,(item:any,index) => <div key={index} className="col-span-1 w-[188px] h-[338px] bg-white  cursor-pointer hover:shadow-md">
        <div className="h-[188px] w-[188px]">
           <img src={item.thumbnail} alt="" className="object-contain w-full h-full" />
           <div className="p-[8px]">
                <p className="line-clamp-2 text-sm h-[40px]">{item.title}{item.title}</p>

                <div className="flex flex-row items-center mt-[34px] space-x-[4px]">
                    <p className="text-[#ee4d2d]">${item.price}</p>
                   <div className="bg-[#FEEEEA] w-[27px] h-[15px]">
                    <p className="text-[#ee2c4a] text-[8px] mt-[2px] text-center">-{Math.round(item.discountPercentage)}%</p>
                    
                   </div>
                   
                </div>
                <div className="flex flex-row items-center space-x-[4px] mt-[2px]" >
                    <svg viewBox="0 0 15 15" x="0" y="0" fill="#ffce3d" preserveAspectRatio="xMinYMid meet" width={12} height={12} ><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"></polygon></svg><svg viewBox="0 0 15 15" x="0" y="0" fill="#ffce3d" preserveAspectRatio="xMinYMid meet" width={12} height={12} ><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"></polygon></svg><svg viewBox="0 0 15 15" x="0" y="0" fill="#ffce3d" preserveAspectRatio="xMinYMid meet" width={12} height={12} ><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"></polygon></svg><svg viewBox="0 0 15 15" x="0" y="0" fill="#ffce3d" preserveAspectRatio="xMinYMid meet" width={12} height={12} ><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"></polygon></svg><svg viewBox="0 0 15 15" x="0" y="0" fill="#ffce3d" preserveAspectRatio="xMinYMid meet" width={12} height={12} ><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"></polygon></svg>
                    <p className="text-[#ee2c4a] text-xs">{item.rating.toFixed(1)}/5</p>
                </div>
                <p className="text-[#000000a6] text-xs mt-[4px]">จังหวัดกรุงเทพมหานคร</p>
           </div>
        </div>
      </div> )}
       </div>
      </div>
        </div>
    )
}