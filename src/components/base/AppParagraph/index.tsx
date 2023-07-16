import utilsStyles from "@/styles/Utils.module.scss";

interface IProps {
  children: string;
}

export default function AppParagraphMediumWhite({ children }: IProps) {
  return <p className={`${utilsStyles.bodyMedium}`}>{children}</p>;
}
