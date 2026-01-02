type ButtonVariant = "primary" | "secondary" | "outline" | "white" | "text-primary";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}
const variantClasses = {
  primary: "bg-primary text-white hover:bg-blue-700",
  secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
  outline: "border border-primary text-primary hover:bg-primary/10",
  white: "bg-white dark:bg-transparent border border-gray-200 dark:border-gray-700 text-neutral-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800",
  "text-primary": "bg-primary/10 hover:bg-primary hover:text-white text-primary",
};

const sizeClasses = {
  sm: "h-9 px-4 text-sm",
  md: "h-12 px-8 text-base",
  lg: "h-14 px-10 text-lg",
};

const Button: React.FC<ButtonProps> = ({ variant = "primary", size = "md",className = "", ...props }) => {
  return (
     <button
      className={`
        flex items-center justify-center rounded-lg font-bold transition-all
        shadow-lg hover:shadow-xl hover:-translate-y-0.5
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `}
      {...props}
    />
  );
};

export default Button;
