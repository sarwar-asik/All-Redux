import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

interface ISignupFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignupFormData>();

  const onSubmit = (data: ISignupFormData) => {
    console.log(data);
  };
  const passwordInput = document.getElementById("password") as HTMLInputElement;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md">
        <h3 className="text-center font-bold text-4xl  text-slate-400 my-2 font-serif">
          Sign Up{" "}
        </h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-lg hover:shadow-2xl rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Your Name
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
                className="text-slate-400 font-mono hover:text-gray-800 focus:outline-none focus:text-gray-800 mt-5"
                onClick={() => {
                  passwordInput.type =
                    passwordInput.type === "password" ? "text" : "password";
                }}
              >
                {/* {passwordInput?.type === "password" ? "Show password":""} */}
                show
              </button>
            </div>
          </div>

          <h2 className="my-3 text-sm text-slate-600">
            Already have an account ?{" "}
            <Link className="font-mono " to="/login">
              Login in please
            </Link>
          </h2>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
