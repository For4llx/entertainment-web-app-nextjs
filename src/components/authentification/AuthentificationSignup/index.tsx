import Link from "next/link";

import styles from "./AuthentificationSignup.module.scss";
import utilsStyles from "@/styles/Utils.module.scss";
import AuthentificationSignupForm from "../AuthentificationSignupForm";

export default function AuthentificationSignup() {
  return (
    <article className={styles.container}>
      <AuthentificationSignupForm />
      <div className={styles.navigation}>
        <p className={`${styles.paragraph} ${utilsStyles.bodyMedium}`}>
          Already have an account?
        </p>
        <Link
          className={`${styles.link} ${utilsStyles.bodyMedium}`}
          href={"./login"}
        >
          Login
        </Link>
      </div>
    </article>
  );
}
