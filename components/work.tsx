import React from 'react'

export default function Work() {
  return (
    <div className="container mx-auto mt-64 flex w-full items-center justify-between px-8 md:px-14 lg:px-24">
      <section className="w-full">
        <h2 id="projects" className="secondary-title">
          My projects
        </h2>
        <p className="section-paragraph">
          I’ve had the pleasure of working with multiple Fortune 500 companies,
          designing and implementing both frontend and backend.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <img
            src="https://images.unsplash.com/photo-1576153192396-180ecef2a715?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
            className="h-36 w-full bg-nav object-cover lg:h-72"
          />
          <img
            src="https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            className="h-36 w-full bg-nav object-cover lg:h-72"
          />
          <img
            src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
            className="hidden h-36 w-full bg-nav object-cover md:block lg:h-72"
          />
          <img
            src="https://images.unsplash.com/photo-1558655146-d09347e92766?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80"
            className="hidden h-36 w-full bg-nav object-cover md:block lg:h-72"
          />
          <img
            src="https://images.unsplash.com/photo-1547119957-637f8679db1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            className="hidden h-36 w-full bg-nav object-cover md:block lg:h-72"
          />
          <img
            src="https://images.unsplash.com/photo-1559028012-481c04fa702d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1336&q=80"
            className="hidden h-36 w-full bg-nav object-cover md:block lg:h-72"
          />
          <img
            src="https://images.unsplash.com/photo-1603969072881-b0fc7f3d77d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80s"
            className="hidden h-36 w-full bg-nav object-cover md:block lg:h-72"
          />
          <img
            src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            className="hidden h-36 w-full bg-nav object-cover md:block lg:h-72"
          />
          <img
            src="https://images.unsplash.com/photo-1545235617-7a424c1a60cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"
            className="hidden h-36 w-full bg-nav object-cover md:col-span-2 md:block lg:col-span-1 lg:h-72"
          />
        </div>
      </section>
    </div>
  )
}
