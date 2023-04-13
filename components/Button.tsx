import { ComponentChildren } from "preact";

interface Props {
  href: string;
  children: ComponentChildren;
  type: "primary" | "secondary";
  style?: string;
}

const typeClasses: Record<Props["type"], string> = {
  primary:
    "bg-primary-dark text-primary-light hover:bg-primary-light hover:text-primary-dark",
  secondary:
    "bg-primary-light text-primary-dark hover:bg-primary-dark hover:text-primary-light",
};

export default function Button(props: Props) {
  const { href, type, children, style } = props;
  const baseClasses = "text-md px-4 md:px-20 py-3 inline-block rounded-lg";
  const classes = `${style} ${baseClasses} ${typeClasses[type]}`;

  return (
    <a href={href} class={classes}>
      {children}
    </a>
  );
}
