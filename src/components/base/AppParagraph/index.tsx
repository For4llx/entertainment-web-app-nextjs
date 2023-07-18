import utilsStyles from "@/styles/Utils.module.scss";
import classNames from "classnames";

interface IProps {
  children: string;
  size: "bodyXSmall" | "bodyMedium";
  color: "red" | "darkBlue" | "semiDarkBlue" | "greyishBlue" | "pureWhite";
}

export default function AppParagraph({ children, size, color }: IProps) {
  return (
    <p
      className={classNames(
        size === "bodyXSmall" && utilsStyles.bodyXSmall,
        size === "bodyMedium" && utilsStyles.bodyMedium,
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
