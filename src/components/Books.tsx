import { useEffect, useState } from 'react';
import main_api from '../shared/mainAPi';
import { Link } from 'react-router-dom';

const Books = () => {
    let [blogs, setBlogs] = useState([]);
  
    useEffect(() => {
      fetch(`${main_api}/blogs/blogs`)
        .then((res) => res.json())
        .then((blogs) => setBlogs(blogs));
    }, []);
  
    // console.log(blogs, "from Blogs.js");
    if (blogs.length > 3) {
      blogs = blogs.splice(0, 3);
    }
  
    return (
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-center">
        <h2 className="mt-1 text-3xl font-bold font-serif">Our Latest Book</h2>
        <p className="text-slate-700 mt-1 mb-4 font-mono">
          There are some popular books of mine . You can Explore our book from
          here. Our new Book will publish soon
        </p>
  
  
        {blogs.length < 1 && (
          <div className="mt-1 text-xl font-bold font-serif text-center">
        <h2>Loading ..............</h2>
          </div>
        )}
  
        <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {/*  */}
          {blogs?.map((blog, i) => {
            return (
              <div
                key={i}
                className="overflow-hidden transition-shadow duration-300 bg-white rounded"
              >
                <Link to="/" aria-label="Article">
                  <img
                    src={blog?.img}
                    className="object-cover w-full h-64 rounded"
                    alt="blogs"
                  />
                </Link>
                <div className="py-5">
                  <section className="flex justify-between">
                    <p className="mb-2 text-xs  font-semibold text-gray-600 uppercase">
                      {blog.date}
                    </p>
                    <h5 className="text-[24px] text-[#3594d3] font-semibold font-mono">
                      {" "}
                      {blog.publisher}
                    </h5>
                  </section>
                  <Link
                    to="/"
                    aria-label="Article"
                    className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                  >
                    <p className="text-2xl font-bold leading-7 h-[64px]">
                      {blog.name}
                    </p>
                  </Link>
                  <p className="mb-4  text-slate-600">
                    {blog.detail.length > 84
                      ? blog.detail.slice(0, 84) + "...."
                      : blog.detail}
                  </p>
                  <section className="flex justify-between">
                    <button className="bg-primary px-5 py-2 text-[18px] rounded text-white font-bold ">
                      See Details
                    </button>
  
                    <a
                      target="_blank"
                      href={blog?.link}
                      rel="noopener noreferrer"
                      className="bg-primary px-5 py-2 text-[18px] rounded text-white font-bold "
                    >
                      Visit
                    </a>
                  </section>
                </div>
              </div>
            );
          })}
        </div>
  
        
      </div>
    );
  };

export default Books;