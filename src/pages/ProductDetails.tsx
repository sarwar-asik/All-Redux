import ProductReview from '@/components/ProductReview';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { useGetSingleProductQuery } from '@/redux/api/apiSlice';
import { addToCart } from '@/redux/features/cart/cartSlice';
import { useAppDispatch } from '@/redux/hooks';
import { IProduct } from '@/types/globalTypes';
import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactFragment,
  useEffect,
  useState,
} from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  //! Temporary code, should be replaced with redux
  // const [data, setData] = useState<IProduct[]>([]);
  // useEffect(() => {
  //   fetch('../../public/data.json')
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);

  const { data: product } = useGetSingleProductQuery(id);

  const handleAddProduct = (productData: IProduct) => {
    dispatch(addToCart(productData));

    toast({
      description: 'Product Added',
    });
  };

  // const product = data?.find((item) => item._id === Number(id));

  //! Temporary code ends here

  return (
    <>
      <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300">
        <div className="w-[50%]">
          <img src={product?.image} alt="" />
        </div>
        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl font-semibold">{product?.name}</h1>
          <p className="text-xl">Rating: {product?.rating}</p>
          <ul className="space-y-1 text-lg">
            {product?.features?.map(
              (
                feature:
                  | boolean
                  | Key
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | ReactFragment
                  | null
                  | undefined
              ) => (
                <li key={feature}>{feature} </li>
              )
            )}
          </ul>
          <Button onClick={() => handleAddProduct(product)}>Add to cart</Button>
        </div>
      </div>
      <ProductReview />
    </>
  );
}
