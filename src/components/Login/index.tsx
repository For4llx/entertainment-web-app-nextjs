import Link from "next/link";

export default function Login() {
  return (
    <>
      <header></header>
      <main>
        <article>
          <form>
            <h1>Login</h1>
            <div>
              <input placeholder="Email" type="text" />
              <input placeholder="Password" type="text" />
            </div>
            <button type="submit">Login to your account</button>
          </form>
          <div>
            <p>Don't have an account?</p>
            <Link href={"./signup"}>Sign Up</Link>
          </div>
        </article>
      </main>
    </>
  );
}
