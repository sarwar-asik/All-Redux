import { useParams } from "react-router-dom";
// import { useAppDispatch } from "../redux/hooks";
import { useGetSingleBookQuery } from "../redux/features/book/bookAPi";
import { useAppSelector } from "../redux/hooks";

const UpdateBook = () => {
  const { id } = useParams();
  const { user } = useAppSelector((state) => state.user);

  // const dispatch = useAppDispatch()

  const { data } = useGetSingleBookQuery(id);
  const book = data?.data;

  return (
    <div>
      <div className="max-w-md mx-auto mt-8 p-8 bg-white shadow-md rounded-lg">
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

        
      </div>
    </div>
  );
};

export default UpdateBook;
