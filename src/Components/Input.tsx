import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLElement> {
  icon?: JSX.Element;
  placeholder?: string;
}

export function Input({
  icon,
  placeholder = "Insira seu texto",
  ...rest
}: InputProps) {
  return (
    <div className="bg-neutral-800 flex items-center py-2 px-3 gap-3 rounded focus-within:border-2 focus-within:border-green-500">
      {icon}

      <input
        {...rest}
        type="text"
        placeholder={placeholder}
        className="h-full bg-transparent outline-none focus:border-none text-white"
      />
    </div>
  );
}
