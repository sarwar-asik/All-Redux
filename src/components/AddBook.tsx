import { useForm } from "react-hook-form";
interface IBook {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  reviews: number;
}

const AddBook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IBook>();

  const onSubmit = (data: IBook) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.title ? "border-red-500" : ""
            }`}
            type="text"
            placeholder="Enter product title"
            id="title"
            {...register("title", { required: "title is required" })}
          />
          {errors.title && (
            <p className="text-red-500 text-xs italic">
              Product title is required
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="author"
          >
            Author
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.author ? "border-red-500" : ""
            }`}
            type="text"
            placeholder="Enter author name"
            id="author"
            {...register("author", { required: "author is required" })}
          />
          {errors.author && (
            <p className="text-red-500 text-xs italic">
              Author name is required
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="genre"
          >
            Genre
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.genre ? "border-red-500" : ""
            }`}
            type="text"
            placeholder="Enter product genre"
            id="genre"
            {...register("genre", { required: "genre is required" })}
          />
          {errors.genre && (
            <p className="text-red-500 text-xs italic">
              Product genre is required
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="publicationDate"
          >
            Publication Date
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.publicationDate ? "border-red-500" : ""
            }`}
            type="date"
            placeholder="Select publication date"
            id="publicationDate"
            {...register("publicationDate", {
              required: "publicationDate is required",
            })}
          />
          {errors.publicationDate && (
            <p className="text-red-500 text-xs italic">
              Publication date is required
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="reviews"
          >
            Reviews
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.reviews ? "border-red-500" : ""
            }`}
            type="number"
            placeholder="Enter number of reviews"
            id="reviews"
            {...register("reviews", { required: "reviews is required" })}
          />
          {errors.reviews && errors.reviews.type === "required" && (
            <p className="text-red-500 text-xs italic">
              Number of reviews is required
            </p>
          )}
          {errors.reviews && errors.reviews.type === "min" && (
            <p className="text-red-500 text-xs italic">
              Number of reviews must be a positive number
            </p>
          )}
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
  );
};

export default AddBook;
