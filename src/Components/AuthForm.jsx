import { useState } from "react";
import { NavLink } from "react-router";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import { BsBarChartFill } from "react-icons/bs";

const authConfig = {
  signup: {
    title: "Create an account",
    subtitle: "Join us today and get started",
    button: "Create Account",
  },

  login: {
    title: "Welcome back",
    subtitle: "Sign in to continue to your account",
    button: "Sign In",
  },

  reset: {
    title: "Reset your password",
    subtitle: "Enter your email and we'll send you a reset link",
    button: "Send Reset Link",
  },
};

function AuthForm({ mode = "login" }) {
  const [showPassword, setShowPassword] = useState(false);

  const config = authConfig[mode];

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(`${mode} form submitted`);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-8">

      <div className="w-full max-w-md">

        {/* Logo / Brand */}
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg">
            <BsBarChartFill className="text-[#10CE8E] text-3xl" />
          </div>

          <h1 className="text-3xl font-bold text-slate-900">
            {config.title}
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            {config.subtitle}
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-2xl bg-white p-6 shadow-xl sm:p-8">

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name - Signup only */}
            {mode === "signup" && (
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Full Name
                </label>

                <div className="relative">
                  <User
                    size={19}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-lg border border-slate-300 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  />
                </div>
              </div>
            )}

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={19}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-slate-300 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>
            </div>

            {/* Password - Signup & Login */}
            {mode !== "reset" && (
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Password
                  </label>

                  {mode === "login" && (
                    <NavLink
                      to="/reset-password"
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </NavLink>
                  )}
                </div>

                <div className="relative">
                  <Lock
                    size={19}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full rounded-lg border border-slate-300 py-3 pl-10 pr-11 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? (
                      <EyeOff size={19} />
                    ) : (
                      <Eye size={19} />
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Confirm Password - Signup only */}
            {mode === "signup" && (
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Confirm Password
                </label>

                <div className="relative">
                  <Lock
                    size={19}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    className="w-full rounded-lg border border-slate-300 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  />
                </div>
              </div>
            )}

            {/* Terms - Signup only */}
            {mode === "signup" && (
              <label className="flex items-start gap-3 text-sm text-slate-600">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                />

                <span>
                  I agree to the{" "}
                  <NavLink
                    to="/terms"
                    className="font-medium text-indigo-600 hover:underline"
                  >
                    Terms & Conditions
                  </NavLink>
                </span>
              </label>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-lg bg-indigo-600 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {config.button}
            </button>
          </form>

          {/* Bottom navigation */}
          <div className="mt-6 text-center text-sm text-slate-500">

            {mode === "signup" && (
              <>
                Already have an account?{" "}
                <NavLink
                  to="/login"
                  className="font-semibold text-indigo-600 hover:underline"
                >
                  Sign in
                </NavLink>
              </>
            )}

            {mode === "login" && (
              <>
                Don't have an account?{" "}
                <NavLink
                  to="/signup"
                  className="font-semibold text-indigo-600 hover:underline"
                >
                  Create account
                </NavLink>
              </>
            )}

            {mode === "reset" && (
              <>
                Remember your password?{" "}
                <NavLink
                  to="/login"
                  className="font-semibold text-indigo-600 hover:underline"
                >
                  Back to login
                </NavLink>
              </>
            )}

          </div>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-slate-400">
          © 2026 Nexusflow. All rights reserved.
        </p>

      </div>
    </div>
)}


export default AuthForm;