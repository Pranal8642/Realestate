function Login() {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-96 p-6 bg-gray-100 shadow-lg rounded">
          <h2 className="text-2xl font-bold text-center">Login</h2>
          <input type="text" placeholder="Email" className="w-full p-2 border mt-3 rounded" />
          <input type="password" placeholder="Password" className="w-full p-2 border mt-3 rounded" />
          <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4 w-full">Login</button>
        </div>
      </div>
    );
  }
  
  export default Login;
  