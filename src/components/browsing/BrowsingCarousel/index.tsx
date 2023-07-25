import AppHeading from "@/components/base/AppHeading";
import { ICollection } from "@/interfaces/collection";
import utilsStyles from "@/styles/Utils.module.scss";
import BrowsingCarouselList from "../BrowsingCarouselList";
import styles from "./BrowsingCarousel.module.scss";

interface IProps {
  trendings: ICollection[];
}

export default function BrowsingCarousel({ trendings }: IProps) {
  return (
    <section className={`${styles.container} ${utilsStyles.container}`}>
      <AppHeading size="headingLarge" color={"pureWhite"}>
        Trending
      </AppHeading>
      <BrowsingCarouselList collections={trendings} />
    </section>
  );
}
