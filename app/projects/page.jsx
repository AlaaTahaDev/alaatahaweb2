"use client";
import React, { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const projectData = [
  {
    image: "/logoss.png",
    category: "flutter2",
    name: "driver app",
    description: "asdasd sadasdasdfasf asdasdasdasd asdasasdfasdas",
    link: "",
  },
  {
    image: "/logoss.png",
    category: "flutter9",
    name: "driver app",
    description: "asdasd sadasdasdfasf asdasdasdasd asdasasdfasdas",
    link: "",
  },
  {
    image: "/logoss.png",
    category: "flutter8",
    name: "driver app",
    description: "asdasd sadasdasdfasf asdasdasdasd asdasasdfasdas",
    link: "",
  },
  {
    image: "/logoss.png",
    category: "flutter7",
    name: "driver app",
    description: "asdasd sadasdasdfasf asdasdasdasd asdasasdfasdas",
    link: "",
  },
  {
    image: "/logoss.png",
    category: "flutter6",
    name: "driver app",
    description: "asdasd sadasdasdfasf asdasdasdasd asdasasdfasdas",
    link: "",
  },
  {
    image: "/logoss.png",
    category: "flutter1",
    name: "driver app",
    description: "asdasd sadasdasdfasf asdasdasdasd asdasasdfasdas",
    link: "",
  },
  {
    image: "/logoss.png",
    category: "flutter3",
    name: "driver app",
    description: "asdasd sadasdasdfasf asdasdasdasd asdasasdfasdas",
    link: "",
  },
];

const uniqeCategory = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqeCategory);
  const [category, setCategory] = useState("all projects");
  const fileredProjects = projectData.filter((project) => {
    return category === "all projects"
      ? project
      : project.category === category;
  });
  console.log(categories);
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
      <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
        My Projects
      </h2>
      <Tabs defaultValue={category} className="mb-24 xl:mb-48">
        <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
          {categories.map((category, index) => {
            return (
              <TabsTrigger
                onClick={() => setCategory(category)}
                value={category}
                key={index}
                className="capitalize w-[162px] md:w-auto"
              >
                {category}
              </TabsTrigger>
            );
          })}
        </TabsList>
        <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
          {fileredProjects.map((project, index) => {
            return (
              <TabsContent value={category} key={index}>
                <ProjectCard Project={project} />
              </TabsContent>
            );
          })}
        </div>
      </Tabs>
      </div>
    </section>
  );
};

export default Projects;
