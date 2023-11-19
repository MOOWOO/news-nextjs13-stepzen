"use client"
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import DarkModeButton from "./DarkModeButton";
import { useState } from "react";
import { categories } from "../constants";
import { usePathname } from "next/navigation";
  
function Header() {
  const [menuToggle, setMenuToggle] = useState(true);
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname?.split("/").pop() === path;
  };

  return (
    <header>
      <title>Retriever</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/animal-dog.ico" />

      <div className="grid grid-cols-3 p-10 items-center">
        <button onClick={() => setMenuToggle(!menuToggle)} >
          <Bars3Icon className="h-8 w-8 cursor-pointer"/>
        </button>

        <Link href="/" prefetch={false}>
          <h1 className="font-serif text-4xl text-center">
            <div>
              <span className="underline decoration-6 decoration-orange-400">
              <img src="/animal-dog.svg" className="h-auto max-w-full inline-block align-top"/>Retriever
              </span>{" "}
            </div>
          </h1>
        </Link>

        <div className="flex items-center justify-end space-x-2">
          <DarkModeButton />

          <button className="hidden md:inline bg-slate-900 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800">
            Subscribe Now
          </button>
        </div>
      </div>

      {/* SideBar */}
      <main className="float-left">
        <aside
          className={` ${
            menuToggle ? "hidden md:block" : "hidden"
          }`}
        >
        <nav className="block text-sm p-3">
          {categories.map((category) => (
          <a
          href={`/news/${category}`} 
          className={`navSlide ${isActive(category) && "flex underline decoration-orange-40 items-end"}`}
          >
            <div>
            {category}
            </div>
          </a>
        ))}
          </nav>
        </aside>

          {/* Mobile Header & Nav */}
        <div className="w-full flex flex-col h-screen overflow-y-hidden">
          <div
            className={`w-full ${
              menuToggle ? "hidden " : "block"
            } md:hidden`}
          >
            {/* Dropdown Nav */}
            <nav className="text-xs rounded-md p-3">
            {categories.map((category) => (
            <a
            href={`/news/${category}`} 
            className={`navSlide ${isActive(category) && "flex underline decoration-orange-400"}`}
            >
              <div>
                {category}
              </div>
              </a>
            ))}
            </nav>
          </div>
        </div>
      </main>
    </header>
  );
}

export default Header
