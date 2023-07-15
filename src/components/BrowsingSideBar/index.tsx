import Image from "next/image";
import SideBarNavigation from "../SideBarNavigation";
import styles from "./SideBar.module.scss";

export default function AppSideBar() {
  return (
    <header className={styles.container}>
      <div>
        <svg width="32" height="26.6" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z"
            fill="#FC4747"
          />
        </svg>
      </div>
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
