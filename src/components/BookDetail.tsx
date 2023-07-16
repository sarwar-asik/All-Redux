import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useDeleteBookMutation,
  useGetReviewQuery,
  useGetSingleBookQuery,
  usePostReviewMutation,
} from "../redux/features/book/bookAPi";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import Swal from "sweetalert2";
import { useState, ChangeEvent, FormEvent } from "react";
import { setNotification } from "../redux/notification/notificationSLice";
import { IBook } from "./AllBook";
import { addToWishlist } from "../redux/features/whislist/whislistSlice";
import { addToReaded } from "../redux/features/readedBook/readedBookSlice";

const BookDetail = () => {
  const { id } = useParams();
  const { user } = useAppSelector((state) => state.user);

  // const dispatch = useAppDispatch()

  const { data } = useGetSingleBookQuery(id);
  const book = data?.data;

  const [deleteBook, { isSuccess }] = useDeleteBookMutation();
  const navigate = useNavigate();

  //! for delete Book
  const handleDeleteBook = async (id: string | undefined) => {
    console.log(user?.email, book?.user);
    try {
      if (user?.email === book?.user) {
        await deleteBook({ id: id, email: user?.email });
      } else {
        Swal.fire("UnAuthorized", "You can not delete the Book", "error");
      }
      // Optionally show a success message or perform other actions
    } catch (error) {
      // Handle error, show an error message, etc.
    }
  };
  if (isSuccess) {
    navigate("/allBook");
  }

  //! for Review Section
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState<string>("");
  const [postComment, { isLoading, isError, error }] = usePostReviewMutation();
  console.log(isLoading, isError, error);
  const { data: commentData } = useGetReviewQuery(id, {
    refetchOnMountOrArgChange: true,
    // pollingInterval: 2000,
  });

  // console.log("🚀 ~ file: BookDetail.tsx:50 ~ BookDetail ~ commentData:", commentData)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const form =  event.target;
    console.log(inputValue);

    const option = {
      id: id,
      data: { review: inputValue },
    };

    console.log(option, "review");
    if (user?.email) {
      postComment(option)
        .unwrap()
        .then(() => {
          Swal.fire("Added review", "Successfully added reviews", "success");
          dispatch(
            setNotification({
              message: "Successfully added reviews",
              type: "success",
            })
          );
          setInputValue("");
        })
        .catch((error: any) => {
          console.log(error);
          Swal.fire("Error", "Failed to add review", "error");
          dispatch(
            setNotification({ message: "Failed to add review", type: "error" })
          );
        });
    } else {
      navigate("/login");
    }
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddBook = (BookData: IBook) => {
    dispatch(addToWishlist(BookData));
    Swal.fire("Added WishList", "Successfully added books", "success");
  };
  const handleAddReaded = (BookData: IBook) => {
    dispatch(addToReaded(BookData));
    Swal.fire("Added Readed", "Successfully added books", "success");
  };

  return (
    <div>
      {/* //! Book Detail Section */}

      <section className="max-w-md mx-auto mt-8 p-8 bg-white shadow-md rounded-lg ">
        <h2 className="text-2xl font-bold mb-4">{book?.title}</h2>
        <p className="text-gray-600 mb-4">
          <span className="font-semibold">Author:</span>Author : {book?.author}
        </p>
        <p className="text-gray-600 mb-4">
          <span className="font-semibold">Genre:</span> {book?.genre}
        </p>
        <p className="text-gray-600 mb-4">
          <span className="font-semibold">Publication Date:</span>{" "}
          {book?.publicationDate}
        </p>

        {user?.email && (
          <section className="flex justify-around font-medium ">
            <Link
              to={`/bookUpdate/${id}`}
              className="shadow hover:shadow-2xl p-2  text-blue-500"
            >
              Edit Book
            </Link>
            <button
              onClick={() => handleDeleteBook(id)}
              className="shadow hover:shadow-2xl p-2 text-red-500 "
            >
              Delete Book
            </button>
          </section>
        )}
      </section>
      {user?.email && (
        <section className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-3 text-sm font-medium">
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
      )}
      {/* //! Review Section /// */}
      <section className="block lg:flex justify-around max-w-m mx-auto mt-8 p-8 bg-white shadow-md rounded-lg my-7">
      

        <form
          className="flex gap-5 items-center justify-around"
          onSubmit={handleSubmit}
        >
            <h2 className="text-md font-bold mb-4">Add Review</h2>
          <textarea
            className="min-h-[50px] bg-slate-700 outline-none rounded-xl  py-2 text-center font-mono text-slate-100 tex-2xl"
            onChange={handleChange}
            value={inputValue}
          />
          <button
            type="submit"
            className="border border-gray-300 rounded py-2 px-4 mr-2"
          >
            Add Review
          </button>
        </form>

        <div className="">
        <h3 className="mt-7 font-bold text-xl ">Users Comments ::</h3>
        <div className="mt-6 ">
          {commentData?.data?.reviews?.map((comment: string, index: number) => (
            <div key={index} className="flex gap-3 items-center mb-5">
              <p>{comment}</p>
            </div>
          ))}
        </div>
        </div>
      </section>
    </div>
  );
};

export default BookDetail;
