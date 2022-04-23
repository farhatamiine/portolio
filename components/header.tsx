import Link from 'next/link'
import React, { FC } from 'react'

export const Header = () => {
  return (
    <>
      <header className="py-6">
        <div className="container mx-auto flex w-full items-center justify-between px-8 md:px-14 lg:px-24">
          <div className=" text-lg font-bold">Amine Farhat</div>
          <div className="hidden items-center space-x-12 md:flex">
            <a href="#" className="text-selected-text">
              Home
            </a>
            <Link href="/blog">Tech Blog</Link>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">
              <button className="bg-theme px-6 py-2 font-bold">
                Contact Me
              </button>
            </a>
          </div>
          <div className="md:hidden">
            <svg
              width="26"
              height="18"
              viewBox="0 0 26 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </header>
      <div className="container mx-auto mt-16 flex w-full items-center justify-between px-8 md:px-14 lg:px-24">
        <div className="flex flex-wrap md:flex-nowrap">
          <nav className="left-percentage fixed inline-block hidden lg:mr-24 lg:w-4 xl:block">
            <div className="left-50 absolute mt-36 -translate-x-1/2 transform space-y-6">
              <a
                href="#"
                className="nav-dot selected-circle block h-7 w-7 rounded-full border-4 border-nav bg-body"
              >
                <span className="ml-10 rounded-md bg-black px-2 py-1 opacity-0">
                  Home
                </span>
              </a>
              <a
                href="#projects"
                className="nav-dot block h-7 w-7 rounded-full border-4 border-nav bg-body"
              >
                <span className="ml-10 rounded-md bg-black px-2 py-1 opacity-0">
                  Project
                </span>
              </a>
              <a
                href="#experience"
                className="nav-dot block h-7 w-7 rounded-full border-4 border-nav bg-body"
              >
                <span className="ml-10 rounded-md bg-black px-2 py-1 opacity-0">
                  Experience
                </span>
              </a>
              <a
                href="#contact"
                className="nav-dot block h-7 w-7 rounded-full border-4 border-nav bg-body"
              >
                <span className="ml-10 rounded-md bg-black px-2 py-1 opacity-0">
                  Contact
                </span>
              </a>
            </div>
          </nav>

          <div className="mt-0 flex max-w-full flex-wrap justify-center md:my-36 md:justify-start lg:ml-20">
            <h1 className="hero-title ont-bold text-center md:text-left">
              Hey, I'm Farhat.
              <br />A Software Developper
            </h1>
            <div className="flex w-full justify-center md:justify-start">
              <button className="mt-12 flex items-center space-x-3 bg-theme px-8 py-4 font-bold text-white">
                <span>View my work.</span>
              </button>
            </div>
          </div>
          <img
            src="https://res.cloudinary.com/diab-control/image/upload/v1650669573/man_py2jue.jpg"
            alt="Man"
            className="-z-1 right-4 hidden  w-4/12 md:absolute  md:mt-0 lg:block"
          />
        </div>
      </div>
    </>
  )
}
