import React from 'react';

interface Props{
    stepNumber:number,
    title:String
}

const Step : React.FC<Props>=(props)=>{
    return(
        <div className='flex my-8 items-start md:my-0 md:flex-col md:items-center md:mx-4'>
    <div className='flex items-center justify-center h-12 w-12 text-2xl flex-shrink-0 font-semibold border-2 border-primary-300 rounded-full'>{props.stepNumber}
        
        </div>
    <div className='ml-4 md:text-center'>
        <h2 className='pb-3 md:py-6 text-lg font-bold'>{props.title}</h2>
        <p className='text-sm md:text-base'>{props.children}</p>
    </div>
</div>
    );
};

export default Step;