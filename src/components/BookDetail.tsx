import { Link, useNavigate, useParams } from "react-router-dom";
// import { useAppDispatch } from "../redux/hooks";
import {
  useDeleteBookMutation,
  useGetSingleBookQuery,
} from "../redux/features/book/bookAPi";
import { useAppSelector } from "../redux/hooks";
import Swal from "sweetalert2";

const BookDetail = () => {
  const { id } = useParams();
  const { user } = useAppSelector((state) => state.user);

  // const dispatch = useAppDispatch()

  const { data } = useGetSingleBookQuery(id);
  const book = data?.data;

  const [deleteBook, { isLoading: isDeleting, isSuccess }] =
    useDeleteBookMutation();
  const navigate = useNavigate();

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
    navigate('/allBook');
  }

  return (
    <div>
      <div className="max-w-md mx-auto mt-8 p-8 bg-white shadow-md rounded-lg ">
        <h2 className="text-2xl font-bold mb-4">{book?.title}</h2>
        <p className="text-gray-600 mb-4">
          <span className="font-semibold">Author:</span> {book?.author}
        </p>
        <p className="text-gray-600 mb-4">
          <span className="font-semibold">Genre:</span> {book?.genre}
        </p>
        <p className="text-gray-600 mb-4">
          <span className="font-semibold">Publication Date:</span>{" "}
          {book?.publicationDate}
        </p>

        <section className="flex justify-around font-medium ">
          <Link
            to={`/bookUpdate/${id}`}
            className="shadow hover:shadow-2xl p-2  text-blue-500"
          >
            Update Book
          </Link>
          <button
            onClick={() => handleDeleteBook(id)}
            className="shadow hover:shadow-2xl p-2 text-red-500 "
          >
            Delete Book
          </button>
        </section>
      </div>
    </div>
  );
};

export default BookDetail;
