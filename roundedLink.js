function RoundedLink(props){
    const theme=props.theme==='white'?'border-white text-white':'border-black text-black';
    return(
        <a className=//md:hidden 
            {'px-3 py-1 border rounded-full text-sm font-semibold flex-shrink-0 '+theme} href={props.linkUrl}>
            {props.children}
        </a>
    );
}
export default RoundedLink;