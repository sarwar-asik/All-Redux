import ProductCard from '@/components/ProductCard';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/components/ui/use-toast';

import {
  setPriceRange,
  toggleState,
} from '@/redux/features/products/product.slice';
import { useGetProductsQuery } from '@/redux/features/products/productApi';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { IProduct } from '@/types/globalTypes';
import { useEffect, useState } from 'react';

export default function Products() {
  // const [data, setData] = useState<IProduct[]>([]);
  // useEffect(() => {
  //   fetch('./data.json')
  //     .then((res) => res.json())
  //     .then((data) => setData({data:data}));
  // }, []);

  const { data, isLoading, error } = useGetProductsQuery(undefined);
  // console.log("🚀 ~ file: Products.tsx:23 ~ Products ~ error:", error)

  console.log('🚀 ~ file: Products.tsx:25~ Products ~ data:', data);

  // const { toast } = useToast();

  const { priceRange, status } = useAppSelector((state) => state.product);

  // console.log("🚀 ~ file: Products.tsx:32 ~ Products ~ status:", status)
  const dispatch = useAppDispatch();

  //! Dummy Data

  // const status = true;
  // const priceRange = 100;

  //! **

  const handleSlider = (value: number[]) => {
    console.log(value);
    dispatch(setPriceRange(value[0]));
  };

  let productsData;

  if (status) {
    productsData = data?.data?.filter(
      (item: { status: boolean; price: number }) =>
        item.status === true && item.price < priceRange
    );
  } else if (priceRange > 0) {
    productsData = data?.data?.filter(
      (item: { price: number }) => item.price < priceRange
    );
    // if (productsData?.length < 1) {
    //   productsData = data?.data;
    // }
  } else {
    productsData = data?.data;
  }

  return (
    <div className="grid lg:grid-cols-12 max-w-7xl mx-auto relative ">
      <div className="bg-red-400 lg:col-span-3 z lg:mr-10 space-y-5 border rounded-2xl border-gray-200/80 p-5 lg:self-start sticky top-16 lg:h-[calc(100vh-80px)] w-full mx-auto z-20">
        <div>
          <h1 className="text-2xl uppercase">Availability</h1>
          <div
            onClick={() => dispatch(toggleState())}
            className="flex items-center space-x-2 mt-3"
          >
            <Switch id="in-stock" />
            <Label htmlFor="in-stock">In stock</Label>
          </div>
        </div>
        <div className="space-y-3 ">
          <h1 className="text-2xl uppercase">Price Range</h1>
          <div className="max-w-xl">
            <Slider
              defaultValue={[150]}
              max={150}
              min={0}
              step={1}
              onValueChange={(value) => handleSlider(value)}
            />
          </div>
          <div>From 0$ To {priceRange}$</div>
        </div>
      </div>
      <div className="">
      {isLoading && <h2 className='text-2xl font-extrabold text-center'>Loading data ...........</h2>}
      </div>
      <div className="col-span-9 grid grid-cols-2 lg:grid-cols-3 gap-10 pb-20">
      

        {productsData?.map((product: IProduct) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
}
