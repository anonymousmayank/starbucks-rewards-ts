import React, { AnchorHTMLAttributes } from 'react';

const AnchorLink:React.FC<AnchorHTMLAttributes<HTMLAnchorElement>> =({children, ...rest})=>{
    return(
        <a {...rest} className='text-primary-300 underline hover:no-underline'>{children} </a>
    );
}
export default AnchorLink;