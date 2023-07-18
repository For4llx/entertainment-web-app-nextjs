import utilsStyles from "@/styles/Utils.module.scss";

interface IProps {
  inputRef: React.RefObject<HTMLInputElement>;
  placeholder: string;
  required: boolean;
  type: string;
}

export default function AppInputField({
  inputRef,
  placeholder,
  required,
  type,
}: IProps) {
  return (
    <input
      className={`${utilsStyles.inputField} ${utilsStyles.bodyMedium}`}
      ref={inputRef}
      placeholder={placeholder}
      type={type}
      required={required}
    />
  );
}
