import SignUpForm from "@/app/ui/signup-form";
import { mainGradient } from "@/app/ui/colors";

export default function SignUp() {
  return (
    <main className="flex items-center justify-center md:h-screen" style={{background: mainGradient}}>
      <div className="relative mx-auto flex w-full max-w-[500px] flex-col space-y-2.5 md:-mt-32">
        <SignUpForm />
      </div>
    </main>
  )
}