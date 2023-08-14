import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const { data } = api.posts.getAll.useQuery();
  return (
    <>
      <Head>
        <title>Cristiane Maragno</title>
        <meta name="description" content="Digital garden and portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center bg-neutral-50">
        <div className="container flex flex-col gap-12 px-4 py-16">
          <div>
            <nav className="flex items-center justify-between flex-wrap p-6">
              <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded hover:text-white hover:border-white">
                  <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
              </div>
              <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm px-4 py-2 border rounded bg-white shadow-md">
                  <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 mr-4 px-2 py-2 rounded hover:bg-slate-200">
                    Home
                  </a>
                  <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 mr-4 px-2 py-2 rounded hover:bg-slate-200">
                    Projects
                  </a>
                  <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 mr-4 px-2 py-2 rounded hover:bg-slate-200">
                    Reading
                  </a>
                  <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 px-4 py-2 rounded hover:bg-slate-200">
                    Notes
                  </a>
                </div>
                <div className="px-4 py-2 flex flex-grow justify-end">
                  {/*Instagram*/}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 block mt-4 lg:inline-block mr-4"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>

                  {/*Linkedin*/}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 block mt-4 lg:inline-block mr-4"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>

                  {/*Github*/}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 block mt-4 lg:inline-block"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
              </div>
            </nav>
          </div>

          <div>
            <p>Hi, i'm Cris, welcome to my digital garden! I like to build things, learn, read and cats.</p>
            <p>I'm a full-stack web and mobile developver and i want to share a bit of the things i'm working on.</p>
          </div>
          <div>
            {data?.map((post) => 
              (
                <Link href={`/post/${post.id}`}>
                  <div key={post.id} className="bg-slate-100 rounded p-4 inline-block m-8 transform transition duration-500 hover:scale-110">
                    <div>
                      <p className="text-slate-400 text-xs mb-4 capitalize lg:inline-block">{post.id} - {post.tag} - {post.title}</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 block lg:inline-block ml-4 text-slate-400"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/>
                      </svg>
                    </div>
    
                    <p className="text-slate-600 mb-4">{post.text}</p>
                    <p className="text-slate-400 text-xs">{post.date.getMonth() + '/' + post.date.getFullYear()}</p>
                  </div>
                </Link>
              ))
            }
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
