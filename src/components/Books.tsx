// import { useEffect, useState } from 'react';
// import main_api from '../shared/mainAPi';
// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useGetBookQuery } from '../redux/features/book/bookAPi';
import { useAppDispatch } from '../redux/hooks';
import { addToWishlist } from '../redux/features/whislist/whislistSlice';
import { addToReaded } from '../redux/features/readedBook/readedBookSlice';
import Swal from 'sweetalert2';


 interface IBook {
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

    //! Add to cart section 

    const dispatch = useAppDispatch()

    const handleAddBook = (BookData: IBook ) => {
      dispatch(addToWishlist(BookData))
      Swal.fire('Added WishList', 'Successfully added books', 'success');
    };
    const handleAddReaded = (BookData: IBook ) => {
      dispatch(addToReaded(BookData))
      Swal.fire('Added Readed', 'Successfully added books', 'success');
    };
  
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
        <div className="grid  lg:grid-cols-3 gap-7 sm:max-w-sm sm:mx-auto lg:max-w-full mt-5">
          {/*  */}
          {books?.map((book, i) => {
            const {_id,title,author,genre, publicationDate} = book
            return (
              <div key={i+1} className="flex flex-wrap -mx-4 shadow-md hover:shadow-2xl hover:scale-105 py-1 ">
              <Link to={`/bookDetails/${_id}`} className="w-full  px-4 my-1 shadow-md">
                <div className="bg-white ">
                  <h2 className="text-lg font-bold mb-2">{title}</h2>
                  <p className="text-gray-600 mb-4">{author}</p>
                  <p className="text-gray-600">{genre}</p>
                  <p className="text-gray-600">Publication Date: {publicationDate}</p>
                  {/* <Link to={`/bookDetails/${_id}`} className='bg-slate-300 p-2 m-1 shadow-lg font-serif my-4 rounded-md'>Details</Link> */}
                </div>
              </Link>
              <section className='w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-3 text-sm font-medium'>
                <Link to={`/bookDetails/${_id}`} className='py-2 bg-slate-300 rounded-sm my-2 px-1'>Go Details</Link>
                <button
                onClick={()=>handleAddBook(book)} 
                 className='py-2 bg-green-300 rounded-sm my-2 px-1'>Add Wishlist</button>
                <button
                onClick={()=> handleAddReaded(book)} 
                 className='py-2 bg-blue-300 rounded-sm my-2 px-1 '>Add Readed</button>
              </section>
              
              </div>
              
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