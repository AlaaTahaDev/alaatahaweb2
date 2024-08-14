'use client'
import React, { useState, useEffect } from "react";
import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { db } from "../firebase/config";
import { collection, query, onSnapshot } from "firebase/firestore";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState(["all projects"]);
  const [category, setCategory] = useState("all projects");

  useEffect(() => {
    const q = query(collection(db, "projects"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const fetchedProjects = [];
      querySnapshot.forEach((doc) => {
        fetchedProjects.push(doc.data());
      });
      setProjects(fetchedProjects);

      // Generate unique categories dynamically from fetched projects
      const fetchedCategories = [
        "all projects",
        ...new Set(fetchedProjects.map((item) => item.category)),
      ];
      setCategories(fetchedCategories);
    });

    // Cleanup the subscription on component unmount
    return () => unsubscribe();
  }, []);

  const filteredProjects = projects.filter((project) => {
    return category === "all projects"
      ? true
      : project.category === category;
  });

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
            {filteredProjects.map((project, index) => (
              <TabsContent value={category} key={index}>
                <ProjectCard project={project} />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
