function Register() {
  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center px-6 py-20">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">
          Create a account
        </h1>
        <p className="mb-8 text-gray-600">
          Register to get started with Odin Auto.
        </p>
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="mb-2 block text-left font-medium text-gray-800"
            >
              {" "}
              First name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition focus:border-gray-900 focus:bg-white focus:ring-2 focus:ring-gray-900/10"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="mb-2 block text-left font-medium text-gray-800"
            >
              Last name
            </label>

            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Enter your last name"
              autoComplete="family-name"
              className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-900 focus:bg-white focus:ring-2 focus:ring-gray-900/10"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="mb-2 block  text-left font-medium text-gray-800"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              autoComplete="email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="mb-2 block text-left font-medium text-gray-800"
            >
              Phone number
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Enter your phone number"
              autoComplete="tel"
              className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-900 focus:bg-white focus:ring-2 focus:ring-gray-900/10"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="company"
              className="mb-2 block  text-left font-medium text-gray-800"
            >
              Company name
            </label>

            <input
              id="company"
              name="company"
              type="text"
              placeholder="Enter your company name"
              autoComplete="organization"
              className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-900 focus:bg-white focus:ring-2 focus:ring-gray-900/10"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="department"
              className="mb-2 block  text-left font-medium text-gray-800"
            >
              Department
            </label>

            <select
              id="department"
              name="department"
              defaultValue=""
              className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition focus:border-gray-900 focus:bg-white focus:ring-2 focus:ring-gray-900/10"
            >
              <option value="" disabled>
                Select your department
              </option>
              <option value="hr">Human Resources</option>
              <option value="it">IT</option>
              <option value="finance">Finance</option>
              <option value="sales">Sales</option>
              <option value="marketing">Marketing</option>
              <option value="operations">Operations</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="role"
              className="mb-2 block text-left font-medium text-gray-800"
            >
              Role in company
            </label>

            <select
              id="role"
              name="role"
              defaultValue=""
              className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition focus:border-gray-900 focus:bg-white focus:ring-2 focus:ring-gray-900/10"
            >
              <option value="" disabled>
                Select your role
              </option>
              <option value="employee">Employee</option>
              <option value="manager">Manager</option>
              <option value="hr">HR</option>
              <option value="admin">Administrator</option>
            </select>
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="mb-2 block text-left font-medium text-gray-800"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="mb-2 block text-left font-medium text-gray-800"
            >
              Confirm password
            </label>

            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Re-enter your password"
              autoComplete="new-password"
              className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-900 focus:bg-white focus:ring-2 focus:ring-gray-900/10"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-gray-900 px-5 py-3 font-semibold text-white transition hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
          >
            Register
          </button>
        </form>
      </div>
    </main>
  );
}

export default Register;
