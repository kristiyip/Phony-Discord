import { mainGradient } from "./colors"

export default function SignUpForm() {
  return (
    <form className="rounded-md border-2 border-white p-5">
      <div className="flex flex-col items-center gap-4 p-10">
        <h1 className="font-bold text-4xl">
          Create an account
        </h1>
        <div className="flex flex-col w-full">
          <div className="flex flex-col relative">
            <label className="text-xl font-semibold">
              Email
            </label>
            <input 
              className="rounded-md border border-white mb-6 h-10"
              style={{background: 'linear-gradient(to bottom right, #9198e5, #e66465)'}}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xl font-semibold">
              Username
            </label>
            <input 
              className="rounded-md border border-white mb-6 h-10"
              style={{background: 'linear-gradient(to bottom right, #9198e5, #e66465)'}}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xl font-semibold">
              Password
            </label>
            <input 
              className="rounded-md border border-white mb-6 h-10"
              style={{background: 'linear-gradient(to bottom right, #9198e5, #e66465)'}}
            />
          </div>
        </div>
        <button 
          className="w-64 p-4 font-bold text-3xl rounded-md border border-white"
          style={{background: 'linear-gradient(to bottom right, #9198e5, #e66465)'}}
        >
          Sign Up
        </button>
      </div>
    </form>
  )
}