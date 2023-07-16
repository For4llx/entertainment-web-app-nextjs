import utilsStyles from "@/styles/Utils.module.scss";

interface IProps {
  ref: React.RefObject<HTMLInputElement>;
  placeholder: string;
  required: boolean;
  type: string;
}

export default function AppInputField({
  ref,
  placeholder,
  required,
  type,
}: IProps) {
  return (
    <input
      className={`${utilsStyles.inputField} ${utilsStyles.bodyMedium}`}
      ref={ref}
      placeholder={placeholder}
      type={type}
      required={required}
    />
  );
}
