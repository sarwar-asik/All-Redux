import { useParams } from "react-router-dom";
// import { useAppDispatch } from "../redux/hooks";
import {
  useGetSingleBookQuery,
  useUpdateBookMutation,
} from "../redux/features/book/bookAPi";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useForm } from "react-hook-form";

import Swal from "sweetalert2";
import { setNotification } from "../redux/notification/notificationSLice";

export interface IBook {
  _id?:string | any
  title?: string;
  author?: string;
  genre?: string;
  publicationDate?: string;
}

const UpdateBook = () => {
  const { id } = useParams();
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  // const dispatch = useAppDispatch()

  const { data: bookDatas } = useGetSingleBookQuery(id, {
    refetchOnMountOrArgChange: true,
  });
  const book = bookDatas?.data;
  console.log("start", book, "book close");

  const [UpdateBook, { isLoading, isError, isSuccess }] =
    useUpdateBookMutation();
  console.log({ isLoading: isLoading, isError, isSuccess: isSuccess });
  const {
    register,
    handleSubmit,
  } = useForm<IBook>();

  const onSubmit = (data: IBook) => {
    console.log(data);
    // console.log(user?.email);

    if (user?.email === book?.user) {
      // data?.user = user?.email
      // console.log(data);
      console.log(user?.email, book?.user);

      UpdateBook({data,id})
        .unwrap()
        .then(() => {
          Swal.fire("Update Book", "Successfully updated books", "success");
          dispatch(
            setNotification({
              message: "Successfully updated books",
              type: "success",
            })
          );
        })
        .catch((error) => {
          Swal.fire("Error", "Failed to Update book", "error");
          dispatch(
            setNotification({ message: "Failed to Update book", type: "error" })
          );
          console.log(error,"form catch");
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "You are not valid user",
        text: "Login Please",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    }
  };

  return (
    <div>
      <div className="max-w-md mx-auto mt-8 p-8 bg-white shadow-md rounded-lg">
        <h3 className="text-center font-bold text-2xl  text-slate-400 my-2 font-serif ">
          Update {book?.title} book
        </h3>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline `}
              type="text"
              defaultValue={book?.title}
              placeholder="Enter product title"
              id="title"
              {...register("title")}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="author"
            >
              Author
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              defaultValue={book?.author}
              type="text"
              placeholder="Enter author name"
              id="author"
              {...register("author")}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="genre"
            >
              Genre
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline `}
              type="text"
              placeholder="Enter product genre"
              id="genre"
              defaultValue={book?.genre}
              {...register("genre")}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="publicationDate"
            >
              Publication Date
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              type="date"
              placeholder="Select publication date"
              id="publicationDate"
              {...register("publicationDate")}
              defaultValue={book?.publicationDate}
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBook;
