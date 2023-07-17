import styles from "./Authentification.module.scss";

interface IProps {
  children: React.ReactNode;
}

export default function Authentification({ children }: IProps) {
  return <div className={styles.page}>{children}</div>;
}
