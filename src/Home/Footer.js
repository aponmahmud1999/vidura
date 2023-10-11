import React from 'react';
import { Link } from 'react-router-dom';
import {BiPhoneCall} from 'react-icons/bi'
import {FiMail} from 'react-icons/fi'
import {ImFacebook} from 'react-icons/im'
import {BsInstagram} from 'react-icons/bs'
import {ImLinkedin2} from 'react-icons/im'
import {FiYoutube} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'

const Footer = () => {
    return (
        <div className='bg-[#0D0D73] text-white mt-[50px]'>
        <footer className="footer p-10  ">
          <div>
           <img src='Group 1.png'/>
           <p className='max-w-[400px]'>"A political survey records the individuals' attitude, opinion, mood, favoritism, and personal information. The data is then used to launch political campaigns to have the support from the maximum scalps." Generally, the political parties appoint online research and survey companies to set themselves in the best winning positions.</p>
          </div> 
          <div>
            <span className="footer-title">Explore</span> 
            <p  className='hover:border-b pb-2 border-white'>About</p>
            <p  className='hover:border-b pb-2 border-white'>Services</p>
            <p  className='hover:border-b pb-2 border-white'>Expertise</p>
            <p  className='hover:border-b pb-2 border-white'>Careers</p>
            
          </div> 
          
          <div>
          <span className="footer-title">Contact Us</span>
           <div className='flex space-x-2'>
           <p className='mt-6 text-base'><BiPhoneCall/></p>
           <p className='mt-5 hover:border-b pb-2 border-white'>+91-545454545</p>
           </div>
          
           
        
          
            <div className='flex space-x-2'>
            <p className='mt-5 text-lg'>@</p>
            <p className='mt-5 text-lg hover:border-b pb-2 border-white'>vidura@gmail.com </p>
            </div>
        
        
        
                
          </div>
          <div className=''>
          <span className="footer-title text-white">Stay connected</span> 
         <div className='space-x-5'>
        
                  <button className='text-white text-xl'><ImFacebook/> </button>
                
           
                  <button className='text-white text-2xl'><ImLinkedin2/> </button>
               
         
                  <button className='text-white text-2xl '><FiYoutube/> </button>
                
        
                  <button className='text-white text-2xl '><FiTwitter/> </button>
               
         </div>
        
          </div>
          
        </footer>
        
        </div>
    );
};

export default Footer;