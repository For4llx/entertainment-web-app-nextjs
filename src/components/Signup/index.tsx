import Link from "next/link";

export default function Signup() {
  return (
    <>
      <header></header>
      <main>
        <article>
          <form>
            <h1>Sign Up</h1>
            <div>
              <input placeholder="Email" type="text" />
              <input placeholder="Password" type="text" />
              <input placeholder="Repeat password" type="text" />
            </div>
            <button type="submit">Create an account</button>
          </form>
          <div>
            <p>Already have an account?</p>
            <Link href={"./login"}>Login</Link>
          </div>
        </article>
      </main>
    </>
  );
}
