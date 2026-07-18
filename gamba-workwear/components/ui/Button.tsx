import Link from "next/link";
import { type ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
  icon?: ReactNode;
};

const base =
  "inline-flex items-center justify-center gap-2 px-7 py-3.5 font-display uppercase tracking-wide text-sm transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<string, string> = {
  primary:
    "bg-gold-400 text-carbon-950 hover:bg-white hover:-translate-y-0.5 cut-corner-sm",
  secondary:
    "border border-gold-400/70 text-white hover:bg-gold-400 hover:text-carbon-950 hover:-translate-y-0.5",
  ghost: "text-gold-300 hover:text-white underline underline-offset-4 decoration-gold-500/60",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
  icon,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {icon}
    </Link>
  );
}
