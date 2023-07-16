import AppLogo from "@/components/base/AppLogo";
import Image from "next/image";
import SideBarNavigation from "../BrowsingSideBarNavigation";
import styles from "./SideBar.module.scss";

export default function AppSideBar() {
  return (
    <header className={styles.container}>
      <AppLogo />
      <SideBarNavigation />
      <Image
        className={styles.avatar}
        width={40}
        height={40}
        src="/./assets/image-avatar.png"
        alt={"Avatar"}
      />
    </header>
  );
}
