import { AlignJustify, BarChart, Facebook, Phone, X } from 'lucide-react';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react' ;
import { FacebookLogo, InstagramLogo, TwitchLogo, TwitterLogo, YoutubeLogo } from 'phosphor-react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
     <>
        <div className='md:min-h-[74px] min-h-16  header flex lg:container mx-4 md:mx-8 lg:mx-auto    justify-between items-center  '>

            <h3 className="syne text-2xl md:text-3xl lg:text-4xl text-white  ">Zada</h3>

            < ul className='w-full lg:flex hidden  justify-around max-w-[550px]   items-center'>

             {  ["home" ,"about","services","contact","colors"].map((a, index)=>
             <NavLink to={ a === "home" ? "/" :`/${a}`} className=' text-gray-500 hover:text-amber-600 font-medium text-sm  uppercase   tracking-[1px] leading-4 px-5 py-3   ' key={index}>{a}</NavLink>)
             }
               </ul>

            <div className='text-white flex justify-center items-center gap-3'>
                <div className='flex justify-center gap-5 items-center'>
                    <Phone className='text-amber-600' size={18} />
                    <Link to="/login" className=' border border-gray-400 backdrop-blur-sm border-sm uppercase text-sm px-[1em] py-[0.3em]  '> <p className=' tracking-wide'>login</p></Link>

                </div>
                <AlignJustify onClick={() => {
              setIsOpen(!isOpen)

            }} size={30} className='  font-thin border transition-all  duration-200   border-current hover:text-amber-600  text-gray-400 p-1'/>
            </div>

        </div>


        <>
      <div className={`flex flex-col transition-all  duration-300   py-10 pl-5 lg:pl-10  ${isOpen ? "right-0": "right-[-1500px]"} bg-[#1a1a1a]   z-[999]  fixed top-0  w-full lg:w-4/12 min-h-screen`} >
      <X onClick={() => {
              setIsOpen(!isOpen)

            }} size={22} className=' z-[1000] absolute top-7 right-5 transition-all  duration-300 text-white hover:opacity-100 opacity-65 font-thin  border-gray-500 '/>


            <div className="lg:mb-10 md:mb-8 mb-5">
            <h2 className="syne text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug tracking-tight mb-4">Zada</h2>
            <p className="dm text-base md:text-lg leading-relaxed  tracking-normal mb-4"> welcome to Zada production . Check out our services</p>
            </div>

            <ul className='flex lg:hidden md:mb-20 mb-10 flex-col'>
     {  ["home" ,"about","services","contact"].map((a, index)=>
             <NavLink to={ a === "home" ? "/" :`/${a}`} className=' text-gray-500 hover:text-amber-600 font-medium text-sm  uppercase   tracking-[1px] leading-4 md:px-5 py-3   ' key={index}>{a}</NavLink>)
             }
     </ul>
      <h5 className="syne text-lg md:text-xl lg:text-2xl font-medium leading-snug tracking-tight mb-4">Our Contact</h5>



            <ul className=' text-gray-300 opacity-80 '>
            <p className="dm text-sm md:text-base    leading-relaxed tracking-normal mb-4">Ekuria, keranigonj, Dhaka, </p>
             <p className="dm text-sm md:text-base leading-relaxed tracking-normal mb-4">+880  1999679464</p>
             <p className="dm text-sm md:text-base leading-relaxed tracking-normal mb-4">zadaproductionofficial@gmail.com</p>

            </ul>


            <div className='md:grid hidden grid-cols-3 max-w-96 min-h-52 pr-10 mt-10  gap-2'>
    <div className="bg-slate-400 rounded-sm ">
        <img src="https://askproject.net/rayan/wp-content/uploads/sites/106/2022/10/portrait-of-an-asia-beautiful-girl-A3EB9AP.jpg" alt="grid photo" />
    </div>
    <div className="bg-slate-400 rounded-sm ">
        <img src="https://askproject.net/rayan/wp-content/uploads/sites/106/2022/10/portrait-of-an-asia-beautiful-girl-A3EB9AP.jpg" alt="grid photo" />
    </div>
    <div className="bg-slate-400 rounded-sm ">
        <img src="https://askproject.net/rayan/wp-content/uploads/sites/106/2022/10/portrait-of-an-asia-beautiful-girl-A3EB9AP.jpg" alt="grid photo" />
    </div>
    <div className="bg-slate-400 rounded-sm ">
        <img src="https://askproject.net/rayan/wp-content/uploads/sites/106/2022/10/portrait-of-an-asia-beautiful-girl-A3EB9AP.jpg" alt="grid photo" />
    </div>
    <div className="bg-slate-400 rounded-sm ">
        <img src="https://askproject.net/rayan/wp-content/uploads/sites/106/2022/10/portrait-of-an-asia-beautiful-girl-A3EB9AP.jpg" alt="grid photo" />
    </div>
    <div className="bg-slate-400 rounded-sm ">
        <img src="https://askproject.net/rayan/wp-content/uploads/sites/106/2022/10/portrait-of-an-asia-beautiful-girl-A3EB9AP.jpg" alt="grid photo" />
    </div>

</div>




            <ul className='flex lg:gap-[1.7vw] md:gap-[4vw] gap-[8vw]   py-2 mt-auto '>

            <a href="https://www.facebook.com/Zadaproduction1?mibextid=ZbWKwL" target='_blank'>
                <Facebook size={21} className=' hover:text-amber-600  rounded-full' />
            </a>

            <a href="https://www.youtube.com/@ZaDaproduction/featured" target='_blank'>
                <YoutubeLogo size={23} className=' hover:text-amber-600 rounded-full' />
            </a>
            <a href="" target='_blank'>
                <InstagramLogo size={23} className='hover:text-amber-600  rounded-full' />
            </a>
            <a href="" target='_blank'>
                <TwitterLogo size={23} className='hover:text-amber-600  rounded-full' />
            </a>
            </ul>


      </div>


    </>

        </>

    );
};

export default Header;
