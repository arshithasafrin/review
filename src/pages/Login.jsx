import { useState } from "react"
import { Link } from "react-router-dom"
import { Silk } from "../components/Silk"
import { useLead } from "../components/LeadForm"
import { useTitle } from "../wedge/Shell"

export default function Login() {
  useTitle("Log in · Restrosights")
  const { openDemo } = useLead()
  const [note, setNote] = useState("")

  function onSubmit(event) {
    event.preventDefault()
    setNote("This preview does not sign you in. The owner app is set up after a demo.")
  }

  return (
    <div className="relative isolate min-h-[calc(100vh-72px)] overflow-hidden">
      <div className="silk-full absolute inset-0">
        <Silk edges="solid" />
      </div>
      <div className="relative grid min-h-[calc(100vh-72px)] place-items-center px-4 py-16">
        <form onSubmit={onSubmit} className="w-full max-w-md rounded-[28px] bg-white p-8 shadow-float">
          <h1 className="text-center text-2xl font-semibold tracking-tight">Login to your account</h1>
          <label className="mt-6 block text-sm font-medium" htmlFor="login-name">
            Your name
            <input id="login-name" name="name" autoComplete="username" className="field mt-1.5" placeholder="Your name" />
          </label>
          <label className="mt-3 block text-sm font-medium" htmlFor="login-password">
            Your password
            <input id="login-password" name="password" type="password" autoComplete="current-password" className="field mt-1.5" placeholder="Your password" />
          </label>
          <button type="submit" className="btn btn-primary mt-5 w-full">
            Login
          </button>
          {note ? (
            <p role="status" className="mt-4 text-sm leading-relaxed text-[#5c6478]">
              {note}{" "}
              <button type="button" className="font-semibold text-[#5346d4]" onClick={() => openDemo("login")}>
                Book a demo
              </button>
              .
            </p>
          ) : (
            <p className="mt-4 text-center text-sm text-[#8b90a3]">
              New restaurant?{" "}
              <Link to="/contact" className="font-semibold text-[#5346d4]">
                Get started
              </Link>
            </p>
          )}
        </form>
      </div>
    </div>
  )
}
