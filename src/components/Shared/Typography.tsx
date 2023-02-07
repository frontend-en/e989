import { FC } from "react";
interface TypographyProps {
  variant:
    | "xs"
    | "sm"
    | "base"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "h1";
  color:
    | "logo"
    | "base-1"
    | "base-2"
    | "base-3"
    | "base-4"
    | "base-5"
    | "base-6"
    | "base-7"
    | "white";
  align: "inherit" | "left" | "center" | "right" | "justify";
  children: React.ReactNode;
  isUpperCase?: boolean;
}

const Typography: FC<TypographyProps> = ({
  variant,
  color,
  align,
  isUpperCase,
  children,
}: TypographyProps) => {
  return (
    <div className={`text-${align} text-${variant} text-${color} inline-flex ${isUpperCase ? 'uppercase': ''}`}>
      {children}
    </div>
  );
};

export default Typography;
