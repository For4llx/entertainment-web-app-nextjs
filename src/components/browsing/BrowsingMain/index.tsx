import styles from "./BrowsingMain.module.scss";

interface IProps {
  children: React.ReactNode;
}

export default function BrowsingMain({ children }: IProps) {
  return <main className={styles.container}>{children}</main>;
}
