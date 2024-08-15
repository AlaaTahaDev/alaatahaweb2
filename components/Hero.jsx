import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import {
  RiBriefcase4Fill,
  RiTiktokFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";
import DevImg from "./DevImage";
import Badge from "./Bages";
import Social from "./socials";
import ParticlesContainer from "./ParticelsContainers";

const Hero = () => {
  return (
    <section
      className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat 
    bg-bottom bg-cover dark:bg-none"
    >
      <div className="container mx-auto">
     
        <div className="flex justify-between gap-x-8">
        <ParticlesContainer/>
          <div
            className="animate-image-once flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 
       text-center xl:text-left"
          >
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Mobile  Application
            </div>
   
            <h1 className="h1 mb-4">Hello My name is Alaa Taha</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Android and iOS application programmer using the Flutter tool
            </p>
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact Me
                  <Send size={18} />
                </Button>
              </Link>
              <Link href="https://www.mediafire.com/file/okjzop08zocf2s8/alaataha.apk/file">
                <Button variant="secondary" className="gap-x-2">
                  Download
                  <Download size={18} />
                </Button>
              </Link>
            </div>
            <Social
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          <div className="animate-once hidden xl:flex relative">
              
            <Badge 
            containerStyles='absolute top-[55%] -right-[5rem]'
            icon={<RiTiktokFill/>} 
            endCountNum={8}
            endCountText={"k"} 
            bageText='Follower'/>
            <Badge 
            containerStyles='absolute top-[80%] -left-[1rem]'
            icon={<RiTodoFill/>} 
            endCountNum={6} 
            bageText='Finished Projects'/>
            <Badge 
            containerStyles='absolute top-[24%] -left-[5rem]'
            icon={<RiBriefcase4Fill/>} 
            endCountNum={3} 
            bageText='Years Of Experience'/>
            <div
              className="bg-ovallogo1 dark:bg-ovallogo w-[500px] h-[500px] 
           bg-no-repeat absolute -top-1 -right-2"
            ></div>

            <DevImg
              containerStyle='bg-ovallogo2 w-[510px] h-[462px] bg-no-repeat relative bg-bottom' imgSrc='/imagedev.png'
            />
          </div>
        </div>
      </div>
      <div className="hidden md:flex absolute left-2/4 bottom-10 xl:bottom-12 animate-bounce">
        <RiArrowDownSLine className="text-3xl text-primary" />
      </div>
    </section>
  );
};

export default Hero;
