const Signup = () => {
  const signup = import.meta.env.VITE_BACKEND_URL
  return(
    <div className="h-full w-full flex flex-col items-center justify-center mt-24 w-20">
      <form action={`${signup}/api/auth/register`} method="post" className="max-w-sm mx-auto">
  <div className="mb-5">
    <label
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      htmlFor="name">
      name
    </label>
    <input
      className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
      id="name"
      name="name"
      required
      type="text"
      placeholder="Eren Yeager"
    />
  </div>
  <div className="mb-5">
    <label
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      htmlFor="email">
      Your email
    </label>
    <input
      className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
      id="email"
      name="email"
      placeholder="name@email.com"
      required
      type="email"
    />
  </div>
  <div className="mb-5">
    <label
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      htmlFor="password">
      Your password
    </label>
    <input
      className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"
      id="password"
      name="password"
      required
      type="password"
      placeholder="••••••••"
    />
  </div>
  <div className="flex items-start mb-5">
    <div className="flex items-center h-5">
      <input
        className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
        defaultValue=""
        id="terms"
        required
        type="checkbox"
      />
    </div>
    <label
      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      htmlFor="terms">
      I agree with the{" "}
      <a className="text-blue-600 hover:underline dark:text-blue-500" href="#">
        terms and conditions
      </a>
    </label>
  </div>
  <button
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    type="submit">
    Register new account
  </button>
</form>
    </div>
  )
}

export default Signup;