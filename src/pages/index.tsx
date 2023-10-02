import { type NextPage } from "next";
import Head from "next/head";
import { use, useState } from "react";
import { api } from "~/utils/api";
import Link from "next/link";

import { Post } from "~/components/post";

const Home: NextPage = () => {
  const [home, setHome] = useState(true);
  const [tag, setTag] = useState(''); 
  const [dropdown, setDropdown] = useState(false); 
  const { data } = home ? api.posts.getAll.useQuery() : api.posts.getPostsByTag.useQuery({
    tag,
  });

  return (
    <>
      <Head>
        <title>Cristiane Maragno</title>
        <meta name="description" content="Digital garden and portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </Head>
      <main className="flex min-h-screen flex-col items-center bg-neutral-50">
        <div className="container flex flex-col gap-12 px-8 py-4">
          <div>
            <nav className="flex items-center justify-between flex-wrap py-6">
              <button onClick={() => { setDropdown(!dropdown);}} data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-dropdown" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
              </button>
              <div id="navbar-dropdown" className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto md:flex md:items-center md:w-auto ${dropdown ? 'block' : 'hidden'}`}>
                <div className="text-sm px-1 py-1 border rounded bg-white shadow-md cursor-pointer">
                  <div onClick={() => {setTag(''); setHome(true);}} className={`block mt-4 lg:inline-block md:inline-block md:mt-0 lg:mt-0 px-2 py-1 rounded hover:bg-slate-200 ${home ? 'text-slate-700' : 'text-slate-400'}`}>
                    Home
                  </div>
                  <div onClick={() => {setTag('project'); setHome(false);}} className={`block mt-4 lg:inline-block md:inline-block md:mt-0 lg:mt-0 px-2 py-1 rounded hover:bg-slate-200 ${tag == 'project' ? 'text-slate-700' : 'text-slate-400'}`}>
                    Projects
                  </div>
                  <div onClick={() => {setTag('reading'); setHome(false);}} className={`block mt-4 lg:inline-block md:inline-block md:mt-0 lg:mt-0 px-2 py-1 rounded hover:bg-slate-200 ${tag == 'reading' ? 'text-slate-700' : 'text-slate-400'}`}>
                    Reading
                  </div>
                  <div onClick={() => {setTag('note'); setHome(false);}} className={`block mt-4 lg:inline-block md:inline-block md:mt-0 lg:mt-0 px-2 md:px-4 py-1 rounded hover:bg-slate-200 ${tag == 'note' ? 'text-slate-700' : 'text-slate-400'}`}>
                    Notes
                  </div>
                </div>
                <div className="px-4 py-2 flex flex-grow justify-end">
                  {/*Linkedin*/}
                  <a href="https://www.linkedin.com/in/cristiane-rodrigues-maragno/" target="_blank" className="cursor-pointer lg:inline-block mr-4 transform transition duration-500 hover:scale-110">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 block mt-4"
                      fill="rgb(100 116 139)"
                      viewBox="0 0 24 24">
                      <path
                        d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </a>

                  {/*Github*/}
                  <a href="https://github.com/CristianeMaragno" target="_blank" className="cursor-pointer lg:inline-block mr-4 transform transition duration-500 hover:scale-110">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 block mt-4"
                      fill="rgb(100 116 139)"
                      viewBox="0 0 24 24">
                      <path
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>

                  {/*Instagram*/}
                  <a href="https://www.instagram.com/crismaragno/" target="_blank" className="cursor-pointer lg:inline-block transform transition duration-500 hover:scale-110">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 block mt-4"
                      fill="rgb(100 116 139)"
                      viewBox="0 0 24 24">
                      <path
                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a> 
                </div>
              </div>
            </nav>
          </div>

          <div className={`${home ? 'block' : 'hidden lg:hidden'} lg:grid lg:grid-cols-2`}>
            <div>
              <p className="font-serif text-4xl text-slate-500">Hi, i'm <span className="text-slate-700">Cris</span>, welcome to my 
                <Link href='/post/clmhtfrfh0000ikef7rzk7jgo'>
                  <span className="px-2 text-slate-700 underline hover:text-slate-600">digital garden</span>
                </Link> 
                and portfolio!
              </p>
              <br/>
              <p className="font-serif text-4xl text-slate-500">I like to build things, learn, read and cats.</p>
              <br/>
              <p className="font-serif text-4xl text-slate-500">I'm a full-stack web and mobile developver and i want to share a bit of the things i'm working on.</p>
            </div>
            <div>
              {data?.slice(0, 1).map((post) => 
                (
                  <Post {...post}/>
                ))
              }
            </div>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-3 xl:gap-6 lg:space-y-0">
            {
            data?.slice((home ? 1 : 0)).map((post) => 
              (
                <Post {...post}/>
              ))
            }
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
