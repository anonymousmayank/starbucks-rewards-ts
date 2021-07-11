

import React, { AnchorHTMLAttributes } from 'react'

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement>{
    theme?:'black'|'white'
}

const RoundedLink: React.FC<Props> = ({theme,children, ...rest})=>{
    const themeData=theme==='white'?'border-white text-white':'border-black text-black';
    return(
        <a {...rest}
        className={'px-3 py-1 border rounded-full text-sm font-semibold flex-shrink-0 '+themeData}>
            {children}
        </a>
    );
}

RoundedLink.defaultProps={
    theme:'white'
}

export default RoundedLink;