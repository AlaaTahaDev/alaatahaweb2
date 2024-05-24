'useClient';
import Link from "next/link";
import {
    RiYoutubeFill,
    RiFacebookFill,
    RiInstagramFill,
    RiWhatsappFill,
  } from "react-icons/ri";
 
 const icons=[
    {
      path:'https://www.facebook.com/alaa.taha.71271466?mibextid=ZbWKwL',
      name:<RiFacebookFill/>  
    },
    {
        path:'https://www.youtube.com/channel/UCxITOjfrWyS_vhavoRJWfDA/featured',
        name:<RiYoutubeFill/>  
      },
      {
        path:'https://www.instagram.com/alaataha258?igsh=cHFycGhiZHhhZmcw',
        name:<RiInstagramFill/>  
      },
      {
        path:'whatsapp://send?phone=+201111529018&text=السلام عليكم',
        name:<RiWhatsappFill/>  
      },
 ]; 
const Social=({containerStyles,iconStyles})=>{
    return(
        <div className={`${containerStyles}`}>{
          icons.map((icon,index)=>{
            return <Link href={icon.path} key={index}><div
            className={`${iconStyles}`}
            >{icon.name}</div></Link>
          })  
        }</div>
    )
    }
    
    export default Social;