import Link from "next/link";
import { Button } from "./ui/button";



const Cta=()=>{
   return <section className="py-24 bg-tertiary dark:bg-secondary/40">
    <div className="container mx-auto">
       <div className="flex flex-col items-center">
        <h2 className="h2 max-w-xl text-center mb-8">
            prepared to turn your ideas into reality? I`m here to help
        </h2>
        <Link href='whatsapp://send?phone=+201111529018&text=السلام عليكم'><Button>Contact</Button></Link>
        </div> 
    </div>
   </section>
}

export default Cta;