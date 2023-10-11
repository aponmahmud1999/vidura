import React from 'react';
import {BiTask} from 'react-icons/bi'

const Expertise = () => {
    return (
        <div>
            <h1  className='mt-[70px] text-center text-5xl text-[#FF9933] font-bold'>Expertise</h1>
            <p className='text-center mt-8 text-2xl'>TO REDUCE ELECTION COST & INCREASE VOTE SWINGS</p>
           <div className='grid grid-cols-3 space-x-10 mx-[10%] mt-20'>
           <div>
           <div>
           <p className='text-[148px]   text-[#FF9933]  text-center  '><BiTask/></p>
           </div>
           <div>
             <p className='text-[#138808] text-2xl mt-5 font-medium uppercase   '>Analyzing</p>
             <p className=' mt-3 max-w-[350px] text-[#000080]'>Analyzing the Political Situation &
trend Accurately</p>
           </div>
         </div>

         <div>
           <div>
           <p className='text-[148px]   text-[#FF9933]    '><BiTask/></p>
           </div>
           <div>
             <p className='text-[#138808] text-2xl font-medium uppercase'>Analyzing</p>
             <p className='text-center text-[#000080]'>Analyzing the Political Situation &
trend Accurately</p>
           </div>
         </div>

         <div>
           <div>
           <p className='text-[148px]   text-[#FF9933]    '><BiTask/></p>
           </div>
           <div>
             <p className='text-[#138808] text-2xl font-medium uppercase'>Analyzing</p>
             <p className='text-center text-[#000080]'>Analyzing the Political Situation &
trend Accurately</p>
           </div>
         </div>
           </div>
            </div>
       
    );
};

export default Expertise;