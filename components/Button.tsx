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

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </>
  );

  // Determine the element type based on the presence of href
  const Component = href ? "a" : "button";

  // Filter props based on the component type
  let elementProps: any = { className: combinedClassName };
  if (href) {
    elementProps.href = href;
    if (href.startsWith("http")) {
      elementProps.target = "_blank";
      elementProps.rel = "noopener noreferrer";
    }
    // Filter out button-specific props for anchor tags
    const { type, ...anchorProps } = props;
    elementProps = { ...elementProps, ...anchorProps };
  } else {
    elementProps.type = props.type || "button"; // Default button type
    // Filter out anchor-specific props for button tags
    const { target, rel, ...buttonProps } = props;
    elementProps = { ...elementProps, ...buttonProps };
  }

  return <Component {...elementProps}>{content}</Component>;
};

export default Button;
