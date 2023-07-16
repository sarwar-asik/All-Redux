import Swal from "sweetalert2";
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
  console.log("🚀 ~ file: Cart.tsx:19 ~ Cart ~ total:", total)
  const dispatch = useAppDispatch();

  const handleAddBook =(book:IBook) =>{
    dispatch(addToWishlist(book))
    Swal.fire('Added Book', 'Successfully added books', 'success'); 
  }
  const handleRemoveBook =(book:IBook) =>{
    dispatch(removeFromWishlist(book))
    Swal.fire('Removed Book', 'Successfully added books', 'success'); 
  }
  const handleRemoveOne =(book:IBook)=>{
    dispatch(removeOne(book))
    Swal.fire('removed Book', 'Successfully removed books', 'success'); 
  }
 

  return (
    <div className="">
     <h2 className="text-center my-3 text-xl font-bold"> Your Readed book  </h2>
  
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
    {books?.map((book: IBook) => (
      <div
        className="border lg:h-[14rem] lg:p-5 py-2  block   rounded-md"
        key={book?.title}
      >
            <div className="px-2 w-full flex flex-col gap-3">
              <h1 className="text-2xl self-center">{book?.title}</h1>
              <p>Quantity: {book.quantity}</p>
            </div>
            <div className="border-l pl-5 flex flex-col justify-between gap-3">
              <button onClick={() => handleAddBook(book)}>✅Add</button>
              <button onClick={() => handleRemoveOne(book)}> —Remove</button>
              <button
                onClick={() => handleRemoveBook(book)}
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
