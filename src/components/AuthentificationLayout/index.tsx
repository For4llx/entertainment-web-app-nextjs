import styles from "./AuthentificationLayout.module.scss";

interface IProps {
  children: React.ReactNode;
}

export default function AuthentificationLayout({ children }: IProps) {
  return <div className={styles.container}>{children}</div>;
}
