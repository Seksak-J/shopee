'use client'
import { useState, useEffect } from 'react';
import _ from 'lodash';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter()

  useEffect(() => {
    getCategoryLists();
  }, []);

  const getCategoryLists = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products/category-list');
      setCategories(response.data);
      console.log(response.data);
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
       <div className='flex flex-row space-x-[16px]'>
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
              <img src="/images/logo.png" alt="" className='w-full ' />
            </div>
            <div className='w-full flex-col flex justify-end h-[85px]'>
              <input type="text" className='w-full' />
              <div className='text-white flex flex-row items-center my-[4px] space-x-[8px]'>
                {_.map(['lamzu Thorn', 'Wooting 60HE', 'Labubu'], (item, index) => <div key={index} className='text-xs truncate cursor-pointer'>{item}</div>)}
              </div>
            </div>
            <div className='w-[200px]'>
              
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white'>
        <div className='h-[362px] mt-[32px] mx-auto max-w-[1280px]'>
          <div className='w-full flex flex-row'>
            <div className='w-[70%] h-[238px] mr-[8px]'>
              <img src="/images/pic_1.jpg" alt='' className='w-full h-full' />
            </div>
            <div className='w-[30%] flex flex-col space-y-[8px]'>
              {_.map(['/images/pic_2.jpg', '/images/pic_3.jpg'], (item, index) => <img src={item} alt="" key={index} className='w-[398px] h-[115px]' />)}
            </div>
          </div>
          <div className='grid grid-cols-9 gap-x-[16px] h-[117px]'>
            {_.map(['อิเล็กทรอนิกส์', 'สิทธิพิเศษจากพาร์ทเนอร์', 'ซูเบอร์มาร์เก็ต', 'เก็บคอยน์แลกโค๊ด', 'ช๊อปปี้โฮม', 'ช๊อปปี้ถูกชัวร์', 'ส่งฟรี + โค๊ดลดทั้งแอป', 'Shopee Mall', 'ช๊อปปี้เทรนฮิต'], (item, index) =>
              <div key={index} className='flex flex-col items-center justify-center space-y-[10px] cursor-pointer hover:shadow-xl'>
                <div className='border w-[45px] h-[45px] rounded-[16px]'></div>
                <div className='text-xs'>{item}</div>
              </div>)}
          </div>
        </div>
      </div>

      <div className='bg-[#f5f5f5]'>
        <div className="mx-auto max-w-[1280px] mt-[20px] bg-white">
          <div className="bg-white h-[60px] px-[20px] flex items-center">
            หมวดหมู่
          </div>
          <div className="grid grid-cols-12">
            {loading ? (
              <div className='col-span-12 text-center py-[16px]'>Loading...</div>
            ) : (
              _.map(categories, (item:any, index) => (
                <div key={index} className="border text-center flex flex-col py-[16px] items-center space-y-[16px] hover:shadow-xl" onClick={()  => router.push(`/categories/${item}`)}>
                  <div className="w-[88px] h-[88px] rounded-full bg-[#f5f5f5]"></div>
                  <p>{item}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <div className='bg-white mx-auto w-[1280px] mt-[20px] cursor-pointer'>
            <img src="/images/pic_4.jpg" alt="" className='w-full h-full object-contain' />
           
      </div>
    </div>
  );
}
