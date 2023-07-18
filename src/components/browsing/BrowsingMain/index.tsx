import styles from "./BrowsingMain.module.scss";
import utilsStyles from "@/styles/Utils.module.scss";

interface IProps {
  children: React.ReactNode;
}

export default function BrowsingMain({ children }: IProps) {
  return <div className={utilsStyles.container}>{children}</div>;
}
