import Image from "next/image";
import DevImg from "./DevImage";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const InfoData = [
  {
    icon: <User2 size={20} />,
    text: "Alaa Taha",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+201013961667",
  },
  {
    icon: <MailIcon size={20} />,
    text: "alaatahadev048@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 20 Mar, 1997",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Computer Science",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Egypt, Cairo",
  },
];
const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Faculty. Ain-Shams",
        qualification: "computer science",
        years: "2016 - 2021",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        university: "Flutter Dart",
        qualification: "3 years",
        years: "2021 - 2024",
      },
      {
        university: "Nodejs",
        qualification: "2 years",
        years: "2022 - 2024",
      },
      {
        university: "JAVA",
        qualification: "1 years",
        years: "2018 - 2019",
      },
    ],
  },
];
const SkillData = [
  {
    title: "skills",
    data: [
      {
        name: "Dart ,Flutter",
      },
      {
        name: "Firebase",
      },
      {
        name: "Node js",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgpath: "/skills/1.png",
      },
      {
        imgpath: "/skills/2.png",
      },
      {
        imgpath: "/skills/3.png",
      },
      {
        imgpath: "/skills/4.png",
      },
    ],
  },
];
const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  console.log(getData(qualificationData, "education"));
  return (
    <section>
      <div className="container mx-auto">
        <h2 className="section-title mb-8 mt-6 xl:mb-16 text-center mx-auto">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row">
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyle="bg-ovallogo1 dark:bg-ovallogo1 w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/imagedev.png"
            />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualification"
                >
                  Qualification
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              <div className="text-lg mt-12 xl:mt-8">
                {/*personal*/}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Unmatched Services Qulity for Over 3 Years
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx">
                     We can build your project and achieve your goal
                     by communicating with you and understanding your
                     needs in order to reach the best path
                    </p>
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {InfoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border"></div>
                      <div>English, Arabic</div>
                    </div>
                  </div>
                </TabsContent>
                {/*qualification*/}
                <TabsContent value="qualification">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Asome Journey
                    </h3>
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/*experience*/}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase size={28} />
                          <h4>
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience").data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="font-lg leading-none text-muted-foreground mb-2">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/*education*/}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4>
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education").data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="font-lg leading-none text-muted-foreground mb-2">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/*skills*/}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">What I Use Everyday</h3>
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border border-border mb-4"></div>
                      {/*skills list*/}
                      <div>
                        {getData(SkillData, "skills").data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                                key={index}
                              >
                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/*tools */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4>
                      <div className="border border-border mb-4"></div>
                      {/*tools */}
                      <div className="flex gap-x-8 justify-center xl:just-start">
                        {getData(SkillData, "tools").data.map((item, index) => {
                          const { imgpath } = item;
                          return (
                            <div key={index}>
                              <Image
                                src={imgpath}
                                width={50}
                                height={50}
                                alt=""
                                priority
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
