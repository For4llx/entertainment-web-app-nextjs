import utilsStyles from "@/styles/Utils.module.scss";
import classNames from "classnames";

interface IProps {
  children: string;
  size: "headingXSmall" | "headingSmall" | "headingMedium" | "headingLarge";
  color: "red" | "darkBlue" | "semiDarkBlue" | "greyishBlue" | "pureWhite";
}

export default function AppHeading({ children, size, color }: IProps) {
  return (
    <p
      className={classNames(
        size === "headingXSmall" && utilsStyles.headingXSmall,
        size === "headingSmall" && utilsStyles.headingSmall,
        size === "headingMedium" && utilsStyles.headingMedium,
        size === "headingLarge" && utilsStyles.headingLarge,
        color === "red" && utilsStyles.red,
        color === "darkBlue" && utilsStyles.darkBlue,
        color === "semiDarkBlue" && utilsStyles.semiDarkBlue,
        color === "greyishBlue" && utilsStyles.greyishBlue,
        color === "pureWhite" && utilsStyles.pureWhite
      )}
    >
      {children}
    </p>
  );
}
