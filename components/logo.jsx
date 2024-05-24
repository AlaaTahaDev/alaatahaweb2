import Link from "next/link";
import Image from "next/image";

const Logo=()=>{
return(
    <Link href='/'><Image src='/logos.png' width={54} height={54}/></Link>
)
}

export default Logo;