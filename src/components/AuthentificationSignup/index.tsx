import Link from "next/link";
import SignupForm from "../AuthentificationSignupForm";

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
