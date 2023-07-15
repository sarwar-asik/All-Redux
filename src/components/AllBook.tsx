// import { useEffect, useState } from 'react';
// import main_api from '../shared/mainAPi';
// import { Link } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useGetAllBookQuery } from "../redux/features/book/bookAPi";
import { useAppSelector } from "../redux/hooks";
import {useState,ChangeEvent} from "react"

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

  const { data } = useGetAllBookQuery(undefined);
//   console.log("🚀 ~ file: Books.tsx:16 ~ Books ~ data:", data);

  const books: IBook[] = data?.data;

  const { user } = useAppSelector((state) => state.user);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e:ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredBooks = books?.filter((book) => {
    const { title, author, genre } = book;
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return (
      title.toLowerCase().includes(lowerCaseSearchTerm) ||
      author.toLowerCase().includes(lowerCaseSearchTerm) ||
      genre.toLowerCase().includes(lowerCaseSearchTerm)
    );
  });

  console.log(searchTerm,"sssssss");

  // console.log(blogs, "from Blogs.js");
  // console.log(books,"form BBBBBBB");

  return (
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-center">
      <h2 className="mt-1 text-3xl font-bold font-serif">Our All Book Store</h2>

      <section className="my-2 py-3 bg-slate-300 rounded ">
        <input
          type="text"
          placeholder="Search books..."
          className="border border-gray-300 rounded py-2 px-4 mr-2"
          value={searchTerm}
          onChange={handleSearch}
        />
      </section>

      {books?.length < 1 && (
        <div className="mt-1 text-xl font-bold font-serif text-center">
          <h2>Loading ..............</h2>
        </div>
      )}

      <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {/*  */}
        {filteredBooks?.map((book, i) => {
          const { _id, title, author, genre, publicationDate } = book;
          return (
            <div key={i + 1} className="flex flex-wrap -mx-4">
              <div className="w-full  px-4">
                <div className="bg-white shadow-md rounded-lg p-6">
                  <h2 className="text-lg font-bold mb-2">{title}</h2>
                  <p className="text-gray-600 mb-4">{author}</p>
                  <p className="text-gray-600">{genre}</p>
                  <p className="text-gray-600">
                    Publication Date: {publicationDate}
                  </p>
                  <Link
                    to={`/bookDetails/${_id}`}
                    className="bg-slate-300 p-2 m-1 shadow-lg font-serif my-4 rounded-md"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ALlBook;
