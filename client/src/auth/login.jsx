import "../auth/signUp.css";
function Login() {
  return (
    <center>
    <div className="flex font-serif m-6 justify-center items-center w-[450px] shadow-2xl rounded-xl border">
      <div className="bg-white p-8 rounded-2xl  w-full max-w-md">
        
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back!</h1>
          <p className="text-gray-600 text-base">Please login to your account</p>
        </div>

        {/* Form */}
        <form className="flex flex-col" action="/Login" method="POST">
          
          {/* Email */}
          <div className="flex flex-col mb-4">
            <label className="text-bold text-start font-medium text-gray-700 mb-1">Email</label>
            <input
              type="text"
              placeholder="Username/Email"
              required
              className="w-full px-4 py-2 text-sm border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col mb-4">
            <label className="text-bold text-start font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              required
              className="w-full px-4 py-2 text-sm border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium mt-2 hover:bg-blue-700 hover:scale-[1.02] transition transform focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign In
          </button>

          {/* Footer */}
          <div className="mt-4 text-center text-sm text-gray-600">
            <p>
              Don’t have an account?{" "}
              <a href="/signup" className="text-blue-600 font-semibold hover:text-blue-800 hover:underline">
                Sign up
              </a>
            </p>
          </div>

          {/* Divider */}
          <div className="mt-6 border-t pt-4">
            <p className="text-center text-blue-600 text-sm mb-3">Or login with</p>
            
            {/* Social Login */}
            <div className="flex justify-center">
              <a
                href="/auth/google"
                className="flex items-center gap-2 bg-white border border-gray-300 shadow-sm px-4 py-2 rounded-lg hover:shadow-md transition"
              >
                <img src="/images/google.png" alt="Google" className="w-5 h-5" />
                <span className="text-sm text-gray-700">Login with Google</span>
              </a>
            </div>
          </div>

        </form>
      </div>
    </div>
    </center>
  );
}

export default Login;
