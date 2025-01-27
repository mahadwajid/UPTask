import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="h-full w-full">
      {" "}
      <img
        className="default-logo min-h-[22px] max-w-none pt-4 pl-4 flex md:hidden"
        src="/media/app/default-logo.svg"
      />
      <div className="h-full w-full md:flex">
        <div className="h-full w-full md:w-1/2 flex justify-center items-center">
          <LoginForm />
        </div>
        <div className="h-full w-1/2 hidden md:flex justify-center items-center text-gray-100 bg-slate-100">
          <img
            className="default-logo min-h-[22px] max-w-none"
            src="/media/logo/modelex.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
