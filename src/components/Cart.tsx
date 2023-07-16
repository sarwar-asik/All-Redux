import {
  addToWishlist,
  removeOne,
  removeFromWishlist,
} from "../redux/features/whislist/whislistSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

interface IBook {
  _id?: string | any;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  quantity?: number;
}
const Cart = () => {
  const { books, total } = useAppSelector((state) => state.wishlist);
  const dispatch = useAppDispatch();

  return (
    <div className="">
      <h2> Your selected book {total} </h2>

      <div className="space-y-5">
        {books?.map((book: IBook) => (
          <div
            className="border lg:h-[14rem] lg:p-5 py-2  block lg:flex justify-between rounded-md"
            key={book?.title}
          >
            <div className="px-2 w-full flex flex-col gap-3">
              <h1 className="text-2xl self-center">{book?.title}</h1>
              <p>Quantity: {book.quantity}</p>
            </div>
            <div className="border-l pl-5 flex flex-col justify-between gap-3">
              <button onClick={() => dispatch(addToWishlist(book))}>✅Add</button>
              <button onClick={() => dispatch(removeOne(book))}> —Remove</button>
              <button
             
                onClick={() => dispatch(removeFromWishlist(book))}
                className="bg-red-500 hover:bg-red-400 text-white font-bold"
              >
                remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
