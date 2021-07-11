
import AnchorLink from "./link";
import Step from "./step";


import React from 'react';

const GettingStarted:React.FC =()=>{
    return(
        <div className='my-16 mx-6 md:my-32 md:mx-20'>
            <h1 className='text-xl md:text-3xl font-semibold text-center'>Getting started is easy</h1>
            <h2 className='m-6 md:text-lg text-center'>Earn stars and get rewarded in a few easy steps.</h2>
            <div className='flex my-12 flex-col md:flex-row'>
                <div className='hidden md:flex'>
                <Step stepNumber = {1} title='Create an account' >To get started, <AnchorLink>join now</AnchorLink>. You can also <AnchorLink>join in the app</AnchorLink> to get access
                    to the full range of Starbucks® Rewards benifits. </Step>
                </div>
                <div className='md:hidden'>
                <Step stepNumber = {1} title='Download the Starbucks app' ><AnchorLink>Join in
                        the app</AnchorLink> to get access to the full range of Starbucks® Rewards
                        benefits. You can also <AnchorLink>join
                            online</AnchorLink>.</Step>
                    
                </div>
                <Step stepNumber = {2} title="Order and pay how you'd like" >Use cash, credit/debit card or save some time and pay right
                    through the app. You'll collect Stars all ways. <AnchorLink>Learn how</AnchorLink></Step>
                <Step stepNumber = {3} title='Earn Stars, get Rewards' >As you earn Stars, you can redeem them for Rewards-like free
                    food, drinks, and more. Start redeeming with as little as 25 Stars!</Step>
            </div>
        </div>
    );
}

export default GettingStarted;