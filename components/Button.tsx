import React from "react";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  children: React.ReactNode;
  variant: "light" | "dark";
  href?: string;
  icon?: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  href,
  icon,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full border px-6 py-2 text-sm font-bold transition-colors duration-300";

  const variantStyles = {
    light: "bg-white text-black border-black hover:bg-gray-100",
    dark: "bg-transparent text-white border-white hover:bg-white hover:text-black",
  };

  const Component = href ? "a" : "button";

  const elementProps = {
    className: `${baseStyles} ${variantStyles[variant]} ${className}`,
    ...(href
      ? {
          href,
          target: href.startsWith("http") ? "_blank" : undefined,
          rel: href.startsWith("http") ? "noopener noreferrer" : undefined,
        }
      : {
          type: props.type || "button",
        }),
    ...props,
  };

  return (
    <Component {...elementProps}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </Component>
  );
};

export default Button;
