"use client";
import React, { useState, useEffect } from "react";

import ThemeToggler from "./ThemeToggler";
import Logo from "./logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";
import { db } from "@/app/firebase/config";
import { collection, addDoc, query, getDocs,onSnapshot } from "firebase/firestore";

const saveUserData = async () => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      name: "alaa",
      age: "188",
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const scrollyPos = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
    return () => window.removeEventListener("scroll", scrollyPos);
  },[]);
  return (
    <header
      className={`${
        header
          ? "py-2 bg-white shadow-lg dark:bg-accent"
          : "py-2 dark:bg-transparent"
      } sticky top-0 z-30 transtion-all ${pathname === "/" && "bg[#fef9f5]"}`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            <Nav
              containerstyles="hidden xl:flex gap-x-8 items-center"
              linkStyle="relative hover:text-primary transition-all"
              underlinkStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <ThemeToggler />
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
