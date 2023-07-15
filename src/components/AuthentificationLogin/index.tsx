import Link from "next/link";
import LoginForm from "../AuthentificationLoginForm";

export default function Login() {
  return (
    <>
      <header></header>
      <main>
        <article>
          <LoginForm />
          <div>
            <p>Don't have an account?</p>
            <Link href={"./signup"}>Sign Up</Link>
          </div>
        </article>
      </main>
    </>
  );
}
