import React from 'react';
import AnchorLink from "./link";

const HeroSection:React.FC = ()=>{
    return(
        <div className='bg-primary-100 aspect-w-3 aspect-h-4 md:aspect-h-4 md:aspect-w-7'>
            <div className='bg-star-mobile md:bg-star bg-right-bottom md:bg-1/2 bg-cover'>
                <div className='flex flex-col md:justify-center items-center md:items-start py-10 px-10'>
                    <h1 className='uppercase text-2xl md:text-4xl font-semibold'>Free coffee</h1>
                    <h1 className='uppercase text-2xl md:text-4xl font-semibold'>is a tap away</h1>
                    <h2 className='pt-4 text-lg'>Join now to start earning Rewards.</h2>
                    <button
                        className='hidden md:block mt-6 px-3 py-1 border border-primary-300 bg-primary-300 rounded-full text-sm text-white font-semibold'>Join
                        now</button>
                    <button
                        className='md:hidden mt-6 px-3 py-1 border border-primary-300 bg-primary-300 rounded-full text-sm text-white font-semibold'>Join
                        in the app</button>
                    <p className='text-lg pt-4 hidden md:block'>Or <AnchorLink href='#' target='_blank'>join in
                        the app</AnchorLink> for the best experience</p>
                    <a className='pt-4 underline hover:no-underline md:hidden' href="#">Or join online</a>
                </div>
            </div>


        </div>
    );
}
export default HeroSection;