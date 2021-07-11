import RoundedLink from "./roundedLink";
import React from 'react';

const Header:React.FC =()=>{
    return(
        <div className='z-10 flex px-4 md:px-32 h-12 bg-primary-400 justify-between items-center sticky top-0 md:top-5.25 lg:top-6.25'>
    <h2 className=' uppercase font-base font-bold text-sm text-white tracking-widest'>Starbucks<sup
            className='text-xs'>® </sup>Rewards</h2>
    <div className='md:hidden'><RoundedLink href='#'>Join in the app</RoundedLink></div>
</div>
    );
}
export default Header;