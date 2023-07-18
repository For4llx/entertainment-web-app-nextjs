import styles from "./BrowsingLayout.module.scss";

interface IProps {
  children: React.ReactNode;
}

export default function BrowsingLayout({ children }: IProps) {
  return <div className={styles.container}>{children}</div>;
}
