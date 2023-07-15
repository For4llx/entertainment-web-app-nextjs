import Link from "next/link";
import SignupForm from "../SignupForm";

export default function Signup() {
  return (
    <>
      <header></header>
      <main>
        <article>
          <SignupForm />
          <div>
            <p>Already have an account?</p>
            <Link href={"./login"}>Login</Link>
          </div>
        </article>
      </main>
    </>
  );
}
