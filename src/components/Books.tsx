// import { useEffect, useState } from 'react';
// import main_api from '../shared/mainAPi';
// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useGetBookQuery } from '../redux/features/book/bookAPi';


export interface IBook {
  _id?:string | any
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
}
const Books = () => {
    // let [books, setBooks] = useState([]);
  
    // useEffect(() => {
    //   fetch(`${main_api}/books`)
    //     .then((res) => res.json())
    //     .then((books) => setBooks(books.data));
    // }, []);

    const {data,isLoading} = useGetBookQuery(undefined)
    console.log("🚀 ~ file: Books.tsx:16 ~ Books ~ data:", data)
    
    const books:IBook[] = data?.data
  
    // console.log(blogs, "from Blogs.js");
    // console.log(books,"form BBBBBBB");
  
    return (
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-center">
        <h2 className="mt-1 text-3xl font-bold font-serif">Our Latest Book</h2>
        <p className="text-slate-700 mt-1 mb-4 font-mono">
          There are some popular books of mine . You can Explore our book from
          here. Our new Book will publish soon
        </p>
  
  
        {isLoading && (
          <div className="mt-1 text-xl font-bold font-serif text-center">
        <h2>Loading ..............</h2>
          </div>
        )}
        <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {/*  */}
          {books?.map((book, i) => {
            const {_id,title,author,genre, publicationDate} = book
            return (
              <Link to={`/bookDetails/${_id}`} key={i+1} className="flex flex-wrap -mx-4 hover:shadow-2xl hover:scale-110 ">
              <div className="w-full  px-4">
                <div className="bg-white shadow-md rounded-lg p-6">
                  <h2 className="text-lg font-bold mb-2">{title}</h2>
                  <p className="text-gray-600 mb-4">{author}</p>
                  <p className="text-gray-600">{genre}</p>
                  <p className="text-gray-600">Publication Date: {publicationDate}</p>
                  {/* <Link to={`/bookDetails/${_id}`} className='bg-slate-300 p-2 m-1 shadow-lg font-serif my-4 rounded-md'>Details</Link> */}
                </div>
              </div>
              </Link>
              
            );
          })}
        </div>

        <Link
            to="/allBook"
        
            className="block mt-7 lg:inline-block lg:mt-0 text-gray-100  mr-8 p-2 bg-blue-600 hover:text-blue-600 hover:bg-gray-300 hover:shadow-2xl hover:scale-110 w-full mx-auto rounded-t-xl font-bold text-xl "
          >
          See All
          </Link>
  
        
      </div>
    );
  };

export default Books;