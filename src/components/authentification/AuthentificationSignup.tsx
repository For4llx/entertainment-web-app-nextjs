import Link from "next/link";

import SignupForm from "./AuthentificationSignupForm";
import styles from "./Authentification.module.scss";
import utilsStyles from "@/styles/Utils.module.scss";

export default function AuthentificationSignup() {
  return (
    <article>
      <SignupForm />
      <div>
        <p className={`${styles.paragraph} ${utilsStyles.bodyMedium}`}>
          Already have an account?
        </p>
        <Link href={"./login"}>Login</Link>
      </div>
    </article>
  );
}
