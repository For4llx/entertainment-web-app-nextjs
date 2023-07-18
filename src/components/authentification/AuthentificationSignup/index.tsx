import Link from "next/link";
import styles from "./AuthentificationSignup.module.scss";
import utilsStyles from "@/styles/Utils.module.scss";
import AuthentificationSignupForm from "../AuthentificationSignupForm";
import AppParagraph from "@/components/base/AppParagraph";

export default function AuthentificationSignup() {
  return (
    <article className={styles.container}>
      <AuthentificationSignupForm />
      <div className={styles.navigation}>
        <AppParagraph size="bodyMedium" color="pureWhite">
          Already have an account?
        </AppParagraph>
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
