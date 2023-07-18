import Link from "next/link";
import styles from "./AuthentificationLogin.module.scss";
import utilsStyles from "@/styles/Utils.module.scss";
import AuthentificationLoginForm from "../AuthentificationLoginForm";
import AppParagraph from "@/components/base/AppParagraph";

export default function AuthentificationLogin() {
  return (
    <article className={styles.container}>
      <AuthentificationLoginForm />
      <div className={styles.navigation}>
        <AppParagraph size="bodyMedium" color="pureWhite">
          Don't have an account?
        </AppParagraph>
        <Link
          className={`${styles.link} ${utilsStyles.bodyMedium}`}
          href={"./signup"}
        >
          Sign Up
        </Link>
      </div>
    </article>
  );
}
