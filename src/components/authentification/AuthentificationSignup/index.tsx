import AppParagraph from "@/components/base/AppParagraph";
import Link from "next/link";

import SignupForm from "../AuthentificationSignupForm";

export default function AuthentificationSignup() {
  return (
    <main>
      <article>
        <SignupForm />
        <div>
          <AppParagraph>Already have an account?</AppParagraph>
          <Link href={"./login"}>Login</Link>
        </div>
      </article>
    </main>
  );
}
