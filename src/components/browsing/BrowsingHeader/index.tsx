import AppLogo from "@/components/base/AppLogo";
import Image from "next/image";
import BrowsingHeaderNavigation from "../BrowsingHeaderNavigation";
import styles from "./BrowsingHeader.module.scss";

export default function BrowsingHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.sidebar}>
        <AppLogo />
        <BrowsingHeaderNavigation />
        <Image
          className={styles.avatar}
          width={40}
          height={40}
          src="/./assets/image-avatar.png"
          alt={"Avatar"}
        />
      </div>
    </header>
  );
}
