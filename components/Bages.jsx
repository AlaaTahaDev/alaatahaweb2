"use client";
import CountUp from "react-countup";

const Badge = ({
  containerStyles,
  icon,
  endCountNum,
  endCountText,
  bageText,
}) => {
    const formatNumber = (num) => {
        return parseInt(num, 10).toString(); // Ensure no leading zeros
      };
  return (
    <div className={`badge ${containerStyles}`}>
      <div className="text-3xl text-primary">{icon}</div>
      <div className="flex items-center gap-x-2">
        <div className="text-4xl leading-none font-bold text-primary">
         <CountUp end={endCountNum} delay={1} duration={3}/>
          {endCountText}
        </div>
        <div className="max-w-[70px] leading-none text-[15px] font-medium text-black">{bageText}</div>
      </div>
    </div>
  );
};

export default Badge;
