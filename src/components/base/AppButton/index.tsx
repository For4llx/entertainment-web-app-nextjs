import utilsStyles from "@/styles/Utils.module.scss";

interface IProps {
  children: string;
  type: "button" | "submit" | "reset" | undefined;
}

export default function AppButton({ children, type }: IProps) {
  return (
    <button className={`${utilsStyles.button}`} type={type}>
      {children}
    </button>
  );
}
