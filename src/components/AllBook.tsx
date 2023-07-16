// import { useEffect, useState } from 'react';
// import main_api from '../shared/mainAPi';
// import { Link } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useGetAllBookQuery } from "../redux/features/book/bookAPi";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useState, ChangeEvent } from "react";
import { addToWishlist } from "../redux/features/whislist/whislistSlice";
import Swal from "sweetalert2";
import { addToReaded } from "../redux/features/readedBook/readedBookSlice";

export interface IBook {
  _id?: string | any;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
}
const ALlBook = () => {
  // let [books, setBooks] = useState([]);

  // useEffect(() => {
  //   fetch(`${main_api}/books`)
  //     .then((res) => res.json())
  //     .then((books) => setBooks(books.data));
  // }, []);

  const { data, isLoading } = useGetAllBookQuery(undefined);
  //   console.log("🚀 ~ file: Books.tsx:16 ~ Books ~ data:", data);

  const books: IBook[] = data?.data;

  const { user } = useAppSelector((state) => state.user);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectOption, setSelectOption] = useState("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredBooks = books?.filter((book) => {
    const { title, author, genre } = book;
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const bookDate = new Date(book?.publicationDate);
    const formattedDate = bookDate.toISOString().split("T")[0];
    return (
      title.toLowerCase().includes(lowerCaseSearchTerm) ||
      author.toLowerCase().includes(lowerCaseSearchTerm) ||
      genre.toLowerCase().includes(lowerCaseSearchTerm) ||
      formattedDate.includes(lowerCaseSearchTerm)
    );
  });

  //   console.log(searchTerm,"sssssss");

  // console.log(blogs, "from Blogs.js");
  // console.log(books,"form BBBBBBB");

  const dispatch = useAppDispatch();

  const handleAddBook = (BookData: IBook) => {
    dispatch(addToWishlist(BookData));
    Swal.fire("Added WishList", "Successfully added books", "success");
  };
  const handleAddReaded = (BookData: IBook) => {
    dispatch(addToReaded(BookData));
    Swal.fire("Added Readed", "Successfully added books", "success");
  };

  return (
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-center">
      <h2 className="mt-1 text-3xl font-bold font-serif">Our All Book Store</h2>

      <section className="my-2 py-3 grid grid-cols-1 lg:grid-cols-2 gap-3 bg-slate-300 rounded ">
        <select name="" id="" className="py-3 my-2 px-2 outline-none">
          <option value="" disabled>
            Search Book
          </option>
          <option value="">Genre</option>
          <option value="">Publication Year</option>
        </select>
        <input
          type="text"
          placeholder="Search by title author genre"
          className="border border-gray-300 rounded py-2  px-4 mr-2"
          value={searchTerm}
          onChange={handleSearch}
        />

        <div className="w-full">
          {user?.email && (
            <Link
              className="text-xl font-bold w-full bg-blue-500 text-slate-200 px-4 py-2 rounded-lg "
              to="/addBook"
            >
              Add a Book
            </Link>
          )}
        </div>
      </section>

      {isLoading && (
        <div className="mt-1 text-xl font-bold font-serif text-center">
          <h2>Loading ..............</h2>
        </div>
      )}

      <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full mt-5">
        {/*  */}
        {filteredBooks?.map((book, i) => {
          const { _id, title, author, genre, publicationDate } = book;
          return (
            <div key={i + 1} className="flex flex-wrap -mx-4 hover:scale-110 ">
              <div className="w-full  px-4">
                <Link to={`/bookDetails/${_id}`} className="bg-white shadow-md rounded-lg p-6">
                  <h2 className="text-lg font-bold mb-2">{title}</h2>
                  <p className="text-gray-600 mb-4">Author {author}</p>
                  <p className="text-gray-600">Genre:: {genre}</p>
                  <p className="text-gray-600">
                    Publication Date: {publicationDate}
                  </p>
                </Link>
                <section className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-3 text-sm font-medium">
                  <Link to={`/bookDetails/${_id}`} className="py-2 bg-slate-300 rounded-sm my-2 px-1">
                    Go Details
                  </Link>
                  <button
                    onClick={() => handleAddBook(book)}
                    className="py-2 bg-green-300 rounded-sm my-2 px-1"
                  >
                    Add Wishlist
                  </button>
                  <button
                    onClick={() => handleAddReaded(book)}
                    className="py-2 bg-blue-300 rounded-sm my-2 px-1 "
                  >
                    Add Readed
                  </button>
                </section>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ALlBook;
