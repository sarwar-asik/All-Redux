import { ChangeEvent, FormEvent, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { FiSend } from 'react-icons/fi';
import { useGetCommentQuery, usePostCommentMutation } from '@/redux/api/apiSlice';


const dummyComments = [
  'Very good product',
  'resonable price ',
  'Is is orginal ?',
  'Price will decrease ?',
  'very cheaper product'
];
interface IProps {
  id: string;
}

export default function ProductReview({ id }: IProps) {
  const [inputValue, setInputValue] = useState<string>('');



  //! started redux for RTK post

  const [postComment,{isLoading,isError,isSuccess}] = usePostCommentMutation()

  console.log("🚀 ~ file: ProductReview.tsx:28 ~ ProductReview ~ isSuccess:", isSuccess)
  console.log("🚀 ~ file: ProductReview.tsx:28 ~ ProductReview ~ isError:", isError)
  console.log("🚀 ~ file: ProductReview.tsx:27 ~ ProductReview ~ isLoading:", isLoading)

 
const {data:commentData} = useGetCommentQuery(id)
console.log("🚀 ~ file: ProductReview.tsx:35 ~ ProductReview ~ commentData:", commentData)


  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputValue);

   const option ={
    id:id,
    data:{comment:inputValue}
   }
   postComment(option)
 
  setInputValue('');

  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="max-w-7xl mx-auto mt-5">
      <form className="flex gap-5 items-center" onSubmit={handleSubmit}>
        <Textarea
          className="min-h-[30px]"
          onChange={handleChange}
          value={inputValue}
        />
        <Button
          type="submit"
          className="rounded-full h-10 w-10 p-2 text-[25px]"
        >
          <FiSend />
        </Button>
      </form>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-[0.8em] font-mono font-[500] gap-1">
        
        {dummyComments?.map((comment: string, index: number) => (
          <div onClick={()=>setInputValue(comment)} key={index} className="flex gap-2 items-center mb-5 shadow-sm rounded px-2">
            <p>{comment}</p>
          </div>
        ))}
      </div>
      <h3 className='mt-7 font-bold text-xl '>Users Comments ::</h3>
      <div className="mt-6">
        {commentData?.comments?.map((comment: string, index: number) => (
          <div  key={index} className="flex gap-3 items-center mb-5">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>{comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}