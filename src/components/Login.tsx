import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { loginUser } from "../redux/features/users/userSLice";
import { toast } from "react-toastify";
interface ILoginFormData {
  name: string;
  email: string;
  password: string;
}

const Login = () => {

  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormData>();

  const onSubmit = (data: ILoginFormData) => {
    console.log(data);
    const {email,password} = data
    dispatch(loginUser({email,password}))
    toast("successFully Login")
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md">
      <h3 className="text-center font-bold text-4xl  text-slate-400 my-2 font-serif">
        Log In
        </h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.name ? "border-red-500" : ""
              }`}
              type="text"
              placeholder="Enter username"
              id="name"
              {...register("name", { required: "name is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-xs italic">
                Username is required
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.email ? "border-red-500" : ""
              }`}
              type="email"
              placeholder="Enter email"
              id="email"
              {...register("email", { required: "email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-4 relative">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.password ? "border-red-500" : ""
              }`}
              type="password"
              placeholder="Enter password"
              id="password"
              {...register("password", { required: "password is required" })}
            />
            {errors.password && (
              <p className="text-red-500 text-xs italic">
                Password is required
              </p>
            )}
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
              <button
                type="button"
                className="text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                onClick={() => {
                  const passwordInput = document.getElementById(
                    "password"
                  ) as HTMLInputElement;
                  passwordInput.type =
                    passwordInput.type === "password" ? "text" : "password";
                }}
              ></button>
            
            </div>
            <h2 className="my-3 text-sm text-slate-600">
            Are you new user ?{" "}
            <Link className="font-mono " to="/signup">
              sign up in please
            </Link>
          </h2>
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
